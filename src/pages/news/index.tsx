/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography, Switch, Pagination, PaginationProps } from "antd";
import ArticleCard from "@/components/ArticleCard";
import ArticleList from "@/components/ArticleList";
import ArticleTable from "@/components/ArticleTable";
import ArticleStatistics from "@/components/ArticleStatistics";

const NewsPage: React.FC = () => {
  const [isTable, setIsTable] = useState(true); /* set a state for the table*/
  const [selectedPage, setSelectedPage] = useState(1); /* set a state for the page the user selected currently  */
  const [pageSize, setPageSize] = useState(10); /* state for the page size for the drop down menu */
  const [allArticles, setAllArticles] = useState(0); /* state for the total articles */

  const [articles, setArticles] = useState<any[]>([]); /* state for the list of articles */
  const [wait, setWait] = useState(true); /* state for the loading boolean value */
  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      try {
        const offset = (selectedPage - 1) * pageSize; /* set the offset to be the one less than the current page you are on multiplied by how many articles are on the page */
        const limit = pageSize; /* limit the number of articles to be the setting the using puts in on the drop down menu */
        const data = await fetch(`https://api.spaceflightnewsapi.net/v4/articles?offset=${offset}&limit=${limit}&_sort=published_at:desc`); /* fetch the information from the api */
        const json = await data.json(); /* convert that data into a json */
        setArticles(json.results); /* assign the articles to be the result from the json (the content) */
        setAllArticles(json.count); /* make the count to be the total amount of articles*/
      } catch (error) {
        console.error('Error:', error); /* catch the error if there is an error */
      } finally {
        setWait(false); /* wait for the content to load*/
      }
    };

    // call the function
    fetchData()
      // When a piece of state needs to trigger a re-render (or useEffect re-fire)
      // it should be included in this dependency array.
  }, [selectedPage, pageSize]);
/* this function generates the new page and scrolls to the top*/
  const handlePageChange = (page: number, pageSize?: number) => {
    setSelectedPage(page); /* set the selected page to be the current page passed by the function*/
    window.scrollTo(0, 0); /* scrolls to the top of the page when pages switch */
  };
   /* this function deals with the switch button */
  const onToggle = (checked: boolean) => {
    setIsTable(checked); /* checks to see which way the toggle is switched */
  };
  /* this function changes the page size based on what the user wants */
  const handlePageSizeChange = (current: number, size: number) => { 
    setPageSize(size); /* set the page size to be what the user chooses */
    setSelectedPage(current); /* set the page number to be whatever the user is currently on*/
  };
  

  return (
    <div style={{ width: "100%" }}>
      <span>View as: </span>
      <Switch /* switch statement to switch between table and grid */
        defaultChecked={isTable} /* make sure the boolean returns true*/
        onChange={onToggle} /* call thr toggle function when it is flipped */
        checkedChildren="Table" /* choice for table */
        unCheckedChildren="Grid" /* choice for grid */
      />
      <span> (Switch between Table and Grid view)</span>
      <Divider />
      <ArticleStatistics articles={articles} /* calls on artice=le statistics component*//> 
      <Typography.Title level={2}>Articles</Typography.Title>
      {isTable ? <ArticleTable wait={wait} articles={articles} /> : <ArticleList articleList={articles} wait={wait} /* if there is a table, then generate the article list and grid */ />}

      <Divider />

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Pagination /* handles pagination */
      showSizeChanger
      current={selectedPage} /* show that the current page is the page selected by the user */
      pageSize={pageSize} /* page size is the pagr size chosen by the user */
      total={allArticles} /* show all of the articles selected from that page */
      onChange={handlePageChange} // deals with handling what happens when the user changes pages
      onShowSizeChange={handlePageSizeChange} // deals with handling what happens when the user wants a different size
    />
      </div>
    </div>
  );
};

export default NewsPage;