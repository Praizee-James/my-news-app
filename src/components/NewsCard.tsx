import { type FC } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
const NewsCard: FC = () => {
    return (
        <Box>
            
                        <Box className='grid grid-cols-5  gap-3 '>
                            {
                                [...Array(5)].map((_, ind) =>
                                    <Card key={ind}>
                                        <Box className='bg-red-300 aspect-(16/9)  h-[180px]' />
                                        <CardContent className='relative '>
                                            <Typography className='text-[16px] font-serif line-clamp-4'>
                                                It has survived not only five centuries, but also the leap into electronic typesetting.
                                            </Typography>
                                            <Typography className='text-[14px] font-serif line-clamp-4'>
                                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </Typography>
                                            <Box className=''>
                                                <Typography className='text-[14px] font-serif '>
                                                    Source:CBC News
                                                </Typography>
                                                <Typography className='text-[14px] font-serif '>
                                                    date: 11/11/2025
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                )
                            }

                        </Box>
                    
                
            
        </Box>
    )

}

export default NewsCard
