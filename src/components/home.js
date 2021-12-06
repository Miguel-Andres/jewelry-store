import React from "react";
import Navbar from "./Navbar";
import NewIn from "./sections/NewIn";
import Footer from "./Footer";
import Banner from "./Banner";

import Category from "./sections/Category";
import Offer from "./sections/Offer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <NewIn />
      <Category />
      <Offer />
      <Footer style={{ position: "fixed" }} />
    </div>
  );
}
