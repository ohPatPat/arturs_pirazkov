import "../../App.scss";
import React, { useState } from "react";

import Placeholder from "../../assets/img/Placeholder.jpg";


import Aurora1 from "../../assets/img/aurora/Farvernes Kraft i Nattens Skær.jpg";
import Aurora2 from "../../assets/img/aurora/Gudernes Gave.jpg";
import Aurora3 from "../../assets/img/aurora/Nordlysets Dansk over Himlen.jpg";

import Lighthouse1 from "../../assets/img/lighthouse/Giganten.jpg";
import Lighthouse2 from "../../assets/img/lighthouse/En Tåget Nat.jpg";
import Lighthouse3 from "../../assets/img/lighthouse/Farven i Horisonten.jpg";
import Lighthouse4 from "../../assets/img/lighthouse/Fyrtårnets Kontrast.jpg";
import Lighthouse5 from "../../assets/img/lighthouse/Fyrtårnets Lyse Nat.jpg";
import Lighthouse6 from "../../assets/img/lighthouse/Lighthouse6.jpg";
import Lighthouse7 from "../../assets/img/lighthouse/Fyrtårnets Vidunderlige Omgivelser.jpg";
import Lighthouse8 from "../../assets/img/lighthouse/Himlens farvedans bag Fyrtårnet.jpg";
import Lighthouse9 from "../../assets/img/lighthouse/Horisonten Der Gemmer.jpg";
import Lighthouse10 from "../../assets/img/lighthouse/Hvad Der Ses I Lyset.jpg";
import Lighthouse11 from "../../assets/img/lighthouse/Kraften af Ensomhed.jpg";
import Lighthouse12 from "../../assets/img/lighthouse/Lavendel Paradis.jpg";
import Lighthouse13 from "../../assets/img/lighthouse/Lysets Horisont.jpg";
import Lighthouse14 from "../../assets/img/lighthouse/Månens Smil i Fyrtårnets Baggrund.jpg";
import Lighthouse15 from "../../assets/img/lighthouse/Lighthouse15.jpg";
import Lighthouse16 from "../../assets/img/lighthouse/Lighthouse16.jpg";
import Lighthouse17 from "../../assets/img/lighthouse/Naturens Kaos i Fyrtårnets Baggrund.jpg";
import Lighthouse18 from "../../assets/img/lighthouse/Solnedgangens Farver i Fyrtårnets Skygge.jpg";
import Lighthouse19 from "../../assets/img/lighthouse/Strandet Fyrtårn nær Havet.jpg";
import Lighthouse20 from "../../assets/img/lighthouse/Lighthouse20.jpg";

import Port1 from "../../assets/img/port/At Holde Ved.jpg";
import Port2 from "../../assets/img/port/Den Lyse Nat.jpg";
import Port3 from "../../assets/img/port/Det Strandede Paradis.jpg";
import Port4 from "../../assets/img/port/Fortidens Fine Front.jpg";
import Port5 from "../../assets/img/port/Havnen ved Lyby.jpg";
import Port6 from "../../assets/img/port/Havnens Farvedans.jpg";
import Port7 from "../../assets/img/port/Havnens Nærbillede.jpg";
import Port8 from "../../assets/img/port/Kystens Vilde Liv.jpg";
import Port9 from "../../assets/img/port/Port9.jpg";
import Port10 from "../../assets/img/port/Lysets Værdi.jpg";
import Port11 from "../../assets/img/port/Nattens Lys Ved Havet.jpg";
import Port12 from "../../assets/img/port/Selskabslivet På Vandet.jpg";
import Port13 from "../../assets/img/port/Selskabslivet På Vandet 2.jpg";

import Beach1 from "../../assets/img/beach/Bænkens plads til Pause.jpg";
import Beach2 from "../../assets/img/beach/Essensen af Refleksion.jpg";
import Beach3 from "../../assets/img/beach/Beach3.jpg";
import Beach4 from "../../assets/img/beach/Himmels Lavendel Passion.jpg";
import Beach5 from "../../assets/img/beach/Horisontens Evige Gang.jpg";
import Beach6 from "../../assets/img/beach/Landets Hemmeligheder i selskab med Himlens Gave.jpg";
import Beach7 from "../../assets/img/beach/Lavvandets Hemmeligheder.jpg";
import Beach8 from "../../assets/img/beach/Beach8.jpg";
import Beach9 from "../../assets/img/beach/Nattens Vidunder.jpg";
import Beach10 from "../../assets/img/beach/Sivets Evige Udsigt.jpg";
import Beach11 from "../../assets/img/beach/Beach11.jpg";
import Beach12 from "../../assets/img/beach/Storkens Stille Sind.jpg";
import Beach13 from "../../assets/img/beach/Vindens dans.jpg";

