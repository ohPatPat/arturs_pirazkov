import "../../App.scss";
import Cover from "../../assets/img/Cover.jpg";

export const HeroImg = (props) => {
  return (
    <section id="HeroImg">
      <figure>
        <img src={Cover} alt="" loading="lazy" />
        <figcaption>
          <article>
            <h1>Arturs Pirazkov</h1>
            <h2>- Fotograf -</h2>
          </article>
        </figcaption>
      </figure>
    </section>
  );
};
