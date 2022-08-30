export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const bmioptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0ea3c567a4msh65dbb7cd06ab077p113cbejsn9f067d336aaf",
    "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  console.log(options);
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
