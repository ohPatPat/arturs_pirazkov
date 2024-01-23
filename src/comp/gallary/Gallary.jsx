import "../../App.scss";
import React, { useState, useEffect } from "react";
import ImageZoom from "react-image-zooom";

import Aurora1 from "../../assets/img/aurora/Farvernes Kraft i Nattens Skær.webp";
import Little_Aurora1 from "../../assets/img/aurora/Little_Farvernes Kraft i Nattens Skær.webp";
import Aurora2 from "../../assets/img/aurora/Gudernes Gave.webp";
import Little_Aurora2 from "../../assets/img/aurora/Little_Gudernes Gave.webp";
import Aurora3 from "../../assets/img/aurora/Nordlysets Dansk over Himlen.webp";
import Little_Aurora3 from "../../assets/img/aurora/Little_Nordlysets Dansk over Himlen.webp";


import Lighthouse1 from "../../assets/img/lighthouse/Giganten.webp";
import Little_Lighthouse1 from "../../assets/img/lighthouse/Little_Giganten.webp";
import Lighthouse2 from "../../assets/img/lighthouse/En Tåget Nat.webp";
import Little_Lighthouse2 from "../../assets/img/lighthouse/Little_En Tåget Nat.webp";
import Lighthouse3 from "../../assets/img/lighthouse/Farven i Horisonten.webp";
import Little_Lighthouse3 from "../../assets/img/lighthouse/Little_Farven i Horisonten.webp";
import Lighthouse4 from "../../assets/img/lighthouse/Fyrtårnets Kontrast.webp";
import Little_Lighthouse4 from "../../assets/img/lighthouse/Little_Fyrtårnets Kontrast.webp";
import Lighthouse5 from "../../assets/img/lighthouse/Fyrtårnets Lyse Nat.webp";
import Little_Lighthouse5 from "../../assets/img/lighthouse/Little_Fyrtårnets Lyse Nat.webp";
import Lighthouse6 from "../../assets/img/lighthouse/Lighthouse6.webp";
import Little_Lighthouse6 from "../../assets/img/lighthouse/Little_Lighthouse6.webp";
import Lighthouse7 from "../../assets/img/lighthouse/Fyrtårnets Vidunderlige Omgivelser.webp";
import Little_Lighthouse7 from "../../assets/img/lighthouse/Little_Fyrtårnets Vidunderlige Omgivelser.webp";
import Lighthouse8 from "../../assets/img/lighthouse/Himlens farvedans bag Fyrtårnet.webp";
import Little_Lighthouse8 from "../../assets/img/lighthouse/Little_Himlens farvedans bag Fyrtårnet.webp";
import Lighthouse9 from "../../assets/img/lighthouse/Horisonten Der Gemmer.webp";
import Little_Lighthouse9 from "../../assets/img/lighthouse/Little_Horisonten Der Gemmer.webp";
import Lighthouse10 from "../../assets/img/lighthouse/Hvad Der Ses I Lyset.webp";
import Little_Lighthouse10 from "../../assets/img/lighthouse/Little_Hvad Der Ses I Lyset.webp";
import Lighthouse11 from "../../assets/img/lighthouse/Kraften af Ensomhed.webp";
import Little_Lighthouse11 from "../../assets/img/lighthouse/Little_Kraften af Ensomhed.webp";
import Lighthouse12 from "../../assets/img/lighthouse/Lavendel Paradis.webp";
import Little_Lighthouse12 from "../../assets/img/lighthouse/Little_Lavendel Paradis.webp";
import Lighthouse13 from "../../assets/img/lighthouse/Lysets Horisont.webp";
import Little_Lighthouse13 from "../../assets/img/lighthouse/Little_Lysets Horisont.webp";
import Lighthouse14 from "../../assets/img/lighthouse/Månens Smil i Fyrtårnets Baggrund.webp";
import Little_Lighthouse14 from "../../assets/img/lighthouse/Little_Månens Smil i Fyrtårnets Baggrund.webp";
import Lighthouse15 from "../../assets/img/lighthouse/Lighthouse15.webp";
import Little_Lighthouse15 from "../../assets/img/lighthouse/Little_Lighthouse15.webp";
import Lighthouse16 from "../../assets/img/lighthouse/Lighthouse16.webp";
import Little_Lighthouse16 from "../../assets/img/lighthouse/Little_Lighthouse16.webp";
import Lighthouse17 from "../../assets/img/lighthouse/Naturens Kaos i Fyrtårnets Baggrund.webp";
import Little_Lighthouse17 from "../../assets/img/lighthouse/Little_Naturens Kaos i Fyrtårnets Baggrund.webp";
import Lighthouse18 from "../../assets/img/lighthouse/Solnedgangens Farver i Fyrtårnets Skygge.webp";
import Little_Lighthouse18 from "../../assets/img/lighthouse/Little_Solnedgangens Farver i Fyrtårnets Skygge.webp";
import Lighthouse19 from "../../assets/img/lighthouse/Strandet Fyrtårn nær Havet.webp";
import Little_Lighthouse19 from "../../assets/img/lighthouse/Little_Strandet Fyrtårn nær Havet.webp";
import Lighthouse20 from "../../assets/img/lighthouse/Lighthouse20.webp";
import Little_Lighthouse20 from "../../assets/img/lighthouse/Little_Lighthouse20.webp";

