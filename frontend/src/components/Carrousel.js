import React, { useState } from 'react';
import Slide from './Slide';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
    [   {title: "Tokyo", img: "https://i.postimg.cc/0y4N9wjt/Tokyo.jpg", id: 1},
        {title: "Buenos Aires", img: "https://i.postimg.cc/brLzWG49/Buenos-Aires.jpg", id: 2},
        {title: "Cancun", img: "https://i.postimg.cc/RF5VHxcK/Cancun.jpg", id: 3},
        {title: "Rome", img: "https://i.postimg.cc/nrnF3KSL/Rome.jpg", id: 4}
    ],
  
  
    [   {title: "Budapest", img: "https://i.postimg.cc/wBsjMjs9/Budapest.jpg", id: 5},
        {title: "Paris", img: "https://i.postimg.cc/G3jhHN9T/Paris.jpg", id: 6},
        {title: "Venice", img: "https://i.postimg.cc/htvjFrDz/Venice.jpg", id: 7},
        {title: "NewYork", img: "https://i.postimg.cc/4xYJ2xPp/NewYork.jpg", id: 8}
    ],
  
  
    [   {title: "Las Vegas", img: "https://i.postimg.cc/G2F3PgQN/LasVegas.jpg", id: 9},
        {title: "Rio de Janeiro", img: "https://i.postimg.cc/gkNJB5Wb/Riode-Janeiro.jpg", id: 10},
        {title: "Madrid", img: "https://i.postimg.cc/3JJrpBDS/Madrid.jpg", id: 11},
        {title: "London", img: "https://i.postimg.cc/XYtnR61m/London.jpg", id: 12}
  
    ]
  ];

const Carrousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item[0]}
      >
        <Slide itemArray={item} />
      </CarouselItem>
    );
  });

  return (
    <div id="carouselId" className="container-fluid">
    <h2 className="popMy">Popular MYtineraries</h2>
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default Carrousel