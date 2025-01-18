import { currentUrl } from "~/data/constant";
import { headers } from "~/hooks/useFetch";

export const createEmptyNote = async () => {
  const newEmptyNote = {
    title: "",
    tags: [],
    content: "",
  };

  return await fetch(currentUrl + "/notes", {
    method: "post",
    headers: headers,
    body: JSON.stringify(newEmptyNote),
  });
};

export const getNotes = async (id?: string) => {
  return await fetch(`${currentUrl}/notes${id ? "/" + id : ""}`, {
    method: "GET",
    headers: headers,
  });
};

export const deleteNote = async (id: string) => {
  return await fetch(`${currentUrl}/notes/${id}`, {
    method: "DELETE",
    headers: headers,
  });
};

export const updateNote = async (formData: FormData, id?: string) => {
  const updates = Object.fromEntries(formData);
  console.log(updates);
  const memoFormData = JSON.parse(updates.memoFormData as string);

  const updatedNote = {
    title: updates.title ? updates.title : undefined,
    content: updates.content ? updates.content : undefined,
    tags: memoFormData.tags ? memoFormData.tags : undefined,
  } as {
    title?: string | undefined;
    content?: string | undefined;
    tags: string[] | undefined;
  };

  if (id) {
    return await fetch(`${currentUrl}/notes/${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(updatedNote),
    });
  }
};

export const archiveNote = async (noteId: string) => {
  return await fetch(`${currentUrl}/notes/${noteId}/archive`, {
    method: "PATCH",
    headers: headers,
    body: "",
  });
};
