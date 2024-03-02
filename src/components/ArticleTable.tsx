import React from "react";
import { Table, TableColumnsType } from "antd";
import { Article } from "@/types/types";
import ArticleList from "@/components/ArticleList";

interface ArticleTableProps {
  articles: Article[];
  wait: boolean;
}

const ArticleTable: React.FC<ArticleTableProps> = ({ articles, wait }) => {
  /**
   * This component renders a table of articles. It takes as input an array of articles and a boolean indicating whether the table is loading.
   * You should use the Antd Table component to build this.
   * No data manipulation is needed here.
   * You will need to write a custom render function for the "published_at" column to format the date.
   *
   */
  
  const columns = [ /* This creates a table with columns title, news soucr, and published at*/
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'articleTitle'
    },
    {
      title: 'News Source',
      dataIndex: 'news_source',
      key: 'news',
    },
    {
      title: 'Published At',
      dataIndex: 'published_at',
      key: 'published_at',
      render: (published_at: string) => { /* render the date for each article*/
        const published = new Date(published_at); /* call the Date component*/
        return published.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", hour: "numeric", minute:"numeric" }); /* convert the date to day, month, year, and time*/
      }
    },
  ];
    const mapping = articles.map((article) => ({
     key : article.id, /* for each article, map the id*/
      title : article.title, /* for each article, map the title*/
      news_source: article.news_site,/* for each article, map the site where the news came from*/
      published_at: article.published_at,/* for each article, map the date it was published*/

  }))
  return (
    <>
    <Table dataSource={mapping} columns = {columns} loading={wait} pagination={false} /*  create the table and ensure it does not put its own pagination*//> 
    </>
  )

}

export default ArticleTable;
