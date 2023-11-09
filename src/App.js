
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as BigRouter, Routes, Route } from 'react-router-dom';
import MyNavBar from './component/MyNavBar';
import HomePage from './pages/HomePage';
import AllProducts from './pages/AllProducts';
import NewProducts from './pages/NewProducts';
import ViewsProduct from './pages/ViewsProduct';



function App() {
  return (
    <BigRouter>
      <MyNavBar/>
      <Routes>
        <Route path='/allproducts' element={<AllProducts/>} />
        <Route path='/allproducts/:id' element={<ViewsProduct/>} />
        <Route path='/' index element={<NewProducts/>} />
      </Routes>
    </BigRouter>
  );
}

export default App;
