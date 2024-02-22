import axios from "axios";

export const getUnsplashImage = async (query: string) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos?per_page=1&query=${query}&client_id=${process.env.UNSPLASH_API_KEY}`);
    
    console.log(response.data);
    
    return response.data.results[0].urls.small;
  } catch (error) {
    console.error("Error fetching Unsplash image:", error);
    throw error; 
  }
};
