import { useState} from 'react';
import { Stack } from '@mui/material';
import Videofeed from '../Videofeed';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [category, setcategory] = useState('New');
  const {searchTerm} = useParams();
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
        <Videofeed category={searchTerm} type='search'/>
    </Stack>
  )
}

export default SearchFeed;