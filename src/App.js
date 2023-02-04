// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  return (

    <div id="canvas" class="root">
     
      <Nav
        showHome={() => setPageIndex(0)} />

      {pageIndex === 0 ? (
        <Home />
      ) : (
        <Home />
      )}
      {/* <footer className='text-center text-lg-left'>
                <div className='text-center p-3'>
                <a style={{color: 'white'}} href="https://github.com/jalmand2"><iconify-icon icon="ri:github-fill" width="100" height="100"></iconify-icon></a>
                <a style={{color: 'white'}} href="https://www.linkedin.com/in/jessicaalmand/"><iconify-icon icon="mdi:linkedin" width="100" height="100"></iconify-icon></a>
                <a style={{color: 'white'}} href="https://www.facebook.com/jessica.almand/"><iconify-icon icon="ic:baseline-facebook" width="100" height="100"></iconify-icon></a>
                <p style={{color: 'white'}}>© Developed by Jessica Almand</p>
                </div>
              </footer> */}

              
    </div>
                  
);
}

export default App;
