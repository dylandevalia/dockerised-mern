import React from 'react';
import './index.scss';

export default function TechInfo() {
  return (
    <div className="info">
      <div>
        <h3>
          <a
            href="https://github.com/dylandevalia/dockerised-mern/blob/master/server/package.json"
            target="_blank"
            rel="noopener noreferrer"
          >
            Server
          </a>
        </h3>
        <ul>
          <span>Dependencies</span>
          <li>body-parser</li>
          <li>cors</li>
          <li>dotenv</li>
          <li>express</li>
          <li>mongoose</li>
        </ul>
        <ul>
          <span>Dev Dependencies</span>
          <li>babel</li>
          <li>eslint</li>
          <li>nodemon</li>
          <li>prettier</li>
          <li>typescript</li>
          <li>webpack</li>
        </ul>
      </div>

      <div>
        <h3>
          <a
            href="https://github.com/dylandevalia/dockerised-mern/blob/master/client/package.json"
            target="_blank"
            rel="noopener noreferrer"
          >
            Client
          </a>
        </h3>
        <ul>
          <span>Dependencies</span>
          <li>axios</li>
          <li>react</li>
          <li>react-dom</li>
          <li>react-redux/toolkit</li>
          <li>react-router-dom</li>
        </ul>
        <ul>
          <span>Dev Dependencies</span>
          <li>babel</li>
          <li>eslint</li>
          <li>prettier</li>
          <li>sass-loader</li>
          <li>typescript</li>
          <li>webpack</li>
        </ul>
      </div>
    </div>
  );
}
