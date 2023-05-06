export const fetchDetails = async (film_id, film_type) => {
  const API_URL = process.env.URL;
  const API_KEY = process.env.API_KEY;
  const url = `${API_URL}/${film_type}/${film_id}?api_key=${API_KEY}&language=en-US`;
  const videos_url = `${API_URL}/${film_type}/${film_id}/videos?api_key=${API_KEY}&language=en-US`;
  const res = await fetch(url);
  const video_response = await fetch(videos_url);
  const film = await res.json();
  const videos = await video_response.json();

  let trailer;

  if (film_type === "movie") {
    trailer = await videos.results.filter(
      (video) => video.name.toLowerCase() === "official trailer"
    );
    trailer = trailer.length > 0 ? trailer[0] : null;
  } else {
    trailer = await videos.results.filter(
      (video) => video.type.toLowerCase() === "trailer"
    );
    trailer = trailer.length > 0 ? trailer[0] : null;
  }

  return { film, trailer: trailer };
};
