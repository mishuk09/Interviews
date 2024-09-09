import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeBgColor from './components/ChangeBgColor';
import Router from './components/Router';
import TimeDecre from './components/TimeDecre';
import TodoList from './components/TodoList';
import Home from './components/Router/Home';
import About from './components/Router/About';

function App() {
  return (
    <div className="App">
      {/* <TimeDecre /> */}
      {/* <TodoList /> */}
      {/* <ChangeBgColor /> */}

      <Routes>
        <Route path='/' element={<Router />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />



      </Routes>
    </div>
  );
}

export default App;
