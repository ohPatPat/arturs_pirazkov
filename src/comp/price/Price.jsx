import "../../App.scss";

export const Price = (props) => {
  return (
    <section id="Priser">
        <h2>Priser</h2>
      <article>
        <h3>Lille pakke</h3>
        <ul>
          <li> 10 redigerede billeder</li>
          <hr />
          <li> Pris: 850 kr.</li>
        </ul>
      </article>
      <article className="PriserSpace">
        <h3>Mellem pakke</h3>
        <ul>
          <li> 25 redigerede billeder</li>
          <hr />
          <li> Pris: 1.350 kr.</li>
        </ul>
      </article>
            <article className="PriserSpace">
        <h3>Stor pakke</h3>
        <ul>
          <li> 35 redigerede billeder</li>
          <hr />
          <li> Pris: 1.650 kr.</li>
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
