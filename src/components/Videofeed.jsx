import { Box, Typography } from "@mui/material"
import Videos from "./Videos"
import fetchData from "./utils/fetchFromAPI";
import { useState, useEffect } from "react";

const Videofeed = ({category,type="category"}) => {
  const [videos, setvideos] = useState([]);
  const getVideos = async ()=>{
    try {
      const data = await fetchData({query:category})
      setvideos([...data.items]);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getVideos();
  }, [ category ]);

  return (
    <Box p={2} sx={{overflow:'auto', height:'90vh', flex:2}}>
      <Typography style={{color:'#fc1503'}} variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
        <span style={{color:'white',marginRight:'8px'}}>{type === 'category' ? category:`Search for : ${category}`}</span>
        <span>videos</span>
      </Typography>
      <Videos videos={videos} center={type !== 'category'? true:false}/>
    </Box>
  )
}

export default Videofeed