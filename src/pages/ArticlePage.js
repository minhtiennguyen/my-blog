import React from 'react';
import articlesContent from '../articles-content';

const ArticlePage = ({ match }) => {
  const { name } = match.params;

  const article = articlesContent.find(a => a.name === name);
  if (!article) return <h1>Article does not exist!</h1>;
  return (
    <>
      <h1>{article.name}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
