"use server";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export default async function uploadData(username: string, thoughtType: string, thought: string): Promise<{message: string} | { error: string }> {
  try {
    const thoughtTypeNum = parseInt(thoughtType, 0);
    
    if (isNaN(thoughtTypeNum)) {
      return { error: "Invalid thoughtType format." };
    }
    // Insert the data into the database
    await db.insert(posts).values({ username, thoughtType: thoughtTypeNum, thought });


    // Return a success message or the inserted data
    return { message: "Data uploaded successfully!"};
  } catch (error) {
    console.error("Error uploading data:", error);
    return { error: "Failed to upload data." };
  }
}
