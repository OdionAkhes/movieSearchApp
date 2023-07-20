import React,{useState} from 'react'
import MovieCard from './MovieCard';
const SearchMovies = () => {
    const [query, setQuery] = useState("");
        const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {

        e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=6ae4d0070a388f56a8a1606b719b7d97&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json()
            console.log(data.results);
            setMovies(data.results)
        } catch (err) {
            console.error(err)
        }

}


    return (
      <>
        <form action="" className="form" onSubmit={searchMovies}>
          <label htmlFor="query" className="label">
            Movie Name
          </label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input"
            type="text"
            name="query"
            placeholder="i.e. Jurassic Park"
          />
          <button className="button" type="submit">
            Search
          </button>
        </form>
        <div className="card-list">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      </>
    );
}

export default SearchMovies