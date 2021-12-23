import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import axios from 'axios';

import Statistic1115 from './grid/Statistic1115';

const Statistic111 = () => {
  const [points, setPoints] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);
  const [widthData, setWidthData] = React.useState(0);
  let matrix = [];

  const CreateMatrix = () => {
    const step = points[0].TLen;
    const typer = points[0].Type;
    let rows = 1440 / step;
    let time = -step;
    for (let i = 0; i < rows; i++) {
      time = time + step;
      let hours = Math.trunc(time / 60);
      let minutes = time % 60;
      matrix[i] = {
        Min: minutes,
        Hour: hours,
        TLen: step,
        Type: typer,
        Datas: [],
      };
    }
  };

  const CompletMatrix = () => {
    const step = points[0].TLen;
    for (let i = 0; i < points.length; i++) {
      let numInMatrix = (points[i].Hour * 60 + points[i].Min) / step;
      matrix[numInMatrix].Datas = points[i].Datas;
    }
  };

  React.useEffect(() => {
    axios.get('http://localhost:3000/stat01.json').then(({ data }) => {
      setPoints(data.Statistics);
      setIsOpen(true);
    });
  }, []);

  if (isOpen) {
    setWidthData(points[0].Datas.length);
    CreateMatrix();
    CompletMatrix();
  }
  console.log(isOpen, widthData, matrix);

  return (
    <Box sx={{ marginTop: -2, marginLeft: -3, marginRight: 2, height: '100%' }}>
      <Grid container item sx={{ margin: 0, height: '28vh' }}>
        <Grid item xs={12} sx={{ border: 1, borderRadius: 1, borderColor: 'primary.main' }}>
          {/* <Grid container item>
            <Statistic1111 />
            <Statistic1112 />
          </Grid>
          <Grid
            container
            item
            sx={{ marginLeft: 1, fontSize: 12, textAlign: 'center', height: '3vh' }}>
            <Grid item xs>
              <b>Время</b>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
      <Grid container item sx={{ marginTop: 0.5, height: '56vh', border: 0 }}>
        <Grid item xs={24} sx={{ border: 1, borderRadius: 1, borderColor: 'primary.main' }}>
          {/* <Statistic1115 open={isOpen} matrisa={matrix} widthDatas={widthData} /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Statistic111;
