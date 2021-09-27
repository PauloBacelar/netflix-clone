// Imports
import "./App.css";
import React, { useEffect, useState } from "react";
import data from "./api";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Loader from "react-loader-spinner";

// Component
const App = () => {
  // Hooks
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMovieId, setModalMovieId] = useState(null);
  const [modalMovieInfo, setModalMovieInfo] = useState(null);
  const [similarTitles, setSimilarTitles] = useState(null);

  // Methods
  useEffect(() => {
    const loadData = async () => {
      let movieList = await data.getHomeList();
      setMovieList(movieList);

      let originals = movieList.filter((i) => i.camel === "originals");
      let chosen = getRandomItem(originals[0].items.results);
      let chosenInfo = await data.getMovieInfo(chosen.id, "tv");
      setFeaturedMovie(chosenInfo);
    };

    loadData();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    if (modalMovieId) {
      async function getModalInfo() {
        let modalInfo = await data.getMovieInfo(
          modalMovieId[0],
          modalMovieId[1]
        );

        setModalMovieInfo(modalInfo);
      }

      async function getSimilar() {
        let similarInfo = await data.getSimilarTitles(
          modalMovieId[0],
          modalMovieId[1]
        );

        setSimilarTitles(similarInfo);
      }

      getModalInfo();
      getSimilar();
    }
  }, [modalMovieId]);

  useEffect(() => {
    const body = document.querySelector("body");
    const html = document.querySelector("html");

    if (modal) {
      body.classList.add("modal-active");
      html.classList.add("modal-active");
    } else {
      body.classList.remove("modal-active");
      html.classList.remove("modal-active");
    }
  }, [modal]);

  const getRandomItem = (arr) => {
    let rand = Math.floor(Math.random() * arr.length);
    let x = arr[rand];
    return x;
  };

  // JSX
  return (
    <div className="page">
      {modal && modalMovieInfo && (
        <Modal
          modalInfo={modalMovieInfo}
          showType={modalMovieId[1]}
          setModal={setModal}
          similarTitles={similarTitles}
        />
      )}

      {/* Header */}
      <Header black={blackHeader} />

      {/* Featured movie */}
      {featuredMovie && <FeaturedMovie featuredData={featuredMovie} />}

      {/* Lists of movies */}
      <section className="lists">
        {movieList.map((list, key) => {
          return (
            <MovieRow
              key={key}
              title={list.title}
              list={list.items}
              showMovieInfo={setModal}
              modalIsOn={modal}
              getModalMovieInfo={setModalMovieId}
            />
          );
        })}
      </section>

      {/* Loading screen */}
      {!movieList.length ||
        (!featuredMovie && (
          <main className="loader">
            <Loader type="TailSpin" color="#E50914" height={100} width={100} />
          </main>
        ))}
    </div>
  );
};

// Export
export default App;
