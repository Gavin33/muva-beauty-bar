import React, { Component } from 'react';
/* import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'; */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Shop from './ShopComponent';

// Iterates through all items and puts them on a React Responsive Carousel

class HomeCarousel extends Component {
  render() {
    const slides = this.props.nails.map((item) => {
      return (
        <div>
          <img
            src={item.src}
            alt={item.altText}
            className="img-fluid img-responsive"
          />
          <p className="legend">{item.name}</p>
        </div>
      );
    });
    return <Carousel>{slides}</Carousel>;
  }
}

// Home page function itself

function Home(props) {
  return (
    <div>
      <HomeCarousel nails={props.nails} />
      <h2>Best sellers</h2>
      {/* As of now the home page just has the shop page at the bottom of it, so just importing it here to DRY */}
      <Shop />
    </div>
  );
}

export default Home;
