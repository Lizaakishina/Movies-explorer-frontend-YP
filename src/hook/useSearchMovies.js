import { useEffect, useState } from "react";
import { MOVIES_NAME } from "../utils/constants";

export const useSearchMovies = (type) => {
  const [nameMovie, setNameMovie] = useState('');

  useEffect(() => {
    if(type === "movies")
    setNameMovie(sessionStorage.getItem(MOVIES_NAME) || '');
  }, [type]);

  const handleSetItem  = () => {
    sessionStorage.setItem(MOVIES_NAME, nameMovie);
  }

  function handleChange (e) {
    setNameMovie(e.target.value);
  }

  return {handleChange, handleSetItem, nameMovie}
}