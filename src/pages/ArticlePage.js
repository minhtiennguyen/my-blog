import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from '../pages/NotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import articlesContent from '../articles-content';

const ArticlePage = ({ match }) => {
  const { name } = match.params;

  const article = articlesContent.find(a => a.name === name);

  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };

    fetchData();
  }, [name]);

  if (!article) return <NotFoundPage />;
  const otherArticles = articlesContent.filter(a => a.name !== name);

  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection
        name={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <AddCommentForm name={name} setArticleInfo={setArticleInfo} />
      <CommentsList comments={articleInfo.comments} />
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
