import { Box, InputBase, Typography, Divider, ButtonGroup, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState,type KeyboardEvent, type ChangeEvent, type FC } from "react";
import { categories } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { Category } from "@mui/icons-material";


const Navbar: FC = () => {
const navigate = useNavigate()
const [search,setSearch] =useState<string>('')
const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
}
const handleKeyPress =(e:KeyboardEvent<HTMLInputElement>)=>{
    if(e.key === 'Enter'){
e.preventDefault()
setSearch('')
navigate('/search',{state:{title:`What we found for ${search}`,query:search}})
    }
}
const handleSearchIconClick =() => {
    setSearch('')
    navigate('/search',{state:{title:`What we found for ${search}`,query:search}})

}
    return (

        <div className='bg-blue-900 text-white gap-3 items-center'>
            <Box onClick ={() => navigate('/')}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '90%', mx: 'auto', py: 1, gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '1.5rem', fontFamily: 'serif' }}>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>
                        Daily
                    </Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'light' }} >
                        News
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', color: 'c2c2c2', gap: 2, px: 4, borderRadius: '999px' }} className='bg-blue-800'>
                    <SearchIcon onClick={handleSearchIconClick}  />
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: 'gray' }} />
                    <InputBase
                    value={search}
                    onChange ={handleChange}
                    onKeyDown={handleKeyPress}
                    sx={{
                        color: 'white', width: '350px', height: '[2.5rem]', fontSize: '1rem', fontFamily: 'serif', '&::placeholder': {
                            color: '#646464'
                        }
                    }} type="text" placeholder="search..." />
                </Box>
            </Box>
            <ButtonGroup className='bg-blue-800 w-full overflow-x-auto rounded-none ' sx={{ '& .MuiButton-root': { color: 'white' } }} variant='text' >
                {categories.map((item, ind) => (
                    <Button onClick={()=>navigate(`/explore`, {state:{category: item }})} key={ind} sx={{ fontSize: '12px' }} className="min-w-fit, w-full hover:bg-blue-900">

                        {item}
                    </Button>
                ))}
            </ButtonGroup>
        </div>






    )
}

export default Navbar;