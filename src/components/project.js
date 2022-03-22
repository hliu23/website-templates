import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";



const Project = (props) => {
  // imageData, name, authors (array), description, updatedDate, githubLink
  let authors = "";
  props.authors.forEach((author, index) => {
    authors += author;
    if (index < props.authors.length - 1) authors += ", ";
  });
  return (
    <div className="col-md-6">
      <div className="card">
        <p className="card-header text-center">
          {props.status}
        </p>
        <div className="card-body">
          <h5 className="card-title text-center">{props.name}</h5>
          <h6 className="card-subtitle text-center">{authors}
          </h6>
          <GatsbyImage
            image={props.imageData}
            alt="icon"
            className="card-img-top"
            objectFit="contain"
          ></GatsbyImage>
          <p className="card-text">{props.description}</p>
        </div>
        <p className="card-link text-center">
          <a href={props.githubLink} className="btn btn-primary">View on Github</a>
          {/* add link to website
          github api
          sort by tag/date
          project pages?
           */}
        </p>
      </div>
    </div>
  )
};

export default Project;