import Ship1 from "../../assets/img/ship/Ship1.jpg";
import Ship2 from "../../assets/img/ship/FN437 - Strandens Stolthed.jpg";
import Ship3 from "../../assets/img/ship/Havets Idyl.jpg";
import Ship4 from "../../assets/img/ship/Rebet og Kæden - Skibets værdifulde redskaber.jpg";
import Ship5 from "../../assets/img/ship/Ship5.jpg";

import Animal1 from "../../assets/img/animal/Barndommens Nysgerrighed.jpg";
import Animal2 from "../../assets/img/animal/Gæsling i Vandets Overflade.jpg";
import Animal3 from "../../assets/img/animal/I Skovens Dybe Ro.jpg";
import Animal4 from "../../assets/img/animal/Måge ved Solnedgang.jpg";
import Animal5 from "../../assets/img/animal/Muslingejagt i Solens Varme.jpg";
import Animal6 from "../../assets/img/animal/Nysgerrighed.jpg";
import Animal7 from "../../assets/img/animal/Ræveunge i Græssets Skjul.jpg";
import Animal8 from "../../assets/img/animal/Ræveungende.jpg";
import Animal9 from "../../assets/img/animal/Ungdommens Energi.jpg";
import Animal10 from "../../assets/img/animal/Vingernes Vilde Liv.jpg";

import Drawing1 from "../../assets/img/drawing/Havnens blide Liv.jpg";
import Drawing2 from "../../assets/img/drawing/Havnens Harmoni.jpg";
import Drawing3 from "../../assets/img/drawing/Landsbyens Liv.jpg";
import Drawing4 from "../../assets/img/drawing/Rustikkens Værdi.jpg";
import Drawing5 from "../../assets/img/drawing/Toppens Nærbillede.jpg";
import Drawing6 from "../../assets/img/drawing/Drawing6.jpg";

import Stuff1 from "../../assets/img/stuff/Aftenroens Stilhed.jpg";
import Stuff2 from "../../assets/img/stuff/Balancens Perfektion.jpg";
import Stuff3 from "../../assets/img/stuff/Stuff3.jpg";
import Stuff4 from "../../assets/img/stuff/Havets Vilde Sind.jpg";
import Stuff5 from "../../assets/img/stuff/Himlens Gave.jpg";
import Stuff6 from "../../assets/img/stuff/Stuff6.jpg";
import Stuff7 from "../../assets/img/stuff/Naturens Gave.jpg";
import Stuff8 from "../../assets/img/stuff/Stuff8.jpg";

