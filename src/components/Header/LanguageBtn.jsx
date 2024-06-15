import langaugeIcon from "../../assets/language.svg";
import arrow from "../../assets/drop-arrow.svg";
import "./Header.css";

function LanguageBtn() {
  return (
    <>
      <div className="header-dropdown">
        <img src={langaugeIcon} alt="langaugeIcon" className="languageIcon" />
        <select id="" name="LanguageSelect" defaultValue="en-IN">
          <option lang="en" label="English" value="en-IN">
            English
          </option>
          <option lang="hi" label="हिन्दी" value="hi-IN">
            हिन्दी
          </option>
        </select>
        <img src={arrow} alt="arrow" className="arrow" />
      </div>
    </>
  );
}

export default LanguageBtn;
