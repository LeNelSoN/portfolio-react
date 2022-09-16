import React from 'react'

const CardProject = ({img, title, titleLink, href, description, GitHub}) => {
  return (
    <div className="card col-12 col-lg-5 border border-2 m-2" 
    >
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text fs-6">{description}</p>
        <div className="d-flex justify-content-center">
            <a href={GitHub} className="btn btn-dark transition m-1" target="_blank" rel="noreferrer">github</a>
            {href && <a href={href} className="btn btn-dark transition m-1" target="_blank" rel="noreferrer">{titleLink?titleLink:title}</a>}
        </div>
    </div>
</div>  )
}

export default CardProject