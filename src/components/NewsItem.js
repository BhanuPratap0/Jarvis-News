import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl,author,date,source}=this.props;
    return (
      <div className='my-2' >
        <div className="card" style={{width:'23rem'}} >
          <div className='d-flex' 
          style={{justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }} >
            <span style={{left:'50%'  ,zIndex:"1"}} className="badge rounded-pill bg-danger">
          {source}
          </span>
          </div>
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
