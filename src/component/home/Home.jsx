import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css';
import MovieList from '../movieList/MovieList';
const Home = () => {
    const [popularMoview, setPopularMoview] = useState([]);
    useEffect(() => {
         fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
         .then(res => res.json())
         .then(data => setPopularMoview(data.results))
    }, [])

    console.log(popularMoview);
    return (
        <div className=''>
            <div className="poster">
               <Carousel
                 showThumbs={false}
                 autoPlay={true}
                 infiniteLoop={true}
                 showStatus={false}
               >
                  {
                    popularMoview.map(movie => (
                       <Link className='a' to={`movie/${movie.id}` }>
                       <div className="posterImage">
                       <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                       </div>
                       <div className="posterImage_overly">
                       <div className="posterImage__title">
                       {movie ? movie.original_title : ""}</div>
                        <div className="posterImage__runtime">
                          {movie ? movie.release_date : ""}
                            <span className="posterImage__rating">
                           {movie ? movie.vote_average : ""}
                           <i className="fas fa-star" />{" "}
                            </span>
                         </div>
                         <div className="posterImage__description">
                         {movie ? movie.overview : ""}
                         </div>
                       </div>
                    </Link>
                    ))
                  }
               </Carousel>
            </div>
            <MovieList/>
        </div>
    );
}

export default Home;
