import React from "react";

const SocialMedia = ({ userLinks }) => (
  <div className="SEO-Container">
  <div className="SEO-center-container">
  <ul className="SEO-Bar">
    {userLinks.map(userLink => (
      <li className="footer-list-items" key={userLink.label}>
        <a className="footer-button" href={userLink.url} id={userLink.image} aria-label={`${userLink.label} button`}>
          <div className={`social-button ${userLink.image}`}/>
        </a>
      </li>
    ))}
  </ul>
  </div>
  </div>
);

export default SocialMedia;
