import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Productos from './components/Productos/Productos';
import Producto from './components/Productos/Producto';
import EditarProductos from './components/Productos/EditarProductos';
import EditarProducto from './components/Productos/EditarProducto';
import Redes from './components/Redes/Redes';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import ProtectedRoute from './ProtectedRoute';


function App() {
  return (
    <Router>
    <>
      <NavBar/>
      <div>
        <Routes>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
          {/* <Route path='/productos' element={<Productos></Productos>}></Route> */}
          <Route path='/producto/:id' element={<Producto></Producto>}></Route>
          {/* <Route path='/editarproductos' element={<ProtectedRoute></ProtectedRoute>}></Route> */}
          {/* <Route path='/editarproductos' element={<EditarProductos></EditarProductos>}></Route> */}
          <Route path='/editarproducto/:id' element={<ProtectedRoute></ProtectedRoute>}></Route>
          <Route path='/editarproducto/:id' element={<EditarProducto></EditarProducto>}></Route>
          <Route path='/redes' element={<Redes></Redes>}></Route>
        </Routes>
      </div>
      <Footer/>
    </>
    </Router>
  );
}

export default App;
