import React from 'react'
import Carousel from 'react-multi-carousel'
import  {bannerData } from './Constant/Data'
import {styled } from '@mui/system';
import 'react-multi-carousel/lib/styles.css'

const Image=styled('img')({
  width:'100%',
  height:280
})

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max:25, min: 0 },
      items: 1
    }
  };
function Banner() {
  return (
    <Carousel responsive={responsive}
    dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  className='mt-5'
    >
        {
            bannerData.map((data,index)=>(
              <Image src={data.url
              } alt="banner" />
            ))
        }
    </Carousel>
  )
}

export default Banner
