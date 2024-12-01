import "../../App.scss";

export const Price = (props) => {
  return (
    <section id="Priser">
        <h2>Priser</h2>
      <article>
        <h3>Portræt priser Pr. foto</h3>
        <ul>
          <li> Mit studie: 250kr</li>
          <hr />
          <li> På lokation: 280kr + transport</li>
        </ul>
      </article>
      <article>
        <h3>Galleri priser Pr. foto</h3>
        <ul>
          <li>30/40cm: 385kr</li>
          <hr />
          <li> 50/70cm: 560kr</li>
          <hr />
          <li>60/80cm: 850kr</li>
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
