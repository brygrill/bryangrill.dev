import * as React from 'react';
import { Button } from 'rebass';
import Layout from '../layouts';

const IndexPage = () => (
  <Layout>
    <div style={{ minHeight: '300px' }}>header with social links</div>
    <div id="stack" style={{ minHeight: '300px' }}>
      tech i use
    </div>
    <div id="articles" style={{ minHeight: '300px' }}>
      articles
    </div>
    <div id="projects" style={{ minHeight: '300px' }}>
      projects
    </div>
    <div id="snippets" style={{ minHeight: '300px' }}>
      snippets
    </div>
  </Layout>
);

export default IndexPage;
