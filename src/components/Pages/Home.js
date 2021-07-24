import React from "react";
import { isAndroid, isIOS } from "react-device-detect";

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
    </div>
  );
};
