import { Priority } from "@prisma/client";
import axios from "axios";
import qs from "query-string";

interface Url{
    apiUrl: string
    query: Record<string, string>,
}

export const setMessagePriority = async (Url:Url,messageId: string,memberId:string,priority:Priority) => {
  const { apiUrl, query } = Url;
  try {
    const url = qs.stringifyUrl({
      url: apiUrl || "",
      query,
    });

    const response = await axios.put(url, { messageId,memberId, priority });
    // console.log("Priority set successfully:", response.data);
  } catch (error) {
    console.error("Error setting priority:", error);
  }
};
