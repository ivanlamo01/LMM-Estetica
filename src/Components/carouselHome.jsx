import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../Assets/img/1-slide-1635871910806-4683866691-3413156dfc93e58fe2fef435e5e6845c1635871925-1920-1920.webp";
import slide2 from "../Assets/img/1-slide-1635871910808-5880505384-de4caa47f5cd60aeb10f2755adcc71331635871929-1920-1920.webp";
import slide3 from "../Assets/img/1-slide-1654192557826-2839333007-f795d413869951bb7f11bee16aeaa7631654192564-1920-1920.webp";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;