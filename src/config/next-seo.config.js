export default {
  title: "Movie Watch",
  // titleTemplate="Codikal"
  // defaultTitle="Codikal"
  description:
    "Welcome to Movie Watch, your ultimate destination for discovering the latest and greatest movies and TV shows! Our platform offers a comprehensive list of popular, top-rated, trending, and upcoming movies and TV series, alongside detailed descriptions and information about each film.",
  canonical: "https://movie-watch.vercel.com",
  openGraph: {
    url: "https://movie-watch.vercel.com",
    title: "Movie Watch",
    description:
      "Welcome to Movie Watch, your ultimate destination for discovering the latest and greatest movies and TV shows! Our platform offers a comprehensive list of popular, top-rated, trending, and upcoming movies and TV series, alongside detailed descriptions and information about each film.",
    images: [
      {
        url: "https://res.cloudinary.com/dhc5g69ra/image/upload/v1668352030/codikal/codikal_og_image.png",
        width: 800,
        height: 420,
        alt: "codikal",
      },
    ],
  },

  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};
