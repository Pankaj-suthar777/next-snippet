import SnippetEditForm from "@/components/SnippetEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

const EditPage = async (props: SnippetEditPageProps) => {
  const id = Number(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id: id },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet}></SnippetEditForm>
    </div>
  );
};

export default EditPage;
