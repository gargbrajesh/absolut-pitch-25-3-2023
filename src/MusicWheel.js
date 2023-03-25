import { Grid, Paper, Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import useStyles from "../utils/styles.module";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./style.module.css";
import Image from "next/image";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import letter from "../public/assets/images/Ab letter.jpg";
import staff from "../public/assets/images/E staff.jpg";
import keys from "../public/assets/images/C Keys.jpg";
import playBtn from "../public/assets/images/playerButton.jpg";
import Duration from "../public/assets/images/Duration.png";
import Mix from "../public/assets/images/Mix.png";
import Mix1 from "../public/assets/images/Mix 1st.png";
import Mix2 from "../public/assets/images/Mix 2nd.png";
import Mix3 from "../public/assets/images/Mix 3rd.png";
import Tempo from "../public/assets/images/Tempo.png";
import Tempo1 from "../public/assets/images/Tempo 1st.png";
import Tempo2 from "../public/assets/images/Tempo 2nd.png";
import Tempo3 from "../public/assets/images/Tempo 3rd.png";
import Tempo4 from "../public/assets/images/Tempo 4th.png";
import Intencity from "../public/assets/images/Intencity.png";
import Intencity2 from "../public/assets/images/Intencity1st.png";
import Intencity3 from "../public/assets/images/Intencity2nd.png";
import Intencity4 from "../public/assets/images/Intencity3rd.png";
import DurationDefault from "../public/assets/images/Duration.png";
import Duration1 from "../public/assets/images/GroupDuration1.png";
import Duration2 from "../public/assets/images/GroupDuration2.png";
import Duration3 from "../public/assets/images/GroupDuration3.png";
import DataTable from "react-data-table-component";
import nl2br from "react-nl2br";
import LabelIcon from "@mui/icons-material/Label";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./style.module.css";

const customStyles = {
  rows: {
    style: {
      minHeight: "35px", // override the row height
    },
  },

  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      background: "#272d30",
      color: "#fff",
      fontSize: "14px",
      height: "35px",
      textAlign: "center",
    },
  },
  when: (row) => row.includes(p.mp4),
  style: {
    backgroundColor: "green",
    color: "white",
    "&:hover": {
      cursor: "pointer",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      textAlign: "center",
    },
  },
};

