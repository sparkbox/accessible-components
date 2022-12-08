import Twitter from './TwitterIcon';
import GitHub from './GitHubIcon';
import Dribble from './DribbleIcon';
import LinkedIn from './LinkedInIcon';
import YouTube from './YouTubeIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="default-footer" data-testid="footer">
      <div className="default-footer__content">
        <div className="default-footer__item default-footer__item--text">
          {'This site was proudly built by '}
          <a href="https://sparkbox.com">Sparkbox</a>
          {' apprentices.'}
        </div>
        <div className="default-footer__item default-footer__item--text">
          <a href="https://apprentices.sparkbox.com/">
            Learn more about Sparkbox&#39;s apprenticeship programs.
          </a>
        </div>
        <div className="default-footer__item">
          <div className="default-footer__icon-container">
            <a
              href="https://twitter.com/hearsparkbox"
              aria-label="Twitter link"
            >
              <Twitter />
            </a>
            <a href="https://github.com/sparkbox" aria-label="Git Hub link">
              <GitHub />
            </a>
            <a href="https://dribbble.com/sparkbox" aria-label="Dribble link">
              <Dribble />
            </a>
            <a
              href="https://www.linkedin.com/company/sparkbox"
              aria-label="Linked In link"
            >
              <LinkedIn />
            </a>
            <a
              href="https://www.youtube.com/channel/UCfsWcRy7Yh1WWDrrZS0Q7xw"
              aria-label="You Tube link"
            >
              <YouTube />
            </a>
          </div>
        </div>
        <div className="default-footer__item default-footer__item--text">
          {`©${currentYear} Sparkbox. All rights reserved. `}
          <a href="https://sparkbox.com/privacypolicy">Privacy Policy</a>
          {' and '}
          <a href="https://sparkbox.com/terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
