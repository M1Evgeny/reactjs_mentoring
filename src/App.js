import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/hello-world'
import PureComp from './components/pure-component'
import Counter from './components/counter';
import Filter from './components/filter';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search/>
        <Counter />
        <Filter/>
        <HelloWorld />
        <PureComp />
      </header>
    </div>
  );
}

export default App;
