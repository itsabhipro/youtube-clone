import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Videos from "../Videos";
import ChannelCard from '../ChannelCard';
import fetchData from '../utils/fetchFromAPI';

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetail, setchannelDetail] = useState([]);
  const [channelVideos,setChannelVideos] = useState([]);
  console.log(channelVideos)
  useEffect(()=>{
    fetchData({endPoint:"channels",id:id}).then((data)=>{
      setchannelDetail([...data.items]);
      fetchData({channelId:data.items[0].id,order:'date'}).then((vid)=>{setChannelVideos([...vid.items])})
    });
    
  },[]);
  return (
    <Stack sx={{display:'flex',flexDirection:'column',gap:5, alignItems:'center',overflowY:'auto',minHeight:"95vh"}}>
      <Box sx={{position:'relative',width:'100%',display:'flex',justifyContent:'center'}}>
        <div style={{height:'200px',background:"pink",position:'absolute',inset:'0',top:'0px',left:'0px',zIndex:'0'}}></div>
        <ChannelCard channel={channelDetail} />
      </Box>
          <Videos videos={channelVideos} center/>
      
    </Stack>
  )
}

export default ChannelDetails