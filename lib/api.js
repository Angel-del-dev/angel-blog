import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
    title,
    subtitle,
    'slug': slug.current,
    date,
    'author': author->{name, 'avatar': avatar.asset->url},
    'coverImage': coverImage.asset->url,
`;

const builder = imageUrlBuilder(client)
const getClient = preview => preview ? previewClient : client

export function urlFor(source) {
  return builder.image(source);
}

// offset = how many data you want to skip, limit = how many date you want to fetch
export async function getAllBlogs() {
  const results = await client
    .fetch(`*[_type == "blog"] | order(_createdAt desc) {${blogFields}}`);
  return results;
}

export async function getPaginatedBlogs({offset = 0} = {offset: 0}) {
  const results = await client
    .fetch(`*[_type == "blog"] | order(_createdAt desc) {${blogFields}}[${offset}...${offset + 3}]`);
  return results;
}

export const onBlogUpdate = (slug) => {
  const client = getClient(true);
  return client.listen(`*[_type == "blog" && slug.current == $slug] {
    ${blogFields}
    content[]{..., "asset": asset->}
  }`, {slug})
}


export async function getBlogBySlug(slug, preview) {
  const currentClient = getClient(preview);
  const result = await currentClient
    .fetch(`*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
      content[]{..., "asset": asset->}
    }`, {slug})
    .then(res => preview ? (res?.[1] ? res[1] : res[0]) : res?.[0])

  return result;

}
