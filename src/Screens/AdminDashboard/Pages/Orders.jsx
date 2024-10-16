// // src/pages/Orders.js
// import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

// const Orders = () => {
//   const orders = [
//     { id: 1, product: "Product A", status: "Pending" },
//     { id: 2, product: "Product B", status: "In Process" },
//   ];

//   return (
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell>Order ID</TableCell>
//           <TableCell>Product</TableCell>
//           <TableCell>Status</TableCell>
//           <TableCell>Action</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {orders.map((order) => (
//           <TableRow key={order.id}>
//             <TableCell>{order.id}</TableCell>
//             <TableCell>{order.product}</TableCell>
//             <TableCell>{order.status}</TableCell>
//             <TableCell>
//               <Button variant="contained">Update Status</Button>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };

// export default Orders;




import React from 'react';
import Sidebar from './Sidebar';
import MainComponent from './DashboardLayout';

const Orders = () => {
  return (
    <>
      
      <MainComponent title={'Orders'}/>
      <br />
      <div>Orders Page</div>
    </>
  );
};

export default Orders;
