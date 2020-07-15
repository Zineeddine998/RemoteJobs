import React from "react";
import "./sass/main.scss";
import Layout from "./hoc/Layout";
import Header from "./components/Header";
import Main from "./components/Main";
import NewHeader from "./components/newHeader";

const App = () => (
  <Layout>
      <Header />
    <Main />
    <Header />
  </Layout>
);

export default App;
