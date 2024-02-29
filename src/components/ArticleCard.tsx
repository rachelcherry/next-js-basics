import React from "react";
import { Card, Divider } from "antd";
import { Article } from "@/types/types";
import image404 from "../assets/404.png";
import { useState } from "react";


interface ArticleCardProps {
  article: Article;
}


const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const [isError, setError] = useState(false);
  const handleError = () => {
    setError(true);
  };
  const handleClick = () => {
    window.open(article.url);
  };

  return (
    <div>
      <Card
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <h4 style={{ margin: 0, flex: 1, overflow: "hidden", textOverflow: "ellipsis", justifyContent: "space-between" }}>{article.title}</h4>
            <p style={{ fontWeight: "normal" }}>{new Date(article.published_at).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
        }
        cover={
        isError ? (
          <img src={image404.src} alt={"error"} />
        ) : (
        <img src={article.image_url} onError={handleError} alt={article.title} />)}
        onClick={handleClick}
        key={article.id}
        hoverable
      >
        <Divider />
        <h3><u>{article.title}</u></h3>
        <p>{article.summary}</p>
      </Card>
    </div>
  );
};

export default ArticleCard;
