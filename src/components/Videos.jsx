import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Videos = ({videos,center,direction}) => {
  console.log(videos)
  return (
    <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent={center? 'center':"start"} gap={2}>{
      videos?.map((video,index)=>(
        
          !video?.id?.playlistId && <Box key={index}>
          {video.id.videoId && <VideoCard video={video}/>}
          {video.id.channelId && <ChannelCard channel={video}/>}
        </Box> 
        
      ))
    }</Stack>
  )
}

export default Videos