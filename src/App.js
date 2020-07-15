import React from "react";
import "./sass/main.scss";
import Layout from "./hoc/Layout";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => (
  <Layout>
    <Header />
    <Main />
  </Layout>
);

export default App;
