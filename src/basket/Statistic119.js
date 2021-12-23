import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function Statistic112() {
  console.log('111111');
  return <Line options={options} data={data} />;
}

export default Statistic112;

// const StatGraf00 = () => {
//   console.log('!!!', value);
//   resStr = [];
//   let ht = 0;
//   let col = '';
//   if (isOpen) {
//     for (let i = 0; i < matrix.length; i++) {
//       if (matrix[i].Datas.length === 0) {
//         ht = 0;
//       } else {
//         ht = matrix[i].Datas[Number(value) - 1].Intensiv;
//         if (matrix[i].Datas[Number(value) - 1].Status === 0) {
//           col = '#C0C0C0';
//         } else {
//           col = '#FF80C0';
//         }
//       }

//       resStr.push(
//         <Grid
//           item
//           key={Math.random()}
//           xs={0.04168}
//           sx={{
//             borderTop: 1,
//             height: String(ht * 0.28) + 'vh',
//             //backgroundColor: col,
//           }}></Grid>,
//       );
//     }
//   }

//   return (
//     <Box sx={{ border: 0, borderColor: 'red' }}>
//       <Grid container item sx={{ marginTop: '-29.9vh', marginLeft: '-5vh' }}>
//         <Grid item xs={25} sx={{ marginRight: 0 }}>
//           <Grid
//             item
//             container
//             alignItems="flex-end"
//             sx={{ height: '16.5vh', width: '167vh', border: 0 }}>
//             {resStr}
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// const Statistic11141 = () => {
//   const styleSt03 = {
//     borderRight: 1,
//     borderBottom: 1,
//     borderColor: 'primary.main',
//     backgroundColor: '#C0C0C0',
//     fontSize: 11,
//     textAlign: 'center',
//     lineHeight: 2,
//   };

//   let resHead = [];

//   const StatHeader = () => {
//     resHead.push(
//       <Grid key={Math.random()} item xs={0.6} sx={styleSt03}>
//         {' '}
//       </Grid>,
//     );
//     for (let i = 0; i < points[0].Datas.length; i++) {
//       resHead.push(
//         <Grid key={Math.random()} item xs={0.3} sx={styleSt03}>
//           <b>{i + 1}</b>
//         </Grid>,
//       );
//     }
//     resHead.push(
//       <Grid key={Math.random()} item xs={3.3} sx={styleSt03}>
//         <b>Качество</b>
//       </Grid>,
//     );
//   };

//   if (isOpen) {
//     StatHeader();
//   }

//   return (
//     <Grid container item>
//       {isOpen && (
//         <Grid item container sx={{ height: 24, marginRight: 0.7 }}>
//           {resHead}
//         </Grid>
//       )}
//     </Grid>
//   );
// };

// const Statistic1111 = () => {
//   const styleSt01 = {
//     border: 1,
//     borderLeft: 0,
//     borderTop: 0,
//   };

//   return (
//     <Grid container item sx={{ marginTop: 4 }}>
//       <Grid item xs={25} sx={{ marginRight: 5 }}>
//         <Grid item container sx={{ height: '17.5vh', border: 0 }}>
//           <Grid item xs={0.48}></Grid>
//           <Grid item xs={0.48} sx={{ border: 1, borderTop: 0 }}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//           <Grid item xs={0.48} sx={styleSt01}></Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };
