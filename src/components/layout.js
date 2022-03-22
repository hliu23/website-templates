import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import "../styles/modified/custom.compressed.css";
import * as custom from "../styles/layout.module.css";

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }  
  `)

  const style = { "color": "#171738" };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-2">

          </div>
          <div className="col-md-8">
            <div>
              <title>{pageTitle} | {data.site.siteMetadata.title}</title>
              <nav>
                <ul className="nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" style={style}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/projects" className="nav-link" style={style}>Projects</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/current" className="nav-link" style={style}>Current</Link>
                  </li>
                  {/* progress?
                  project pages? */}
                </ul>
              </nav>
              <main>
                <h1 className={custom.title}>{pageTitle}</h1>
                <div className={custom.content}>{children}</div>
              </main>
            </div>
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>



    </div>

  );
}

export default Layout;