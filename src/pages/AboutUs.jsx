import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "./aboutUs.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Sticker from "../images/sticker.png";
import Sticker_2 from "../images/sticker_2.png";

const AboutUs = () => {
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
  });

  const [imgRef, imgInView] = useInView({
    triggerOnce: true,
  });

  const infoAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0%)",
    from: { opacity: 0, transform: "translateY(100%)" },
    config: { duration: 1000 },
  });

  const imgAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(100%)" },
    config: { duration: 500 },
  });

  const imgAnimation2 = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(200%)" },
    config: { duration: 1000 },
  });

  const containerRef = useRef(null);
  const handleAnimationEnd = () => {
    containerRef.current.style.overflow = "auto";
  };
  return (
    <div
      ref={containerRef}
      className="main_about_us"
      style={{ overflow: "hidden" }}
    >
      <animated.div
        ref={infoRef}
        style={infoAnimation}
        className="about_us_info"
        onRest={handleAnimationEnd}
      >
        <h2>About Us</h2>
        <p>
          Welcome to our coding journey! I'm Vlad Kyriiak, the sole developer
          behind this exciting project, and I'm thrilled to share the story of
          how it all came to be.
        </p>
        <h2>The Birth of the Project</h2>
        <p>
          This project marks my inaugural venture into the world of React,
          representing a significant milestone in my journey as a budding
          front-end developer. It's not just about code; it's about a newfound
          perspective, passion, and the relentless pursuit of knowledge.
        </p>
        <h2>Inspired by Mentorship</h2>
        <p>
          The inception of this project owes its existence to the visionary
          guidance of our mentor, Nikolay Kipniak. Nikolay, the curator and
          founder of the Institute of IT, shared his compelling ideas and
          inspired us to embark on this coding adventure. The Institute of IT,
          with its innovative course, provided a fertile ground for exploration,
          learning, and creativity.
        </p>
        <h2>Institute of IT: A Catalyst for Change</h2>
        <p>
          The Institute of IT has been more than an educational platform; it's a
          catalyst for change. It's here that I discovered the vast
          possibilities of web development, and it's here that I took my first
          steps into the dynamic world of React.
        </p>
        <h2>A Grateful Nod</h2>
        <p>
          I extend my heartfelt gratitude to the Institute of IT for providing
          an environment where ideas flourish, challenges are embraced, and
          dreams take shape. This project stands as a testament to the
          transformative power of education.
        </p>
        <h2>What's Next?</h2>
        <p>
          As we navigate this coding odyssey, there's more to come. This project
          is just the beginning. From creating immersive user experiences to
          embracing emerging technologies, the future holds endless
          possibilities.
        </p>
        <p>
          Thank you for being part of this journey. Together, let's push the
          boundaries of what's possible in the world of web development.
        </p>
        <h3>Happy coding!</h3>
        <p>
          Vlad Kiryak <br />
          Front-End Developer
        </p>
        <div className="about_us_icons">
          <a href="https://www.instagram.com/virtuoz_21" target="_blank">
            <InstagramIcon sx={{ fontSize: "2rem" }} />
          </a>
          <a href="https://t.me/skyhawk_2121" target="_blank">
            <TelegramIcon sx={{ fontSize: "2rem" }} />
          </a>
          <a href=" https://github.com/virtuoz21" target="_blank">
            <GitHubIcon sx={{ fontSize: "2rem" }} />
          </a>
        </div>
      </animated.div>

      <div ref={imgRef} className="about_us_img">
        <animated.img style={imgAnimation} src={Sticker} alt="Sticker" />
        <animated.img style={imgAnimation2} src={Sticker_2} alt="Sticker_2" />
      </div>
    </div>
  );
};

export default AboutUs;
