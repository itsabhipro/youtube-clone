import React from 'react'
import { Box, Card,CardContent,CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
const ChannelCard = ({channel}) => {
  channel =  channel[0]||channel;
  console.log(channel)
  return (
    <Card sx={{width:{xs:'100%',sm:'358px',md:'320px'}, boxShadow:'none', borderRadius:0,background:"transparent",zIndex:"1"}}>
    <Link to={!channel?.id?.channelId ? `/channel/${channel.id}`:`/channel/${channel?.id?.channelId}`} style={{display:"flex",justifyContent:"center",alignItems:"center",background:"transparent",height:"180px"}}>
        <CardMedia image={channel.snippet?.thumbnails?.high?.url} alt="channel image" sx={{width:"150px",height:"150px",borderRadius:"50%", border:"1px solid #e3e3e3"}}/>
    </Link>
    <CardContent sx={{backgroundColor:'#1e1e1e', height:'106px',textAlign:'center'}}>
        
        <Link to={!channel.id?.channelId ? `/channel/${channel.id}`:`/channel/${channel.id.channelId}`}>
        <Typography variant='subtitle2' fontWeight="bold" color="white">{channel?.snippet?.channelTitle|| channel?.snippet?.title}
        <CheckCircle sx={{fontSize:12, color:'#fc1503', ml:'5px'}}/>
        </Typography>
        </Link>
    </CardContent>
</Card>
  )
}

export default ChannelCard