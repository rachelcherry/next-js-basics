import React from "react";
import { Card, Row, Col, Skeleton } from "antd";
import { Article } from "@/types/types";
import ArticleCard from "./ArticleCard";

// You'll need to replace undefined with the correct type
interface ArticleListProps {
  articleList: Article[];
  wait: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({ articleList, wait }) => (
  <div>
    <Row gutter={[24, 24]} /* creates a table */> 
    {wait ? (
    //  <Col span={24}>
      <Skeleton active />
   // </Col>
    ) : (
      articleList.map((article) => (
        /* maps each article to the list called articles */
        <Col key={article.id} md={8} /* only includes the article id */> 
        <ArticleCard
          key={article.id} /* the card will have article id */
          article={article} /* set the article to be the current article being mapped*/
        />
         </Col>
      ))
    )}
    </Row>
  </div>
);

export default ArticleList;
