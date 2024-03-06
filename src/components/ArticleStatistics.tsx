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
    `Earliest: ${dateRange[0]}`, /* sets the starting date for each page*/
    `Latest: ${dateRange[1]}` /* sets the latest date for each page*/
  
  ];
  const featured = articles.filter(article => 
    article.featured
    ); /* filter for the articles that are labeled as featured*/
  const numFeat = [
    <Typography.Text>{featured.length}</Typography.Text> /* show how many featured articles are on that page*/
  ]

  return (
  <div>
  

  <Row gutter={16} /* create a table */>
        <Col span={8}> 
          <List
                header= {<p><b>Unique News Sources</b></p>} /* title the table Unique News Sources*/
          bordered
            size="small"
            dataSource={uniqueSources}
            renderItem={(v) => ( /* render all of the news sources that are called in the unique sources method  and list them in a table*/
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
            renderItem={(v) => ( /*  render the starting time and latest time out of all of the articles on the page and list them in a table*/
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
            renderItem={(v) => ( /* render all of the articles that fall into the featured type and list the count of them in the table*/
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
