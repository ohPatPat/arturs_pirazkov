import "../../App.scss";
import GaveKort from "../../assets/img/GaveKort.webp";

export const Gift = (props) => {
  return (
    <section id="Gift">
      <h2>Gavekort</h2>
      <figure>
        <img src={GaveKort} alt="Gavekort til Arurs Pirazkov hjemmeside" loading="lazy" />
      </figure>
      <article>
        <p>
        Mangler du en gave til en, du holder af? Et gavekort til Arturs Pirazkov smukke fotografering kunne være den perfekte løsning.        </p>
      </article>
    </section>
  );
};
