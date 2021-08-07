import React from "react";
import "./Brands.css";
export const Brands = () => {
  const brands_data = [
    {
      id: 1,
      name: "BASCONI",
      img: "https://cdn5.shoppy.mn/img/3144/160x122xwebp/basconi2.png?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=13255",
    },
    {
      id: 2,
      name: "Arzoni Bazalini",
      img: "https://cdn5.shoppy.mn/img/49512/160x122xwebp/1-1.jpg?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=14585",
    },

    {
      id: 3,
      name: "Bugatti",
      img: "https://cdn5.shoppy.mn/img/49500/160x122xwebp/2.jpg?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=14823",
    },
    {
      id: 4,
      name: "Cindy C.Eric",
      img: "https://cdn5.shoppy.mn/img/5408/160x122xwebp/CINDY1.jpg?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=14571",
    },
    {
      id: 5,
      name: "Fabio Lucetti",
      img: "https://cdn5.shoppy.mn/img/47635/160x122xwebp/fabio22.jpg?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=14584",
    },
    {
      id: 6,
      name: "Hispanitas",
      img: "https://cdn5.shoppy.mn/img/54983/160x122xwebp/hispanitas.jpg?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=14821",
    },
    {
      id: 7,
      name: "IMAC",
      img: "https://cdn5.shoppy.mn/img/52966/160x122xwebp/1-2.jpg?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=14088",
    },
    {
      id: 8,
      name: "Marco Ferretti",
      img: "https://cdn5.shoppy.mn/img/27176/160x122xwebp/MARCO2.jpg?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=16298",
    },
    {
      id: 9,
      name: "Mario Fagni",
      img: "https://cdn5.shoppy.mn/img/57149/160x122xwebp/mario_fagni_copy.jpg?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=16299",
    },
    {
      id: 10,
      name: "Morcilini",
      img: "https://cdn5.shoppy.mn/img/57247/160x122xwebp/ezgif.com-gif-maker.jpg?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=13247",
    },
    {
      id: 11,
      name: "Sasha Fabiani",
      img: "https://cdn5.shoppy.mn/img/54332/160x122xwebp/logo1.png?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=14516",
    },
    {
      id: 12,
      name: "Salamander",
      img: "https://cdn5.shoppy.mn/img/49501/160x122xwebp/8.jpg?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=14274",
    },
    {
      id: 13,
      name: "Tamaris",
      img: "https://cdn5.shoppy.mn/img/17638/160x122xwebp/tamaris2222.jpg?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=14320",
    },
    {
      id: 14,
      name: "Igi&Co",
      img: "https://cdn5.shoppy.mn/img/53075/160x122xwebp/2-1.jpg?h=0c207529e12fafce014229a7f4b24cc31b20ff48",
      link: "https://shoegallery.mn/products?category_id=14824",
    },
  ];
  return (
    <div>
      <h5 style={{ fontSize: "2rem", padding: "0.5rem" }}>Манай брэндүүд</h5>
      <div className="shoe-brands">
        {brands_data.map((el) => {
          return (
            <section key={el.id} className="brands">
              <a className="brand-list" href={el.link}>
                <div>
                  <div className="brand">
                    <div className="image">
                      <img src={el.img} alt={el.name} />
                    </div>
                    <div className="meta">
                      <div>
                        <h5>{el.name}</h5>
                      </div>
                    </div>
                    <div className="arrow"></div>
                  </div>
                </div>
              </a>
            </section>
          );
        })}
      </div>
    </div>
  );
};
