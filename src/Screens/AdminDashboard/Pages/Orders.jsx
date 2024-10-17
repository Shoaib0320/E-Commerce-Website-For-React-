// // // // // src/pages/Orders.js
// // // // import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

// // // // const Orders = () => {
// // // //   const orders = [
// // // //     { id: 1, product: "Product A", status: "Pending" },
// // // //     { id: 2, product: "Product B", status: "In Process" },
// // // //   ];

// // // //   return (
// // // //     <Table>
// // // //       <TableHead>
// // // //         <TableRow>
// // // //           <TableCell>Order ID</TableCell>
// // // //           <TableCell>Product</TableCell>
// // // //           <TableCell>Status</TableCell>
// // // //           <TableCell>Action</TableCell>
// // // //         </TableRow>
// // // //       </TableHead>
// // // //       <TableBody>
// // // //         {orders.map((order) => (
// // // //           <TableRow key={order.id}>
// // // //             <TableCell>{order.id}</TableCell>
// // // //             <TableCell>{order.product}</TableCell>
// // // //             <TableCell>{order.status}</TableCell>
// // // //             <TableCell>
// // // //               <Button variant="contained">Update Status</Button>
// // // //             </TableCell>
// // // //           </TableRow>
// // // //         ))}
// // // //       </TableBody>
// // // //     </Table>
// // // //   );
// // // // };

// // // // export default Orders;




// // // import React from 'react';
// // // import MainComponent from './DashboardLayout';

// // // const Orders = () => {
// // //   return (
// // //     <>
      
// // //       <MainComponent title={'Orders'}/>
// // //       <br />
// // //       <div>Orders Page</div>
// // //     </>
// // //   );
// // // };

// // // export default Orders;





// // import React from 'react';
// // import MainComponent from './DashboardLayout';
// // import {
// //   Container,
// //   Typography,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   Button,
// // } from '@mui/material';

// // const Orders = () => {
// //   // Example order data
// //   const orders = [
// //     { id: 1, customer: 'John Doe', date: '2024-10-15', total: 29.99, status: 'Shipped' },
// //     { id: 2, customer: 'Jane Smith', date: '2024-10-14', total: 49.99, status: 'Pending' },
// //     { id: 3, customer: 'Alice Johnson', date: '2024-10-13', total: 19.99, status: 'Delivered' },
// //     // Add more orders as needed
// //   ];

// //   return (
// //     <Container>
// //       <MainComponent title={'Orders'} />
// //       <br />
// //       <Typography variant="h4" component="h2" gutterBottom>
// //         Orders
// //       </Typography>
// //       <TableContainer component={Paper}>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>ID</TableCell>
// //               <TableCell>Customer</TableCell>
// //               <TableCell>Date</TableCell>
// //               <TableCell>Total ($)</TableCell>
// //               <TableCell>Status</TableCell>
// //               <TableCell>Actions</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {orders.map((order) => (
// //               <TableRow key={order.id}>
// //                 <TableCell>{order.id}</TableCell>
// //                 <TableCell>{order.customer}</TableCell>
// //                 <TableCell>{order.date}</TableCell>
// //                 <TableCell>{order.total.toFixed(2)}</TableCell>
// //                 <TableCell>{order.status}</TableCell>
// //                 <TableCell>
// //                   <Button variant="contained" color="primary">
// //                     View Details
// //                   </Button>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //     </Container>
// //   );
// // };

// // export default Orders;




// import React from 'react';
// import MainComponent from './DashboardLayout';
// import {
//   Container,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Grid,
//   useMediaQuery,
// } from '@mui/material';

// const Orders = () => {
//   // Example order data
//   const orders = [
//     { id: 1, customer: 'John Doe', date: '2024-10-15', total: 29.99, status: 'Shipped' },
//     { id: 2, customer: 'Jane Smith', date: '2024-10-14', total: 49.99, status: 'Pending' },
//     { id: 3, customer: 'Alice Johnson', date: '2024-10-13', total: 19.99, status: 'Delivered' },
//     // Add more orders as needed
//   ];

//   // Media query to determine screen size
//   const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

//   return (
//     <Container maxWidth="lg">
//       <MainComponent title={'Orders'} />
//       <Typography variant="h4" component="h2" gutterBottom>
//         Orders
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>ID</TableCell>
//                   <TableCell>Customer</TableCell>
//                   <TableCell>Date</TableCell>
//                   <TableCell>Total ($)</TableCell>
//                   <TableCell>Status</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {orders.map((order) => (
//                   <TableRow key={order.id}>
//                     <TableCell>{order.id}</TableCell>
//                     <TableCell>{order.customer}</TableCell>
//                     <TableCell>{order.date}</TableCell>
//                     <TableCell>{order.total.toFixed(2)}</TableCell>
//                     <TableCell>{order.status}</TableCell>
//                     <TableCell>
//                       <Button variant="contained" color="primary" size={isSmallScreen ? 'small' : 'medium'}>
//                         View Details
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Orders;






import React from 'react';
import MainComponent from './DashboardLayout';
import { Table, Typography, Button, Row, Col } from 'antd';

const Orders = () => {
  const { Title } = Typography;

  // Example order data
  const orders = [
    { key: 1, customer: 'John Doe', date: '2024-10-15', total: 29.99, status: 'Shipped' },
    { key: 2, customer: 'Jane Smith', date: '2024-10-14', total: 49.99, status: 'Pending' },
    { key: 3, customer: 'Alice Johnson', date: '2024-10-13', total: 19.99, status: 'Delivered' },
  ];

  const columns = [
    { title: 'ID', dataIndex: 'key', key: 'key' },
    { title: 'Customer', dataIndex: 'customer', key: 'customer' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Total ($)', dataIndex: 'total', key: 'total' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Actions',
      key: 'actions',
      render: () => <Button style={{backgroundColor:'#6DA5C0'}} type="primary">View Details</Button>,
    },
  ];

  return (
    <>
      <MainComponent title={'Orders'} />
      <Title level={2}>Orders</Title>
      <Row>
        <Col span={24}>
          <Table dataSource={orders} columns={columns} pagination={false} scroll={{ x: 600 }} />
        </Col>
      </Row>
    </>
  );
};

export default Orders;
