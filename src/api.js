// Variables
const API_KEY = "0bc68895ea9f1032d90f48de9946e3cf";
const API_BASE = "https://api.themoviedb.org/3";

// Function
const fetchData = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

// Data to export
const data = {
  getHomeList: async () => {
    return [
      {
        camel: "originals",
        title: "Netflix Originals",
        items: await fetchData(
          `/discover/tv?with_network=213&api_key=${API_KEY}`
        ),
      },
      {
        camel: "topRated",
        title: "Top Rated",
        items: await fetchData(`/movie/top_rated?api_key=${API_KEY}`),
      },
      {
        camel: "action",
        title: "Action",
        items: await fetchData(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ),
      },
      {
        camel: "comedy",
        title: "Comedy",
        items: await fetchData(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`
        ),
      },
      {
        camel: "horror",
        title: "Horror",
        items: await fetchData(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`
        ),
      },
      {
        camel: "romance",
        title: "Romance",
        items: await fetchData(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}`
        ),
      },
      {
        camel: "documentary",
        title: "Documentaries",
        items: await fetchData(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let movieInfo;

    if (movieId) {
      if (type === "movie") {
        movieInfo = await fetchData(`/movie/${movieId}?api_key=${API_KEY}`);
      } else if (type === "tv") {
        movieInfo = await fetchData(`/tv/${movieId}?api_key=${API_KEY}`);
      }
    }

    return movieInfo;
  },
};

export default data;
