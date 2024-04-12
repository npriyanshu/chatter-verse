import { NextApiRequest } from "next";
import { MemberRole } from "@prisma/client";
import { Priority } from "@prisma/client";
import { NextApiResponseServerIo } from "@/types";
import { currentProfilePages } from "@/lib/current-profile-pages";
import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo
) {
  if (
    req.method !== "DELETE" &&
    req.method !== "PATCH" &&
    req.method !== "PUT" &&
    req.method !== "POST"
  ) {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const profile = await currentProfilePages(req);
    // const { messageId, serverId, channelId } = req.query;


     // to make sure it is string
     const messageId = Array.isArray(req.query.messageId)
     ? req.query.messageId[0] // Assuming you want the first element if it's an array
     : req.query.messageId;
   
   const serverId = Array.isArray(req.query.serverId)
     ? req.query.serverId[0]
     : req.query.serverId;
   
   const channelId = Array.isArray(req.query.channelId)
     ? req.query.channelId[0]
     : req.query.channelId;

    const { content } = req.body;

   
    if (!profile) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!serverId) {
      return res.status(400).json({ error: "Server ID missing" });
    }

    if (!channelId) {
      return res.status(400).json({ error: "Channel ID missing" });
    }

    const server = await db.server.findFirst({
      where: {
        id: serverId as string,
        members: {
          some: {
            profileId: profile?.id,
          },
        },
      },
      include: {
        members: true,
      },
    });

    if (!server) {
      return res.status(404).json({ error: "Server not found" });
    }

    const channel = await db.channel.findFirst({
      where: {
        id: channelId as string,
        serverId: serverId as string,
      },
    });

    if (!channel) {
      return res.status(404).json({ error: "Channel not found" });
    }

    const member = server.members.find(
      (member) => member.profileId === profile?.id
    );

    if (!member) {
      return res.status(404).json({ error: "Member not found" });
    }

    let message = await db.message.findFirst({
      where: {
        id: messageId as string,
        channelId: channelId as string,
      },
      include: {
        member: {
          include: {
            profile: true,
          },
        },
      },
    });

    if (!message || message.deleted) {
      return res.status(404).json({ error: "Message not found" });
    }

    const isMessageOwner = message.memberId === member.id;
    const isAdmin = member.role === MemberRole.ADMIN;
    const isModerator = member.role === MemberRole.MODERATOR;
    const canModify = isMessageOwner || isAdmin || isModerator;

    
    if (req.method === "PATCH") {
      if (!isMessageOwner) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      message = await db.message.update({
        where: {
          id: messageId as string,
        },
        data: {
          content,
        },
        include: {
          member: {
            include: {
              profile: true,
            },
          },
        },
      });
    }

    if (req.method === "PUT") {
      try {
        type MessageType = {
          messageId: string;
          memberId: string;
          priority: Priority;
        };

     const { messageId, memberId, priority }: MessageType = req.body;



        // Validate input
        if (!messageId || !memberId || !priority) {
          return res.status(400).json({ error: "Invalid request body" });
        }

        // Check if the message and user exist
        const message = await db.message.findFirst({
          where: { id: messageId },
        });
        const user = await db.member.findFirst({ where: { id: memberId } });

        if (!message || !user) {
          return res.status(404).json({ error: "Message or user not found" });
        }

        // Update or create UserMessagePriority
        const userMessagePriority = await db.userMessagePriority.upsert({
          where: { messageId_memberId: { messageId, memberId } }, // Use correct format for where clause
          create: { messageId, memberId, priority ,channelId},
          update: { priority },
        });

        return res.status(200).json(userMessagePriority);
      } catch (error) {
        console.error("Error setting priority:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
    }

    if (req.method === "POST") {
      try {
        type MessageType = {
          messageId: string;
          memberId: string;
        };

        const { messageId, memberId }: MessageType = req.body;

        // Validate input
        if (!messageId || !memberId) {
          return res.status(400).json({ error: "Invalid request body" });
        }

        // Check if the message and user exist
        const message = await db.message.findFirst({
          where: { id: messageId },
        });

        const userMessagePriority = await db.member.findFirst({
          where: { id: memberId },
          include: {
            messagePriorities: {
              where: {
                messageId,
                channelId:channelId,
              },
            },
          },
        });

        // if (!message || !user) {
        //   return res.status(404).json({ error: 'Message or user not found' });
        // }

        // // Update or create UserMessagePriority
        // const userMessagePriority = await db.userMessagePriority.upsert({
        //   where: { messageId_memberId: { messageId, memberId } }, // Use correct format for where clause
        //   create: { messageId, memberId, priority },
        //   update: { priority },
        // });

        return res.status(200).json({message,userMessagePriority});
      } catch (error) {
        console.error("Error setting priority:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
    }

    if (!canModify) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (req.method === "DELETE") {
      message = await db.message.update({
        where: {
          id: messageId as string,
        },
        data: {
          fileUrl: null,
          content: "This message has been deleted.",
          deleted: true,
        },
        include: {
          member: {
            include: {
              profile: true,
            },
          },
        },
      });
    }

    const updateKey = `chat:${channelId}:messages:update`;

    res?.socket?.server?.io?.emit(updateKey, message);

    return res.status(200).json(message);
  } catch (error) {
    console.log("[MESSAGE_ID]", error);
    return res.status(500).json({ error: "Internal Error" });
  }
}
