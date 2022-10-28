export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="default-footer" data-testid="footer">
      <div className="default-footer__content">
        <div className="default-footer__item">
          {'This site was proudly built by '}
          <a href="https://sparkbox.com">Sparkbox</a>
          {' apprentices.'}
        </div>
        <div className="default-footer__item">
          <a href="https://apprentices.sparkbox.com/">
            Learn more about Sparkbox&#39;s apprenticeship programs.
          </a>
        </div>
        <div className="default-footer__item">
          <div className="default-footer__links">
            <a href="https://twitter.com/hearsparkbox">
              <img src="/icons/icon_twitter.svg" alt="twitter-icon" />
            </a>
            <a href="https://github.com/sparkbox">
              <img src="/icons/icon_github.svg" alt="github-icon" />
            </a>
            <a href="https://dribbble.com/sparkbox">
              <img src="/icons/icon_dribble.svg" alt="dribbble-icon" />
            </a>
            <a href="https://www.linkedin.com/company/sparkbox">
              <img src="/icons/icon_linkedin.svg" alt="linkedin-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCfsWcRy7Yh1WWDrrZS0Q7xw">
              <img src="/icons/icon_youtube.svg" alt="youtube-icon" />
            </a>
          </div>
        </div>
        <div className="default-footer__item">
          {`©${currentYear} Sparkbox. All rights reserved. `}
          <a href="https://sparkbox.com/privacypolicy">Privacy Policy</a>
          {' and '}
          <a href="https://sparkbox.com/terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
