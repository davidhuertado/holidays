import facebookLogo from '../../assets/images/facebook.png';
import pinterestLogo from '../../assets/images/pinterest.png';
import igLogo from '../../assets/images/ig.png';
import twitterLogo from '../../assets/images/twitter.png';
import './MediaContainer.scss';

export default function MediaContainer() {
  return (
    <section className="media-container">
      <p className="media-container__text">follow us on social media </p>
      <div className="media-container__flex">
        <a>
          <img
            className="media-container__logo"
            src={facebookLogo}
            alt="Facebook"
          />
        </a>
        <a>
          <img
            className="media-container__logo"
            src={twitterLogo}
            alt="Twitter"
          />
        </a>
        <a>
          <img
            className="media-container__logo"
            src={pinterestLogo}
            alt="Pinterest"
          />
        </a>
        <a>
          <img className="media-container__logo" src={igLogo} alt="Instagram" />
        </a>
      </div>
    </section>
  );
}
