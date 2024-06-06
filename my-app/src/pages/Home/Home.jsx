import React from "react";
import Swiper from "./Swiper";

import Brand from "./Brand";
import Cards from "./Cards";
import Ingradients from "./Ingradients";
const Home = () => {
  return (
    <main>
      <Swiper />
      <Brand />
      <Cards/>
      <Ingradients/>
    </main>
  );
};
export default Home;
