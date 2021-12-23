import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

const PointsXt112 = () => {
  const PointsXt1121 = () => {
    const [value, setValue] = React.useState('3');
    return (
      <Box
        sx={{
          width: '70%',
          marginTop: 2.5,
          marginLeft: -3,
          marginRight: -61,
        }}>
        <TabContext value={value}>
          <Box>
            <Stack sx={{ marginLeft: 1 }} direction="column">
              <Button
                size="small"
                sx={{
                  fontSize: 11,
                  transform: 'rotate(270deg)',
                  backgroundColor: '#F1F3F4',
                  color: 'black',
                }}
                variant="contained"
                onClick={() => setValue('3')}>
                Базовые
              </Button>

              <Button
                size="small"
                sx={{
                  fontSize: 11,
                  transform: 'rotate(270deg)',
                  backgroundColor: '#F1F3F4',
                  color: 'black',
                  marginTop: 5.5,
                }}
                variant="contained"
                onClick={() => setValue('2')}>
                Oбласти
              </Button>

              <Button
                size="small"
                sx={{
                  fontSize: 11,
                  transform: 'rotate(270deg)',
                  backgroundColor: '#F1F3F4',
                  color: 'black',
                  marginTop: 5.5,
                }}
                variant="contained"
                onClick={() => setValue('1')}>
                Расчёт
              </Button>
            </Stack>
          </Box>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>
    );
  };

  return (
    <Box sx={{ marginTop: -2, marginLeft: -3.5, marginRight: 5 }}>
      <Grid container item sx={{ border: 0 }}>
        <Grid item xs={12}>
          <Grid container item sx={{ height: '100%' }}>
            <Grid item xs={0.3} sx={{ border: 0 }}>
              <PointsXt1121 />
            </Grid>

            <Grid item xs={3} sx={{ border: 0 }}>
              <Grid container sx={{ height: '14.5vh' }}>
                <Grid item xs={12} sx={{ border: 0 }}>
                  <Grid container item>
                    <Grid item xs={5} sx={{ marginTop: 0, border: 0 }}>
                      <Box sx={{ marginLeft: 1, marginTop: 0.5, fontSize: 12.5, border: 0 }}>
                        <div>Наименование ХТ</div>
                        <p>Максимум прямого</p>
                        <div> Максимум обратного</div>
                        <p> 950:439</p>
                      </Box>
                    </Grid>
                    <Grid item xs sx={{ marginTop: 0, border: 0 }}>
                      <Box sx={{ marginTop: 0.5, fontSize: 12.5, border: 0 }}>
                        <div>Хомутово</div>
                        <p>1500</p>
                        <div> 1500</div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  marginTop: 0.5,
                  border: 1,
                  height: '32vh',
                  borderRadius: 1,
                  borderColor: 'primary.main',
                }}>
                <Grid item xs={12}>
                  2
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    marginTop: 0.5,
                    border: 0.5,
                    height: '32vh',
                    borderRadius: 1,
                    borderColor: 'primary.main',
                  }}>
                  3
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs
              sx={{ border: 1, marginLeft: 0.5, borderRadius: 1, borderColor: 'primary.main' }}>
              4
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PointsXt112;
