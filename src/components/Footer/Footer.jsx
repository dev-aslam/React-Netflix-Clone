import "./Footer.css";
import LanguageBtn from "../Header/LanguageBtn";

const footerLinks = [
  "FAQ",
  "Help Centre",
  "Account",
  "Media Centre",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
];

export const Footer = () => {
  const linksPerColumn = Math.ceil(footerLinks.length / 4);
  const columns = [];
  for (let i = 0; i < 4; i++) {
    columns.push(
      footerLinks.slice(i * linksPerColumn, (i + 1) * linksPerColumn)
    );
  }
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="question">
          Questions? Call <span>000-800-919-1694</span>
        </div>
        <div className="footer-items">
          {columns.map((column, index) => (
            <div className="footer-column" key={index}>
              <ul>
                {column.map((link, idx) => (
                  <li key={idx}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footerbtn">
          <LanguageBtn />
        </div>
        <div className="footer-end">Netflix India</div>
      </div>
    </div>
  );
};
