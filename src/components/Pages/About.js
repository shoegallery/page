import React from "react";
import Zoom from "react-reveal/Zoom";
import "./About.css";
export const About = () => {
  return (
    <Zoom
      style={{ paddingTop: "30%", top: "30%", position: "relative" }}
      ssrFadeout
    >
      <div className="article-css">
        <p>
          &nbsp;&nbsp;&nbsp;Манай гутлын сүлжээ дэлгүүр болох{" "}
          <strong>Shoe Gallery</strong> нь таньд өдөр тутам өмсөхөд тохиромжтой
          загварлаг чанартай гутлын брэндүүдийг нэг дороос сонгох боломжийг
          олгож байна.
          <br /> <br />
          &nbsp;&nbsp;&nbsp;Бид үйлчлүүлэгч нартаа Итали, Герман, Испани, Турк
          зэрэг улсын брэндийн, шинэ шинэлэг загвартай, чанартай гутлыг хямд
          үнээр <strong>Shoe Gallery</strong> дэлгүүрээс өмсөж үзэн харьцуулж,
          сонголтоо хийх тав тухтай орчинг бүрдүүлэхийг зорин ажиллаж байна.
        </p>
      </div>
    </Zoom>
  );
};
