import { Box, InputBase, Typography, Divider, ButtonGroup, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { type FC } from "react";
import { categories } from "../utils/constants";
import { useNavigate } from "react-router-dom";


const Navbar: FC = () => {
const navigate = useNavigate()
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
                    <SearchIcon />
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: 'gray' }} />
                    <InputBase sx={{
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