import React from 'react'

export default function NewsItem(props) {
    const{title,description,url,urlToImage,author,publishedAt}=props
  return (
    <div>
      <div className="card" >
        <img src={urlToImage} className="card-img-top" style={{height:"250px",width:"346px", objectFit:"cover"}} alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">By {!author?"unknown":author} Updated on {new Date(publishedAt).toGMTString()} ago</p>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
        </div>
       </div>
    </div>
  )
}
