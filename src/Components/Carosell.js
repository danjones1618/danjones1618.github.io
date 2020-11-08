import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import './Carosell.css';

function Slide(props) {
  return (
    <div className="Slide" style={{backgroundImage: `url(${props.bg})`}}>
      {props.text.map((txt, index) =>
        <p key={index} className="Slide-text">
          {txt}
        </p>
      )}
    </div>
  );
}

export default function Carosell(props) {
  const [activeSlide, setSlide] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() =>
      setSlide(activeSlide + 1 === props.slides.length ? 0 : activeSlide + 1),
      10000
    );
    return () => clearTimeout(timeout);
  }, [activeSlide, props.slides.length]);
  return (
    <div {...props} className="Carosell">
      {props.slides.map((slide, index) =>
        <CSSTransition
          in={activeSlide === index}
          unmountOnExit
          timeout={1500}
          classNames="active-slide"
          key={index}
        >
          <Slide bg={slide.bg} text={slide.text}/>
        </CSSTransition>
      )}
      <div className="Carosell-slides">
        {props.slides.map((_, index) =>
          <FontAwesomeIcon
            key={index}
            icon={activeSlide === index ? "square" : ["far", "square"]}
            onClick={() => setSlide(index)}
          />
        )}
      </div>
    </div>
  );
}
