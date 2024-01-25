import { db } from "@/db";
import { redirect } from "next/navigation";
import React from "react";

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    // server action
    "use server";

    // check the user's input and is they are valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // create a new record in database
    await db.snippet.create({
      data: {
        code,
        title,
      },
    });

    redirect("/");
  }
  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create New Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          ></input>
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          ></textarea>
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
