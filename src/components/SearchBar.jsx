import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

const SearchBar = () => {
  const [searchQuery, setsearchQuery] = useState();
  const navigator = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(searchQuery){
      navigator(`/search/${searchQuery}`)
    }
  }
  return (
    <Paper component="form" sx={{borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr:{sm: 5}}} onSubmit={(e)=>handleSubmit(e)} >
        <input className="search-bar" placeholder="Search..." value={searchQuery} onChange={(e)=>{setsearchQuery(e.target.value)}}/>
        <IconButton type="submit" sx={{p: '10px', color: 'red'}}>
            <SearchRounded />
        </IconButton>
    </Paper>
  )
}

export default SearchBar