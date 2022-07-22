import "./App.css";
import MiniDrawer from "./Components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import RecipeReviewCard from "./Components/Products";
import About from "./Components/About";
import BasicModal from "./Components/SignIn";
import ProductDetails from "./Components/ProductDetails";
import Register from "./Components/Register";


function App() {
  return (
    <>
      <MiniDrawer />
      <BasicModal/>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="products" element={<RecipeReviewCard />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="/products/:id" element={<ProductDetails />} />        
      </Routes>
    </>
  );
}

export default App;
