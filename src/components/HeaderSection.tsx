import { type FC } from 'react'
import { Box, Typography, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const HeaderSection: FC = () => {
  return (
     <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Typography sx={{ fontSize: '2.20rem', fontFamily: 'serif', cursor: 'pointer', color: 'blue' }}>
                    Top Healines
                </Typography>
                <Button sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'blue', '&:hover': { textDecoration: 'underline', textUnderlineOffset: '2px' } }}>
                    See All
                    <ArrowForwardIcon sx={{ fontSize: '1.25rem' }} />
                </Button>
            </Box>
  )
}

export default HeaderSection
