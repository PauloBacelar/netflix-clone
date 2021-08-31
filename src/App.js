// Imports
import "./App.css";
import React, { useEffect, useState } from "react";
import data from "./api";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import Modal from "./components/Modal";

// Component
const App = () => {
  // Hooks
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMovieId, setModalMovieId] = useState(null);
  const [modalMovieInfo, setModalMovieInfo] = useState([]);

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

      getModalInfo();
    }
  }, [modalMovieId]);

  const getRandomItem = (arr) => {
    let rand = Math.floor(Math.random() * arr.length);
    let x = arr[rand];
    return x;
  };

  // JSX
  return (
    <div className="page">
      {modal && modalMovieInfo ? (
        <Modal modalInfo={modalMovieInfo} showType={modalMovieId[1]} />
      ) : null}
      {/* Header */}
      <Header black={blackHeader} />
      {/* Featured movie */}
      {featuredMovie ? (
        <FeaturedMovie featuredData={featuredMovie} />
      ) : (
        "Loading"
      )}
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
      {/* Footer */}
      <section className="footer"></section>
      {movieList.length === 0 || !featuredMovie ? (
        <div className="loading"></div>
      ) : (
        ""
      )}
    </div>
  );
};

// Export
export default App;
