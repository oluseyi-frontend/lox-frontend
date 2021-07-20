import React from "react";
import { Container, Typography } from "@material-ui/core";
import styles from "./Home.module.css";
import Carousel from "fade-carousel";
import Slider from "react-slick";
import { Link } from "react-router-dom";



const Home = () => {
  const urls = [
    "LOX SERVICES",
    "A DESIGN FOR ALL",
    "GET INVOLVED",
    "BASIC TASK",
    "INNOVATIVE DESIGN",
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={styles.home}>
      <Container maxWidth="sm">
        <div className={styles.home_content}>
          <Slider {...settings} className={styles.my_slider}>
            <div>
              <Typography>LOX SERVICES</Typography>
            </div>
            <div>
              <Typography>A DESIGN FOR ALL</Typography>
            </div>
            <div>
              <Typography>GET INVOLVED</Typography>
            </div>
            <div>
              <Typography>BASIC TASK</Typography>
            </div>
            <div>
              <Typography>INNOVATIVE DESIGN</Typography>
            </div>
          </Slider>
          <div className={styles.home_btns}>
            <Link to='/signup'>
            <button>SIGN UP</button>
            </Link>
            <Link to='/login'>
              <button>LOG IN</button>
            </Link>
          
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
