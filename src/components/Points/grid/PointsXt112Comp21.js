import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const PointsXt112Comp21 = (props) => {
  const crRoad = props.crossroad;
  const colorsGraf = [
    'orange',
    'Turquoise',
    'YellowGreen',

    'Yellow',
    'Pink',
    'Aqua',

    'Lime',
    'Tomato',
    'teal',

    'purple',
    'RosyBrown',
    'Coral',

    'Olive',
    'Magenta',
    'DarkGray',

    'RoyalBlue',
    'SpringGreen',
    'Violet',
  ];

  const styleXTG02 = {
    fontSize: 11,
    maxHeight: '15px',
    minHeight: '15px',
    backgroundColor: '#F1F3F4',
    color: 'black',
    marginRight: 1,
  };

  const [value, setValue] = React.useState(0);

  let dlMas = props.xctrl.xctrls[crRoad].StrategyA.length;
  const horizon = props.xctrl.xctrls[crRoad].right;
  const vertical = props.xctrl.xctrls[crRoad].left;
  const axisHorizon = horizon * 1;
  const steepHorizon = 12 / axisHorizon;
  const axisVertical = vertical * 1;
  const steepVertical = 84.4 / axisVertical;
  let matrix = [[]];
  let scale = 5;

  const PointsXt112Comp1Tab4 = () => {
    let resStr = [];
    let resSps = [];

    if (value > 1) scale = 1;

    MakeMatrix();

    const PointsXt112Comp1Tab4Str = (j) => {
      resStr = [];
      let coler = 'red';
      for (let i = 0; i < horizon; i += scale) {
        coler = matrix[j / scale][i / scale];
        resStr.push(
          <Grid
            key={i}
            xs={steepHorizon * scale}
            item
            sx={{
              backgroundColor: coler,
              height: String(steepVertical * scale) + 'vh',
            }}></Grid>,
        );
      }
      return resStr;
    };

    for (let j = 0; j < vertical; j += scale) {
      resSps.push(
        <Grid key={j} item container sx={{ border: 0 }}>
          {PointsXt112Comp1Tab4Str(j)}
        </Grid>,
      );
    }
    return resSps;
  };

  const MakeMatrix = () => {
    let ratio = 0;
    let luchP = 1;
    let luchO = 1;
    let coler = 'LightCyan';
    let i = 0;
    let j = 0;

    const MakeMatrixColor = (num) => {
      luchP = props.xctrl.xctrls[crRoad].StrategyB[num].vleft;
      luchO = props.xctrl.xctrls[crRoad].StrategyB[num].vright;
      ratio =
        props.xctrl.xctrls[crRoad].StrategyB[num].xright /
        props.xctrl.xctrls[crRoad].StrategyB[num].xleft;
      coler = colorsGraf[num * 3];
      if (luchP !== 1 || luchO !== 1) {
        if (i < j * luchO * ratio) coler = colorsGraf[num * 3 + 1];
        if (i >= j * luchP * ratio) coler = colorsGraf[num * 3 + 2];
      }
    };

    for (j = 0; j < vertical; j += scale) {
      matrix[j] = [];

      for (i = 0; i < horizon; i += scale) {
        coler = 'LightCyan';
        for (ij = 0; i < dlMas; i++) {
          if (
            props.xctrl.xctrls[crRoad].StrategyA[ij].right === i &&
            props.xctrl.xctrls[crRoad].StrategyA[ij].left >= j
          ) { coler = 'black'; }

        }

      }
      matrix[j].push(coler);
    }
  }
  matrix = matrix.filter(function (el) {
    //избавляемся от пустых значений
    return el != null;
  });
  matrix.reverse(); //переворачиваем матрицу
};

return (
  <Grid item container xs={12}>
    <Button sx={styleXTG02} variant="contained" onClick={() => setValue(1)}>
      <b>Построить диаграмму быстро</b>
    </Button>
    <Button sx={styleXTG02} variant="contained" onClick={() => setValue(2)}>
      <b>Диаграмма в высоком качестве</b>
    </Button>

    <>{value > 0 && <>{PointsXt112Comp1Tab4()}</>}</>
  </Grid>
);
};

export default PointsXt112Comp21;
