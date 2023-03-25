import React, { useState, useEffect } from "react";
import { setCookie } from "cookies-next";
import { Grid } from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import Guitar from "../public/assets/images/guitar.jpg";
import dynamic from "next/dynamic";
// import 'shaka-player/dist/controls.css';
// const ShakaPlayer = dynamic(() => import('shaka-player-react'), { ssr: false });

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  videoCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "black !important",
    borderRadius: "10px",
    // padding: "20px",
    height: "97.5vh",
    marginTop: "8px",
    position:'relative',
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
      height: "98vh",
      width:'99.8%',
    }
  },
  playerDisplay:{
    objectFit: "cover",
    backgroundSize: "cover",

    // marginTop: "-4%",
    // "@media (min-width: 1280px) and (max-width:1480px)": {  marginTop: "-300px", },
    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginTop: "-180px",
    },
    "@media (min-width: 720px) and (max-width:1024px)": {
      // marginTop: "-400px",
    },
  },
  imgContainer:{
    position:'absolute',bottom:'0',height:'350px',overflow:'hidden',
    "@media (min-width: 1280px) and (max-width:1680px)": {
      height:'200px',
      borderRadius:'0px 0px 20px 20px',
    },
    "@media (min-width: 720px) and (max-width:1024px)": {
      height:'300px',
    },
  },
});
function VideoPlayer(prop) {
  const [song, setSong] = useState();
  const [totalSeconds, setTotalSeconds] = useState(0);
  const music = prop.musicData
    ? prop.musicData[prop.musicIndex]["song_url"]
    : "";

  function playNextSong() {
    for (let i = prop.musicIndex + 1; i < prop.musicData.length; i++) {
      // if(!(prop.musicData[i]["song_url"].includes("_P."))){
      prop.handleSong(prop.musicData, i);
      prop.totleTimeAndImage(prop.musicData, prop.musicIndex);
           break;
      // }
    }
  }

  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2} style={{display:'block',position:'relative'}}>
        <Grid item xs={12} md={12} className={classes.videoCard} >
          {prop.musicData ? (
            <ReactPlayer
              controls
              url={music}
              width="100vw"
              height="96vh"
             className={classes.playerDisplay}
              playing={true}
              fluid={true}
              onEnded={playNextSong}
              // style={{ marginTop: "-50px" }}
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}
             
            />

          ) : (
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=GBYs4y1BtGg"
              width="100%"
              height="95%"
              playing={true}
              loop={true}
            />
          )}
          {/* <div className={classes.imgContainer}><Image src={Guitar} alt="..."  /></div> */}
        </Grid>
        
      </Grid>
    </div>
  );
}

export default VideoPlayer;
