// // src/pages/DeliveredOrders.js
// import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

// const DeliveredOrders = () => {
//   const delivered = [{ id: 3, product: "Product C", date: "2024-10-12" }];

//   return (
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell>Order ID</TableCell>
//           <TableCell>Product</TableCell>
//           <TableCell>Delivered On</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {delivered.map((order) => (
//           <TableRow key={order.id}>
//             <TableCell>{order.id}</TableCell>
//             <TableCell>{order.product}</TableCell>
//             <TableCell>{order.date}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };

// export default DeliveredOrders;

import React from 'react';
import MainComponent from './DashboardLayout';

const DeliveredOrders = () => {
  return(
    <>
      <MainComponent title={'Delivered Orders'}/>
      <br />
      <div>Delivered Orders Page</div>
    </>
  );
};

export default DeliveredOrders;
