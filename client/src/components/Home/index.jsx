import React from 'react';


const Home = () => {
    return (
            <div>

          <header>
        <div className="container">
            
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <h1>Apprenez</h1>
          <h2>Learn to play </h2>
          </header>
          <div className="card">
  <div className="card-body">
  Apprenez is an easy-to-use, music search app. Choose the instrument you are learning on, type in the name of the song you would like to learn, and learn away! You will then be directed to a page with sheet music and tutorial videos on how to learn the selected song. Master your instrument now by searching for your first song! 

  </div>
</div>
      <div className="input-group mb-3">
        {/* <!-- <button class="btn btn-outline-secondary" type="button">Pick an instrument</button> --> */}
        <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
          <option selected>Choose an instrument</option>
          <option value="1">Piano</option>
          <option value="2">Guitar</option>
          <option value="3">Flute</option>
        </select>
      </div>
      <div className="search-box">
      <label for="exampleDataList" className="form-label">Search</label>
      <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type song name"></input>
      </div>
      </div>
    );
};

export default Home;