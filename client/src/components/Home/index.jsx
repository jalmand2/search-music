import React from 'react';


const Home = () => {
  return (
    <div>

      <header>
        <h1>Apprenez</h1>
        <h2>Learn to play</h2>
      </header>
      <div className="card song-search">
        <div className="card-body song-search">
          Choose an instrument and master your next song!
        </div>
      </div>

  <main class="flex-row justify-space-between">
    <div class="col-12 col-md-4">

      <div class="card">
        <h3 class="card-header">Search Song</h3>
        <form id="user-form" class="card-body">
          <label class="form-label" for="song">Song</label>
          <input name="song" id="song" type="text" autofocus="true" class="form-input" />
          <button type="submit" class="btn">Get Song</button>
        </form>
      </div>

      <div class="card">
        <h3 class="card-header">Search By Instrument</h3>
        <div id="instrument-buttons" class="card-body">
          <button data-language="piano" class="btn">Piano</button>
          <button data-language="guitar" class="btn">Guitar</button>
          <button data-language="flute" class="btn">Flute</button>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-8">
      <h2 class="subtitle">Videos: <span id="song-search-term"></span></h2>
      <div id="song-container" class="list-group"></div>
    </div>
  </main>
      {/* <div className="container-fluid song-search">
        <div className="row input-group mb-3">
          <select className="form-select song-search" id="inputGroupSelect03" aria-label="Example select with button addon">
            <option selected>Choose an instrument</option>
            <option value="1">Piano</option>
            <option value="2">Guitar</option>
            <option value="3">Flute</option>
            <option value="4">Alto Saxophone</option>
            <option value="5">Vocals</option>
            <option value="6">Clarinet</option>
          </select>
        </div>

        <div className="row">
          <input className="col form-control song-search" list="datalistOptions" id="exampleDataList" placeholder="Type song name"></input>
          <button type="button" class="col-2 btn" id="song-search-button">Primary</button>
        </div>
      </div> */}
    </div>
  );
};

export default Home;