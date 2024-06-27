import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Project from './pages/Project.jsx';

function App() {
  return (
    <div className='w-full'>
      <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
