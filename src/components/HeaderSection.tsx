import { type FC } from 'react'
import { Box, Typography, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';


interface HeaderSectionProps {
    title : string
}
const HeaderSection: FC<HeaderSectionProps> = ({title}) => {
    const navigate = useNavigate()
   
  return (
     <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Typography sx={{ fontSize:{md:'2.20rem',xs:'1.5rem'}, fontFamily: 'serif', cursor: 'pointer', color: 'blue' }}>
                    {title}
                </Typography>
                 {title != 'Top Headlines' && <Button sx={{ display: 'flex', alignItems: 'center', gap: 1,
                 fontSize:{lg:'1.0rem',md:'0.875',xs:'0.8rem'},
                 color: 'blue', 
                 '&:hover': { textDecoration: 'underline', textUnderlineOffset: '2px' } }}
                
                onClick ={()=>navigate('/explore',{state: { category:title}})}>
                    See All
                    <ArrowForwardIcon sx={{ fontSize: {md:'1.25rem', xs:'1 rem'} }}  />
                </Button>}
                
            </Box>
  )
}

export default HeaderSection
