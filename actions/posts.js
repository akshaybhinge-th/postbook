"use server";

import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

/**
 * Validates the post data and stores it.
 *
 * @param {Record<string, unknown>} prevState - The previous state of the form.
 * @param {FormData} formData - The form data.
 *
 * @returns {Promise<{ errors: Record<string, string> } | void>} - If there are errors, returns
 *   an object with error messages. Otherwise, redirects to the feed page.
 */
export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");
  let errors = {};
  if (!title || title.trim().length === 0) {
    errors["title"] = "Title is required.";
  }
  if (!content || content.trim().length === 0) {
    errors["content"] = "Content is required.";
  }
  if (!image || image.size === 0) {
    errors["image"] = "Image is required.";
  }

  if (errors && Object.keys(errors).length > 0) {
    return { errors };
  }

  await storePost({
    imageUrl: "",
    title,
    content,
    userId: 1,
  });
  redirect("/feed");
}
