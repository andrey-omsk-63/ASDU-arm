import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import PointsXt112Comp1 from './grid/PointsXt112Comp1';

const PointsXt112 = (props) => {
  console.log('crossroad112:', props.crossroad);
  const [value, setValue] = React.useState('1');

  const PointsXt112Menu = () => {
    const styleXTG01 = {
      width: '70%',
      height: '84vh',
      marginTop: 2.5,
      marginLeft: -3,
      marginRight: -61,
      border: 0,
    };

    const styleXTG02 = {
      fontSize: 11,
      maxHeight: '21px',
      minHeight: '21px',
      transform: 'rotate(270deg)',
      backgroundColor: '#F1F3F4',
      color: 'black',
      marginBottom: 6.5,
    };

    return (
      <Box sx={styleXTG01}>
        <Stack sx={{ marginLeft: 1 }} direction="column">
          <Button sx={styleXTG02} variant="contained" onClick={() => setValue('1')}>
            <b>Базовые</b>
          </Button>
          <Button sx={styleXTG02} variant="contained" onClick={() => setValue('2')}>
            <b>Oбласти</b>
          </Button>
          <Button sx={styleXTG02} variant="contained" onClick={() => setValue('3')}>
            <b>Расчёт</b>
          </Button>
        </Stack>
      </Box>
    );
  };

  const PointsXt112Comp3 = (props) => {
    return <div>{props.value === '3' && <div>Расчёт</div>}</div>;
  };

  const PointsXt112Comp2 = (props) => {
    return <div>{props.value === '2' && <div>Oбласти</div>}</div>;
  };

  return (
    <Box sx={{ marginTop: -2, marginLeft: -3.5, marginRight: 5 }}>
      <Grid container item sx={{ border: 0 }}>
        <Grid item xs={12}>
          <Grid container item>
            <Grid item xs={0.4} sx={{ border: 0 }}>
              <PointsXt112Menu />
            </Grid>

            <Grid item xs sx={{ border: 0 }}>
              <Grid item xs={12}>
                <PointsXt112Comp1
                  open={props.open}
                  xctrl={props.xctrl}
                  value={value}
                  crossroad={props.crossroad}
                />
                <PointsXt112Comp2 value={value} />
                <PointsXt112Comp3 value={value} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PointsXt112;