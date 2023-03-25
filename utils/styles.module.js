import { makeStyles } from "@material-ui/core";
import { Translate } from "@mui/icons-material";
const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#414646",
    "& a": {
      color: "fff",
      marginLeft: 10,
    },
  },
  main: {
    height: "100%", 
    width:'100%',
    // background:'blue',
    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginLeft: "1.5%",
      width:'99%',
      // height: "100%", 
      height: "99%", 
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      width:'100%',
      height: "99%", 
    },
    "@media (max-width:700px)": {
      // marginTop: "3%",
      height: "99%", 
    },
    "@media (min-width: 1681px) and (max-width: 1920px)": {
      width:'99.5%',
      // border:'2px solid red',
  },
  "@media  (min-width: 1921px)and (max-width: 1220px)": {
    width: "98%",

  },
  },

  mainCircle: {
    width: "525px",
    height: "520px",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",

    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginLeft: '235px',
      // marginTop: '100px',
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      // marginLeft: "30%",
      // marginTop: "100px",
    },
    "@media (min-width: 380px) and (max-width:425px)": {
      // marginLeft: "8%",
      // marginTop: "20%",
    },
    "@media (max-width:375px)": {
      // marginLeft: "3%",
      // marginTop: "20%",
    },
    "@media (min-width: 1681px) and (max-width: 1920px)": {
      width: "400px",
      height: "400px",
      // border:'2px solid red'
    }
  },
  layertwo: {
    // padding: 10,
    background: "#FFFFFF !important",
    borderRadius: "50%",
    width: 200,
    height: 200,
    marginTop: "5%",
    marginLeft: "5%",
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  circle: {
    position: "relative",
    // border: '1px solid black',
    padding: 0,
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    zIndex: "99",
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },

  circle2: {
    position: "relative",
    padding: 0,
    marginTop: "10%",
    marginLeft: "10%",
    width: "240px",
    height: "240px",
    borderRadius: " 50%",
    listStyle: "none",
    overflow: "hidden",
    zIndex: "2",
    marginBottom: "50px",
    // transform: 'rotate(.0.1deg)'
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },

  circle3: {
    position: " relative",
    padding: "0",
    marginTop: "13.5%",
    marginLeft: "13.5%",
    width: "175px",
    height: "175px",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    zIndex: "1",
    marginBottom: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },

  circle4: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    background: "#00BF55",
    // backgroundImage: `url('https://mylatinhome.com/image_play/Group%202.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    // border: "2px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    // background: "#00BF55 !important",
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },

  circle5: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    // background: "#584c6c",
    position: "absolute",
    border: "none",
    /* margin-bottom: 50px, */
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },

  circle6: {
    width: "50px",
    background: "#b20ca4",
    height: "50px",
    /* padding: 18px 18px; */
    display: "flex",
    overflow: "hidden",
    position: "absolute",
    // background: " #333333",
    listStyle: "none",
    /* margin-top: 10%; */
    textAlign: "center",
    alignItems: "center !important",
    /* margin-left: 10%; */
    borderRadius: "50%",
    justifyContent: "center !important",
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  accidental: {
    verticalAlign: "super",
    fontSize: "0.6em",
  },
  listBg: { background: "black" },
  bottomButtonContainer: {
    marginTop: "-5px",

    "@media (min-width: 1280px) and (max-width:1680px)": {
      marginTop: "130px",
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      marginTop: "70px",
    },
    "@media (min-width: 380px) and (max-width:425px)": {
      marginTop: "90px",
    },
    "@media (max-width:375px)": {
      marginTop: "90px",
    },
  },
  texRightSide: {
    textAlign: "right",
    cursor: "pointer",
    float: "right",
  },
  textLeftSide: {
    cursor: "pointer",
  },
  buttonCircle: {
    padding: 5,
    background: "#903884",
    borderRadius: "50%",
    width: 40,
    height: 40,
    marginLeft: "40%",
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  circleCard: {
    background: "#333 !important",
    borderRadius: "10px",
    height: "97.5vh",
    "@media (min-width: 1280px) and (max-width:1480px)": { height: "135vh" },
    "@media (min-width: 1481px) and (max-width:1920px)": { height: "110vh" },
    "@media (min-width: 600px) and (max-width:768px)": {
      margin: "25px 15px 15px 25px !important",
    },
    "@media (min-width: 380px) and (max-width:425px)": {
      margin: "25px 15px 15px 25px !important",
    },
    "@media (max-width:375px)": {
      margin: "25px 15px 15px 25px !important",
    },
    "@media (min-width: 1600px)and (max-width: 1920px)": {
      height: "98vh"
    }
  },

  select: {
    background: "#0082cf",
    color: "white",
  },
premiumActive:{
  background: "blue",
  border:'none',
 
},
  topButtonContainer1: {
    marginTop: "10px",
    marginBottom: "10px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    padding: "0px 10px",
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  topButtonContainer2: {
    marginTop: "10px",
    marginBottom: "10px",
    justifyContent: "right",
    alignItems: "right",
    display: "flex",
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  topButtons: {
    fontSize: "13px",
    fontWeight: "500",
    width: "100%",
    cursor: "pointer",
    border: "none",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    background: "#fff",
    "&:hover": {
      // border: "2px solid lightblue",
      transform: `rotate(-30deg) skew(25deg) tanslate(20px,-15px)`,
      boxShadow: "-5px 5px 5px gray",
    },
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  topButtonsDisable: {
    fontSize: "13px",
    fontWeight: "500",
    width: "100%",
    cursor: "pointer",
    border: "none",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    background: "#fff",
    "&:hover": {
      disabled: true,
      content: '',
      // background:'gray',
      pointerEvents:'none',
      cursor:'none',
      zIndex: 60,
    },
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  activeKey: {
    fontSize: "13px",
    fontWeight: "500",
    width: "100%",
    cursor: "pointer",
    border: "none",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    background: "blue",
    color: "white",
    transform: "rotate(-30deg) skew(25deg) tanslate(20px,-15px)",
    "&:hover": {
      // border: "2px solid lightblue",
      transform: `rotate(-30deg) skew(25deg) tanslate(20px,-15px)`,
      boxShadow: "-10px 10px 10px gray",
    },
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  resetButtons: {
    fontSize: "16px",
    fontWeight: "500",
    width: "90%",
    padding: "2px",
    cursor: "pointer",
    padding: "10px",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    background: "#82E3F4",
    color: "black",
    "&:hover": {
      border: "2px solid lightblue",
      transform: `rotate(-30deg) skew(25deg) tanslate(20px,-15px)`,
      boxShadow: "-10px 10px 10px gray",
    },
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },

  bottomBox: {
    fontSize: "12px",
    // fontWeight: "500",
    width: "100%",
    padding: "5px",
    height: "25px",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    background: "#FFF",
    overflow: "hidden",
    whiteSpace: "normal",
    verticalAlign: "middle",
    color: "#000",
    // transform: "rotate(-30deg) skew(25deg) tanslate(20px,-15px)",
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  tempoBtnContainer: {
    position: "relative",
    justifyContent: "space-around",
    // flexdirection: 'column',
    height: "50vh",
    alignItems: "center",
    display: "flex",
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  wheelContianer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  topButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
    padding: "10px 15px",
    width: "100%",
    marginLeft: "5px",
    marginBottom: "3%",
    "@media (min-width: 1280px) and (max-width:1680px)": {
      marginBottom: "3%",
    },
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  bottomBoxContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: "5px",
    padding: "0px 2px",
    width: "98% !important",
    marginLeft: "4px !important",
    marginTop: "-10px !important",
    "@media (min-width: 1280px) and (max-width:1680px)": {
      marginTop: "-10px",
      width: "98%",
      marginLeft: "6px",
    },
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },

  iconDesign: {
    position: "relative",
    height: "100%",
    width: "100%",
    color: "#CEB858",
    background: "#333333",
  },
  iconDesignN: {
    position: "relative",
    height: "70px",
    width: "85px",
    color: "#0058ab",
    left: "-15%",
    // background: "#333333",
    borderRadius: "50%",
    fontSize: "10px",
    // transform: "rotate(150.33deg)",
  },
  leftBtnTextOne: {
    position: "absolute",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    // lineHeight: "12px",
    color: "blue",
    zIndex: "2",
    top: "20px",
    left: " 28px",
    textAlign: "center",
    padding: "0 !important",
    transform: "rotate(-0.67deg)",
  },
  leftBtnTextTwo: {
    position: "absolute",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    // lineHeight: "12px",
    color: "#fff",
    zIndex: "2",
    top: "-12px",
    left: "22px",
    padding: "0 !important",
    transform: "rotate(-0.33deg)",
  },
  RightBtnTextOne: {
    position: "absolute",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    // lineHeight: "12px",
    color: "blue",
    "&:hover": {
      color: "blue",
    },

    zIndex: "2",
    top: "22px",
    padding: "0 !important",
    textAlign: "center",
    left: " 28px",
    // transform: "rotate(180.33deg)",
  },
  AllBtnText3: {
    position: "absolute",
    fontSize: "12px",
    color: "#fff",
    zIndex: "2",
    top: "20px",
    left: "-10px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    padding: "0 !important",
    fontWeight: "500",
    fontSize: "12px",
    // lineHeight: "12px",
    transform: "rotate(270.33deg)",
  },
  iconDesignActive: {
    color: "#903884",
  },
  topbtnNew: {
    position: "absolute",
    left: " 50%",
    right: "27.31%",
    top: "1.25%",
    bottom: "-72.49%",
    height: "90px",
    width: "50px",

    background: "#000",
    // transform: 'rotate(-60.33deg)',
  },

  packageBtn: {
    position: "absolute",
    // height: "175px",
    // width: "175px",
    height: "250px",
    width: "250px",
    // border: "2px solid #0058ab !important",
    background: "#333333",
    display: "flex",
    alignItems: "center",
    // border:'2px solid red',
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "50%",
    left: " 10%",
    right: "27.31%",
    // border:'2px solid red',
    top: "1.25%",
    fontSize: "12px",
    cursor: "pointer",
    border: "none",
    "&:hover": {
      // background: "radial-gradient(blue 40%, #000)",
    },
    "@media (min-width: 1280px) and (max-width:1680px)": {
      height: "150px",
      width: "150px",
    },
    "@media (min-width: 720px) and (max-width:1024px)": {
      height: "150px",
      width: "150px",
    },
    "@media (min-width: 1600px) and (max-width: 1920px)": {
      height: "200px",
      width: "200px",
      left: " 25%",
      // border:'2px solid red'
    },
    "@media (min-width: 1921px) and (max-width: 1220px)": {
      height: "200px",
      width: "200px",
      left: " 25%",
      // border:'2px solid red'
    }
  },

  durationBtn: {
    position: "absolute",
    left: " 15%",
    // right: "16.31%",
    top: "60%",
    // bottom: "-72.49%",
    // height: "175px",
    // width: "175px",

    height: "250px",
    width: "250px",
    // border: "2px solid #0058ab !important",
    background: "#333333",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    // background: "white",
    cursor: "pointer",
    borderRadius: "50%",
    // background: "radial-gradient(#FFF 40%, #000)",
    cursor: "pointer",
    "@media (min-width: 1280px) and (max-width:1480px)": {
      height: "150px",
      width: "150px",
      top: "80%",
    },
    "@media (min-width: 1481px) and (max-width:1680px)": {
      height: "150px",
      width: "150px",
      top: "60%",
    },
    // background: "radial-gradient(#FFF 40%, #000)",
    // transform: "rotate(-25.33deg)",
    border: "none",
    "&:hover": {
      // background: "radial-gradient(blue 40%, #000)",
    },
    "@media (min-width: 720px) and (max-width:1024px)": {
      height: "120px",
      width: "120px",
      top: "75%",
    },
    "@media (min-width: 1600px) and (max-width: 1920px)": {
      height: "200px",
      width: "200px",
      // border:'2px solid red',
      left: " 25%",
    }
  },
  disableBtn: {
    position: "absolute",
    // height: "175px",
    // width: "175px",
    border: "2px solid #0058ab !important",
    background: "#333333",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "50%",
    // left: " 10%",
    // right: "27.31%",
    // top: "1.25%",
    fontSize: "12px",
    cursor: "pointer",
    border: "none",
    "&:hover": {
      disabled: true,
      content: '',
       //background:'gray',
      pointerEvents:'none',
      cursor:'none',
      zIndex: 60,
      //display:'none',
    },
    "@media (min-width: 1280px) and (max-width:1680px)": {
      height: "150px",
      width: "150px",
    },
    "@media (min-width: 720px) and (max-width:1024px)": {
      height: "150px",
      width: "150px",
    },
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },
  
  IntensityBtnNew: {
    position: "absolute",
    right: "10%",
    //  height: "175px",
    // width: "175px",

    height: "250px",
    width: "250px",

    top: "60%",
    bottom: "-72.49%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    
    background: "#333333",
    // background: "radial-gradient(#FFF 40%, #000)",
    color: "blue",
    cursor: "pointer",
    borderRadius: "50%",
    "@media (min-width: 1280px) and (max-width:1480px)": {
      height: "150px",
      width: "150px",
      top: "80%",
    },
    "@media (min-width: 1481px) and (max-width:1680px)": {
      height: "150px",
      width: "150px",
      top: "60%",
    },
    // background: "radial-gradient(#FFF 40%, #000)",
    // transform: "rotate(-25.33deg)",
    border: "none",
    "&:hover": {
      // disabled: true,
      // content: '',
     
      // pointerEvents:'none',
      // cursor:'none',
      // zIndex: 60,
    },
    "@media (min-width: 720px) and (max-width:1024px)": {
      height: "120px",
      width: "120px",
      top: "70%",
    },
    border: "none",
    "&:hover": {
      // background: "radial-gradient(blue 40%, #000)",
    },
    "@media (min-width: 1600px) and (max-width: 1920px)": {
      right: "20%",
      height: "200px",
     width: "200px",
    //  border:'2px solid red'
    }
  },
  
  tempoBtnNew: {
    position: "absolute",
    // left: " -50%",
    right: "10%",
    top: "1%",
    marginTop: "2px",
    bottom: "-72.49%",

    // height: "150px",
    // width: "150px",

    height: "245px",
    width: "245px",

    border: "none",
    // border:'2px solid red',
    background: "#333333",
    display: "flex",
    alignItems: "center",
    // background: "radial-gradient(#FFF 40%, #000)",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "50%",
    // background: "radial-gradient(#FFF 40%, #000)",
    transform: "rotate(0.33deg)",
    "&:hover": {
      // background: "radial-gradient(blue 40%, #000)",
    },
    "@media (min-width: 1280px) and (max-width:1680px)": {
      height: "130px",
      width: "130px",
      right: "12%",
    },
    "@media (min-width: 720px) and (max-width:1024px)": {
      height: "120px",
      width: "120px",
      right: "20%",
    },
    "@media (min-width: 1600px) and (max-width: 1920px)": {

      right: "20%",
        height: "200px",
        width: "200px",
    
    }
  },

   resetCounterBtn: {
    marginTop: "-5%",
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    border: "2px solid red",
  },
  packageBtnActive: {
    position: "absolute",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    top: "0",
    background: "radial-gradient(#df783d 40%, #000)",
    fontSize: "12px",
    cursor: "pointer",
    border: "1px solid blue",
  },
  tempoActive: {
    position: "absolute",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    top: "0",
    background: "radial-gradient(green 40%, #000)",
    color: "#fff",
    fontSize: "12px",
    cursor: "pointer",
    border: "1px solid blue",
  },
  tempoBtnBottom: {
    position: "absolute",
    justifyContent: "flex-end",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    bottom: "0",
    background: "radial-gradient(#FFF 40%, #000)",
    fontSize: "12px",
    cursor: "pointer",
  },

  tempoBtnBottomActive: {
    position: "absolute",
    justifyContent: "flex-end",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    bottom: "0",
    background: "radial-gradient(yellow 40%, #000)",
    fontSize: "12px",
    cursor: "pointer",
    border: "1px solid blue",
  },
  timerBox: {
    // width:'50px',
    // height:'25px',
    color: "#000",
    background: "#fff",
    padding: "6px 5px",
    fontStyle: "bold",
    fontFamily: "digital-clock-font",
    textAlign: "center !important",
    fontSize: "15px",
    borderRadius: "5px",
    border: "1px solid #96be25",
  },
  imageCount: {
    width: "50px",
    color: "#000",
    background: "#D9D9D9",
    padding: "2px",
    borderRadius: "5px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    // fontSize: "24px",
    lineHeight: "10px",
    textAlign: "center !important",
    fontSize: "12px",
  },
  songScrolling: {
    width: "92%",
    padding: "0px 10px 0px 10px",
    marginLeft: "3%",
    background: "#fff",
    fontSize: "14px",
    color: "#000",
    alignItems: "center",
    textAlign: "center",
    marginTop: "10px",
    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginTop: "5% !important",
      fontSize: "14px",
    },
    "@media (max-width:700px)": {
      // marginTop: "5% !important",
      fontSize: "14px",
      padding: "5px",
    },
    "@media (min-width: 1600px) and (max-width: 1920px)": {}
  },

  
  tableStyle: {
    //  border :'1px solid black',
    width: "100%",
    // padding: "5px",
    textAlign: "center",
    // marginTop:'-15px',
    height: "98%",
    "@media (min-width: 1600px) and (max-width: 1920px)": {
      height: "95%",
    }
  },
  tableStyleNew: {
    width: "100%",
    textAlign: "center",
    height: "98%",
  },
  trStyle: {
    marginTop:'-15px',
    background: "black",
    height: "35px",
    marginTop:'0px',
    
  },
  thStyle: {
    top: 0,
    marginTop:'-10px',
   position: 'sticky',
    //  borderRight:'2px solid black',
    background: "#5D432C",
    color: "white !important",
  },
  thStyles: {
    top: 0,
    marginTop:'-10px',
   position: 'sticky',
    //  borderRight:'2px solid black',
    // background: "#5D432C",
    color: "white !important",
  },
  paperStyle: {
    marginTop: "35px",
    width: "93%",
    padding: "0px 0px 0px 8px",
    lineHeight: "30px",
    marginLeft: "-2px",
    // height: "300px",
    overflow: "scroll",
    height:' -webkit-fill-available',
    "@media (min-width: 600px) and (max-width:768px)": {
      marginTop: "10px",
      width: "92%",
      padding: "5px 10px 0px 10px",
      lineHeight: "30px",
      marginLeft: "8px",
      // height: "150px",
      height:' -webkit-fill-available',
      // overflow: "scroll",
    },
    "@media (min-width: 780px) and (max-width:1200px)": {
      marginTop: "10px",
      width: "92%",
      padding: "5px 10px 0px 10px",
      lineHeight: "30px",
      marginLeft: "8px",
      // height: "150px",
      height:' -webkit-fill-available',
      // overflow: "scroll",
    },
    "@media (min-width: 1201px) and (max-width:1680px)": {
      marginTop: "10px",
      width: "92%",
      padding: "5px 10px 0px 10px",
      lineHeight: "30px",
      marginLeft: "8px",
      height: "180px",
      // overflow: "scroll",
    },
    "@media (min-width: 1800px) and (max-width: 1920px)": {
      // height: '250px',
      height:' -webkit-fill-available',
    }
  },
  playerBtn: {
    cursor: "pointer",
    fontSize: "70px",
    position: "absolute",
    color: "#00BF55",
    borderRadius: "5px",
    "&:hover": {
      color: "yellow",
    },
    "&:active": {
      color: "blue",
    },
  },
  homeImage: {
    backgroundImage: "url('/background.png')",
    backgroundSize: "cover",
    width: "104%",
    height: "600px",
    marginTop: "-24px",
    marginLeft: "-25px",
  },
  btnPiano: {
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 5px 5px green",
      cursor: "pointer",
    },
  },
  resetBtn: {
    alignItem: "center",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: "60%",
    marginLeft: "20%",
    "@media  (min-width: 1600px) and (max-width: 1920px)": {
      // height: '280px',
       width: "60%",
    marginLeft: "20%",
    }
  },
  premiumList: { pointerEvents: "none", opacity: "0.6", background: "gray" },

  footer: {
    textAlign: "center",
    backgroundColor: "#414646",
    color: "white",
  },
});
export default useStyles;
