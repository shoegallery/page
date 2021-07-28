import React from "react";
import "./Location.css";
import Flip from "react-reveal/Flip";
export const Location = () => {
  const data_location = [
    {
      id: 1,
      name: "Гранд Плаза Салбар",
      desc: "БГД, 2 хороо, Гранд плаза төв, 3 давхар 326, Shoe Gallery",
    },
    {
      id: 2,
      name: "Хүннүмолл Салбар",
      desc: "ХУД, 4 хороо, Хүннү молл B1 давхар Shoe Gallery",
    },
    {
      id: 3,
      name: "Имарт Хан-Уул Салбар",
      desc: "ХУД, 15 хороо, Имарт Хан-Уул салбар, 1 давхар Shoe Gallery",
    },
    {
      id: 4,
      name: "Максмолл Салбар",
      desc: "БГД, 16 хороо, Максмолл төв, 2 давхар Shoe Gallery",
    },
    {
      id: 5,
      name: "Улаанбаатар Их Дэлгүүр",
      desc: "СБД, 4 хороо, Улаанбаатар их дэлгүүр 5 давхар Bugatti",
    },
    {
      id: 6,
      name: "Улаанбаатар Их Дэлгүүр Салбар",
      desc: "СБД, 4 хороо, Улаанбаатар их дэлгүүр 5 давхар Bugatti",
    },
    {
      id: 8,
      name: "Улаанбаатар Их Дэлгүүр Sasha Fabiani Салбар",
      desc: "СБД, 4 хороо, Улаанбаатар их дэлгүүр 5 давхар Sasha Fabiani",
    },
    {
      id: 9,
      name: "Максмолл BASCONI Салбар",
      desc: "БГД, 16 хороо, Максмолл төв, 2 давхар BASCONI",
    },
    {
      id: 10,
      name: "Улаанбаатар Их Дэлгүүр BASCONI Салбар",
      desc: "СБД, 4 хороо, Улаанбаатар их дэлгүүр 5 давхар BASCONI",
    },
  ];
  console.log(data_location);
  return (
    <div style={{ position: "relative", marginTop: "0%" }}>
      <p style={{ fontSize: "1.5rem", padding: "1rem", fontWeight: "bolder" }}>
        Дэлгүүрийн хаяг{" "}
      </p>
      {data_location.map((el) => {
        return (
          <div key={el.id}>
            <div className="store">
              {" "}
              <Flip left cascade>
                <div className="meta">
                  <h4 className="name">{el.name}</h4>
                  <div style={{ display: "flex" }}>
                    <h4 className="address">{el.desc}</h4>
                  </div>
                </div>
              </Flip>
            </div>
          </div>
        );
      })}
    </div>
  );
};
