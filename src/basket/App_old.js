import React from 'react';
import Button from '@material-ui/core/Button';
import { Toolbar } from '@material-ui/core';
import Management from './components/Management';

const App = () => {
  const onClickManagement = () => {
    console.log('1111');
    return (
      <div className="burger-paradise">
        <h1>Страница gggggggg</h1>
      </div>
    );
  };

  return (
    <>
      <Toolbar variant="dense">
        <Button size="small" color="inherit" variant="contained" onClick={onClickManagement}>
          Управление
        </Button>

        <Button size="small" color="inherit" variant="contained">
          Характерные точки
        </Button>

        <Button size="small" color="inherit" variant="contained">
          Статистика
        </Button>
      </Toolbar>
    </>
  );
};

export default App;
