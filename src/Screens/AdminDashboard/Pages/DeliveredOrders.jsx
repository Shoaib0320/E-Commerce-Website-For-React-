// // // src/pages/DeliveredOrders.js
// // import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

// // const DeliveredOrders = () => {
// //   const delivered = [{ id: 3, product: "Product C", date: "2024-10-12" }];

// //   return (
// //     <Table>
// //       <TableHead>
// //         <TableRow>
// //           <TableCell>Order ID</TableCell>
// //           <TableCell>Product</TableCell>
// //           <TableCell>Delivered On</TableCell>
// //         </TableRow>
// //       </TableHead>
// //       <TableBody>
// //         {delivered.map((order) => (
// //           <TableRow key={order.id}>
// //             <TableCell>{order.id}</TableCell>
// //             <TableCell>{order.product}</TableCell>
// //             <TableCell>{order.date}</TableCell>
// //           </TableRow>
// //         ))}
// //       </TableBody>
// //     </Table>
// //   );
// // };

// // export default DeliveredOrders;

// import React from 'react';
// import MainComponent from './DashboardLayout';

// const DeliveredOrders = () => {
//   return(
//     <>
//       <MainComponent title={'Delivered Orders'}/>
//       <br />
//       <div>Delivered Orders Page</div>
//     </>
//   );
// };

// export default DeliveredOrders;






import React from 'react';
import MainComponent from './DashboardLayout';
import { Table, Typography, Button, Row, Col } from 'antd';

const DeliveredOrders = () => {
  const { Title } = Typography;

  // Example delivered order data
  const deliveredOrders = [
    { key: 1, customer: 'Alice Johnson', date: '2024-10-13', total: 19.99, status: 'Delivered' },
    { key: 2, customer: 'Bob Williams', date: '2024-10-10', total: 39.99, status: 'Delivered' },
    { key: 3, customer: 'Charlie Brown', date: '2024-10-05', total: 29.99, status: 'Delivered' },
    { key: 4, customer: 'Alice Johnson', date: '2024-10-13', total: 19.99, status: 'Delivered' },
    { key: 5, customer: 'Bob Williams', date: '2024-10-10', total: 39.99, status: 'Delivered' },
    { key: 6, customer: 'Charlie Brown', date: '2024-10-05', total: 29.99, status: 'Delivered' },
    { key: 7, customer: 'Alice Johnson', date: '2024-10-13', total: 19.99, status: 'Delivered' },
    { key: 8, customer: 'Bob Williams', date: '2024-10-10', total: 39.99, status: 'Delivered' },
    { key: 9, customer: 'Charlie Brown', date: '2024-10-05', total: 29.99, status: 'Delivered' },
    // Add more delivered orders as needed
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
      render: () => (
        <Button style={{backgroundColor:'#6DA5C0'}} type="primary" size="middle">
          View Details
        </Button>
      ),
    },
  ];

  return (
    <>
      <MainComponent title={'Delivered Orders'} />
      <Title level={2}>Delivered Orders</Title>
      <Row>
        <Col span={24}>
          <Table 
            dataSource={deliveredOrders} 
            columns={columns} 
            pagination={false} 
            scroll={{ x: 600 }} 
          />
        </Col>
      </Row>
    </>
  );
};

export default DeliveredOrders;
