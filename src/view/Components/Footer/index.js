import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="socialNetworks">
        Follow Disney on:
        <div className="socialLinks">
          <a
            href="https://www.facebook.com/Disney/?brand_redir=277866969252"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoFacebook size={30} />
          </a>
          <a href="https://www.instagram.com/disneyuk/" target="_blank"  rel="noreferrer">
            <IoLogoInstagram size={30} />
          </a>
          <a
            href="https://www.youtube.com/user/WaltDisneyStudiosUK"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoYoutube size={30} />
          </a>
          <a href="https://twitter.com/Disney_UK" target="_blank"  rel="noreferrer">
            <IoLogoTwitter size={30} />
          </a>
        </div>
      </div>
      <div>Made with ❤ by a Disney Fan and contributors - 2021</div>
      <div>
        Disney and Disney characters are trademarks of Walt Disney Company
      </div>
    </footer>
  );
};

export default Footer;
