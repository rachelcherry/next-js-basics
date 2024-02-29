/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography, Switch, Pagination, PaginationProps } from "antd";
import ArticleCard from "@/components/ArticleCard";
import ArticleList from "@/components/ArticleList";
import ArticleTable from "@/components/ArticleTable";
import ArticleStatistics from "@/components/ArticleStatistics";

const NewsPage: React.FC = () => {
  const [isTable, setIsTable] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [allArticles, setAllArticles] = useState(0);

  const [articles, setArticles] = useState<any[]>([]);
  const [wait, setWait] = useState(true);
  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      try {
        const offset = 0;
        const limit = 10;
        const data = await fetch(`https://api.spaceflightnewsapi.net/v4/articles?offset=${offset}&limit=${limit}&_sort=published_at:desc`);
        const json = await data.json();
        setArticles(json.results);
        setAllArticles(json.count);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setWait(false);
      }
    };

    // call the function
    fetchData()
      // make sure to catch any error

      // When a piece of state needs to trigger a re-render (or useEffect re-fire)
      // it should be included in this dependency array.
  }, [currentPage, pageSize]);

   
  const onToggleView = (checked: boolean) => {
    setIsTable(checked);
    setCurrentPage(1); // Reset current page to 1 when toggling view
  };

  

  return (
    <div style={{ width: "100%" }}>
      <span>View as: </span>
      <Switch
        defaultChecked={isTable}
        onChange={onToggleView} 
        checkedChildren="Table"
        unCheckedChildren="Grid"
      />
      <span> (Switch between Table and Grid view)</span>
      <Divider />
      <ArticleStatistics articles={articles}/>
      <Typography.Title level={2}>Articles</Typography.Title>
      {isTable ? <ArticleTable wait={wait} articles={articles} /> : <ArticleList articleList={articles} wait={wait} />}

   
    </div>
  );
};

export default NewsPage;