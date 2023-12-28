import React, { useEffect, useState } from 'react'
import './ScrollToTop.css'
import { FiChevronUp } from 'react-icons/fi'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

  const scrollToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="wrapper">
        {isVisible && (
            <div className='top-btn' onClick={scrollToBtn}>
                <FiChevronUp/>
            </div>
         )}
    </div>

  )
}

export default ScrollToTop