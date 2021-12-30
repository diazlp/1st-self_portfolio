import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";

const Portofolio = () => {
  const navigate = useNavigate();

  const portofolios = [
    {
      title: "Holidays Event App",
      image: "firework.svg",
      description:
        "Holiday Events App for Commenting and Registering Newsletter using NextJS, MongoDB, and Firebase",
      link: "https://holiday-events-app.vercel.app/",
    },
    {
      title: "World Conferences Web App",
      image: "./world-ball.svg",
      description: "World Conference App using Firebase as a test-server",
      link: "https://world-conference.netlify.app/",
    },
    {
      title: "Pokedex Favs App",
      image: "./pokemon-ball.svg",
      description:
        "Pokedex Favorite App with PokeAPI. Styling on Material-UI and hydration with Redux-Persist",
      link: "https://pokedex-favs.netlify.app/",
    },
    {
      title: "Todo List App",
      image: "./todo-txt.svg",
      description: "Todo List App. Merely React and Redux used.",
      link: "https://todo-list-simple-app.netlify.app/",
    },
    {
      title: "Youtube Browser Web App",
      image: "./yt-logo.svg",
      description: "Youtube Search Engine fetching directly from Youtube API.",
      link: "https://diazlp.github.io/react-ytBrowsers/",
    },
    {
      title: "Navbar App",
      image: "./color-navigation.svg",
      description:
        "A really simple Navbar App that shows color regarding of the color chosen",
      link: "https://navigation-site.netlify.app/",
    },
  ];

  const renderPortofolio = () => {
    return portofolios.map((portofolio) => {
      return (
        <div
          key={portofolio.title}
          className="col-md-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="position-relative portofolio">
            <img src={portofolio.image} alt={portofolio.title} />
            <div className="portofolio-content">
              <h3>{portofolio.title}</h3>
              <hr />
              <p>{portofolio.description}</p>
              <button className="primary-button">
                <a
                  style={{ color: "black" }}
                  className="text-decoration-none"
                  href={portofolio.link}
                  target="_blank"
                >
                  Pay a Visit
                </a>
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="container portofolio-intro">
        <div className="row mt-5 flex-with-center">
          <div className="col-md-6 n-box2 px-3 py-4" data-aos="fade-down">
            <div>
              <h1 className="font-bold">Portofolio</h1>
              <p className="font-bold">
                A good portofolio is not a showcase, it shows how far one has
                progressed and how much one is willing to learn
              </p>
              <Link
                to="/contact"
                className="primary-button text-decoration-none px-5 py-2 fw-normal"
              >
                Reach Me Out!
              </Link>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#0F62FE"
                d="M71.2,-42C84.7,-17.7,82.9,14.6,68.5,38.6C54.1,62.7,27,78.5,-0.4,78.7C-27.7,78.9,-55.5,63.5,-68.3,40.4C-81.1,17.3,-78.9,-13.5,-65.1,-38.1C-51.2,-62.6,-25.6,-80.9,1.6,-81.8C28.8,-82.7,57.7,-66.3,71.2,-42Z"
                transform="translate(100 100)"
              />
            </svg>
            <FaLaptopCode
              color="white"
              size="180"
              className="position-absolute top-50 start-50 translate-middle"
            />
          </div>
        </div>
      </div>

      <div className="container portofolio-list">
        <h4 className="font-bold">My Previous Works</h4>
        <hr />

        <div className="row">{renderPortofolio()}</div>
      </div>
    </div>
  );
};

export default Portofolio;
