import "../../App.scss";
import Portræt1 from "../../assets/img/portræt/Portræt1.webp";
import Portræt2 from "../../assets/img/portræt/Portræt2.webp";
import Portræt3 from "../../assets/img/portræt/Portræt3.webp";
import Portræt4 from "../../assets/img/portræt/Portræt4.webp";

export const Portrait = (props) => {
  return (
    <section id="Portrait">
        <h2>Portræt</h2>
      <article>
        <h3>Portræt eksempler</h3>
      </article>
<figure>
<img src={Portræt1} alt="Portræt billed af en gravid kvinde" loading="lazy" />
<img src={Portræt3} alt="Portræt af to mennesker" loading="lazy" />
<img src={Portræt2} alt="Portræt af en sød baby" loading="lazy" />
<img src={Portræt4} alt="Portræt af en fyr" loading="lazy" />
</figure>
    </section>
  );
};
