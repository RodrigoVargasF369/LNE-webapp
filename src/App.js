import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Productos from './components/Productos/Productos';
import Redes from './components/Redes/Redes';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <>
      <NavBar/>
      <div>
        <Routes>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/productos' element={<Productos></Productos>}></Route>
          <Route path='/redes' element={<Redes></Redes>}></Route>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