import Port1 from "../../assets/img/port/At Holde Ved.webp";
import Little_Port1 from "../../assets/img/port/Little_At Holde Ved.webp";
import Port2 from "../../assets/img/port/Den Lyse Nat.webp";
import Little_Port2 from "../../assets/img/port/Little_Den Lyse Nat.webp";
import Port3 from "../../assets/img/port/Det Strandede Paradis.webp";
import Little_Port3 from "../../assets/img/port/Little_Det Strandede Paradis.webp";
import Port4 from "../../assets/img/port/Fortidens Fine Front.webp";
import Little_Port4 from "../../assets/img/port/Little_Fortidens Fine Front.webp";
import Port5 from "../../assets/img/port/Havnen ved Lyby.webp";
import Little_Port5 from "../../assets/img/port/Little_Havnen ved Lyby.webp";
import Port6 from "../../assets/img/port/Havnens Farvedans.webp";
import Little_Port6 from "../../assets/img/port/Little_Havnens Farvedans.webp";
import Port7 from "../../assets/img/port/Havnens Nærbillede.webp";
import Little_Port7 from "../../assets/img/port/Little_Havnens Nærbillede.webp";
import Port8 from "../../assets/img/port/Kystens Vilde Liv.webp";
import Little_Port8 from "../../assets/img/port/Little_Kystens Vilde Liv.webp";
import Port9 from "../../assets/img/port/Port9.webp";
import Little_Port9 from "../../assets/img/port/Little_Port9.webp";
import Port10 from "../../assets/img/port/Lysets Værdi.webp";
import Little_Port10 from "../../assets/img/port/Little_Lysets Værdi.webp";
import Port11 from "../../assets/img/port/Nattens Lys Ved Havet.webp";
import Little_Port11 from "../../assets/img/port/Little_Nattens Lys Ved Havet.webp";
import Port12 from "../../assets/img/port/Selskabslivet På Vandet.webp";
import Little_Port12 from "../../assets/img/port/Little_Selskabslivet På Vandet.webp";
import Port13 from "../../assets/img/port/Selskabslivet På Vandet 2.webp";
import Little_Port13 from "../../assets/img/port/Little_Selskabslivet På Vandet 2.webp";

