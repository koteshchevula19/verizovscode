import logo from './logo.svg';
import './App.css';
import './Counter';
import Counter from './Counter';
import Image from './Image';
import ImageSlide from './Imageslide';
import Toggle from './Toggle';
import Time from './Time';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}
     {/* <Counter counter={31} /> */}
     {/* <Image imageurl={['https://cdn.pixabay.com/photo/2023/09/14/15/54/bird-8253245_1280.jpg','https://cdn.pixabay.com/photo/2023/12/09/21/03/pineapple-8440180_640.jpg','https://cdn.pixabay.com/photo/2023/12/04/15/12/soap-8429699_1280.jpg']} i={0} /> */}
    {/* <ImageSlide /> */}
    {/* <Toggle /> */}
    <Time />
    </div>
  );
}

export default App;
