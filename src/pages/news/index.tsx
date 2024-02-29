/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography, Switch, Pagination, PaginationProps } from "antd";
import ArticleCard from "@/components/ArticleCard";
import ArticleList from "@/components/ArticleList";
import ArticleTable from "@/components/ArticleTable";
import ArticleStatistics from "@/components/ArticleStatistics";

const NewsPage: React.FC = () => {
  const [allArticles, setAllArticles] = useState(0);

  const [articles, setArticles] = useState<any[]>([]);
  const [wait, setWait] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`https://api.spaceflightnewsapi.net/v4/articles?offset=0&limit=10&_sort=published_at:desc`);
        const json = await data.json();
        setArticles(json.results);
        setAllArticles(json.count);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } 
    };

    fetchData()
  
  }, []);

  

  return (
    <div style={{ width: "100%" }}>
     
      
    </div>
  );
};

export default NewsPage;