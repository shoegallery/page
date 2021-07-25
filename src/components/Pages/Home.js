import React from "react";
import { isIOS } from "react-device-detect";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
export const Home = () => {
  const facebook_id = "161212127881483";
  const instagram_url = "https://www.instagram.com/shoegallery_mongolia/";
  var facebook_url;

  if (isIOS === true) {
    facebook_url = `fb://profile?id=${facebook_id}`;
  } else {
    facebook_url = `fb://page/${facebook_id}`;
  }
  console.log(instagram_url);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxwidth: "100%",
        paddingTop: "20%",
      }}
    >
      <div
        style={{
          flex: 1,
          fontSize: 50,
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ padding: 50 }}>Follow US</h4>
        <div
          style={{
            display: "inline",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <a href={facebook_url}>
            <FacebookIcon className="active" style={{ fontSize: 100 }} />
          </a>

          <a href={instagram_url}>
            <InstagramIcon className="active" style={{ fontSize: 100 }} />
          </a>
        </div>
      </div>
    </div>
  );
};