import Beach1 from "../../assets/img/beach/Bænkens plads til Pause.webp";
import Little_Beach1 from "../../assets/img/beach/Little_Bænkens plads til Pause.webp";
import Beach2 from "../../assets/img/beach/Essensen af Refleksion.webp";
import Little_Beach2 from "../../assets/img/beach/Little_Essensen af Refleksion.webp";
import Beach3 from "../../assets/img/beach/Beach3.webp";
import Little_Beach3 from "../../assets/img/beach/Little_Beach3.webp";
import Beach4 from "../../assets/img/beach/Himmels Lavendel Passion.webp";
import Little_Beach4 from "../../assets/img/beach/Little_Himmels Lavendel Passion.webp";
import Beach5 from "../../assets/img/beach/Horisontens Evige Gang.webp";
import Little_Beach5 from "../../assets/img/beach/Little_Horisontens Evige Gang.webp";
import Beach6 from "../../assets/img/beach/Landets Hemmeligheder i selskab med Himlens Gave.webp";
import Little_Beach6 from "../../assets/img/beach/Little_Landets Hemmeligheder i selskab med Himlens Gave.webp";
import Beach7 from "../../assets/img/beach/Lavvandets Hemmeligheder.webp";
import Little_Beach7 from "../../assets/img/beach/Little_Lavvandets Hemmeligheder.webp";
import Beach8 from "../../assets/img/beach/Beach8.webp";
import Little_Beach8 from "../../assets/img/beach/Little_Beach8.webp";
import Beach9 from "../../assets/img/beach/Nattens Vidunder.webp";
import Little_Beach9 from "../../assets/img/beach/Little_Nattens Vidunder.webp";
import Beach10 from "../../assets/img/beach/Sivets Evige Udsigt.webp";
import Little_Beach10 from "../../assets/img/beach/Little_Sivets Evige Udsigt.webp";
import Beach11 from "../../assets/img/beach/Beach11.webp";
import Little_Beach11 from "../../assets/img/beach/Little_Beach11.webp";
import Beach12 from "../../assets/img/beach/Storkens Stille Sind.webp";
import Little_Beach12 from "../../assets/img/beach/Little_Storkens Stille Sind.webp";
import Beach13 from "../../assets/img/beach/Vindens dans.webp";
import Little_Beach13 from "../../assets/img/beach/Little_Vindens dans.webp";

import Ship1 from "../../assets/img/ship/Ship1.webp";
import Little_Ship1 from "../../assets/img/ship/Little_Ship1.webp";
import Ship2 from "../../assets/img/ship/FN437 - Strandens Stolthed.webp";
import Little_Ship2 from "../../assets/img/ship/Little_FN437 - Strandens Stolthed.webp";
import Ship3 from "../../assets/img/ship/Havets Idyl.webp";
import Little_Ship3 from "../../assets/img/ship/Little_Havets Idyl.webp";
import Ship4 from "../../assets/img/ship/Rebet og Kæden - Skibets værdifulde redskaber.webp";
import Little_Ship4 from "../../assets/img/ship/Little_Rebet og Kæden - Skibets værdifulde redskaber.webp";
import Ship5 from "../../assets/img/ship/Ship5.webp";
import Little_Ship5 from "../../assets/img/ship/Little_Ship5.webp";

import Animal1 from "../../assets/img/animal/Barndommens Nysgerrighed.webp";
import Little_Animal1 from "../../assets/img/animal/Little_Barndommens Nysgerrighed.webp";
import Animal2 from "../../assets/img/animal/Gæsling i Vandets Overflade.webp";
import Little_Animal2 from "../../assets/img/animal/Little_Gæsling i Vandets Overflade.webp";
import Animal3 from "../../assets/img/animal/I Skovens Dybe Ro.webp";
import Little_Animal3 from "../../assets/img/animal/Little_I Skovens Dybe Ro.webp";
import Animal4 from "../../assets/img/animal/Måge ved Solnedgang.webp";
import Little_Animal4 from "../../assets/img/animal/Little_Måge ved Solnedgang.webp";
import Animal5 from "../../assets/img/animal/Muslingejagt i Solens Varme.webp";
import Little_Animal5 from "../../assets/img/animal/Little_Muslingejagt i Solens Varme.webp";
import Animal6 from "../../assets/img/animal/Nysgerrighed.webp";
import Little_Animal6 from "../../assets/img/animal/Little_Nysgerrighed.webp";
import Animal8 from "../../assets/img/animal/Ræveungende.webp";
import Little_Animal8 from "../../assets/img/animal/Little_Ræveungende.webp";
import Animal9 from "../../assets/img/animal/Ungdommens Energi.webp";
import Little_Animal9 from "../../assets/img/animal/Little_Ungdommens Energi.webp";
import Animal10 from "../../assets/img/animal/Vingernes Vilde Liv.webp";
import Little_Animal10 from "../../assets/img/animal/Little_Vingernes Vilde Liv.webp";

