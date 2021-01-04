import React from 'react';

// svg 
import GitHubLogo from './svg/githubLogo';
import TwitterLogo from './svg/twitterLogo';

// css 
import '../css/layout/footer.css';
import '../css/style/footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="logoBox">
          <a className="logoLink" href="https://github.com/Kovalski-I/PTimer" target="_blank" rel="noreferrer">
            <GitHubLogo size={50} />
          </a>
          <a className="logoLink" href="https://twitter.com/kovalskii_i" target="_blank" rel="noreferrer">
            <TwitterLogo size={50} />
          </a>
        </div>
        <div className="copyrightBox">
          <span id="copyright">
            © {new Date().getFullYear()} Tim Koval  
          </span>
          <span id="license">
            Licensed under <a id="gplLink" href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU GPLv3</a> | <a id="sourceLink" href="https://github.com/Kovalski-I/PTimer">Source code</a>
          </span>
        </div>
      </footer>
    );  
  }
}

// #231E1B
// #DA1F2