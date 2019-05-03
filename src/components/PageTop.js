import React from 'react';
import db from '../../images/db.png';

class PageTop extends React.Component {
  render() {
    return (
      <div id="top">
        <div id="top-title-wrapper">
          <h2 id="top-title">Elastic Simulator</h2>
          <p id="top-title-caption">
            Search and Analyze keyword on the web.
            <br />
            This is based on Python API of Elasticsearch.
            <br />
            Quickly prototype new settings and mappings.
          </p>
          <div id="top-btn-wrapper">
            <input type="text" name="port-num" placeholder="Enter Port Number" id="form-connect-port-num" className="btn-input btn-simple" required number minLength="1" maxLength="5" />
            <div id="form-connect-submit" className="btn-input btn-yellow">Connect</div>
          </div>
        </div>
        <div id="top-img-wrapper">
          <img id="top-img-small" src={db} alt="" />
          <img id="top-img-large" src={db} alt="" />
        </div>
      </div>
    );
  }
}

export default PageTop;
