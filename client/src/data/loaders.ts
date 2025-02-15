import { fetchAPI } from "../utils/fetch-api";
import { getStrapiUrl } from "../utils/get-strapi-url";
import qs from "qs";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "blocks.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            cta: true,
          },
        },
      },
    },
  },
});

export async function getHomePage() {
  const path = "/api/home-page";
  const BASE_URL = getStrapiUrl();

  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;

  return await fetchAPI(url.href, { method: "GET" });
}
