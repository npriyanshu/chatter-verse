// components/PriorityMessagesComponent.js


export default async function priorityMessagesFetch( userId: string, channelId: string) {
  try {
    const response = await fetch(`/api/socket/messages?${userId}&channelId=${channelId}`);
    
    // if (!response.ok) {
    //   throw new Error(`Error fetching priority messages: ${response.statusText}`);
    // }

    const data = await response.json();
    console.log(data);
    return data; // Assuming you want to return the fetched data
  } catch (error) {
    console.error('Error fetching priority messages:', error);
    throw error; // Rethrow the error if you want the calling code to handle it
  }
}

  




// // pages/api/fetchPriorityMessages.js

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { userId, channelId } = req.query;

//   try {
//     const messages = await prisma.userMessagePriority.findMany({
//       where: {
//         memberId: userId,
//         channelId: channelId,
//       },
//       include: {
//         message: true,
//       },
//     });

//     const priorityMessages = messages.map(({ message }) => message);
//     return res.status(200).json(priorityMessages);
//   } catch (error) {
//     console.error('Error fetching priority messages:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// }
