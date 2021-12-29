import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import Stack from '@mui/material/Stack';

//import PointsXt112Comp21 from './PointsXt112Comp21';

const PointsXt112Comp3 = (props) => {
  // const styleXTG011 = {
  //   fontSize: 11,
  //   //borderRight: 1,
  //   borderBottom: 1,
  //   borderColor: 'primary.main',
  //   padding: 0.2,
  //   textAlign: 'center',
  // };

  // const styleXTG01 = {
  //   fontSize: 11,
  //   borderRight: 1,
  //   borderBottom: 1,
  //   borderColor: 'primary.main',
  //   padding: 0.2,
  //   textAlign: 'center',
  // };

  const styleXTG02 = {
    fontSize: 11,
    borderRight: 1,
    borderBottom: 1,
    borderColor: 'primary.main',
    padding: 0.4,
    textAlign: 'center',
    backgroundColor: '#C0C0C0',
  };

  // const styleXTG03 = {
  //   border: 1,
  //   height: '86.5vh',
  //   borderRadius: 1,
  //   borderColor: 'primary.main',
  // };

  // const styleXTG04 = {
  //   //height: '84.4vh',
  //   border: 1,
  //   marginLeft: 0.5,
  //   borderRadius: 1,
  //   borderColor: 'primary.main',
  // };

  const PointsXt112Comp3Tab2Header = () => {
    return (
      <Grid container item xs={12} sx={{ border: 0 }}>
        <Grid xs={0.5} item sx={styleXTG02}>
          
        </Grid>
        <Grid xs={1} item sx={styleXTG02}>
          <b>Прямой</b>
        </Grid>
        <Grid xs={1} item sx={styleXTG02}>
          <b>Обратный</b>
        </Grid>
        <Grid xs={1} item sx={styleXTG02}>
          <b>КС на ДК</b>
        </Grid>
        <Grid xs={1} item sx={styleXTG02}>
          <b>Качество</b>
        </Grid>
      </Grid>
    );
  };

  
  console.log("left",props.xctrl.xctrls[0].name)
  const namer = props.xctrl.xctrls[0].name;
  console.log(props.xctrl.results)
  console.log(namer, props.xctrl.String(namer))



  // const PointsXt112Comp2Tab1Stroka = () => {
  //   let resStr = [];

  //   for (let i = 0; i < props.xctrl.xctrls[props.crossroad].StrategyA.length; i++) {
  //     resStr.push(
  //       <Grid key={Math.random()} container item xs={12}>
  //         <Grid key={Math.random()} xs={2} item sx={styleXTG01}>
  //           {props.xctrl.xctrls[props.crossroad].StrategyA[i].pk}
  //         </Grid>
  //         <Grid key={Math.random()} xs={3} item sx={styleXTG01}>
  //           {props.xctrl.xctrls[props.crossroad].StrategyA[i].xleft}
  //         </Grid>
  //         <Grid key={Math.random()} xs={3.5} item sx={styleXTG01}>
  //           {props.xctrl.xctrls[props.crossroad].StrategyA[i].xright}
  //         </Grid>

  //         <Grid key={Math.random()} xs={3.5} item sx={styleXTG011}>
  //           {props.xctrl.xctrls[props.crossroad].StrategyA[i].desc}
  //         </Grid>
  //       </Grid>,
  //     );
  //   }
  //   return resStr;
  // };

  return (
    <>
      {props.value === '3' && (
        <Box sx={{ marginTop: -0.3, marginLeft: -0, marginRight: 0 }}>
          <Grid container item sx={{ margin: 0, height: '30vh' }}>
            <Grid item xs={12} sx={{ border: 1, borderRadius: 1, borderColor: 'primary.main' }}>
              {/* <StatGraf00 /> */}
            </Grid>
          </Grid>
          <Grid container item sx={{ marginTop: 0.5, height: '56vh', border: 0 }}>
            <Grid item xs={24} sx={{ border: 1, borderRadius: 1, borderColor: 'primary.main' }}>
              <PointsXt112Comp3Tab2Header />
              <Box sx={{ overflowX: 'auto', height: '59vh', border: 0 }}>
                <Grid container item>
                  {/* {resSps} */}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>)}
    </>
  );
};

export default PointsXt112Comp3;
