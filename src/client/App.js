import React from 'react';
import { renderRoutes } from 'react-router-config';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
const { Footer } = Layout;
import ErrorBoundary from './components/ErrorBoundry';
import Header from './components/Header';

const App = ({ route }) => {
  return (    
      <Layout>
        <Header />
        <div className="container">
          <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
        </div>
        <Footer style={{ textAlign: 'center', backgroundColor:'black',height:"100px" }}>
          <p style={{color:'white',marginTop:'10px'}}>Ant Design ©2020 Created by Saikat Paul</p></Footer>
      </Layout>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any)
};

App.defaultProps = {
  route: null
};

export default {
  component: App
};