export const Gallary = (props) => {
  const [auroraIsChecked, setAuroraChecked] = useState(true);
  const [lighthouseIsChecked, setLighthouseChecked] = useState(true);
  const [portIsChecked, setPortChecked] = useState(true);
  const [beachIsChecked, setBeachChecked] = useState(true);
  const [shipIsChecked, setShipChecked] = useState(true);
  const [animalIsChecked, setAnimalChecked] = useState(true);
  const [drawingIsChecked, setDrawingChecked] = useState(true);
  const [stuffIsChecked, setStuffChecked] = useState(true);

  const handleAuroraChange = () => {
    if (auroraIsChecked) {
      setAuroraChecked(false);
    } else {
      setAuroraChecked(true);
    }
  };

  const handleLighthouseChange = () => {
    if (lighthouseIsChecked) {
      setLighthouseChecked(false);
    } else {
      setLighthouseChecked(true);
    }
  };

  const handlePortChange = () => {
    if (portIsChecked) {
      setPortChecked(false);
    } else {
      setPortChecked(true);
    }
  };

  const handleBeachChange = () => {
    if (beachIsChecked) {
      setBeachChecked(false);
    } else {
      setBeachChecked(true);
    }
  };

  const handleShipChange = () => {
    if (shipIsChecked) {
      setShipChecked(false);
    } else {
      setShipChecked(true);
    }
  };

  const handleAnimalChange = () => {
    if (animalIsChecked) {
      setAnimalChecked(false);
    } else {
      setAnimalChecked(true);
    }
  };

  const handleDrawingChange = () => {
    if (drawingIsChecked) {
      setDrawingChecked(false);
    } else {
      setDrawingChecked(true);
    }
  };

  const handleStuffChange = () => {
    if (stuffIsChecked) {
      setStuffChecked(false);
    } else {
      setStuffChecked(true);
    }
  };

  let Aurora = [
    {
      img: Aurora1,
      name: "Farvernes Kraft i Nattens Skær",
      number: "001",
      checked: auroraIsChecked,
    },
    {
      img: Aurora2,
      name: "Gudernes Gave",
      number: "002",
      checked: auroraIsChecked,
    },
    {
      img: Aurora3,
      name: "Nordlysets Dansk over Himlen",
      number: "003",
      checked: auroraIsChecked,
    },
  ];

  let Lighthouse = [
    {
      img: Lighthouse1,
      name: "Giganten",
      number: "004",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse2,
      name: "En Tåget Nat",
      number: "005",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse3,
      name: "Farven i Horisonten",
      number: "006",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse4,
      name: "Fyrtårnets Kontrast",
      number: "007",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse5,
      name: "Fyrtårnets Lyse Nat",
      number: "008",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse6,
      name: "Fyrtårnets Strandede Skønhed",
      number: "009",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse7,
      name: "Fyrtårnets Vidunderlige Omgivelser",
      number: "010",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse8,
      name: "Himlens farvedans bag Fyrtårnet",
      number: "011",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse9,
      name: "Horisonten Der Gemmer",
      number: "012",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse10,
      name: "Hvad Der Ses I Lyset",
      number: "013",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse11,
      name: "Kraften af Ensomhed",
      number: "014",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse12,
      name: "Lavendel Paradis",
      number: "015",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse13,
      name: "Lysets Horisont",
      number: "016",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse14,
      name: "Månens Smil i Fyrtårnets Baggrund",
      number: "017",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse15,
      name: "Markens Skønne Baggrund",
      number: "018",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse16,
      name: "Med Skønheden I Fokus",
      number: "019",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse17,
      name: "Naturens Kaos i Fyrtårnets Baggrund",
      number: "020",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse18,
      name: "Solnedgangens Farver i Fyrtårnets Skygge",
      number: "021",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse19,
      name: "Strandet Fyrtårn nær Havet",
      number: "022",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse20,
      name: "Vinterens Milde Skønhed",
      number: "023",
      checked: lighthouseIsChecked,
    },
  ];

  let Port = [
    {
      img: Port1,
      name: "At Holde Ved",
      number: "024",
      checked: portIsChecked,
    },
    {
      img: Port2,
      name: "Den Lyse Nat",
      number: "025",
      checked: portIsChecked,
    },
    {
      img: Port3,
      name: "Det Strandede Paradis",
      number: "025",
      checked: portIsChecked,
    },
    {
      img: Port4,
      name: "Fortidens Fine Front",
      number: "026",
      checked: portIsChecked,
    },
    {
      img: Port5,
      name: "Havnen ved Lyby",
      number: "027",
      checked: portIsChecked,
    },
    {
      img: Port6,
      name: "Havnens Farvedans",
      number: "028",
      checked: portIsChecked,
    },
    {
      img: Port7,
      name: "Havnens Nærbillede",
      number: "029",
      checked: portIsChecked,
    },
    {
      img: Port8,
      name: "Kystens Vilde Liv",
      number: "030",
      checked: portIsChecked,
    },
    {
      img: Port9,
      name: "Lysets Kraft i Mørkets Skygge",
      number: "031",
      checked: portIsChecked,
    },
    {
      img: Port10,
      name: "Lysets Værdi",
      number: "032",
      checked: portIsChecked,
    },
    {
      img: Port11,
      name: "Nattens Lys Ved Havet",
      number: "033",
      checked: portIsChecked,
    },
    {
      img: Port12,
      name: "Selskabslivet På Vandet",
      number: "034",
      checked: portIsChecked,
    },
    {
      img: Port13,
      name: "Selskabslivet På Vandet 2",
      number: "035",
      checked: portIsChecked,
    },
  ];

  let Beach = [
    {
      img: Beach1,
      name: "Bænkens plads til Pause.jpg",
      number: "036",
      checked: beachIsChecked,
    },
    {
      img: Beach2,
      name: "Essensen af Refleksion",
      number: "037",
      checked: beachIsChecked,
    },
    {
      img: Beach3,
      name: "Havets Bølger ved vesterhavet",
      number: "038",
      checked: beachIsChecked,
    },
    {
      img: Beach4,
      name: "Himmels Lavendel Passion",
      number: "039",
      checked: beachIsChecked,
    },
    {
      img: Beach5,
      name: "Horisontens Evige Gang",
      number: "040",
      checked: beachIsChecked,
    },
    {
      img: Beach6,
      name: "Landets Hemmeligheder i selskab med Himlens Gave",
      number: "041",
      checked: beachIsChecked,
    },
    {
      img: Beach7,
      name: "Lavvandets Hemmeligheder",
      number: "042",
      checked: beachIsChecked,
    },
    {
      img: Beach8,
      name: "Lys i Mørket",
      number: "043",
      checked: beachIsChecked,
    },
    {
      img: Beach9,
      name: "Nattens Vidunder",
      number: "044",
      checked: beachIsChecked,
    },
    {
      img: Beach10,
      name: "Sivets Evige Udsigt",
      number: "045",
      checked: beachIsChecked,
    },
    {
      img: Beach11,
      name: "Skønhed fra Himlens Perspektiv",
      number: "046",
      checked: beachIsChecked,
    },
    {
      img: Beach12,
      name: "Storkens Stille Sind",
      number: "047",
      checked: beachIsChecked,
    },
    {
      img: Beach13,
      name: "Vindens dans",
      number: "048",
      checked: beachIsChecked,
    },
  ];

  let Ship = [
    {
      img: Ship1,
      name: "Aftensolen over Vesterhavets Sømænd",
      number: "049",
      checked: shipIsChecked,
    },
    {
      img: Ship2,
      name: "FN437 - Strandens Stolthed",
      number: "050",
      checked: shipIsChecked,
    },
    {
      img: Ship3,
      name: "Havets Idyl",
      number: "051",
      checked: shipIsChecked,
    },
    {
      img: Ship4,
      name: "Rebet og Kæden - Skibets værdifulde redskaber",
      number: "052",
      checked: shipIsChecked,
    },
    {
      img: Ship5,
      name: "Vragets Skønhed",
      number: "053",
      checked: shipIsChecked,
    },
  ];

  let Animal = [
    {
      img: Animal1,
      name: "Barndommens Nysgerrighed",
      number: "054",
      checked: animalIsChecked,
    },
    {
      img: Animal2,
      name: "Gæsling i Vandets Overflade",
      number: "055",
      checked: animalIsChecked,
    },
    {
      img: Animal3,
      name: "I Skovens Dybe Ro",
      number: "056",
      checked: animalIsChecked,
    },
    {
      img: Animal4,
      name: "Måge ved Solnedgang",
      number: "057",
      checked: animalIsChecked,
    },
    {
      img: Animal5,
      name: "Muslingejagt i Solens Varme",
      number: "058",
      checked: animalIsChecked,
    },
    {
      img: Animal6,
      name: "Nysgerrighed",
      number: "059",
      checked: animalIsChecked,
    },
    {
      img: Animal7,
      name: "Ræveunge i Græssets Skjul",
      number: "060",
      checked: animalIsChecked,
    },
    {
      img: Animal8,
      name: "Ræveungende",
      number: "061",
      checked: animalIsChecked,
    },
    {
      img: Animal9,
      name: "Ungdommens Energi",
      number: "062",
      checked: animalIsChecked,
    },
    {
      img: Animal10,
      name: "Vingernes Vilde Liv",
      number: "063",
      checked: animalIsChecked,
    },
  ];

  let Drawing = [
    {
      img: Drawing1,
      name: "Havnens blide Liv",
      number: "064",
      checked: drawingIsChecked,
    },
    {
      img: Drawing2,
      name: "Havnens Harmoni",
      number: "065",
      checked: drawingIsChecked,
    },
    {
      img: Drawing3,
      name: "Landsbyens Liv",
      number: "066",
      checked: drawingIsChecked,
    },
    {
      img: Drawing4,
      name: "Rustikkens Værdi",
      number: "067",
      checked: drawingIsChecked,
    },
    {
      img: Drawing5,
      name: "Toppens Nærbillede",
      number: "068",
      checked: drawingIsChecked,
    },
    {
      img: Drawing6,
      name: "Vandets Spejlbillede i Søens Strøm",
      number: "069",
      checked: drawingIsChecked,
    },
  ];

  let Stuff = [
    {
      img: Stuff1,
      name: "Aftenroens Stilhed",
      number: "070",
      checked: stuffIsChecked,
    },
    {
      img: Stuff2,
      name: "Balancens Perfektion",
      number: "071",
      checked: stuffIsChecked,
    },
    {
      img: Stuff3,
      name: "Bølgernes Mørke Passion",
      number: "072",
      checked: stuffIsChecked,
    },
    {
      img: Stuff4,
      name: "Havets Vilde Sind",
      number: "073",
      checked: stuffIsChecked,
    },
    {
      img: Stuff5,
      name: "Himlens Gave",
      number: "074",
      checked: stuffIsChecked,
    },
    {
      img: Stuff6,
      name: "I Bølgernes Kaos",
      number: "075",
      checked: stuffIsChecked,
    },
    {
      img: Stuff7,
      name: "Naturens Gave",
      number: "076",
      checked: stuffIsChecked,
    },
    {
      img: Stuff8,
      name: "Sten Vandfald ved Flønder Sø",
      number: "077",
      checked: stuffIsChecked,
    },
  ];

  const ImgLoop = (props) => {
    return props.List.map(({ img, name, number, checked }) => (
      <figure id={checked ? "ShowSpam" : "HideSpam"} key={img}>
        <img src={img} alt={name} loading="lazy" />
        <figcaption>
          <h5>{name}</h5>
          <p>{`Nr. ${number}`}</p>
        </figcaption>
      </figure>
    ));
  };

  return (
    <section id="Galleri">
      <h2>Galleri</h2>
      <div>
        <label className="form-control">
          <input
            type="checkbox"
            checked={auroraIsChecked}
            onChange={handleAuroraChange}
          />
          Nordlys
        </label>
        <label className="form-control">
          <input
            type="checkbox"
            checked={lighthouseIsChecked}
            onChange={handleLighthouseChange}
          />
          Fyrtårn
        </label>
        <label className="form-control">
          <input
            type="checkbox"
            checked={portIsChecked}
            onChange={handlePortChange}
          />
          Havn
        </label>
        <label className="form-control">
          <input
            type="checkbox"
            checked={beachIsChecked}
            onChange={handleBeachChange}
          />
          Strand
        </label>
        <label className="form-control">
          <input
            type="checkbox"
            checked={shipIsChecked}
            onChange={handleShipChange}
          />
          Skib
        </label>
        <label className="form-control">
          <input
            type="checkbox"
            checked={animalIsChecked}
            onChange={handleAnimalChange}
          />
          Dyr
        </label>
        <label className="form-control">
          <input
            type="checkbox"
            checked={drawingIsChecked}
            onChange={handleDrawingChange}
          />
          Tegninger
        </label>
        <label className="form-control">
          <input
            type="checkbox"
            checked={stuffIsChecked}
            onChange={handleStuffChange}
          />
          Diverse
        </label>
      </div>
      <section>
        <ImgLoop List={Aurora} />
        {auroraIsChecked ? <hr /> : null}
        <ImgLoop List={Lighthouse} />
        {lighthouseIsChecked ? <hr /> : null}
        <ImgLoop List={Port} />
        {portIsChecked ? <hr /> : null}
        <ImgLoop List={Beach} />
        {beachIsChecked ? <hr /> : null}
        <ImgLoop List={Ship} />
        {shipIsChecked ? <hr /> : null}
        <ImgLoop List={Animal} />
        {animalIsChecked ? <hr /> : null}
        <ImgLoop List={Drawing} />
        {drawingIsChecked ? <hr /> : null}
        <ImgLoop List={Stuff} />
      </section>
    </section>
  );
};
