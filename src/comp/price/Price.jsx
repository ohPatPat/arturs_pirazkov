import "../../App.scss";
import Long from "../../assets/img/ProfilePictureLong.jpg";
import Short from "../../assets/img/ProfilePictureShort.jpg";

export const Price = (props) => {
  return (
    <section id="Priser">
        <h2>Priser</h2>
      <article>
        <ul>
          <li>30/40cm - 385 kr</li>
          <hr />
          <li> 50/70cm - 560 kr</li>
          <hr />
          <li>60/80cm - 850kr</li>
        </ul>
        <p>
          Oplev skønheden med vores højt kvalitet papir med de udsøgte billeder,
          der sikrer, at hver eneste detalje kommer til.
          Samtidig nyd bekvemmeligheden ved <span> inkluderet fragt</span>.
        </p>
      </article>
    </section>
  );
};
