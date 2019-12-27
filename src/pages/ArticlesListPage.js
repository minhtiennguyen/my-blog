import React from 'react';
import articleContent from '../articles-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => (
  <>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
  </>
);

export default ArticlesListPage;
