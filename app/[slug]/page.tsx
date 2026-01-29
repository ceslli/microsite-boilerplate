import { getPage } from "@/lib/contentful";
import { NotFound } from "../notFound";

export default async function Slug(props: PageProps<"/[slug]">) {
  const query = await props.searchParams;
  const page = await getPage(query.id as string);
  const body = page?.body.json.content[0].content[0].value;
  return page?.title ? (
    <main>
      <h1>{page.title}</h1>
      <div>{body}</div>
    </main>
  ) : (
    <NotFound />
  );
}
