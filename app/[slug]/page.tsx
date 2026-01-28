import { getPage } from "@/lib/contentful";

export default async function Slug(props: PageProps<"/[slug]">) {
  const query = await props.searchParams;
  const page = await getPage(query.id);
  console.log("hello", page);
  return <div>{page.title}</div>;
}
