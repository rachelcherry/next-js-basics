import React from "react";
import { Card, Divider } from "antd";
import { Article } from "@/types/types";
import image404 from "../assets/404.png";
import { useState } from "react";


interface ArticleCardProps {
  article: Article; /* sets the properties to just have the property article */
}


const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const [isError, setError] = useState(false); /* state to keep track of the error */
  const handleError = () => { 
    setError(true); // if there is an error, set it to true
  };
  const handleClick = () => {
    window.open(article.url); // go to a new window in the browser and open the article
  };

  return (
    <div>
      <Card
        title={
          // styling for the title of the card
          // check to see if the title is too long, and if it is, deal with overflow by putting ... 
          <div style={{ display: "flex", alignItems: "center" }}>
            <h4 style={{ margin: 0, flex: 1, overflow: "hidden", textOverflow: "ellipsis", justifyContent: "space-between" }}>{article.title}</h4>
            <p style={{ fontWeight: "normal" }}>{new Date(article.published_at).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
        }
        // if there is an error, display the image from image404 rather than the image given by the article
        cover={
        isError ? (
          <img src={image404.src} alt={"error"} />
        ) : (
          // if there are no errors, set the image to be the image from the article 
        <img src={article.image_url} onError={handleError} alt={article.title} />)}
        onClick={handleClick} // upon clicking the article, open a new page that links to the article
        key={article.id}
        hoverable // make the article cards hoverable on the page
      >
        <h3><u>{article.title}</u></h3> {/* in the body of the card, put the article title*/}
        <Divider /> {/*creates divider between sections */}
        <p>{article.summary}</p> {/* in the body of the card, put the article summary under the title*/}
      </Card>
    </div>
  );
};

export default ArticleCard;
