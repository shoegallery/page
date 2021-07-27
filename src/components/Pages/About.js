import React from "react";
import Zoom from "react-reveal/Zoom";
import "./About.css";
export const About = () => {
  return (
    <Zoom
      style={{ paddingTop: "30%", top: "30%", position: "relative" }}
      ssrFadeout
    >
      <div className="about-text">
        <p>
          Манай гутлын сүлжээ дэлгүүр болох Shoe Gallery нь таньд өдөр тутам
          өмсөхөд тохиромжтой загварлаг чанартай гутлын брэндүүдийг нэг дороос
          сонгох боломжийг олгож байна. Бид үйлчлүүлэгч нартаа Итали, Герман,
          Испани, Турк зэрэг улсын брэндийн, шинэ шинэлэг загвартай, чанартай
          гутлыг хямд үнээр Shoe Gallery дэлгүүрээс өмсөж үзэн харьцуулж,
          сонголтоо хийх тав тухтай орчинг бүрдүүлэхийг зорин ажиллаж байна.
        </p>
      </div>
    </Zoom>
  );
};
