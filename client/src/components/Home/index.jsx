import React from 'react';


const Home = () => {
  return (
    <div>

      <header>
        <h1>Apprenez</h1>
        <h2>Learn to play </h2>
      </header>
      <div className="card">
        <div className="card-body">
          Choose an instrument and master your next song!
        </div>
      </div>

      <div className="input-group mb-3">
        {/* <!-- <button class="btn btn-outline-secondary" type="button">Pick an instrument</button> --> */}
        <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
          <option selected>Choose an instrument</option>
          <option value="1">Piano</option>
          <option value="2">Guitar</option>
          <option value="3">Flute</option>
          <option value="4">Alto Saxophone</option>
          <option value="5">Vocals</option>
          <option value="6">Clarinet</option>
        </select>
      </div>
      <div className="search-box">
        <label for="exampleDataList" className="form-label">Search</label>
        <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type song name"></input></div>

    </div>
  );
};

export default Home;