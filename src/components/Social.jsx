import React from "react";

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/abdul23lm/",
  },
  {
    iconName: "facebook",
    link: "https://www.facebook.com/Abdul23LM",
  },
  { iconName: "twitter", link: "https://twitter.com/Abdul_LM" },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/abdul_lm",
  },
  { iconName: "dribbble", link: "https://dribbble.com/abdul_lm" },
  { iconName: "behance", link: "https://dribbble.com/abdul_lm" },
  {
    iconName: "github",
    link: "https://github.com/abdul23lm",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