import Drawing1 from "../../assets/img/drawing/Havnens blide Liv.webp";
import Little_Drawing1 from "../../assets/img/drawing/Little_Havnens blide Liv.webp";
import Drawing2 from "../../assets/img/drawing/Havnens Harmoni.webp";
import Little_Drawing2 from "../../assets/img/drawing/Little_Havnens Harmoni.webp";
import Drawing3 from "../../assets/img/drawing/Landsbyens Liv.webp";
import Little_Drawing3 from "../../assets/img/drawing/Little_Landsbyens Liv.webp";
import Drawing4 from "../../assets/img/drawing/Rustikkens Værdi.webp";
import Little_Drawing4 from "../../assets/img/drawing/Little_Rustikkens Værdi.webp";
import Drawing5 from "../../assets/img/drawing/Toppens Nærbillede.webp";
import Little_Drawing5 from "../../assets/img/drawing/Little_Toppens Nærbillede.webp";
import Drawing6 from "../../assets/img/drawing/Drawing6.webp";
import Little_Drawing6 from "../../assets/img/drawing/Little_Drawing6.webp";

import Stuff1 from "../../assets/img/stuff/Aftenroens Stilhed.webp";
import Little_Stuff1 from "../../assets/img/stuff/Little_Aftenroens Stilhed.webp";
import Stuff2 from "../../assets/img/stuff/Balancens Perfektion.webp";
import Little_Stuff2 from "../../assets/img/stuff/Little_Balancens Perfektion.webp";
import Stuff3 from "../../assets/img/stuff/Stuff3.webp";
import Little_Stuff3 from "../../assets/img/stuff/Little_Stuff3.webp";
import Stuff4 from "../../assets/img/stuff/Havets Vilde Sind.webp";
import Little_Stuff4 from "../../assets/img/stuff/Little_Havets Vilde Sind.webp";
import Stuff5 from "../../assets/img/stuff/Himlens Gave.webp";
import Little_Stuff5 from "../../assets/img/stuff/Little_Himlens Gave.webp";
import Stuff6 from "../../assets/img/stuff/Stuff6.webp";
import Little_Stuff6 from "../../assets/img/stuff/Little_Stuff6.webp";
import Stuff7 from "../../assets/img/stuff/Naturens Gave.webp";
import Little_Stuff7 from "../../assets/img/stuff/Little_Naturens Gave.webp";
import Stuff8 from "../../assets/img/stuff/Stuff8.webp";
import Little_Stuff8 from "../../assets/img/stuff/Little_Stuff8.webp";

