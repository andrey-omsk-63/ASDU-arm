import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
//import { styled } from '@mui/material/styles';

import Management from './components/Management';
import Points from './components/Points';
import Statistics from './components/Statistics';

const App = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body2' }}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="white"
            aria-label="secondary tabs example">
            <Tab
              label="Управление"
              sx={{
                margin: -1,
                width: '10%',
                fontSize: 12,
              }}
              value="1"
            />

            <Tab
              label="Характерные точки"
              sx={{
                margin: -1,
                width: '17%',
                fontSize: 12,
              }}
              value="2"
            />

            <Tab
              label="Статистика"
              sx={{
                margin: -1,
                width: '10%',
                fontSize: 12,
              }}
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Management />
        </TabPanel>
        <TabPanel value="2">
          <Points />
        </TabPanel>
        <TabPanel value="3">
          <Statistics />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default App;

//style={{ height: 10 }}
/*
sx={{
  border: 1,
  borderColor: 'primary.main',
  borderRadius: 2,
  margin: -1,
  width: '10%',

  fontSize: 12,
}}
*/
