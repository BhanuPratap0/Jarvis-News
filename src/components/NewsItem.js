import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl,author,date,source}=this.props;
    return (
      <div className='my-2' >
        <div className="card" style={{width:'23rem'}} >
          <span style={{left:'95%',zIndex:"1"}} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
          {source}
          </span>
        <img src={imageUrl}  className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}..</p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            <p className="card-text"><small className="text-muted">BY {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
