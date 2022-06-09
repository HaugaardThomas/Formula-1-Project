import React, {useState, useEffect} from 'react';
import { Button, Modal, Col, Container, Row, Carousel } from 'react-bootstrap';


// SASS
import './slider.scss';



export default function SliderModal({img}) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <figure>
          <img
            className="d-block w-100 img-fluid"
            src={"http://localhost:5099/images/tours/" + img.gallery[0]}
            alt="First slide"
          />
        </figure>
        </Carousel.Item>
        <Carousel.Item>
           <figure>
          <img
            className="d-block w-100 img-fluid"
             src={"http://localhost:5099/images/tours/" + img.gallery[1]}
            alt="Second slide" 
            />
      </figure>
  
        </Carousel.Item>
        <Carousel.Item>
            <figure>
          <img
            className="d-block w-100 img-fluid"
            src={"http://localhost:5099/images/tours/" + img.gallery[2]}
            alt="Third slide"
          />
  </figure>
        </Carousel.Item>
      </Carousel>
    );
  }
  
