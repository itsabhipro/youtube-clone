import { useState, useEffect} from 'react';
import { Stack } from '@mui/material';
import Sidebar from '../Sidebar';
import Videofeed from '../Videofeed';

const Feed = () => {
  const [category, setcategory] = useState('New');
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
        <Sidebar handleClick={(category)=>setcategory(category)}/>
        <Videofeed category={category}/>
    </Stack>
  )
}

export default Feed;