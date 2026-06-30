import { useState } from "react";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
import {tvShows} from "./shows/data";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [selectedShow, setSelectedShow] = useState();

  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow}/>
        <ShowDetails selectedShow={selectedShow}/>

      </main>
    </>
  );
}
