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
    <Row gutter={[24, 24]}>
    {wait ? (
    //  <Col span={24}>
      <Skeleton active />
   // </Col>
    ) : (
      articleList.map((article) => (
        <Col key={article.id} md={8} >
        <ArticleCard
          key={article.id}
          article={article}
        />
         </Col>
      ))
    )}
    </Row>
  </div>
);

export default ArticleList;
