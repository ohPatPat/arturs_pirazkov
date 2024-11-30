import "../../App.scss";
import React, { useState, useEffect } from "react";
import ImageZoom from "react-image-zooom";

import Aurora1 from "../../assets/img/aurora/Farvernes Kraft i Nattens Skær.webp";
import Little_Aurora1 from "../../assets/img/aurora/Little_Farvernes Kraft i Nattens Skær.webp";
import Aurora2 from "../../assets/img/aurora/Gudernes Gave.webp";
import Little_Aurora2 from "../../assets/img/aurora/Little_Gudernes Gave.webp";
import Aurora3 from "../../assets/img/aurora/Nordlysets Dans over Himlen.webp";
import Little_Aurora3 from "../../assets/img/aurora/Little_Nordlysets Dans over Himlen.webp";
import Aurora4 from "../../assets/img/aurora/Nordlys over Kjul Strand.webp";
import Little_Aurora4 from "../../assets/img/aurora/Little_Nordlys over Kjul Strand.webp";
import Aurora5 from "../../assets/img/aurora/Nordlys over Kjul Strand 2.webp";
import Little_Aurora5 from "../../assets/img/aurora/Little_Nordlys over Kjul Strand 2.webp";
import Aurora6 from "../../assets/img/aurora/HIRTSHALS NORDLYS.webp";
import Little_Aurora6 from "../../assets/img/aurora/Little_HIRTSHALS NORDLYS.webp";
import Aurora7 from "../../assets/img/aurora/Magi på himlen.webp";
import Little_Aurora7 from "../../assets/img/aurora/Little_Magi på himlen.webp";
import Aurora8 from "../../assets/img/aurora/Nordlys Magi.webp";
import Little_Aurora8 from "../../assets/img/aurora/Little_Nordlys Magi.webp";
import Aurora9 from "../../assets/img/aurora/Nordlysets Spejling.webp";
import Little_Aurora9 from "../../assets/img/aurora/Little_Nordlysets Spejling.webp";
import Aurora10 from "../../assets/img/aurora/FARVEDE NAT.webp";
import Little_Aurora10 from "../../assets/img/aurora/Little_FARVEDE NAT.webp";
import Aurora11 from "../../assets/img/aurora/NORDLYS OVER NORDJYLLAND.webp";
import Little_Aurora11 from "../../assets/img/aurora/Little_NORDLYS OVER NORDJYLLAND.webp";

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
import Lighthouse21 from "../../assets/img/lighthouse/Fyret i Vinterland.webp";
import Little_Lighthouse21 from "../../assets/img/lighthouse/Little_Fyret i Vinterland.webp";
import Lighthouse22 from "../../assets/img/lighthouse/Fyret ved Klitterne.webp";
import Little_Lighthouse22 from "../../assets/img/lighthouse/Little_Fyret ved Klitterne.webp";
import Lighthouse23 from "../../assets/img/lighthouse/KOLD AFTEN.webp";
import Little_Lighthouse23 from "../../assets/img/lighthouse/Little_KOLD AFTEN.webp";
import Lighthouse24 from "../../assets/img/lighthouse/KOLD MORGEN.webp";
import Little_Lighthouse24 from "../../assets/img/lighthouse/Little_KOLD MORGEN.webp";
import Lighthouse25 from "../../assets/img/lighthouse/Nattens Månepragt.webp";
import Little_Lighthouse25 from "../../assets/img/lighthouse/Little_Nattens Månepragt.webp";
import Lighthouse26 from "../../assets/img/lighthouse/Solnedgang i Hirtshals.webp";
import Little_Lighthouse26 from "../../assets/img/lighthouse/Little_Solnedgang i Hirtshals.webp";
import Lighthouse27 from "../../assets/img/lighthouse/Solnedgangens Vagtpost.webp";
import Little_Lighthouse27 from "../../assets/img/lighthouse/Little_Solnedgangens Vagtpost.webp";
import Lighthouse28 from "../../assets/img/lighthouse/Strandens Fyrtårn.webp";
import Little_Lighthouse28 from "../../assets/img/lighthouse/Little_Strandens Fyrtårn.webp";
import Lighthouse29 from "../../assets/img/lighthouse/Utrolig Solnedgang ved Fyret.webp";
import Little_Lighthouse29 from "../../assets/img/lighthouse/Little_Utrolig Solnedgang ved Fyret.webp";
import Lighthouse30 from "../../assets/img/lighthouse/Fyrtårnets Skumringsglød.webp";
import Little_Lighthouse30 from "../../assets/img/lighthouse/Little_Fyrtårnets Skumringsglød.webp";
import Lighthouse31 from "../../assets/img/lighthouse/Dramatiske Skyer.webp";
import Little_Lighthouse31 from "../../assets/img/lighthouse/Little_Dramatiske Skyer.webp";
import Lighthouse32 from "../../assets/img/lighthouse/Fyrtårnets Aftensang.webp";
import Little_Lighthouse32 from "../../assets/img/lighthouse/Little_Fyrtårnets Aftensang.webp";
import Lighthouse33 from "../../assets/img/lighthouse/GÅ VED FYRET.webp";
import Little_Lighthouse33 from "../../assets/img/lighthouse/Little_GÅ VED FYRET.webp";
import Lighthouse34 from "../../assets/img/lighthouse/HIRTSHALS FYR SUMMER.webp";
import Little_Lighthouse34 from "../../assets/img/lighthouse/Little_HIRTSHALS FYR SUMMER.webp";
import Lighthouse35 from "../../assets/img/lighthouse/LØNSTRUP FYR -VINTER.webp";
import Little_Lighthouse35 from "../../assets/img/lighthouse/Little_LØNSTRUP FYR -VINTER.webp";
import Lighthouse36 from "../../assets/img/lighthouse/Himlens Glødende Slør.webp";
import Little_Lighthouse36 from "../../assets/img/lighthouse/Little_Himlens Glødende Slør.webp";
import Lighthouse37 from "../../assets/img/lighthouse/Vejviser i Vinden.webp";
import Little_Lighthouse37 from "../../assets/img/lighthouse/Little_Vejviser i Vinden.webp";
import Lighthouse38 from "../../assets/img/lighthouse/Fyrets Morgenvåge.webp";
import Little_Lighthouse38 from "../../assets/img/lighthouse/Little_Fyrets Morgenvåge.webp";
import Lighthouse39 from "../../assets/img/lighthouse/VINDUE I FYRET.webp";
import Little_Lighthouse39 from "../../assets/img/lighthouse/Little_VINDUE I FYRET.webp";
import Lighthouse40 from "../../assets/img/lighthouse/VINTER I LØNSTRUP.webp";
import Little_Lighthouse40 from "../../assets/img/lighthouse/Little_VINTER I LØNSTRUP.webp";

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
import Port14 from "../../assets/img/port/Aftenens Stilhed i Kystbyen.webp";
import Little_Port14 from "../../assets/img/port/Little_Aftenens Stilhed i Kystbyen.webp";
import Port15 from "../../assets/img/port/Aftenhavnens Rolige Vand.webp";
import Little_Port15 from "../../assets/img/port/Little_Aftenhavnens Rolige Vand.webp";
import Port16 from "../../assets/img/port/Gyldne Time.webp";
import Little_Port16 from "../../assets/img/port/Little_Gyldne Time.webp";
import Port17 from "../../assets/img/port/GRÅ DAG.webp";
import Little_Port17 from "../../assets/img/port/Little_GRÅ DAG.webp";

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
import Beach14 from "../../assets/img/beach/Dagens Sidste Lys.webp";
import Little_Beach14 from "../../assets/img/beach/Little_Dagens Sidste Lys.webp";
import Beach15 from "../../assets/img/beach/SKAGEN STRAND I NAT.webp";
import Little_Beach15 from "../../assets/img/beach/Little_SKAGEN STRAND I NAT.webp";
import Beach16 from "../../assets/img/beach/EN DAG VED FYRET.webp";
import Little_Beach16 from "../../assets/img/beach/Little_EN DAG VED FYRET.webp";

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
import Ship6 from "../../assets/img/ship/HM84.webp";
import Little_Ship6 from "../../assets/img/ship/Little_HM84.webp";
import Ship7 from "../../assets/img/ship/Ship7.webp";
import Little_Ship7 from "../../assets/img/ship/Little_Ship7.webp";
import Ship8 from "../../assets/img/ship/Skibflåden.webp";
import Little_Ship8 from "../../assets/img/ship/Little_Skibflåden.webp";
import Ship9 from "../../assets/img/ship/VEJEN TIL NORGE.webp";
import Little_Ship9 from "../../assets/img/ship/Little_VEJEN TIL NORGE.webp";
import Ship10 from "../../assets/img/ship/Stille Hjemkomst.webp";
import Little_Ship10 from "../../assets/img/ship/Little_Stille Hjemkomst.webp";
import Ship11 from "../../assets/img/ship/MÆLKEVÆGEN OVER BÅDEN.webp";
import Little_Ship11 from "../../assets/img/ship/Little_MÆLKEVÆGEN OVER BÅDEN.webp";
import Ship12 from "../../assets/img/ship/MAGI.webp";
import Little_Ship12 from "../../assets/img/ship/Little_MAGI.webp";
import Ship13 from "../../assets/img/ship/Nordlysets Kyst.webp";
import Little_Ship13 from "../../assets/img/ship/Little_Nordlysets Kyst.webp";

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
import Animal11 from "../../assets/img/animal/Aftenmarkens Heste.webp";
import Little_Animal11 from "../../assets/img/animal/Little_Aftenmarkens Heste.webp";
import Animal12 from "../../assets/img/animal/Fenrir Ræven.webp";
import Little_Animal12 from "../../assets/img/animal/Little_Fenrir Ræven.webp";
import Animal13 from "../../assets/img/animal/Gæsling i Vandets Overflade 2.webp";
import Little_Animal13 from "../../assets/img/animal/Little_Gæsling i Vandets Overflade 2.webp";
import Animal14 from "../../assets/img/animal/LILLE NINJA.webp";
import Little_Animal14 from "../../assets/img/animal/Little_LILLE NINJA.webp";
import Animal15 from "../../assets/img/animal/Tre Små Hjorte i Skumringen.webp";
import Little_Animal15 from "../../assets/img/animal/Little_Tre Små Hjorte i Skumringen.webp";
import Animal16 from "../../assets/img/animal/Svanernes Dans.webp";
import Little_Animal16 from "../../assets/img/animal/Little_Svanernes Dans.webp";
import Animal17 from "../../assets/img/animal/Skyggens Hjort.webp";
import Little_Animal17 from "../../assets/img/animal/Little_Skyggens Hjort.webp";
import Animal18 from "../../assets/img/animal/Skjult Ræv.webp";
import Little_Animal18 from "../../assets/img/animal/Little_Skjult Ræv.webp";
import Animal19 from "../../assets/img/animal/Ræveungen.webp";
import Little_Animal19 from "../../assets/img/animal/Little_Ræveungen.webp";
import Animal20 from "../../assets/img/animal/Rævens Silhouette.webp";
import Little_Animal20 from "../../assets/img/animal/Little_Rævens Silhouette.webp";
import Animal21 from "../../assets/img/animal/Animal21.webp";
import Little_Animal21 from "../../assets/img/animal/Little_Animal21.webp";
import Animal22 from "../../assets/img/animal/Nysgerrig Ræv.webp";
import Little_Animal22 from "../../assets/img/animal/Little_Nysgerrig Ræv.webp";

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
import Stuff9 from "../../assets/img/stuff/Havets Kræfter.webp";
import Little_Stuff9 from "../../assets/img/stuff/Little_Havets Kræfter.webp";
import Stuff10 from "../../assets/img/stuff/Stuff10.webp";
import Little_Stuff10 from "../../assets/img/stuff/Little_Stuff10.webp";
import Stuff11 from "../../assets/img/stuff/HAVSTEN.webp";
import Little_Stuff11 from "../../assets/img/stuff/Little_HAVSTEN.webp";
import Stuff12 from "../../assets/img/stuff/Havets Fangarme.webp";
import Little_Stuff12 from "../../assets/img/stuff/Little_Havets Fangarme.webp";
import Stuff13 from "../../assets/img/stuff/NAT I SKAGEN.webp";
import Little_Stuff13 from "../../assets/img/stuff/Little_NAT I SKAGEN.webp";
import Stuff14 from "../../assets/img/stuff/Kædens Greb.webp";
import Little_Stuff14 from "../../assets/img/stuff/Little_Kædens Greb.webp";

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
      name: "Nordlysets Dans over Himlen",
      topic: "Nordlys",
      checked: auroraIsChecked,
    },
    {
      img: Aurora4,
      imgLittle: Little_Aurora4,
      name: "Nordlys over Kjul Strand",
      topic: "Nordlys",
      checked: auroraIsChecked,
    },
    {
      img: Aurora5,
      imgLittle: Little_Aurora5,
      name: "Nordlys over Kjul Strand 2",
      topic: "Nordlys",
      checked: auroraIsChecked,
    },
    {
      img: Aurora6,
      imgLittle: Little_Aurora6,
      name: "HIRTSHALS NORDLYS",
      topic: "Nordlys",
      checked: auroraIsChecked,
    },
    {
      img: Aurora7,
      imgLittle: Little_Aurora7,
      name: "Magi på himlen",
      topic: "Nordlys",
      checked: auroraIsChecked,
    },
    {
      img: Aurora8,
      imgLittle: Little_Aurora8,
      name: "Nordlys Magi",
      topic: "Nordlys",
      checked: auroraIsChecked,
    },
    {
      img: Aurora9,
      imgLittle: Little_Aurora9,
      name: "Nordlysets Spejling",
      topic: "Nordlys",
      checked: auroraIsChecked,
    },
    {
      img: Aurora10,
      imgLittle: Little_Aurora10,
      name: "FARVEDE NAT",
      topic: "Nordlys",
      checked: auroraIsChecked,
    },
    {
      img: Aurora11,
      imgLittle: Little_Aurora11,
      name: "NORDLYS OVER NORDJYLLAND",
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
    {
      img: Lighthouse21,
      imgLittle: Little_Lighthouse21,
      name: "Fyret i Vinterland",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse22,
      imgLittle: Little_Lighthouse22,
      name: "Fyret ved Klitterne",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse23,
      imgLittle: Little_Lighthouse23,
      name: "KOLD AFTEN",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse24,
      imgLittle: Little_Lighthouse24,
      name: "KOLD MORGEN",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse25,
      imgLittle: Little_Lighthouse25,
      name: "Nattens Månepragt",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse26,
      imgLittle: Little_Lighthouse26,
      name: "Solnedgang i Hirtshals",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse27,
      imgLittle: Little_Lighthouse27,
      name: "Solnedgangens Vagtpost",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse28,
      imgLittle: Little_Lighthouse28,
      name: "Strandens Fyrtårn",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse29,
      imgLittle: Little_Lighthouse29,
      name: "Utrolig Solnedgang ved Fyret",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse30,
      imgLittle: Little_Lighthouse30,
      name: "Dramatiske Skyer",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse31,
      imgLittle: Little_Lighthouse31,
      name: "Fyrtårnets Aftensang",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse32,
      imgLittle: Little_Lighthouse32,
      name: "FYRTÅRSREFLEKTIONER",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse33,
      imgLittle: Little_Lighthouse33,
      name: "GÅ VED FYRET",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse34,
      imgLittle: Little_Lighthouse34,
      name: "HIRTSHALS FYR SUMMER",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse35,
      imgLittle: Little_Lighthouse35,
      name: "LØNSTRUP FYR -VINTER",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse36,
      imgLittle: Little_Lighthouse36,
      name: "Himlens Glødende Slør",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse37,
      imgLittle: Little_Lighthouse37,
      name: "Vejviser i Vinden",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse38,
      imgLittle: Little_Lighthouse38,
      name: "Fyrets Morgenvåge",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse39,
      imgLittle: Little_Lighthouse39,
      name: "VINDUE I FYRET",
      topic: "Fyrtårn",
      checked: lighthouseIsChecked,
    },
    {
      img: Lighthouse40,
      imgLittle: Little_Lighthouse40,
      name: "VINTER I LØNSTRUP",
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
    {
      img: Port14,
      imgLittle: Little_Port14,
      name: "Aftenens Stilhed i Kystbyen",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port15,
      imgLittle: Little_Port15,
      name: "Aftenhavnens Rolige Vand",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port16,
      imgLittle: Little_Port16,
      name: "Gyldne Time",
      topic: "Havn",
      checked: portIsChecked,
    },
    {
      img: Port17,
      imgLittle: Little_Port17,
      name: "GRÅ DAG",
      topic: "Havn",
      checked: portIsChecked,
    },

  ];

  let Beach = [
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
    {
      img: Beach14,
      imgLittle: Little_Beach14,
      name: "Dagens Sidste Lys",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach15,
      imgLittle: Little_Beach15,
      name: "SKAGEN STRAND I NAT",
      topic: "Strand",
      checked: beachIsChecked,
    },
    {
      img: Beach16,
      imgLittle: Little_Beach16,
      name: "EN DAG VED FYRET",
      topic: "Strand",
      checked: beachIsChecked,
    },
  ];

  let Ship = [
    {
      img: Ship1,
      imgLittle: Little_Ship1,
      name: "Aftensolen over Vesterhavets Sømænd",
      topic: "Skib",
      checked: shipIsChecked,
    },
    {
      img: Ship2,
      imgLittle: Little_Ship2,
      name: "FN437 - Strandens Stolthed",
      topic: "Skib",
      checked: shipIsChecked,
    },
    {
      img: Ship3,
      imgLittle: Little_Ship3,
      name: "Havets Idyl",
      topic: "Skib",
      checked: shipIsChecked,
    },
    {
      img: Ship4,
      imgLittle: Little_Ship4,
      name: "Rebet og Kæden - Skibets værdifulde redskaber",
      topic: "Skib",
      checked: shipIsChecked,
    },
    {
      img: Ship5,
      imgLittle: Little_Ship5,
      name: "Vragets Skønhed",
      topic: "Skib",
      checked: shipIsChecked,
    },
    {
      img: Ship6,
      imgLittle: Little_Ship6,
      name: "HM84",
      topic: "Skib",
      checked: shipIsChecked,
    },
    {
      img: Ship7,
      imgLittle: Little_Ship7,
      name: "Rød Havnleg",
      topic: "Skib",
      checked: shipIsChecked,
    },
    {
      img: Ship8,
      imgLittle: Little_Ship8,
      name: "Skibflåden",
      topic: "Skib",
      checked: shipIsChecked,
    },
    {
      img: Ship9,
      imgLittle: Little_Ship9,
      name: "VEJEN TIL NORGE",
      topic: "Skib",
      checked: shipIsChecked,
    },
    {
      img: Ship10,
      imgLittle: Little_Ship10,
      name: "Stille Hjemkomst",
      topic: "Skib",
      checked: shipIsChecked,
    },
    {
      img: Ship11,
      imgLittle: Little_Ship11,
      name: "MÆLKEVÆGEN OVER BÅDEN",
      topic: "Skib",
      checked: shipIsChecked,
    },
    {
      img: Ship12,
      imgLittle: Little_Ship12,
      name: "MAGI",
      topic: "Skib",
      checked: shipIsChecked,
    },
    {
      img: Ship13,
      imgLittle: Little_Ship13,
      name: "Nordlysets Kyst",
      topic: "Skib",
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
    {
      img: Animal11,
      imgLittle: Little_Animal11,
      name: "Aftenmarkens Heste",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal12,
      imgLittle: Little_Animal12,
      name: "Fenrir Ræven",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal13,
      imgLittle: Little_Animal13,
      name: "Gæsling i Vandets Overflade 2",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal14,
      imgLittle: Little_Animal14,
      name: "LILLE NINJA",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal15,
      imgLittle: Little_Animal15,
      name: "Tre Små Hjorte i Skumringen",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal16,
      imgLittle: Little_Animal16,
      name: "Svanernes Dans",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal17,
      imgLittle: Little_Animal17,
      name: "Skyggens Hjort",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal18,
      imgLittle: Little_Animal18,
      name: "Skjult Ræv",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal19,
      imgLittle: Little_Animal19,
      name: "Ræveungen",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal20,
      imgLittle: Little_Animal20,
      name: "Rævens Silhouette",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal21,
      imgLittle: Little_Animal21,
      name: "Rævens Drøm",
      topic: "Naturliv",
      checked: animalIsChecked,
    },
    {
      img: Animal22,
      imgLittle: Little_Animal22,
      name: "Nysgerrig Ræv",
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
    {
      img: Stuff9,
      imgLittle: Little_Stuff9,
      name: "Havets Kræfter",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
    {
      img: Stuff10,
      imgLittle: Little_Stuff10,
      name: "Norges Skønhed",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
    {
      img: Stuff11,
      imgLittle: Little_Stuff11,
      name: "HAVSTEN",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
    {
      img: Stuff12,
      imgLittle: Little_Stuff12,
      name: "Havets Fangarme",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
    {
      img: Stuff13,
      imgLittle: Little_Stuff13,
      name: "NAT I SKAGEN",
      topic: "Diverse",
      checked: stuffIsChecked,
    },
    {
      img: Stuff14,
      imgLittle: Little_Stuff14,
      name: "Kædens Greb",
      topic: "Diverse",
      checked: stuffIsChecked,
    },

  ];

  const ImgLoop = (props) => {
    return props.List.map(({ img, imgLittle, name, topic, checked }, index) => (
      <figure id={checked ? "ShowSpam" : "HideSpam"} key={img}>
        <img
          className="GallaryImg"
          src={imgLittle}
          alt={name}
          loading="lazy"
          onClick={() => handleClickH(img)}
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
