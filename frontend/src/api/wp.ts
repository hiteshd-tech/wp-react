const BASE_URL = "http://localhost/wp-react/wp-json/wp/v2";
const SITE_URL = "http://localhost/wp-react";

export const getPages = async () => {
  const res = await fetch(`${BASE_URL}/pages`);
  return res.json();
};

export const getPageBySlug = async (slug) => {
  const res = await fetch(`${BASE_URL}/pages?slug=${slug}`);
  const data = await res.json();

  return data[0];
};

export const getMenu = async (slug) => {
  const res = await fetch(
    `${SITE_URL}/wp-json/menus/v1/menus/${slug}`
  );

  return res.json();
};

/*export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);

  return res.json();
};*/
export const getPosts = async () => {

  const res = await fetch(
    `${BASE_URL}/posts?_embed`
  );

  return res.json();

};

export const getProjects = async () => {

  const res = await fetch(
    `${BASE_URL}/projects?_embed`
  );

  return res.json();

};



