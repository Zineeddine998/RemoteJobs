import React from "react";
import "./sass/main.scss";
import Layout from "./hoc/Layout";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "rc-footer/es";
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

const App = () => (
  <Layout>
      <Header />
    <Main />
      <Footer
          columns={[
              {
                  icon: (
                      <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
                  ),
                  title: 'Remote Tech Jobs made with ❤️ by Zineeddine998',
                  url: 'https://yuque.com',
                  description: '知识创作与分享工具',
                  openExternal: true,
              },
          ]}
          bottom="Copyright (c) 2020"
          theme ='dark'
          backgroundColor = '#6200ea'
      />
  </Layout>
);

export default App;
