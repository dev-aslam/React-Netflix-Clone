import tvImage from "../../assets/tv.png";
import mobileImage from "../../assets/mobile.jpg";
import macImage from "../../assets/mac.png";
import childrenImage from "../../assets/children.png";

import "./BodyContent.css";

const data = [
  {
    id: "1",
    heading: "Enjoy on your TV",
    subheading:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    images: tvImage,
  },
  {
    id: "2",
    heading: "Download your shows to watch offline",
    subheading:
      "Save your favourites easily and always have something to watch.",
    images: mobileImage,
  },
  {
    id: "3",
    heading: "Watch everywhere",
    subheading:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    images: macImage,
  },
  {
    id: "4",
    heading: "Create profiles for kids",
    subheading:
      "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    images: childrenImage,
  },
];

export const BodyContent = () => {
  return (
    <div className="bodyContent">
      {data.map((item, index) => (
        <div key={item.id} className="bodyContent-border">
          <div className="bodyContent-items">
            {index % 2 === 0 ? (
              <>
                <div>
                  <h1>{item.heading}</h1>
                  <h3>{item.subheading}</h3>
                </div>
                <div>
                  <img src={item.images} />
                </div>
              </>
            ) : (
              <>
                <div>
                  <img src={item.images} />
                </div>
                <div>
                  <h1>{item.heading}</h1>
                  <h3>{item.subheading}</h3>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
