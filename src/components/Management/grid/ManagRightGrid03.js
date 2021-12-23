import * as React from 'react';
import Grid from '@mui/material/Grid';

const ManagementRightGrid03 = () => {
  const styleMRG03 = {
    borderRight: 1,
    borderColor: 'primary.main',
    padding: 1,
    textAlign: 'center',
  };

  const styleMRG04 = {
    border: 1,
    borderRadius: 1,
    borderColor: 'primary.main',
    marginTop: 0.5,
    marginLeft: -0.5,
    marginRight: 0.5,
    height: '84.8vh',
  };

  return (
    <Grid item container>
      <Grid item xs={24} sx={styleMRG04}>
        <Grid item container>
          <Grid item xs={1} sx={styleMRG03}>
            №
          </Grid>

          <Grid item xs={1} sx={styleMRG03}>
            Район
          </Grid>

          <Grid item xs={4} sx={styleMRG03}>
            Устройства
          </Grid>

          <Grid item xs={3} sx={styleMRG03}>
            Текущее состояние
          </Grid>

          <Grid
            item
            xs={2}
            sx={{
              padding: 1,
              textAlign: 'center',
            }}>
            Состояние ХТ
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ManagementRightGrid03;