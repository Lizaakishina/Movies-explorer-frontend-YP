import "./MoviesList.css";
import MovieCard from "../MovieCard/MovieCard";
import Preloader from "../Preloader/Preloader";
import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { LARGE_WINDOW_SIZE, MIDDLE_WiNDOW_SIZE, MORE_BUTTON_LARGE, MORE_BUTTON_MIDDLE, LARGE_COUNT, MIDDLE_COUNT, SMALL_COUNT } from '../../utils/constants';


const MoviesList = ({filterMovies, isLoader, onCreateMovie, savedMovies, onDeleteMovie }) => {
  const [moviesDisplay, setMoviesDisplay] = useState([]);
  const [count, setCount] = useState(0);
  const [windowSize, setWindowsSite] = useState(window.screen.width)
  const url = useLocation();

  function handleChangeWindow () {
    setWindowsSite(window.screen.width)
  }

  useEffect(() => {
    window.addEventListener("resize", handleChangeWindow);
    return () => {
      window.removeEventListener("resize", handleChangeWindow);
    }
  }, [])

  useEffect(() => {
    if (windowSize > LARGE_WINDOW_SIZE) {
      setCount(LARGE_COUNT)
    } else if (windowSize <= LARGE_WINDOW_SIZE && windowSize > MIDDLE_WiNDOW_SIZE) {
      setCount(MIDDLE_COUNT)
    } else if (windowSize <= MIDDLE_WiNDOW_SIZE) {
      setCount(SMALL_COUNT);
    }
  }, [windowSize])

  useEffect(() => {
    if (url.pathname === '/movies') {
      if (windowSize > LARGE_WINDOW_SIZE) {
        setMoviesDisplay(filterMovies.slice(0, count));
      }  else if (windowSize <= LARGE_WINDOW_SIZE && windowSize > MIDDLE_WiNDOW_SIZE) {
        setMoviesDisplay(filterMovies.slice(0, count));
      } else if (windowSize <= MIDDLE_WiNDOW_SIZE) {
        setMoviesDisplay(filterMovies.slice(0, count));
      }
    } else {
      setMoviesDisplay(filterMovies)
    }
  }, [filterMovies, count])

  const handleMovieDisplay = () => {
    if (windowSize > LARGE_WINDOW_SIZE) {
      setMoviesDisplay(filterMovies.slice(0, moviesDisplay.length + MORE_BUTTON_LARGE))
    }  else if (windowSize <= LARGE_WINDOW_SIZE && windowSize > MIDDLE_WiNDOW_SIZE) {
      setMoviesDisplay(filterMovies.slice(0, moviesDisplay.length + MORE_BUTTON_MIDDLE))
    } else if (windowSize <= MIDDLE_WiNDOW_SIZE) {
      setMoviesDisplay(filterMovies.slice(0, moviesDisplay.length + MORE_BUTTON_MIDDLE))
    }
  }

  let movieElement;
    movieElement = moviesDisplay.map(movie => (
      <li key={movie.id || movie._id}>
        <MovieCard 
          key={movie.id || movie._id}
          movie={movie}
          savedMovies={savedMovies}
          onCreateMovie={onCreateMovie}
          onDeleteMovie={onDeleteMovie}
        />
      </li>
    )
  )

  return (
    <section className="moviesList">
      {movieElement.length === 0 ? (
          <h2 className="moviesList__title">Ничего не найдено.</h2>
      ) : (
        ""
      )}
      <ul className="list moviesList__grid">
        {movieElement}
      </ul>
      {isLoader && <Preloader />}
      {(url.pathname==="/movies" && filterMovies.length > moviesDisplay.length) && 
        <button type="button" className="button moviesList__button" onClick={handleMovieDisplay}>Ещё</button>
      }
    </section>
  )
}

export default memo(MoviesList);