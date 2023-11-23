import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as BigRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import MyNavBar from "./component/MyNavBar";
import HomePage from "./pages/HomePage";
import { useProduct } from "./customhook/useProduct";
import AllProducts from "./pages/AllProducts";
import NewProducts from "./pages/NewProducts";
import ViewsProduct from "./pages/ViewsProduct";
import HeroSection from "./component/HeroSection";
import MyFooter from "./component/MyFooter";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import { useEffect, useState } from "react";
import ProductPart from "./pages/ProductPart";
import NewArrivalSection from "./component/NewArrivalSection";
import BrandSection from "./component/BrandSection";
import CategorySection from "./component/CategorySection";
import Createcategory from "./component/Createcategory";
function App() {
  const [ischange,setChange]= useState()
  const  {products,isloading,iserror } = useProduct({search:null,sortby:null,action:ischange})


  const categories = products.map((product) => product.category_id);
  const [isauth,setAuth] = useState(false)

  useEffect(()=>{

  },[])

  console.log(products)
  return (
    <BigRouter>
      {!isloading && <MyNavBar
      
      isauth= {isauth} 
      setAuth={setAuth}
      />}

      <Routes>
        <Route>
          <Route
            path={'/'}

            element={
              <Layout isloading={isloading}>


                {
                  isloading && 
       <section className='container
        d-flex justify-content-center align-items-center'
        
        style={{ 
          height:' 100vh'

         }}
        >

             
     <RotatingLines
    strokeColor="#4fa94d"
    strokeWidth="5"
    animationDuration="0.75"
    color="#4fa94d"
    width="136"
    visible={true}
    />
          </section>
                }

                {!isloading && (
                  <>
                    <HeroSection />

                    <BrandSection />

                    <NewArrivalSection
                      products={products}
                      isloading={isloading}
                      iserror={iserror}
                    />

                    <CategorySection
                      products={products}
          
                      isloading={isloading}
                      iserror={iserror}
                    />
                  </>
                )}
              </Layout>
            }
          />
             <Route
            path="/logout"
            element={<Navigate to="/" />}
          />
          <Route path="product/:id" element={<ViewsProduct />} />
          <Route
            path="/product"
            
            element={<ProductPart categories={categories} />}
          />
          <Route
            path="/product/category/:id"
            element={<ProductPart categories={categories} />}
          />
        </Route>
        <Route path="/:id" element={<ViewsProduct />} />
        <Route path="form" element={<NewProducts setChange = {setChange}  />} />
        <Route path="form/:id" element={<NewProducts setChange = {setChange}  />} />
        <Route path="form/category" element={<Createcategory />} />


  
        <Route path="form/category/:id" element={<Createcategory />} />
        <Route path="login" element={
        <Login
         isauth= {isauth} 
        setAuth = {setAuth}/>} />
        <Route path="register" element={<Register       isauth= {isauth} 
      setAuth={setAuth}/>} />
      </Routes>

      {!isloading &&     
      
      <MyFooter>
        <div
          class="container-fluid"
          style={{
            backgroundColor: "black",
          }}
        >
          <footer class="py-3 my-4 mb-0">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3 text-white">
              <li class="nav-item text-white fw-bold">
                <Link to={"/"} class="nav-link px-2 text-white">
                  Home
                </Link>
              </li>
              <li class="nav-item text-white fw-bold">
                <Link to={""} class="nav-link px-2 text-white">
                  Create
                </Link>
              </li>
              <li class="nav-item text-white fw-bold">
                <Link to={""} class="nav-link px-2 text-white">
                  Filter
                </Link>
              </li>
            </ul>
            <p class="text-center text-white fw-bold">© 2023 Tenh Ey, Inc</p>
          </footer>
        </div>
      </MyFooter>}

    </BigRouter>
  );
}

export default App;