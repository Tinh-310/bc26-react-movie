// libs
import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
// pages
import HomePage from "./modules/Home/pages/HomePage";
import MovieShowing from "./modules/Movies/pages/MovieShowing";
import MovieComming from "./modules/Movies/pages/MovieComming";
import MovieDetails from "./modules/Movies/pages/MovieDetails";
// component
import NotFound from "./components/NotFound";

import globalStyles from "./globalStyles";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/movies">
          <Route path="now-showing" element={<MovieShowing />} />
          <Route path="coming-soon" element={<MovieComming />} />
          <Route path=":movieId" element={<MovieDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Global styles={globalStyles} />
    </>
  );
}

export default App;
