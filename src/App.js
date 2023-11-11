
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
        <Route path='/' index element={<AllProducts/>} />
        <Route path='/:id' element={<ViewsProduct/>} />
        <Route path='form' element={<NewProducts/>} />
      </Routes>
    </BigRouter>
  );
}

export default App;
