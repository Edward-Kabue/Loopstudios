import React from "react";
import data from "../data-mobile";

const Creations = () => {
  // const [cards] = useState(data);

  return (
    <section className="creations-mobile">
      <h2>Our creations</h2>
      <section>
        {data.map((e) => {
          // const { id, image, title } = data;
          return (
            <article key={e.id}>
              <img src={e.image} alt="creations card" />
              <h3>{e.title}</h3>
            </article>
          );
        })}
      </section>
      <div className="btn-container">
        <button className="btn">See All</button>
      </div>
    </section>
  );
};

export default Creations;
