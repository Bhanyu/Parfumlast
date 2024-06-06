import { Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";

import "./index.css";
import SingleCard from "./pages/Home/SingleCard";
import Products from "./pages/Products/Products";
import Blog from "./pages/Blogs/Blog";
import Accordion from "./pages/Accordion/Accordion";
import Contact from "./pages/Contact/Contact";
import SingleProduct from "./pages/Products/SingleProduct";
import NotPage from "./pages/NotPage/NotPage";

function App() {
  return (
    <>
      <Routes>
     


        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<Products />} />
          <Route path="cards/:proId" element={<SingleProduct />} />
          <Route path="blog" element={<Blog />} />
          <Route path="faq" element={<Accordion />} />
          <Route path="contact" element={<Contact />} />
          <Route path=":cardId" element={<SingleCard />} />
          <Route path="*" element={<NotPage/>} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
