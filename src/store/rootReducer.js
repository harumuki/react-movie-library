import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import moviesReducer from "./movies/movies.reducer";
import movieReducer from "./movie/movie.reducer";
import genresReducer from "./genres/genres.reducer";
import favoritesReducer from "./favorites/favorites.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  genres: genresReducer,
  favorites: favoritesReducer
});

export default rootReducer;
