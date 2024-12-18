const key = "f9264d4d92764954be013b1865857980"

const requests = {
    requestTrending : `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestSeasons : `https://api.themoviedb.org/3/tv/episode_group/{id}?api_key=${key}&language=en-US`,
    requestPopular : `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=3`,
    requestTv : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
    requestPage : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
}

export default requests