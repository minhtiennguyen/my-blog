import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articlesContent from '../articles-content';

const ArticlePage = ({ match }) => {
  const { name } = match.params;

  const article = articlesContent.find(a => a.name === name);
  if (!article) return <h1>Article does not exist!</h1>;
  const otherArticles = articlesContent.filter(a => a.name !== name);

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
    
  );
};

export default ArticlePage;
