import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <small className="footer__copyright">
        Copyright 2019 Yoursite, All right reserved
      </small>
      <br />
      <small className="footer__copyright">
        You subscribed to our newsletter via our website, example.com
      </small>
      <br />
      <a className="footer__unsubs">
        <small>Unsubscribe from this list</small>
      </a>
    </footer>
  );
}
