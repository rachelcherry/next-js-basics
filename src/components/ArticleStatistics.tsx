import React from "react";
import { Row, Col, List, Typography } from "antd";
import { Article } from "@/types/types";

interface ArticleStatisticsProps {
  articles: Article[];
}

const ArticleStatistics: React.FC<ArticleStatisticsProps> = ({ articles }) => {
  
  /**
   * This component generates the following statistics:
   * 1. Unique news sources
   * 2. Date range of articles
   * 3. Number of featured articles
   *
   * It takes as input an array of articles
   *
   * You should use a combination of Antd components to buidld this.
   * You might need to do some data manipulation to get the data in the right format.
   *
   * I used a combination of the following components:
   * 1. List
   * 2. Row
   * 3. Col
   * 4. Typography.Text
   * 5. Typography.Title
   */
  //This is given to you
  const uniqueSources = [
    ...new Set(articles.map((article) => article.news_site)),
  ];
  // This might be helpful for you
  const dateRange = [
    new Date(
      Math.min(
        ...articles.map((article) => new Date(article.published_at).getTime())
      )
    ).toLocaleDateString(),
    new Date(
      Math.max(
        ...articles.map((article) => new Date(article.published_at).getTime())
      )
    ).toLocaleDateString(),
  ];
  const dateTime = [
    `Earliest: ${dateRange[0]}`,
    `Latest: ${dateRange[1]}`
  
  ];
  const featured = articles.filter(article => article.featured);
  const numFeat = [
    <Typography.Text>{featured.length}</Typography.Text>
  ]

  return (
  <div>
  

  <Row gutter={16}>
        <Col span={8}>
          <List
                header= {<p><b>Unique News Sources</b></p>}
          bordered
            size="small"
            dataSource={uniqueSources}
            renderItem={(v) => (
              <List.Item>
                <Typography.Text>{v}</Typography.Text>
              </List.Item>
            )}
          />
        </Col>
        <Col span={8}>
        
        <List
        header= {<p><b>Date Range of Articles</b></p>}
          bordered
            size="small"
            dataSource={dateTime}
            renderItem={(v) => (
              <List.Item>
                <Typography.Text>{v}</Typography.Text>
              </List.Item>
            )}
          />

        </Col>
      
        <Col span={8}>
        <List
        header= {<p><b>Number of Featured Articles</b></p>}
          bordered
            size="small"
            dataSource={numFeat}
            renderItem={(v) => (
              <List.Item>
                <Typography.Text>Count: {v}</Typography.Text>
              </List.Item>
            )}
          />
         
        </Col>
      </Row>
  
  
  </div>
  
  
    )
};

export default ArticleStatistics;
