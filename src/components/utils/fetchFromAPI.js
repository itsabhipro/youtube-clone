import axios, { AxiosError } from "axios";


export default async function fetchData({endPoint="search",query,id,channelId,order,relatedToVideoId,type,regionCode}){
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/'+endPoint,
    params: {
      q:query,
      part: 'snippet',
      channelId:channelId,
      relatedToVideoId,
      id:id,
      type,
      regionCode,
      maxResults: '50',
      order:order
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST_NAME
    }
  };
    try {
        console.log(process.env.API_KEY)
        const response = await axios.request(options)
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}