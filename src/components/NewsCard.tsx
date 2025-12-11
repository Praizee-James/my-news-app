import { type FC } from 'react'
import { Box, Card, CardContent, CardMedia, Typography,Link} from '@mui/material'
import type { NewsType } from '../utils/Types'
import {Link as RouterLink} from 'react-router-dom'
interface NewsCardProps {
    item : NewsType
}
const NewsCard: FC<NewsCardProps> = ({item}) => {
    return (
         <Link 
            component={RouterLink}
            to={item.url}
            underline="none"
            sx={{ textDecoration: "none" }}
        >
                                    <Card  className='relative shadow-none border-2 h-[450px]'>
                                        <CardMedia
                                        className='aspect-[16/9] h-[130px]'
                                        component='img'
                                        image={item.urlToImage}/>
                                        <CardContent className=' mb-12'>
                                            <Typography className='text-[16px] font-serif line-clamp-4'>
                                                {item?.title}
                                            </Typography>
                                            <Typography className='text-[14px] font-serif line-clamp-4'>
                                                {item?.description}
                                            </Typography>
                                            <Box className='absolute bottom-2'>
                                                <Typography className='text-[14px] font-serif '>
                                                    Source:{item.source.name}
                                                </Typography>
                                                <Typography className='text-[14px] font-serif '>
                                                    Date:{new Date(item.publishedAt).toLocaleDateString()}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                              
                    
                
            
        </Link>
    )

}

export default NewsCard
