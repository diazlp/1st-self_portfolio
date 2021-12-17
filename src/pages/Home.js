import React, { useRef } from "react";
import Carousel from "../components/Carousel";
import { FaCode } from "react-icons/fa";

const Home = () => {
  const ref = useRef();

  return (
    <div>
      <div
        className="introduction flex-width-center"
        style={{ backgroundImage: `url('./introbg.svg')` }}
      >
        <div>
          <h1 data-aos="fade-up">Diaz Linggaputra</h1>
          <div className="intro-content d-flex justify-content-between">
            <p>
              <strike>MERN Stack Developer</strike> <i>(soon)</i> <br />{" "}
              Javascript Programmer
            </p>
            <button
              onClick={() => ref.current.scrollIntoView()}
              className="primary-button font-bold "
            >
              Find out more!
            </button>
          </div>
        </div>
      </div>
      <Carousel />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001829"
            fillOpacity="1"
            d="M0,192L17.1,213.3C34.3,235,69,277,103,256C137.1,235,171,149,206,112C240,75,274,85,309,90.7C342.9,96,377,96,411,133.3C445.7,171,480,245,514,250.7C548.6,256,583,192,617,149.3C651.4,107,686,85,720,117.3C754.3,149,789,235,823,256C857.1,277,891,235,926,192C960,149,994,107,1029,101.3C1062.9,96,1097,128,1131,165.3C1165.7,203,1200,245,1234,240C1268.6,235,1303,181,1337,138.7C1371.4,96,1406,64,1423,48L1440,32L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container" ref={ref}>
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold" data-aos="fade-right">
              <h1>Greetings,</h1>
              <p>
                I started my programming journey studying Data Science, but
                stumbled upon Web Development world and instantly falling in
                love with it
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img src="./jsbuff.svg" alt="" height="200" className="w-100" />
            </div>
          </div>
        </div>
        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 px-3 py-4 font-bold" data-aos="fade-left">
              <p>
                Javascript is one of the most beautiful programming language
                I've read. Since then, I aim for excellence and to master the
                said language inside out
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="devstack container my-5 n-box2 py-5">
        <div className="text-center">
          <h3 className="font-bold text-center">My Development Stack</h3>

          <FaCode
            color="black"
            onMouseOver={({ target }) => (target.style.color = "white")}
            onMouseOut={({ target }) => (target.style.color = "black")}
            size="180"
          />
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="font-bold text-left">
              <h3 className="font-bold">Front End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>React</p>
              <p>Redux</p>
              <p>Next JS</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="font-bold text-center">
              <h3 className="font-bold">UI/Styling</h3>
              <hr />

              <p>Tailwind CSS</p>
              <p>Bootstrap</p>
              <p>Material UI</p>
              <p>Ant Design</p>
              <p>Semantic UI</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="font-bold text-end">
              <h3 className="font-bold">Back End/Utilities</h3>
              <hr />
              <p>
                <strike>Node JS</strike>
              </p>
              <p>
                <strike>Express</strike>
              </p>
              <p>Firebase</p>
              <p>
                <strike>Docker/Jest</strike>
              </p>
              <p>
                <strike>Mongo DB</strike>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-center">About Me</h3>
        <div
          className="about-me"
          style={{ backgroundImage: `url('./aboutme.svg')` }}
        >
          <div>
            {/* <h3>On Paper</h3>
            <hr /> */}
            <pre>
              <p>
                {JSON.stringify(
                  {
                    name: "Muhammad Diaz Linggaputra",
                    location: "Jakarta, Indonesia",
                    education: "Bandung Institute of Technology",
                    interests: "Business, Science, and Technology",
                    self: {
                      strengths: "Continous learning and determined",
                      weaknesses: "Lacking experience and focus",
                    },
                  },
                  null,
                  2
                )}
              </p>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
