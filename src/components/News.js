import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';

export class News extends Component {  
  static defaultProps={
    country:'in',
    category: 'general',
    headline:''
  }
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page: 1
    }
  }

 async  componentDidMount(){
    console.log("cdm");
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d7df0030db71449c82a9bdbbed51539a&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData= await data.json();
    this.setState({loading:false})
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults})
    
  }
  handleNext= async ()=>{
    console.log("next")
    if(!this.state.page+1 >Math.ceil(this.state.totalResults/20)){
    }else{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d7df0030db71449c82a9bdbbed51539a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,page:this.state.page+1,loading:false})
    }

  }
  handlePrev= async ()=>{
    console.log("prev")

    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d7df0030db71449c82a9bdbbed51539a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,page:this.state.page-1,loading:false})
  }

  render() {
    return (
    <>
    <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Latest {this.props.headline} Headlines</h1>
        {this.state.loading&&<Loading/>}
        {!this.state.loading&&<div className='row' >
          {this.state.articles.map((element)=>{ return <div key={element.url} className='col-md-4'>
            <NewsItem source={element.source.name} author={element.author} date={element.publishedAt}  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://cdn.ndtv.com/common/images/ogndtv.png"} newsUrl={element.url}/>
            </div>})}
        </div>}
        <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.handlePrev} className="btn btn-dark">&larr; Prev</button>
        <button type="button" disabled={this.state.page+1 >Math.ceil(this.state.totalResults/20)} onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>
        </div>
        
    </div>
    </>
    )
  }
}

export default News
