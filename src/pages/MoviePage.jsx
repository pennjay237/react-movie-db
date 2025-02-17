import { DetailMovieContext } from "../Context/context";
import { useContext, useState, useEffect } from "react";
import Cast from "../components/cast/Cast";
import Hero from '../components/hero/Hero';
import { useParams } from "react-router";

const API_KEY = import.meta.env.VITE_BASE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const MoviePage = () => {
  const { selectedMovie } = useContext(DetailMovieContext);
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  // Fetch Cast Data
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
        const data = await response.json();
        setCast(data.cast.slice(0, 5)); // Get the top 5 cast members
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };

    fetchCast();
  }, [id]);

  if (!selectedMovie || selectedMovie.id !== parseInt(id)) {
    return <h2>Movie not found. Please go back and select a movie.</h2>;
  }

  return (
    <>
      <Hero 
        backgroundImage={selectedMovie.poster_path} 
        description={selectedMovie.overview} 
        title={selectedMovie.title} 
      />
      <Cast cast={cast} /> {/* Pass cast data to Cast component */}
    </>
  );
};

export default MoviePage;