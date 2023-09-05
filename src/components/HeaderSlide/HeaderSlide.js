import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function HeaderSlide() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    
  return (
    <div className="slider pt-[150px]">
      <div className='container w-full  '>
     <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={2000}>
      <Carousel.Item>
        <img className='w-full' src="/images/slider/ketab1.png" alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-full' src="/images/slider/ketab2.png" alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-full' src="/images/slider/Frame 91.png" alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  </div>
    </div>
  )
}
