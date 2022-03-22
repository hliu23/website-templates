import * as React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Project from "../components/project";

import JSONData from "../content/projects/projects.json";


const projectsPage = ({ data }) => {
  let imageData = {};
  const nodes = data.allFile.nodes;
  for (let node of nodes) {
    imageData[node.name] = getImage(node.childrenImageSharp[0]);
  }

  const keys = Object.keys(JSONData);
  keys.forEach((key) => {
    JSONData[key].imageData = imageData[key];
  })

  // name from json has to match file name

  // check relative path?
  return (
    <Layout pageTitle="Projects">

      <div className="container-fluid">
        <div className="row">

        {/* <div className="row row-cols-md-2 g-4"> */}
          {keys.map((key) => {
            return (
            <Project
              key={key}
              
              imageData={JSONData[key].imageData}
              name={JSONData[key].name}
              authors={JSONData[key].authors}
              description={JSONData[key].description}
              githubLink={JSONData[key].githubLink}
              status={JSONData[key].status}
            >
            </Project>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
// (transformOptions: {fit: CONTAIN})
export default projectsPage;

export const query = graphql`
query {
  allFile(
    filter: {sourceInstanceName: {eq: "projects"}, relativeDirectory: {eq: "images"}}
    sort: {fields: name, order: ASC}
  ) {
    nodes {
      name
      childrenImageSharp {
        gatsbyImageData
      }
      relativePath
    }
  }
}
`

// project.js, project.json, projects.js

