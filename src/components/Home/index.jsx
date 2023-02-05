import React from 'react';


const Home = () => {
    return (
            <div>

          <header>
        <div class="container">
            
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
          <h1>Welcome to Apprenez</h1>
          </header>
          <div class="card">
  <div class="card-body">
  Apprenez is an easy-to-use, music search app. Choose the instrument you are learning on, type in the name of the song you would like to learn, and learn away! You will then be directed to a page with sheet music and tutorial videos on how to learn the selected song. Master your instrument now by searching for your first song! 

  </div>
</div>
      <div class="input-group mb-3">
        {/* <!-- <button class="btn btn-outline-secondary" type="button">Pick an instrument</button> --> */}
        <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
          <option selected>Choose an instrument</option>
          <option value="1">Piano</option>
          <option value="2">Guitar</option>
          <option value="3">Flute</option>
        </select>
      </div>
      <div class="search-box">
      <label for="exampleDataList" class="form-label">Search</label>
      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type song name"></input>
      </div>
      </div>
    );
};

export default Home;