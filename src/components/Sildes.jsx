import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import {ApiSlides} from '../apifolder/SliderApi';
import  './Slider.css';

function Sildes() {
    //useState hooks
    const[slides] = useState(ApiSlides);
    const[activeSlide, setActiveSlide] = useState(0);
    
    //style
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";

  
    const nextSlide =()=>{
      if(activeSlide === slides.length -1)
      {
        setActiveSlide(0)
      }
      else{
        setActiveSlide(activeSlide+1)
      }
    }
    
    const prevSlide =()=>{
      if(activeSlide === 0)
      {
        setActiveSlide(slides.length -1)
      }
      else{
        setActiveSlide(activeSlide-1)
      }
    }


  return (
    <div
      className="parentDiv h-[540px] bg-white flex
  item-center justify-between mt-[30px]"
    >
      {/*leftarrow*/}
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={prevSlide}/>
      </div>
      {/*slide div*/}
      {slides.map((slide, index) => {
        if(index === activeSlide){
          return(
            <div
            className={`wrapper flex w-[100%] h-[500px] shadow-2xl justify-between
         rounded-lg border-[#c0c0c0] border-20px overflow-hidden relative ` + slide.background}
          >
            <div className="slide flex items-center  h-[100%] ">
              <div className="forImage flex">
                  <img
                    className="h-[100%] w-[1080px] object-cover"
                    src={slide.src}
                    alt="img_slide"
                  />
                <div className="des flex flex-col flex-1 place-items-start justify-center ml-8 ">
                  <p className="text-[25px] ">Just arrived!</p>
                  <h2 className="text-[50px] font-semibold text-[#1f2924]">
                    {slide.content.h2}
                  </h2>
                  <p className="text-[20px]">{slide.content.p}</p>
                  <button className="btn mt-[20px]">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
          )
        }
      })}
      {/*rightarrow*/}
      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick ={nextSlide}/>
      </div>
    </div>
  );
}

export default Sildes;
