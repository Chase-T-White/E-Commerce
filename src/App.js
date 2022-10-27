import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  Checkout,
  PrivateRoute,
  Products,
  SingleProduct,
  Cart,
  Error,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='cart' element={<Cart />} />
            <PrivateRoute path='checkout' element={<Checkout />} />
            <Route path='products' element={<Products />}>
              <Route path=':id' element={<SingleProduct />} />
            </Route>
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
