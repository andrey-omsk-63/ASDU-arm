import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import PointsXt1123 from './PointsXt1123';

const PointsXt112 = () => {
  const styleXTG02 = {
    fontSize: 11,
    maxHeight: '21px',
    minHeight: '21px',
    transform: 'rotate(270deg)',
    backgroundColor: '#F1F3F4',
    color: 'black',
    marginBottom: 6.5,
  };

  const [value, setValue] = React.useState('3');

  return (
    // <Box sx={{ marginTop: -2, marginLeft: -3.5, marginRight: 5 }}>
    //   <Grid container item sx={{ border: 0 }}>
    //     <Grid item xs={12}>
    //       <Grid container item sx={{ height: '100%' }}>
    //         <Grid item xs={0.35} sx={{ border: 1 }}>
    //           <Box sx={{ width: '70%', marginTop: 3.0, marginLeft: -3.5, marginRight: -61 }}>
    //             <TabContext value={value}>
    //               <Box>
    //                 <Stack sx={{ marginLeft: 1 }} direction="column">
    //                   <Button sx={styleXTG02} variant="contained" onClick={() => setValue('3')}>
    //                     <b>Базовые</b>
    //                   </Button>

    //                   <Button sx={styleXTG02} variant="contained" onClick={() => setValue('2')}>
    //                     <b>Oбласти</b>
    //                   </Button>

    //                   <Button sx={styleXTG02} variant="contained" onClick={() => setValue('1')}>
    //                     <b>Расчёт</b>
    //                   </Button>
    //                 </Stack>
    //               </Box>
    //               <TabPanel value="1"></TabPanel>
    //               <TabPanel value="2"></TabPanel>
    //               <TabPanel value="3">
    //                 <PointsXt1123 />
    //               </TabPanel>
    //             </TabContext>
    //           </Box>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    <Box sx={{ marginTop: -2, marginLeft: -3.5, marginRight: 5, border: 0 }}>
      <Grid container item sx={{ border: 0 }}>
        <Grid item xs={12} sx={{ border: 0 }}>
          <Grid item xs={0.35} sx={{ height: '85vh', border: 1 }}>
            <Box
              sx={{
                // width: '70%',
                marginTop: 3.0,
                marginLeft: -3.5,
                //marginRight: -61,
                // height: '85vh',
                border: 1,
              }}>
              <TabContext value={value}>
                <Box>
                  <Stack sx={{ marginLeft: 1 }} direction="column">
                    <Button sx={styleXTG02} variant="contained" onClick={() => setValue('3')}>
                      <b>Базовые</b>
                    </Button>

                    <Button sx={styleXTG02} variant="contained" onClick={() => setValue('2')}>
                      <b>Oбласти</b>
                    </Button>

                    <Button sx={styleXTG02} variant="contained" onClick={() => setValue('1')}>
                      <b>Расчёт</b>
                    </Button>
                  </Stack>
                </Box>
                <TabPanel value="1"></TabPanel>
                <TabPanel value="2"></TabPanel>
                <TabPanel value="3">
                  <PointsXt1123 />
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PointsXt112;
