import { useState } from "react";
import { Box, Typography, Stack } from "@mui/material"
import { categories } from "../constants"
const Sidebar = ({handleClick}) => {
const [selectedCategory, setselectedCategory] = useState('New');
  return (
    <Box sx={{height:{sx:'auto',md:'92vh'},border:'1px solid #3d3d3d',px:{sx:0,md:2},overflowY:'auto'}}>
        <Stack sx={{flexDirection:{xs:'row',md:'column',overflowY:'auto', height:{xs:'auto', md:'95%'}}}}>
            {
                categories.map((category)=>(
                    <button key={category.name} className="category-btn" style={{background:category.name === selectedCategory && '#fc1503', color:'white'}} onClick={()=>{setselectedCategory(category.name);handleClick(category.name)}}>
                        <span style={{color:category.name === selectedCategory ? 'white':'red',marginRight:'15px'}}>{category.icon}</span>
                        <span style={{opacity:category.name === selectedCategory ? '1':'0.8'}}>{category.name}</span>
                    </button>
                ))
            }
        </Stack>
        <Typography className="copywrite" variant="body2" sx={{color:'white', mt: 1.5}}>Copywrite 2022 Hindu media</Typography>
    </Box>
  )
}

export default Sidebar