import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import { fetchArticles } from '../actions';
import ArticleDetailModal from '../components/ArticleDetailModal';
import { Card, Col, Row } from 'antd';
import { Spin } from 'antd';

const HomePage = props => {
  const [modal, setModal] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({});

  const readArticle = article => {
    setCurrentArticle(article);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  const renderArticles = () => {
    if(props.articles.length==0){
      return(
        <Spin />
      )
    }else{
      return props.articles.map((article,index) => (
        <div style={{alignSelf:'center'}}>
        <Col xs={8}>
        <Card hoverable key={index} title={<h4>{article.title}</h4>} bordered={true} style={{marginBottom:'20px',width:"100%",alignSelf:'center'}} >
        <br /><LazyLoadImage alt={article.title} src={article.urlToImage} style={{width:'50%'}} />
        <Card type="inner" title={<b>Source : {article.source.name}</b>} extra={<a href="javascript:void(0)" onClick={() => readArticle(article)}>Read More</a>} style={{width:"100%",alignSelf:'center'}}>
        <p><b>Author : {article.author?article.author:'Author Not Found'}</b></p>
        </Card>
        </Card>
        </Col>
        <hr />
        </div>
      ));
    }
    
  };


  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>SSR Daily News - Saikat Paul</title>
        <meta property="og:title" content="SSR Daily News - Saikat paul" />
        <meta
          name="description"
          content="Breaking news,latest articles, popular articles from most popular news websites of the world"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://saikat-dailynewsapp.herokuapp.com/" />
      </Helmet>
    );
  };

  const { fetchArticles: loadArticles } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    loadArticles();
  }, [loadArticles]);
  return (
    <div style={{alignSelf:'center'}}>
      {head()}
      {modal ? <ArticleDetailModal handler={closeModal} data={currentArticle} /> : null}
      <div className="row" style={{alignSelf:'center'}}>
        <div className="section" style={{alignSelf:'center'}}>
          <h3>Popular Articles</h3>
        </div>
        <div className="divider" style={{alignSelf:'center'}} />
        <div className="site-card-wrapper" style={{alignSelf:'center'}}>
        <Row gutter={16} type="flex">{renderArticles()}</Row>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const loadData = store => {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  return store.dispatch(fetchArticles()); // Manually dispatch a network request
};

HomePage.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.any),
  fetchArticles: PropTypes.func
};

HomePage.defaultProps = {
  articles: [],
  fetchArticles: null
};

export default {
  component: connect(
    mapStateToProps,
    { fetchArticles }
  )(HomePage),
  loadData
};
