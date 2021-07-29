import React from "react";
import Fade from "react-reveal/Fade";
import "./About.css";

export const Partners = () => {
  return (
    <div className="article-css">
      <div>
        <h6> Хамтран ажиллах санал </h6>
        <Fade left>
          <p>
            &nbsp;&nbsp;&nbsp;Манай гутлын сүлжээ дэлгүүр{" "}
            <strong>Shoe Gallery</strong> нь бизнес, маркетинг болон бусад
            туслан гүйцэтгэх ажил зэрэг бүхий л чиглэлээр байгууллага, хувь
            хүмүүстэй хамтран ажилласаар байна. <br />
          </p>
        </Fade>

        <Fade right>
          <p style={{ fontSize: "1.5rem" }}>
            Бид таны хамтран ажиллах саналыг сонсож байна.{" "}
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            <br />
            Утас: 8040-9000 <br />
          </p>
        </Fade>
        <br />
        <br />
      </div>
    </div>
  );
};
