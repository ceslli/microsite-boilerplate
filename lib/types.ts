type Sys = {
  id: string;
};
type PageCollectionItem = {
  sys: Sys;
  slug: string;
  title: string;
};
type PageCollection = {
  items: PageCollectionItem[];
};
type FetchResponseData = {
  pageCollection: PageCollection;
};
export type FetchResponse = {
  data: FetchResponseData;
};
