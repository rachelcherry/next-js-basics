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
  
  const columns = [
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
      render: (published_at: string) => {
        const published_date = new Date(published_at);
        return published_date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
      }
    },
  ];
    const mapping = articles.map((article) => ({
     key : article.id, 
      title : article.title,
      news_source: article.news_site,
      published_at: article.published_at,

  }))
  return (
    <>
    <Table dataSource={mapping} columns = {columns} loading={wait} pagination={false} />
    </>
  )

}

export default ArticleTable;
