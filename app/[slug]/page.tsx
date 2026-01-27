import { getAllArticles } from "@/lib/contentful";
import Link from "next/link";

export default async function Slug() {
  const articles = await getAllArticles();
  console.log(articles);
  return (
    articles && (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <section className="w-full pt-12">
          <div className="mx-auto container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Welcome to our Knowledge Base
                </h1>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.sys.id}
                  className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-1 p-6">
                    <Link href={`/articles/${article.slug}`}>
                      <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50  py-4">
                        {article.title}
                      </h3>
                    </Link>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      className="inline-flex h-10 items-center justify-center text-sm font-medium"
                      href={`/articles/${article.slug}`}
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    )
  );
}
