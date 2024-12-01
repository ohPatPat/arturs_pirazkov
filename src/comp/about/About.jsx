import "../../App.scss";
import Long from "../../assets/img/ProfilePictureLong.webp";
import Short from "../../assets/img/ProfilePictureShort.webp";

export const About = (props) => {
  return (
    <section id="OmMig">
      <figure>
        <h2>Om mig</h2>
        <figcaption>
          <article>
            <p>
              Mit navn er Arthurs Pirazkov.
              <br />
              Jeg er en professionel fotograf, med speciale i
              natur, arkitektur og det danske nordlys fotografering.
              <br />
              <br />
              Jeg kom til Danmark for 11 år siden fra Letland, og virkelig faldt for naturen i den nordlige del af Danmark. Der er utallige smukke steder, som man
              kan fotografere uendeligt, så jeg regner me at blive her i lang tid. Jeg
              har rejst meget i Europa, men i Danmark fandt jeg mig selv.
              <br />
              <br />

              <q><i>
                Der er altid to personer på hvert billede: fotografen og
                betragteren.
                </i></q>
            </p>
          </article>
        </figcaption>
        <img id="Long" src={Long} alt="Portræt af Arturs Pirazkov" loading="lazy" />
        <img id="Short" src={Short} alt="Portræt af Arturs Pirazkov" loading="lazy" />
      </figure>
    </section>
  );
};
