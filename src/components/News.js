import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general',
    headline: '',
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 0,
      loading:true,
      totalResults:0
    }
  }

  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d07a292caa0941ddad60ad5507e91d9e&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    this.props.setProgress(30)
    let data = await fetch(url);
    this.props.setProgress(50)
    let parsedData = await data.json();
    this.props.setProgress(100)
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  async componentDidMount() {
    this.updateNews();
  }
  
  fetchMoreData = async() => {
   this.setState({page: this.state.page + 1});
   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d07a292caa0941ddad60ad5507e91d9e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles), 
      totalResults: parsedData.totalResults,
      loading:false
    })
  };
  
  render() {
    return (
      <>
        
          <h1 className='text-center'>NewsMonkey - Latest {this.props.headline} Headlines</h1>
          {/* {this.state.loading&&<Loading/>} */}
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length < this.state.totalResults}
              loader={<Loading/>}
            >
              <div className='container' >
              <div className='row' >
              {this.state.articles.map((element,index) => {
                return <div key={index} className='col-md-4'>
                  <NewsItem source={element.source.name} author={element.author} date={element.publishedAt} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.ndtv.com/common/images/ogndtv.png"} newsUrl={element.url} />
                </div>
              })}
              </div>
              </div>
            </InfiniteScroll>
            
      </>
    )
  }
}

export default News
