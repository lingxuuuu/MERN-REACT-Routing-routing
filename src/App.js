import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Custom from './components/Custom';

function App() {
  return (
    <div className="App">
     <Router>
       <Home path='/home' /> 
       <Number path='/:id' />
       <Word path='/:word' />
       <Custom path='/hello/:color/:background' />
     </Router>
    </div>
  );
}

export default App;
