import * as React from 'react';
import Grid from '@mui/material/Grid';

const PointsXtGrid1112 = (props) => {
  let resStr = [];

  const styleXTG02 = {
    borderRight: 1,
    borderBottom: 1,
    borderColor: 'primary.main',
    padding: 1,
    textAlign: 'center',
    backgroundColor: '#C0C0C0',
  };

  const styleXTG03 = {
    borderRight: 1,
    borderBottom: 1,
    borderColor: 'primary.main',
    padding: 1,
    textAlign: 'center',
  };

  const styleXTG04 = {
    borderRight: 0,
    borderColor: 'primary.main',
    margin: -1,
  };

  const HeaderPXG1112 = () => {
    return (
      <Grid item container xs={10}>
        <Grid item xs={2} sx={styleXTG02}>
          <b>№</b>
        </Grid>
        <Grid item xs={4} sx={styleXTG02}>
          <b>КС на ДК</b>
        </Grid>
        <Grid item xs={4} sx={styleXTG02}>
          <b>ПК</b>
        </Grid>
      </Grid>
    );
  };

  const StrokaPXG1112 = () => {
    resStr = [];

    for (let i = 0; i < props.xctrl.ext.length; i++) {
      resStr.push(
        <Grid key={Math.random()} container item xs={10}>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}>
            {i + 1}
          </Grid>
          <Grid key={Math.random()} xs={4} item sx={styleXTG03}>
            {props.xctrl.ext[i][0]}
          </Grid>
          <Grid key={Math.random()} xs={4} item sx={styleXTG03}>
            {props.xctrl.ext[i][1]}
          </Grid>
        </Grid>,
      );
    }
    return resStr;
  };

  return (
    <Grid item sx={styleXTG04}>
      <HeaderPXG1112 />
      {props.open && <div>{StrokaPXG1112()}</div>}
    </Grid>
  );
};

export default PointsXtGrid1112;
