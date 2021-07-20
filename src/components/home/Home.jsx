import React from "react";
import { Container, Typography } from "@material-ui/core";
import styles from "./Home.module.css";
import Carousel from "fade-carousel";
import Slider from "react-slick";
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
            <button>SIGN UP</button>
            <button>LOG IN</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
