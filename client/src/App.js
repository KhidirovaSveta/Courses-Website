import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import AddCourse from "./pages/add-course";
import Basket from "./pages/basket";
import Details from "./pages/details-page";
import Home from "./pages/home";

function App() {
  const [basket, setBasket] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header  count={count}/>
      <Routes>
        <Route path="/" element={<Home setBasket={setBasket}  count={count} setCount={setCount}/>} />
        <Route path="/home/:_id" element={<Details basket={basket} setBasket={setBasket} />} />
        <Route path="/pages/add-course" element={<AddCourse />} />
        <Route
          path="/layouts/header"
          element={<Basket basket={basket} setBasket={setBasket}  count={count} setCount={setCount}/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
