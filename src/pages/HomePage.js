import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import abc from "../images/abc.png"; 
import Dialog_Alert from '../components/Dialog_Alert';

// import { makeStyles } from '@mui/styles';
// import {hp_img}  from "../images/hp_img.png";
const hpImg = require('../images/hp_img.png');


// const useStyles = makeStyles({
//   title: {
//     fontSize: '1rem', // Adjust the font size as needed
//   },
//   subtitle: {
//     fontSize: '1rem', // Adjust the font size as needed
//     fontWeight: 'bold', // Make the subtitle bold
//   },
// });
const HomePage = () => {
  useEffect(()=>
    {
      
    }
      , [])


  return (
    // <div className='homepage flex w-full' >
       <Box sx={{ width: "90%", height: "80%", overflowY: 'scroll', marginTop:"5%", marginBottom:"5%"}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              onClick={()=>window.open(item.link, '_blank', 'noopener, noreferrer')}
              style={{ cursor: 'pointer' }}
            />
            <ImageListItemBar position="below"  title={item.author}
  subtitle={<span><strong>{item.title}</strong></span>} />
            
          </ImageListItem>
        ))}
      </ImageList>
    </Box> 
    // </div>
  )
}

const itemData = [
  {
    img: abc,
    title: 'text-behind-image',
    author: `Rexon Wong's`,
    link: 'https://textbehindimage.rexanwong.xyz/',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
];
export default HomePage