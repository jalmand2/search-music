import React from 'react';


const Home = () => {
    return (
            <div>

          
        <div class="container">
            <div class="content">
                
            </div>
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

      
      <div class="input-group mb-3">
        {/* <!-- <button class="btn btn-outline-secondary" type="button">Pick an instrument</button> --> */}
        <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
          <option selected>Choose...</option>
          <option value="1">Piano</option>
          <option value="2">Guitar</option>
          <option value="3">Flute</option>
        </select>
      </div>
      <div>
      <label for="exampleDataList" class="form-label">Search </label>
      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
      </div>
      </div>
    );
};

export default Home;