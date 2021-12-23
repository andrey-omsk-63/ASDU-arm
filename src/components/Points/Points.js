import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Modal from '@mui/material/Modal';

import axios from 'axios';

import PointsXt111 from './PointsXt111';
import PointsXt112 from './PointsXt112';

const Points = () => {
  const stylePXt1 = {
    fontSize: 10,
    maxHeight: '20px',
    minHeight: '20px',
    backgroundColor: '#F1F3F4',
    color: 'black',
    marginRight: 1,
  };

  const [points, setPoints] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState('1');
  const [valueLevel2, setValueLavel2] = React.useState('1');
  const [crossroad, setCrossroad] = React.useState(0);
  //let crossroad = 0;

  const MenuName = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const handleClose = (numer) => {
      setCrossroad(numer);
      setValueLavel2('2');
      setOpen(false);
    };
    let dlStrMenu = 0;

    if (isOpen) {
      for (let i = 0; i < points.xctrls.length; i++) {
        if (points.xctrls[i].name.length > dlStrMenu) {
          dlStrMenu = points.xctrls[i].name.length;
        }
      }

      const stylePK = {
        position: 'relative',
        //marginTop: '5vh',
        bottom: '-33vh',
        marginLeft: '60vh',
        transform: 'translate(-50%, -50%)',
        width: dlStrMenu * 9,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1,
      };

      const SpisPerekr = () => {
        let resStr = [];

        for (let i = 0; i < points.xctrls.length; i++) {
          resStr.push(
            <Button key={i} sx={stylePXt1} variant="contained" onClick={() => handleClose(i)}>
              <b>XT:1:1:{points.xctrls[i].name}</b>
            </Button>,
          );
        }
        return resStr;
      };

      return (
        <div>
          <Button sx={stylePXt1} variant="contained" onClick={handleOpen}>
            <b>XT:1:1:Перечень перекрёстков</b>
          </Button>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={stylePK}>
              <Stack direction="column">{SpisPerekr()}</Stack>
            </Box>
          </Modal>
        </div>
      );
    }
  };

  const PointsXt11 = () => {
    return (
      <Box sx={{ marginTop: -2, marginLeft: -3, marginRight: -6 }}>
        <TabContext value={valueLevel2}>
          <Box>
            <Stack sx={{ marginTop: -2 }} direction="row">
              <Button sx={stylePXt1} variant="contained" onClick={() => setValueLavel2('1')}>
                <b>Основной:</b>
              </Button>
              {MenuName()}
            </Stack>
          </Box>
          <TabPanel value="1">
            <PointsXt111 open={isOpen} xctrl={points} />
          </TabPanel>
          <TabPanel value="2">
            <PointsXt112 open={isOpen} xctrl={points} crossroad={crossroad} />
          </TabPanel>
        </TabContext>
      </Box>
    );
  };

  const PointsXt21 = () => {
    return <h1 className="burger-paradise-wait">Страница XT:2:1 !1</h1>;
  };

  React.useEffect(() => {
    axios.get('http://localhost:3000/xctrl.json').then(({ data }) => {
      setPoints(data);
      setIsOpen(true);
    });
  }, []);

  return (
    <Box sx={{ fontSize: 12, marginTop: -2, marginLeft: -3, marginRight: -6 }}>
      <TabContext value={value}>
        <Box>
          <Stack sx={{ marginTop: -2 }} direction="row">
            <Button sx={stylePXt1} variant="contained" onClick={() => setValue('1')}>
              XT:1:1
            </Button>

            <Button sx={stylePXt1} variant="contained" onClick={() => setValue('2')}>
              XT:2:1
            </Button>
          </Stack>
        </Box>
        <TabPanel value="1">
          <PointsXt11 />
        </TabPanel>
        <TabPanel value="2">
          <PointsXt21 />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Points;
