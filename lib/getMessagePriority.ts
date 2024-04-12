import { Priority } from "@prisma/client";
import axios from "axios";
import qs from "query-string";

interface Url{
    apiUrl: string
    query: Record<string, string>,
}

export const getMessagePriority = async (Url:Url,messageId: string,memberId:string,) => {
  const { apiUrl, query } = Url;
  try {
    const url = qs.stringifyUrl({
      url: apiUrl || "",
      query,
    });

    const response = await axios.post(url, { messageId,memberId });
    return response.data?.userMessagePriority;
  } catch (error) {
    console.error("Error getting priority:", error);
  }

};
