import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import { motion } from 'framer-motion'
import CardItem from "./CardItem";
import { CaroStyles } from "./Styles";

var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

function Carosuel({SlideData}) {
  const classes = CaroStyles()
  const [MovieList, setMovieList] = useState([]);
  useEffect(() => {
    setMovieList(SlideData)
    console.log(MovieList)
  },[MovieList])
  const cardHandler = (data) => (<motion.div 
    animate={{ scale: 1}}
    transition={{ duration: 0.5 }}>
      <CardItem styile={{transform: 'scale(0.5)'}} Data = {data} />
    </motion.div>)
    return (
        <div className={classes.slider}>
        
        <Slider {...settings}>
          {MovieList.map(data => 
            cardHandler(data)
          )}
        </Slider>
        
      </div>
    )
}

export default Carosuel