const conditionalRowStyles = [
  {
    when: (row) => row.song_name.includes("_P."),
    style: {
      backgroundColor: "gray",
      color: "black",
      "&$hover:hover": {
        backgroundColor: "green !important",
        cursor: "pointer",
      },
    },
  },
  // You can also pass a callback to style for additional customization
];
function MusicWheel(props) {
  const classes = useStyles();
  var totalduraion = 0;

  const [nord, setNord] = useState({ c1: [], c2: [], c3: [] });
  const [highlightedNord, setHighlightedNord] = useState({
    c1: [],
    c2: [],
    c3: [],
  });
  const [songsData, setSongsData] = useState([]);
  const [nordData, setNordData] = useState([]);
  const [tempoIndex, setTempoIndex] = useState(0);
  const [intensityIndex, setIntensityIndex] = useState(0);
  const [packageDataIndex, setPackageDataIndex] = useState(1);
  const [imageTypeIndex, setImageTypeIndex] = useState("");
  const [groups, setGroups] = useState("");
  const [packageActive, setPackageActive] = useState("F");
  // const [imageTypeActive, setImageTypeActive] = useState(1);
  const [imageTypeActive, setImageTypeActive] = useState(false);
  const [durationDataIndex, setDurationDataIndex] = useState(0);
  const [durationValue, setDurationValue] = useState("");
  const [disable, setDisable] = useState(false);
  const [freeActive, setFreeActive] = useState(false);
  const [disableIntensity, setDisableIntensity] = useState(false);
  const [totalSongs, setTotalSongs] = useState(0);
  const [subscriptionActivePlan, setSubscriptionActivePlan] = useState(0);
  const [deg, setDeg] = useState(45);
  const [nordIndex111, setNordIndex111] = useState(0);
  const [allPlaySongsDuration, setAllPlaySongsDuration] = useState(0);
  const tempoData = ["", "Calm", "Mellow", "Moderate", "Lively"];
  const intensityData = ["", "LI", "MI", "HI"];
  const packageData = ["", "F", "P", "P", "F"];
  const packageName = ["", "Mix", "Premium", "Original"];
  const imageTypeData = ["", "Keys", "Letter", "Staff"];
  const durationData = {
    minute1: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
    ],

    minute2: [
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      235,
      236,
      237,
      238,
      239,
      240,
    ],
    minute3: [
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250,
      251,
      252,
      253,
      254,
      255,
      256,
      257,
      258,
      259,
      260,
      261,
      262,
      263,
      264,
      265,
      266,
      267,
      268,
      269,
      270,
      271,
      272,
      273,
      274,
      275,
      276,
      277,
      278,
      279,
      280,
      281,
      282,
      283,
      284,
      285,
      286,
      287,
      288,
      289,
      290,
      291,
      292,
      293,
      294,
      295,
      296,
      297,
      298,
      299,
      300,
      301,
      302,
      303,
      304,
      305,
      306,
      307,
      308,
      309,
      310,
      311,
      312,
      313,
      314,
      315,
      316,
      317,
      318,
      319,
      320,
      321,
      322,
      323,
      324,
      325,
      326,
      327,
      328,
      329,
      330,
      331,
      332,
      333,
      334,
      335,
      336,
      337,
      338,
      339,
      340,
      341,
      342,
      343,
      344,
      345,
      346,
      347,
      348,
      349,
      350,
      351,
      352,
      353,
      354,
      355,
      356,
      357,
      358,
      359,
      360,
      361,
      362,
      363,
      364,
      365,
      366,
      367,
      368,
      369,
      370,
      371,
      372,
      373,
      374,
      375,
      376,
      377,
      378,
      379,
      380,
      381,
      382,
      383,
      384,
      385,
      386,
      387,
      388,
      389,
      390,
      391,
      392,
      393,
      394,
      395,
      396,
      397,
      398,
      399,
      400,
      401,
      402,
      403,
      404,
      405,
      406,
      407,
      408,
      409,
      410,
      411,
      412,
      413,
      414,
      415,
      416,
      417,
      418,
      419,
      420,
      421,
      422,
      423,
      424,
      425,
      426,
      427,
      428,
      429,
      430,
      431,
      432,
      433,
      434,
      435,
      436,
      437,
      438,
      439,
      440,
      441,
      442,
      443,
      444,
      445,
      446,
      447,
      448,
      449,
      450,
      451,
      452,
      453,
      454,
      455,
      456,
      457,
      458,
      459,
      460,
      461,
      462,
      463,
      464,
      465,
      466,
      467,
      468,
      469,
      470,
      471,
      472,
      473,
      474,
      475,
      476,
      477,
      478,
      479,
      480,
      481,
      482,
      483,
      484,
      485,
      486,
      487,
      488,
      489,
      490,
      491,
      492,
      493,
      494,
      495,
      496,
      497,
      498,
      499,
      500,
      501,
      502,
      503,
      504,
      505,
      506,
      507,
      508,
      509,
      510,
      511,
      512,
      513,
      514,
      515,
      516,
      517,
      518,
      519,
      520,
      521,
      522,
      523,
      524,
      525,
      526,
      527,
      528,
      529,
      530,
      531,
      532,
      533,
      534,
      535,
      536,
      537,
      538,
      539,
      540,
      541,
      542,
      543,
      544,
      545,
      546,
      547,
      548,
      549,
      550,
    ],
  };
  let nordArray = [];
  const arryOne = ["c3", "c2", "c1"];
  const data = {
    c1: ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+", "+"],
    c2: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    c3: ["Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"],
    c3String: [
      "C#\nDb",
      "D",
      "D#\nEb",
      "E",
      "F",
      "F#\nGb",
      "G",
      "G#\nAb",
      "A",
      "A#\nBb",
      "B",
      "C",
    ],
  };
  const customProps = { id: props.id };
  const nordMap = { "+": "M", "-": "m", "#": "b" };
  const soundData = [
    "https://mylatinhome.com/absolute/note-sound/A.wav",
    "https://mylatinhome.com/absolute/note-sound/Am.wav",
    "https://mylatinhome.com/absolute/note-sound/Ab.wav",
  ];

  const getClassNamesFor = (id) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === id ? sortConfig.direction : undefined;
  };

  const requestSort = (key) => {
    console.log("*** requestSort", key, sortConfig);
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // let lastInd = -1;
  // const columns = [
  //   {
  //     name: "Title",
  //     selector: (row) => row.song_title,
  //     sortable: true,
  //     keyField: true,
  //     striped: true,
  //     width: "180px",
  //   },
  //   { name: "Composer", selector: (row) => row.composer, sortable: true },
  //   {
  //     name: "Note",
  //     selector: (row) => row.note_or_cord,
  //     sortable: true,
  //     width: "70px",
  //   },
  //   {
  //     name: "Tempo",
  //     selector: (row) => row.tempo,
  //     sortable: true,
  //     width: "76px",
  //   },
  //   {
  //     name: "Intensity",
  //     selector: (row) => row.intensity,
  //     sortable: true,
  //     width: "90px",
  //   },
  // ];

  function changeHandler(c, ind, event) {
    // if (imageTypeIndex == "") {
    //   alert("Please seect any ImageType Key");
    // } else {
    const temp = { ...nord };
    const count = [...temp["c1"], ...temp["c2"], ...temp["c3"]]?.length || 0;
    if (["c1", "c2", "c3"].includes(c)) {
      if (temp[c].indexOf(ind) == -1 && count < 3) {
        if ((count >= 1 && ind == nordIndex111) || count < 1) {
          temp[c].push(ind);
          setNord(temp);
          if (c == "c1" || c == "c2") {
            var nordData2 = data["c3"][ind] + data[c][ind];
          } else {
            var nordData2 = data[c][ind];
          }
          setNordIndex111(ind);
          setNordData([...nordData, nordData2]);
        }
      } else if (temp[c].indexOf(ind) > -1) {
        const nordIndex = temp[c].indexOf(ind);
        temp[c].splice(nordIndex, 1);
        setNord(temp);

        if (c == "c1" || c == "c2") {
          var nordIndex1 = nordData.indexOf(data["c3"][ind] + data[c][ind]);
        } else {
          var nordIndex1 = nordData.indexOf(data[c][ind]);
        }
        nordData.splice(nordIndex1, 1);
        setNordData(nordData);
      }
      setPackageDataIndex(0);
      setTempoIndex(0);
      setDurationDataIndex(0);
      setIntensityIndex(0);
    }
    //}
  }
  function subscriptionPlan(type) {
    if (type == "Free") {
      setSubscriptionActivePlan(1);
      if (packageDataIndex == packageData.length - 1) {
        setPackageDataIndex(0);
      } else {
        setPackageDataIndex(packageDataIndex);
        setIntensityIndex(0);
        setFreeActive(true);
        setDisable(true);
        setImageTypeActive("");
        setDisableIntensity(true);
        setImageTypeIndex("");
        setPackageDataIndex("");
        setGroups("f1,f2");
        setNord({ c1: [], c2: [], c3: [] });
        setNordData([]);
      }
    }
    if (type == "Letter") {
      setSubscriptionActivePlan(2);
      setGroups("G1,G2,G3,G4");
      // setPackageDataIndex(0);
      setImageTypeActive(1);
      setPackageActive("");
      setImageTypeIndex("Letter");
      setDisable(true);
      setFreeActive(true);
      setDisableIntensity(false);
    }
    if (type == "Premium") {
      setSubscriptionActivePlan(3);
      if (packageDataIndex > 2) {
        setGroups("O1,O2,O3");
      } else {
        setGroups("G1,G2,G3,G4");
      }
      setDisableIntensity(false);
      setImageTypeActive(1);
      setImageTypeIndex("Letter");
      // setPackageDataIndex(1);
      setPackageActive("");
      setDisable(false);
      setFreeActive(false);
      // setImageTypeIndex("Letter,Staff,Keys");
    }
  }
  // function intensitySort(){
  //   setIntensityIndex(1+intensityIndex);

  //   if(intensityIndex == '1')
  //   {

  //     fetchSongsData()
  //   }
  //   setNord({ c1: [], c2: [], c3: [] });
  //   setNordData([]);
  // }

  async function btnHandler(type, e, ind) {
    // if (imageTypeIndex == "") {
    //      alert("Please seect any ImageType Key");
    //    } else {
    // setImageTypeActive(1);
    if (type == "Tempo") {
      if (tempoIndex == tempoData.length - 1) {
        setTempoIndex(0);
      } else {
        setTempoIndex(tempoIndex + 1);

        setNord({ c1: [], c2: [], c3: [] });
        setNordData([]);
      }
    }

    if (type == "Package") {
      if (packageDataIndex == packageData.length - 1) {
        setPackageDataIndex(0);
        // setPackageActive('');
      } else {
        setPackageDataIndex(packageDataIndex + 1);
        if (packageDataIndex == "1") {
          setImageTypeActive(1);
          setImageTypeIndex("Letter");
          setGroups("G1,G2,G3,G4");
          setSubscriptionActivePlan(2);
          setPackageActive("");
        }
        if (packageDataIndex == "2") {
          setGroups("o1,o2,o3");
          setSubscriptionActivePlan(3);
          setImageTypeActive(1);
          setImageTypeIndex("Letter");
        }
        if (packageDataIndex == "3") {
          setGroups("G1,G2,G3,G4,o1,o2,o3");
          setSubscriptionActivePlan(3);
          setImageTypeIndex("Letter");
          setImageTypeActive(1);
        }

        setNord({ c1: [], c2: [], c3: [] });
        setNordData([]);
      }
      if (packageDataIndex == "4") {
        setPackageActive("F");
        setPackageDataIndex(1);
      }
    }
    if (type == "Intensity") {
      if (intensityIndex == intensityData.length - 1) {
        setIntensityIndex(0);
      } else {
        setIntensityIndex(intensityIndex + 1);
        setNord({ c1: [], c2: [], c3: [] });
        setNordData([]);
      }
    }

    if (type == "Keys") {
      // alert("You need to purchase the membership");
      setImageTypeIndex(type);
      toggleActiveStyle(ind);
      // await fetchSongsData(type);
    }
    if (type == "Letter") {
      setImageTypeIndex(type);
      toggleActiveStyle(ind);
      // await fetchSongsData(type);
    }
    if (type == "Staff") {
      // alert("You need to purchase the membership");
      setImageTypeIndex(type);
      toggleActiveStyle(ind);
      // await fetchSongsData(type);
    }
    if (type == "Duration") {
      if (durationDataIndex == durationData.length - 1) {
        setDurationDataIndex(0);
        // setDurationValue(durationData["minute1"]);
      } else {
        setDurationDataIndex(durationDataIndex + 1);

        if (durationDataIndex == "0") {
          setDurationValue(durationData["minute1"]);
          console.log(durationValue, "durationValue");
        }

        if (durationDataIndex == "1") {
          setDurationValue(durationData["minute2"]);
          console.log(durationValue, "durationValue");
        }
        if (durationDataIndex == "2") {
          setDurationValue(durationData["minute3"]);
          console.log(durationValue, "durationValue");
        }
        if (durationDataIndex == "3") {
          setDurationDataIndex(0);
          setDurationValue("");
          console.log(durationValue, "durationValue");
        }

        setNord({ c1: [], c2: [], c3: [] });
        setNordData([]);
      }
    }
    //}
  }

  function toggleActiveStyle(ind) {
    if (ind == 1) {
      setImageTypeActive(ind);
    } else if (ind == 2) {
      setImageTypeActive(ind);
    } else if (ind == 3) {
      setImageTypeActive(ind);
    } else {
      setImageTypeActive(false);
    }
  }

  useEffect(() => {
    if (props.musicIndex >= 0) {
      highlightNord(props.musicData, props.musicIndex);
    }
  }, [props.musicIndex]);

  function handleClickSong(songsData, ind) {
    if (songsData.length > 0) {
      props.handleSong(songsData, ind);
    }
  }

  function secondsToHms(Seconds) {
    let d = Number(Seconds);
    console.log(Seconds, "...Secondss");
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var mDisplay = m > 0 ? m : "00";
    var sDisplay = s > 0 ? s : "00";
    let time = m + ":" + s;

    setAllPlaySongsDuration(time);
    // countdown(mDisplay, sDisplay);
  }

  // function countdown(minutes, seconds) {
  //   var mins = minutes;
  //   seconds++;
  //   function tick() {
  //     var counter = document.getElementById("duration");
  //     var current_minutes = mins;
  //     seconds--;
  //     counter.innerHTML =
  //       current_minutes.toString() +
  //       ":" +
  //       (seconds < 10 ? "0" : "") +
  //       String(seconds);

  //     if (seconds > 0) {
  //       let timeoutHandle = setTimeout(tick, 1000);
  //     } else {
  //       if (mins > 1) {
  //         setTimeout(function() {
  //           countdown(mins - 1, 59);
  //         }, 1000);
  //       }
  //     }
  //   }
  //   tick();
  // }

  function highlightNord(songsData, ind) {
    const current_song = songsData[ind];
    let selected_nord = current_song["note_or_cord"];
    const last_nord = selected_nord[selected_nord.length - 1];
    if (last_nord != "m" && last_nord != "M") {
      if (selected_nord.length > 1) {
        selected_nord = selected_nord.replace("b", "#");
      }
      const selecetd_index = data["c3"].indexOf(selected_nord);
      setHighlightedNord({ c1: [], c2: [], c3: [selecetd_index] });
    } else if (last_nord == "m") {
      selected_nord = selected_nord.slice(0, selected_nord.length - 1);
      if (selected_nord.length > 1) {
        selected_nord = selected_nord.replace("b", "#");
      }
      const selecetd_index = data["c3"].indexOf(selected_nord);
      setHighlightedNord({ c1: [], c2: [selecetd_index], c3: [] });
    } else if (last_nord == "M") {
      selected_nord = selected_nord.slice(0, selected_nord.length - 1);
      if (selected_nord.length > 1) {
        selected_nord = selected_nord.replace("b", "#");
      }
      const selecetd_index = data["c3"].indexOf(selected_nord);
      setHighlightedNord({ c1: [selecetd_index], c2: [], c3: [] });
    }
  }

  function getNord() {
    var str2 = nordData;
    let final_result = [];
    for (let i = 0; i < nordData.length; i++) {
      let str = nordData[i];

      for (let val of nordData[i]) {
        if (nordMap[val]) {
          str = nordData[i].replace(val, nordMap[val]);
          str2 += nordMap[val] + ",";
        }
      }
      final_result.push(str);
    }
    return final_result;
  }

  // function refreshPage() {
  //   window.location.reload(false);
  // }

  function ResetCounter() {
    // secondsToHms(totalduraion);
    props.setAllImageCount(0);
  }
  function rowClick() {
    let node = document.getElementsByTagName(DataTable);

    alert(node[5]);
  }
  function rotationBtn(id, e) {
    var rote = 100;

    let content = document.getElementById("TempoBtn");
    let btn = document.getElementById(id);
    // content.addEventListener('click',()=>{
    btn.style.transform = "rotate(" + deg + "deg)";
    setDeg(deg + 45);

    // })
  }
  function fetchSongsData() {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=ckmj4nc6enk1u3e0rle62m3l64");

    const nord_or_cord = getNord();
    console.log(nord_or_cord, "nord_or_cord.............");
    var urlencoded = new URLSearchParams();
    urlencoded.append("songs", "1");
    urlencoded.append("note_or_cord", nord_or_cord);
    urlencoded.append("song_title", "");
    urlencoded.append("groups", groups);
    urlencoded.append("no_of_images", "");
    urlencoded.append("duration", durationValue);
    urlencoded.append("intensity", intensityData[intensityIndex]);
    urlencoded.append("tempo", tempoData[tempoIndex]);
    urlencoded.append("image_type", imageTypeIndex);
    urlencoded.append("package", packageActive);
    console.log(packageActive, "packageActive....");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://mylatinhome.com/absolute/appdata/webservice.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.data, "responseJson.data...");
        setTotalSongs(responseJson.data.length);
        if (responseJson != "") {
          setSongsData(responseJson.data);
          console.log(songsData, "songdata.....");
          props.handleSong;
          for (let i = 0; i <= responseJson.data.length; i++) {
            // if (responseJson.data[i].song_name.includes("_P.")) {
            handleClickSong(responseJson.data, i);
            // setDuration(responseJson.data[i].duration);
            // break;
            //}
          }
        } else {
          alert("error in response");
        }
      });
  }
  totalduraion = Number(totalduraion) - Number(props.durationLast);

  setTimeout(() => {
    props.setTotalSeconds(totalduraion);
    secondsToHms(totalduraion);
  }, 1000);

  return (
    <div className={classes.circleCard}>
       {/* <div className={classes.resetBtn}>
        <Grid
          container
          spacing={1}
          style={{ marginTop: "5px", border: "none" }}
        >
          <Grid item xs={3} md={4}>
            <button
              className={`${
                subscriptionActivePlan == "1"
                  ? classes.activeKey
                  : classes.topButtons
              }`}
              // onClick={(e) => {
              //   alert("Free Clicked");
              // }}
              onClick={(e) => {
                subscriptionPlan("Free", e);
              }}
              style={{
                // background: "#fff",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              Free
            </button>
          </Grid>
          <Grid item xs={4} md={4}>
            <button
              className={`${
                subscriptionActivePlan == "2"
                  ? classes.activeKey
                  : classes.topButtons
              }`}
              onClick={(e) => {
                setPackageDataIndex(2);
                subscriptionPlan("Letter", e);
              }}
              style={{
                // background: "#fff",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              Basic
            </button>
          </Grid>
          <Grid item xs={4} md={4}>
            <button
              className={`${
                subscriptionActivePlan == "3"
                  ? classes.activeKey
                  : classes.topButtons
              }`}
              onClick={(e) => {
                setPackageDataIndex(2);
                subscriptionPlan("Premium", e);
              }}
              style={{
                // background: "#fff",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              Premium
            </button>
          </Grid>
        </Grid>
      </div>  */}
      <div className={classes.resetBtn}>
        <Grid
          container
          spacing={1}
          style={{ marginTop: "15px", border: "none" }}
        >
          <Grid item xs={3} md={4}>
            <button
              className={`${
                imageTypeActive == "1"
                  ? classes.activeKey
                  : disable
                  ? classes.topButtonsDisable
                  : classes.topButtons
              }`}
              onClick={(e) => {
                btnHandler("Letter", e, 1);
              }}
              style={{
                borderRadius: "5px",
                width: "90%",
                height: "100%",
                marginLeft: "10px",
              }}
            >
              <Image
                src={letter}
                alt="alt"
                height="400px"
                style={{ marginTop: "-2px" }}
              />
            </button>
          </Grid>
          <Grid item xs={4} md={4}>
            <button
              className={`${
                imageTypeActive == "2"
                  ? classes.activeKey
                  : disable
                  ? classes.topButtonsDisable
                  : classes.topButtons
              }`}
              onClick={(e) => {
                btnHandler("Staff", e, 2);
              }}
              style={{
                borderRadius: "5px",
                width: "90%",
                height: "100%",
                marginLeft: "10px",
              }}
              // disabled={`disable`}
            >
              <Image
                src={staff}
                alt="alt"
                height="400px"
                style={{ marginTop: "-2px" }}
              />
            </button>
          </Grid>
          <Grid item xs={4} md={4}>
            <button
              className={`${
                imageTypeActive == "3"
                  ? classes.activeKey
                  : disable
                  ? classes.topButtonsDisable
                  : classes.topButtons
                // imageTypeActive == "3" ? classes.activeKey : premiumfirst =='1' ? classes.premiumActive : classes.topButtons
              }`}
              onClick={(e) => {
                btnHandler("Keys", e, 3);
              }}
              style={{
                borderRadius: "5px",
                width: "90%",
                height: "100%",
                marginLeft: "10px",
              }}
              // disabled={`disable`}
            >
              <Image
                src={keys}
                alt="alt"
                height="400px"
                style={{ maxWidth: "100%" }}
              />
            </button>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: "2%",}}>
        <Grid container spacing={1}>
          <Grid item xs={2} md={2} className={classes.tempoBtnContainer}>
            <button
              className={`${classes.packageBtn} ${
                freeActive ? classes.disableBtn : ""
              }`}
              onClick={(e) => {
                btnHandler("Package", e);
              }}
            >
              {packageDataIndex == 1 ? (
                <Image src={Mix} alt="..." />
              ) : packageDataIndex == 2 ? (
                <Image src={Mix1} alt="..." />
              ) : packageDataIndex == 3 ? (
                <Image src={Mix2} alt="..." />
              ) : packageDataIndex == 4 ? (
                <Image src={Mix3} alt="..." />
              ) : (
                <Image src={Mix} alt="..." />
              )}
            </button>

            <button
              className={`${classes.durationBtn} ${
                durationDataIndex > 0 ? "" : ""
              }`}
              onClick={(e) => {
                btnHandler("Duration", e);
              }}
            >
              {durationDataIndex == 1 ? (
                <Image src={Duration1} alt="..." width="200px" height="230px" />
              ) : durationDataIndex == 2 ? (
                <Image src={Duration2} alt="..." width="200px" height="230px" />
              ) : durationDataIndex == 3 ? (
                <Image src={Duration3} alt="..." width="200px" height="230px" />
              ) : (
                <Image
                  src={DurationDefault}
                  alt="..."
                  width="230px"
                  height="260px"
                />
              )}{" "}

              </button>
          </Grid>
          <Grid item xs={8} md={8} className={classes.wheelContianer}>
            <div className={classes.mainCircle}>
              <ul className="circle">
                {data["c1"].map((val, ind) => (
                  <li key={classes.circle + "-" + ind} className={styles.li}>
                    <div
                      className={`${styles.text} ${
                        nord["c1"].includes(ind) ? styles.bluebg : ""
                      }  ${
                        highlightedNord["c1"].includes(ind)
                          ? styles.greenbg
                          : ""
                      }`}
                      onClick={(e) => changeHandler("c1", ind, e)}
                    >
                      {val}
                    </div>
                  </li>
                ))}

                <ul className="circle2">
                  {data["c2"].map((val, ind) => (
                    <li
                      key={classes.circle2 + "-" + ind}
                      className={styles.list}
                    >
                      <div
                        className={`${styles.textTwo} ${
                          nord["c2"].includes(ind) ? styles.bluebg : ""
                        } ${
                          highlightedNord["c2"].includes(ind)
                            ? styles.greenbg
                            : ""
                        }`}
                        onClick={(e) => changeHandler("c2", ind, e)}
                      >
                        {val} {nord["c2"].includes(val)}
                      </div>
                    </li>
                  ))}
                </ul>

                <ul className="circle3">
                  {data["c3"].map((val, ind) => (
                    <li
                      key={classes.circle3 + "-" + ind}
                      className={styles.list}
                    >
                      <div
                        className={`${styles.textThird} ${
                          nord["c3"].includes(ind) ? styles.bluebg : ""
                        } ${
                          highlightedNord["c3"].includes(ind)
                            ? styles.greenbg
                            : ""
                        }`}
                        onClick={(e) => changeHandler("c3", ind, e)}
                      >
                        {nl2br(data["c3String"][ind])}
                      </div>
                    </li>
                  ))}

                  <div className={classes.circle4}>
                    <Image
                      src={playBtn}
                      className={classes.playerBtn}
                      alt="alt"
                      onClick={(e) => {
                        fetchSongsData();
                      }}
                      style={{
                        width: "50% !important",
                        height: "50% !important",
                      }}
                    />
                  </div>
                </ul>
              </ul>
            </div>
          </Grid>

          <Grid item xs={2} md={2} className={classes.tempoBtnContainer}>
            <button
              id="TempoBtn"
              className={`${classes.tempoBtnNew} ${tempoIndex > 0 ? "" : ""}`}
              onClick={(e) => {
                btnHandler("Tempo", e);
              }}
            >
              {tempoIndex == 0 ? (
                <Image src={Tempo} alt="..." />
              ) : tempoIndex == 1 ? (
                <Image src={Tempo1} alt="..." />
              ) : tempoIndex == 2 ? (
                <Image src={Tempo2} alt="..." />
              ) : tempoIndex == 3 ? (
                <Image src={Tempo3} alt="..." />
              ) : tempoIndex == 4 ? (
                <Image src={Tempo4} alt="..." />
              ) : (
                <Image src={Tempo} alt="..." />
              )}
            </button>

            <button
              className={`${classes.IntensityBtnNew} ${
                disableIntensity ? classes.disableBtn : ""
              }`}
              onClick={(e) => {
                btnHandler("Intensity", e);
              }}
            >
              {intensityIndex == 0 ? (
                <Image src={Intencity} alt="..." />
              ) : intensityIndex == 1 ? (
                <Image src={Intencity2} alt="..." />
              ) : intensityIndex == 2 ? (
                <Image src={Intencity3} alt="..." />
              ) : intensityIndex == 3 ? (
                <Image src={Intencity4} alt="..." />
              ) : (
                <Image src={Intencity} alt="..." />
              )}
            </button>
          </Grid>
        </Grid>
        
        <div className={classes.resetBtn}>
        <Grid
          container
          spacing={1}
          style={{ marginTop: "15px", border: "none" }}
        >
          <Grid item xs={3} md={4}>
            <button
             
              style={{
                borderRadius: "5px",
                width: "90%",
                height: "80%",
                marginLeft: "10px",
                fontSize:'20px',
                background:'#fff',
              }}
            >
             {props.remainingTime
                  ? props.remainingTime
                  : allPlaySongsDuration}
                {songsData && songsData.length > 0
                  ? songsData.map((val, ind) =>
                      console.log(
                        (totalduraion =
                          parseInt(totalduraion) + parseInt(val["duration"]))
                      )
                    )
                  : ""}
            </button>
          </Grid>
          <Grid item xs={4} md={4}>
            <button
               style={{
                borderRadius: "5px",
                width: "90%",
                height: "80%",
                marginLeft: "10px",
                fontSize:'20px',
                background: "#E90D0D",
                    color: "#FFFFFF",
                    border: "none",
                    cursor: "pointer",
              }}
              onClick={() => {
                setPackageDataIndex(0);
                setIntensityIndex(0);
                setTempoIndex(0);
                setPackageDataIndex(1);
                setPackageActive("F");
                setDurationDataIndex(0);

                setDurationValue("");
                setDisable(false);
                setFreeActive(false);
                setDisableIntensity(false);
                setTotalSongs(0);
                setSubscriptionActivePlan(0);
                setNordIndex111(0);
                setAllPlaySongsDuration("00:00");
                setSongsData([""]);
                props.setPlaySongposition(0);
                setImageTypeActive(0);

                setNord({
                  c1: [""],
                  c2: [""],
                  c3: [""],
                });
                setHighlightedNord({
                  c1: [""],
                  c2: [""],
                  c3: [""],
                });
                highlightNord(songsData, ind);
                fetchSongsData();
              }}
             
              // disabled={`disable`}
            >
              Reset
            </button>
          </Grid>
          <Grid item xs={4} md={4}>
            <div
              
                style={{
                  borderRadius: "5px",
                  width: "90%",
                  height: "80%",
                  marginLeft: "15px",
                  fontSize:'20px',
                display:'flex',
               
              }}
              // disabled={`disable`}
            >
              <p
                  style={{
                    background: "#E90D0D",
                   margin:'0',
                   padding:'0',
                    borderRadius: "5px 0px 0px 5px",
                    width: "30%",
                    cursor: "pointer",
                    height: "100%",
                  }}
                  onClick={() => {
                    ResetCounter();
                  }}
                ></p>
                 <div
                style={{
                  background: "#fff",
                  borderRadius: "0px 5px 5px 0px",
                  width: "80%",
                 
                }}
              >
                <p
                  style={{
                    padding:'0',
                    marginTop:'8px',
                  
                    fontSize: "30px",
                   
                  }}
                >
                  {" "}
                  {props.allImageCount}
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      </div>

      <div className={classes.songScrolling}>
        <Grid
          container
          spacing={2}
          className={classes.bottomBoxContainer}
          style={{ padding: "0px" }}
        >
          <Grid item xs={2} md={1} style={{ padding: "-10px",margin:'-10px' }}>
            <p
              className={`${classes.bottomBox}`}
              style={{
                color: "#fff",
                width: "60px",
                background: "#333333",
                textAlign: "center",
                fontSize:'20px',
                marginLeft:'5px',
              }}
            >
              {props.playSongposition}/{totalSongs}
            </p>
          </Grid>
          <Grid item xs={10} md={11} style={{ padding: "0px",marginLeft:'10px' }}>
            <table className={classes.tableStyle} >
            <tr className={classes.trStyle}>
              <th className={classes.thStyles}>{props.songTitle}</th>
              <th className={classes.thStyles}>{props.songNote}</th>
              <th className={classes.thStyles}>{props.composer}</th>
              <th className={classes.thStyles}>{props.duration}</th>
              <th className={classes.thStyles}>{props.imageCount}</th>
             
            </tr>
            </table>
          </Grid>
        </Grid>
      </div>
      {/* <div style={{ marginBottom: "30px" }}>
      </div> */}
      <div className={styles.songsWrapper}>
        <Paper elevation={3} className={classes.paperStyle}>
          <table className={classes.tableStyle} id={props.id}>
            <tr className={classes.trStyle}>
              <th className={classes.thStyle}>Title</th>
              <th className={classes.thStyle}>Composer</th>
              <th className={classes.thStyle}>Note</th>
              <th className={classes.thStyle}>Tempo</th>
              <th
                className={classes.thStyle}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  btnHandler(type, e, ind);
                  fetchSongsData();
                }}
              >
                Intensity
              </th>
            </tr>
            {songsData && songsData.length > 0
              ? songsData.map((val, ind) => (
                  <tr
                    key={"songs" + ind}
                    onClick={() => handleClickSong(songsData, ind)}
                    className={styles.liststyle}
                  >
                    <td>{val["song_title"]}</td>
                    <td>{val["composer"]}</td>
                    <td>{val["note_or_cord"]}</td>
                    <td>{val["tempo"]}</td>
                    <td>{val["duration"]}</td>
                    <td>{val["intensity"]}</td>
                  </tr>
                ))
              : // )
                "No Songs Found"}
          </table>

          {/* {songsData && songsData.length > 0 ? (
            <DataTable
              id="data"
              columns={columns}
              data={songsData}
              fixedHeader
              className={classes.tableStyleNew}
              customStyles={customStyles}
              onRowClicked={rowClick}
              conditionalRowStyles={conditionalRowStyles}
            />
          ) : (
            "No Songs Found"
          )} */}
          {/* </div> */}
        </Paper>
      </div>
    </div>
  );
}

export default MusicWheel;
