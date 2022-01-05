import React from 'react';

export default function Welcome() {
  return (
    <div style={{ textAlign: 'justify' }}>
      <h2>Welcome!</h2>
      <p>
        I created this project as a way to learn some new technologies and to
        create a foundation I could reuse for other projects
      </p>
      <p>
        The codebase is built in <em>typescript</em> for both the server and
        client for faster development and continutity. Linting via{' '}
        <em>eslint</em> and <em>prettier</em> has also been setup
      </p>
      <h3>Server</h3>
      <p>
        The server uses an <em>express</em> & <em>nodejs</em> stack and connects
        to a <em>mongodb</em> database via the <em>docker-compose</em> image
      </p>
      <h3>Client</h3>
      <p>
        The client built using <em>react</em> with <em>redux</em> for state
        management, <em>react router</em> for navigation routing, and{' '}
        <em>sass</em> for styling, all of which is built and served with a{' '}
        <em>webpack</em> and <em>babel</em> combo
      </p>
    </div>
  );
}
