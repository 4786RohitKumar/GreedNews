import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export default function News(props) {
  News.defautProps = {
    country: "in",
    category: "general",
    pageSize: 5,
  };

  News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  let capitalizeFirstLetter = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  };

  let [articles, setArticles] = useState([]);
  let [page, setpage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [totalResults, setTotalResults] = useState(0);
  document.title = `${capitalizeFirstLetter(props.category)}-NewsGreed`;

  const fetchNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4ffdfd7484a44c7593d6850bd191036a&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    setpage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=4ffdfd7484a44c7593d6850bd191036a&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

  // const handleNext=async()=>{

  //         let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=4ffdfd7484a44c7593d6850bd191036a&page=${page+1}&pageSize=${props.pageSize}`
  //         let data=await fetch(url)
  //         let parseData=await data.json()
  //         setpage(page+1)
  //         setArticles(parseData.articles)
  //         setTotalResults(parseData.totalResults)
  // }

  // const handlePrevious=async()=>{
  //     let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=4ffdfd7484a44c7593d6850bd191036a&page=${page-1}&pageSize=${props.pageSize}`
  //     let data=await fetch(url)
  //     let parseData=await data.json()
  //     setpage(page-1)
  //     setArticles(parseData.articles)
  //     setTotalResults(parseData.totalResults)
  // }

  return (
    <div>
      <div className="container">
        <h2 className="text-center my-3">
          <i>
            <u>GreedNews</u>
          </i>
        </h2>
        <h4 className="text-center my-3">
          <i>Top Headlines from-{capitalizeFirstLetter(props.category)}</i>
        </h4>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-4" key={element.url}>
                    <NewsItem
                      title={
                        element.title ? element.title.slice(0, 60) + "..." : " "
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 160) + "..."
                          : " "
                      }
                      url={element.url}
                      urlToImage={!element.urlToImage ? "https://fdn.gsmarena.com/imgroot/news/22/11/apple-watch-ultra-oceanic-plus/-952x498w6/gsmarena_000.jpg" : element.urlToImage}
                      author={element.author}
                      publishedAt={element.publishedAt}
                    />
                  </div>
                );
              })}
              ;
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
