import React from "react";
import "./SocialMedia.scss";

const SocialMediaAbout = () => (
  <div className="SocialMediaAbout-main">
<ul className="SEO-Bar">
      <li className="about-list-items" key="linkedin">
        <a className="footer-button linkedin" href={"https://linkedin.com/in/tomreidnz"}>
          <div className="linkedin social-button"/>
        </a>
        <div className="about-list-text">
        <h4>LinkedIn</h4>
        <a className="about-list-link" href={"https://linkedin.com/in/tomreidnz"}>https://www.linkedin.com/in/tomreidnz</a>
        </div>
      </li>
      <li className="about-list-items" key="github">
        <a className="footer-button github" href={"https://github.com/tomreidnz"}>
          <div className="github social-button"/>
        </a>
        <div className="about-list-text">
        <h4>GitHub</h4>
        <a className="about-list-link" href={"https://github.com/tomreidnz"}>https://www.github.com/tomreidnz</a>
        </div>
      </li>
      <li className="about-list-items" key="twitter">
        <a className="footer-button twitter" href={"https://twitter.com/tomreidnz"}>
          <div className="twitter social-button"/>
        </a>
        <div className="about-list-text">
        <h4>Twitter</h4>
        <a className="about-list-link" href={"https://twitter.com/tomreidnz"}>https://www.twitter.com/tomreidnz</a>
        </div>
      </li>
      <li className="about-list-items" key="email">
        <a className="footer-button email" href={"mailto:tom@tomreid.ai"}>
          <div className="email social-button"/>
        </a>
        <div className="about-list-text">
        <h4>Email</h4>
        <a className="about-list-link" href={"mailto:tom@tomreid.ai"}>tom@tomreid.ai</a>
        </div>
      </li>
  </ul>
  </div>
);

export default SocialMediaAbout;
