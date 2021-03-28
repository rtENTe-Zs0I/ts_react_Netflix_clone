import React from 'react';
import './App.css';
import { Row } from './Row';
import {Banner} from './Banner';
import {requests} from './request';
import {Nav} from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX CLONE"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rate" fetchUrl={requests.feactTopRated} />
      <Row title="Action Movies" fetchUrl={requests.feactActionMovies} />
      <Row title="Comedy Moives" fetchUrl={requests.feactComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} />
      <Row title="Romance Moveis" fetchUrl={requests.feactRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
