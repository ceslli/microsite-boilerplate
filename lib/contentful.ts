import { FetchResponse } from "./types";

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for pages with a "pages" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["pages"] },
    },
  ).then((response) => response.json());
}

function extractPageEntries(fetchResponse: FetchResponse) {
  return fetchResponse?.data?.pageCollection?.items;
}

export async function getAllPages(
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false,
) {
  const pages = await fetchGraphQL(
    `
    query pageCollectionQuery {
        pageCollection {
        items {
            sys {
                id
            }
            slug 
            title
        }
    }
}`,
    isDraftMode,
  );
  return extractPageEntries(pages);
}

export async function getPage(id: string, isDraftMode = false) {
  const page = await fetchGraphQL(
    `
    query pageEntryQuery {
        page(id: "${id}") {
            sys {
                id
            }
            slug 
            title
  }
}`,
    isDraftMode,
  );
  return page.data.page;
}