export const Gallary = (props) => {
  const [auroraIsChecked, setAuroraChecked] = useState(true);
  const [lighthouseIsChecked, setLighthouseChecked] = useState(true);
  const [portIsChecked, setPortChecked] = useState(true);
  const [beachIsChecked, setBeachChecked] = useState(true);
  const [shipIsChecked, setShipChecked] = useState(true);
  const [animalIsChecked, setAnimalChecked] = useState(true);
  const [drawingIsChecked, setDrawingChecked] = useState(true);
  const [stuffIsChecked, setStuffChecked] = useState(true);

  const [imageSrc, setImageSrc] = useState("");
  const [isModalOpenW, setIsModalOpenW] = useState(false);
  const [isModalOpenH, setIsModalOpenH] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // function to handle click event and open the modal
  const handleClickH = (src) => {
    if (isLargeScreen) {
      setImageSrc(src);
      setIsModalOpenH(true);
      setPrevScrollPos(window.scrollY);
    }
  };

  const handleClickW = (src) => {
    if (isLargeScreen) {
      setImageSrc(src);
      setIsModalOpenW(true);
      setPrevScrollPos(window.scrollY);
    }
  };

  console.log(imageSrc);

  // function to close the modal
  const handleClose = () => {
    setImageSrc("");
    setIsModalOpenH(false);
    setIsModalOpenW(false);
  };

  useEffect(() => {
    if (isModalOpenW || isModalOpenH) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo(0, prevScrollPos);
    }
  }, [isModalOpenW, isModalOpenH, prevScrollPos]);

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
      imgLittle: Little_Aurora1,
      name: "Farvernes Kraft i Nattens Skær",
      topic: "Nordlys",
      checked: auroraIsChecked,
    },
    {
      img: Aurora2,
      imgLittle: Little_Aurora2,
      name: "Gudernes Gave",
      topic: "Nordlys",
      checked: auroraIsChecked,
    },
    {
      img: Aurora3,
      imgLittle: Little_Aurora3,
      name: "Nordlysets Dansk over Himlen",
      topic: "Nordlys",
      checked: auroraIsChecked,
    },
  ];

  let Lighthouse = [
    {
      img: Lighthouse1,
      imgLittle: Little_Lighthouse1,
      name: "Giganten",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse2,
      imgLittle: Little_Lighthouse2,
      name: "En Tåget Nat",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse3,
      imgLittle: Little_Lighthouse3,
      name: "Farven i Horisonten",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse4,
      imgLittle: Little_Lighthouse4,
      name: "Fyrtårnets Kontrast",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse5,
      imgLittle: Little_Lighthouse5,
      name: "Fyrtårnets Lyse Nat",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse6,
      imgLittle: Little_Lighthouse6,
      name: "Fyrtårnets Strandede Skønhed",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse7,
      imgLittle: Little_Lighthouse7,
      name: "Fyrtårnets Vidunderlige Omgivelser",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse8,
      imgLittle: Little_Lighthouse8,
      name: "Himlens farvedans bag Fyrtårnet",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse9,
      imgLittle: Little_Lighthouse9,
      name: "Horisonten Der Gemmer",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse10,
      imgLittle: Little_Lighthouse10,
      name: "Hvad Der Ses I Lyset",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse11,
      imgLittle: Little_Lighthouse11,
      name: "Kraften af Ensomhed",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse12,
      imgLittle: Little_Lighthouse12,
      name: "Lavendel Paradis",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse13,
      imgLittle: Little_Lighthouse13,
      name: "Lysets Horisont",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse14,
      imgLittle: Little_Lighthouse14,
      name: "Månens Smil i Fyrtårnets Baggrund",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse15,
      imgLittle: Little_Lighthouse15,
      name: "Markens Skønne Baggrund",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse16,
      imgLittle: Little_Lighthouse16,
      name: "Med Skønheden I Fokus",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse17,
      imgLittle: Little_Lighthouse17,
      name: "Naturens Kaos i Fyrtårnets Baggrund",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse18,
      imgLittle: Little_Lighthouse18,
      name: "Solnedgangens Farver i Fyrtårnets Skygge",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse19,
      imgLittle: Little_Lighthouse19,
      name: "Strandet Fyrtårn nær Havet",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse20,
      imgLittle: Little_Lighthouse20,
      name: "Vinterens Milde Skønhed",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
  ];

  let Port = [
    {
      img: Port1,
      imgLittle: Little_Port1,
      name: "At Holde Ved",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port2,
      imgLittle: Little_Port2,
      name: "Den Lyse Nat",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port3,
      imgLittle: Little_Port3,
      name: "Det Strandede Paradis",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port4,
      imgLittle: Little_Port4,
      name: "Fortidens Fine Front",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port5,
      imgLittle: Little_Port5,
      name: "Havnen ved Lyby",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port6,
      imgLittle: Little_Port6,
      name: "Havnens Farvedans",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port7,
      imgLittle: Little_Port7,
      name: "Havnens Nærbillede",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port8,
      imgLittle: Little_Port8,
      name: "Kystens Vilde Liv",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port9,
      imgLittle: Little_Port9,
      name: "Lysets Kraft i Mørkets Skygge",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port10,
      imgLittle: Little_Port10,
      name: "Lysets Værdi",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port11,
      imgLittle: Little_Port11,
      name: "Nattens Lys Ved Havet",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port12,
      imgLittle: Little_Port12,
      name: "Selskabslivet På Vandet",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port13,
      imgLittle: Little_Port13,
      name: "Selskabslivet På Vandet 2",
      topic: "Havn",
      checked: portIsChecked,
    },
  ];

  let Beach = [
    {
      img: Beach1,
      imgLittle: Little_Beach1,
      name: "Bænkens plads til Pause.webp",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach2,
      imgLittle: Little_Beach2,
      name: "Essensen af Refleksion",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach3,
      imgLittle: Little_Beach3,
      name: "Havets Bølger ved vesterhavet",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach4,
      imgLittle: Little_Beach4,
      name: "Himmels Lavendel Passion",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach5,
      imgLittle: Little_Beach5,
      name: "Horisontens Evige Gang",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach6,
      imgLittle: Little_Beach6,
      name: "Landets Hemmeligheder i selskab med Himlens Gave",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach7,
      imgLittle: Little_Beach7,
      name: "Lavvandets Hemmeligheder",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach8,
      imgLittle: Little_Beach8,
      name: "Lys i Mørket",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach9,
      imgLittle: Little_Beach9,
      name: "Nattens Vidunder",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach10,
      imgLittle: Little_Beach10,
      name: "Sivets Evige Udsigt",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach11,
      imgLittle: Little_Beach11,
      name: "Skønhed fra Himlens Perspektiv",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach12,
      imgLittle: Little_Beach12,
      name: "Storkens Stille Sind",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach13,
      imgLittle: Little_Beach13,
      name: "Vindens dans",
      topic: "Strand",
      checked: beachIsChecked,
    },
  ];

  let Ship = [
    {
      img: Ship1,
      imgLittle: Little_Ship1,
      name: "Aftensolen over Vesterhavets Sømænd",
      topic: "Strand",
      checked: shipIsChecked,
    },
    {
      img: Ship2,
      imgLittle: Little_Ship2,
      name: "FN437 - Strandens Stolthed",
      topic: "Strand",
      checked: shipIsChecked,
    },
    {
      img: Ship3,
      imgLittle: Little_Ship3,
      name: "Havets Idyl",
      topic: "Strand",
      checked: shipIsChecked,
    },
    {
      img: Ship4,
      imgLittle: Little_Ship4,
      name: "Rebet og Kæden - Skibets værdifulde redskaber",
      topic: "Strand",
      checked: shipIsChecked,
    },
    {
      img: Ship5,
      imgLittle: Little_Ship5,
      name: "Vragets Skønhed",
      topic: "Strand",
      checked: shipIsChecked,
    },
  ];

  let Animal = [
    {
      img: Animal1,
      imgLittle: Little_Animal1,
      name: "Barndommens Nysgerrighed",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal2,
      imgLittle: Little_Animal2,
      name: "Gæsling i Vandets Overflade",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal3,
      imgLittle: Little_Animal3,
      name: "I Skovens Dybe Ro",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal4,
      imgLittle: Little_Animal4,
      name: "Måge ved Solnedgang",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal5,
      imgLittle: Little_Animal5,
      name: "Muslingejagt i Solens Varme",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal6,
      imgLittle: Little_Animal6,
      name: "Nysgerrighed",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal8,
      imgLittle: Little_Animal8,
      name: "Ræveungende",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal9,
      imgLittle: Little_Animal9,
      name: "Ungdommens Energi",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal10,
      imgLittle: Little_Animal10,
      name: "Vingernes Vilde Liv",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
  ];

  let Drawing = [
    {
      img: Drawing1,
      imgLittle: Little_Drawing1,
      name: "Havnens blide Liv",
      topic: "Tegning",
      checked: drawingIsChecked,
    },
    {
      img: Drawing2,
      imgLittle: Little_Drawing2,
      name: "Havnens Harmoni",
      topic: "Tegning",
      checked: drawingIsChecked,
    },
    {
      img: Drawing3,
      imgLittle: Little_Drawing3,
      name: "Landsbyens Liv",
      topic: "Tegning",
      checked: drawingIsChecked,
    },
    {
      img: Drawing4,
      imgLittle: Little_Drawing4,
      name: "Rustikkens Værdi",
      topic: "Tegning",
      checked: drawingIsChecked,
    },
    {
      img: Drawing5,
      imgLittle: Little_Drawing5,
      name: "Toppens Nærbillede",
      topic: "Tegning",
      checked: drawingIsChecked,
    },
    {
      img: Drawing6,
      imgLittle: Little_Drawing6,
      name: "Vandets Spejlbillede i Søens Strøm",
      topic: "Tegning",
      checked: drawingIsChecked,
    },
  ];

  let Stuff = [
    {
      img: Stuff1,
      imgLittle: Little_Stuff1,
      name: "Aftenroens Stilhed",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
    {
      img: Stuff2,
      imgLittle: Little_Stuff2,
      name: "Balancens Perfektion",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
    {
      img: Stuff3,
      imgLittle: Little_Stuff3,
      name: "Bølgernes Mørke Passion",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
    {
      img: Stuff4,
      imgLittle: Little_Stuff4,
      name: "Havets Vilde Sind",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
    {
      img: Stuff5,
      imgLittle: Little_Stuff5,
      name: "Himlens Gave",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
    {
      img: Stuff6,
      imgLittle: Little_Stuff6,
      name: "I Bølgernes Kaos",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
    {
      img: Stuff7,
      imgLittle: Little_Stuff7,
      name: "Naturens Gave",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
    {
      img: Stuff8,
      imgLittle: Little_Stuff8,
      name: "Sten Vandfald ved Flønder Sø",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
  ];

  const ImgLoop = (props) => {
    return props.List.map(({ img, imgLittle, name, topic, checked }, index) => (
      <figure id={checked ? "ShowSpam" : "HideSpam"} key={img}>
        <img className="GallaryImg" src={imgLittle} alt={name} loading="lazy" onClick={() => handleClickH(img)}
/>
        <figcaption>
          <h5>{name}</h5>
          <p>{`${topic} - Nr. ${index + 1}`}</p>
        </figcaption>
      </figure>
    ));
  };

  return (
    <section id="Galleri">
      {isModalOpenW && (
        <section id="Modal">
          <ImageZoom
            className="HighlightImgW"
            zoomLensStyl="background-color: red;"
            width="auto"
            height=" 100%"
            src={imageSrc}
            alt={imageSrc}
            zoom="300"
          />

          <span className="close-button" onClick={handleClose}>
            <div className="in">
              <div className="close-button-block"></div>
              <div className="close-button-block"></div>
            </div>
            <div className="out">
              <div className="close-button-block"></div>
              <div className="close-button-block"></div>
            </div>
          </span>
        </section>
      )}
      {isModalOpenH && (
        <section id="Modal">
          <ImageZoom
            className="HighlightImgH"
            zoomLensStyl="background-color: red;"
            width="auto"
            height=" 100%"
            src={imageSrc}
            alt={imageSrc}
            zoom="300"
          />

          <span className="close-button" onClick={handleClose}>
            <div className="in">
              <div className="close-button-block"></div>
              <div className="close-button-block"></div>
            </div>
            <div className="out">
              <div className="close-button-block"></div>
              <div className="close-button-block"></div>
            </div>
          </span>
        </section>
      )}

      <h2>Galleri</h2>
      <div className="Div">
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
          Naturliv
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
