import React from "react";
import FollowAt from "react-social-media-follow";

const links = [
  "https://www.facebook.com/SGMONGOLIA",
  "https://www.instagram.com/shoegallery_mongolia/",
];

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxwidth: "100%",
        paddingTop: "30%",
      }}
    >
      <div style={{ flex: 1, font: "message-box" }}>
        <h4>Та илүү ихийг мэдэхийг хүсвэл биднийг дагаарай</h4>
      </div>
      <FollowAt
        style={{ flex: 1, paddingTop: "10" }}
        links={links}
        hoverMove={true}
        spacing="30px"
      />
    </div>
  );
};
