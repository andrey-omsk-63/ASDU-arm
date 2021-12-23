import * as React from 'react';
import Grid from '@mui/material/Grid';

const ManagementLeftGrid = () => {
  return (
    <>
      <Grid
        item
        xs={3}
        sx={{
          border: 1,
          borderRadius: 1,
          borderColor: 'primary.main',
          margin: 1,
          height: '93.5vh',
        }}>
        <Grid container>
          <Grid
            item
            xs={6.5}
            sx={{
              borderRight: 1,
              borderColor: 'primary.main',
              padding: 1,
            }}>
            Выбор
          </Grid>
          <Grid item xs={5.5} sx={{ padding: 1 }}>
            Наименование
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ManagementLeftGrid;
