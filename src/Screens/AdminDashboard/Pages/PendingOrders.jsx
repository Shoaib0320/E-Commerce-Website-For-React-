import React from 'react';
import MainComponent from './DashboardLayout';
import { Table, Typography, Button, Row, Col } from 'antd';

const PendingOrders = () => {
  const { Title } = Typography;

  // Example pending order data
  const pendingOrders = [
    { key: 1, customer: 'John Doe', date: '2024-10-14', total: 25.99, status: 'Pending' },
    { key: 2, customer: 'Jane Smith', date: '2024-10-15', total: 30.50, status: 'Pending' },
    { key: 3, customer: 'Sam Wilson', date: '2024-10-16', total: 15.75, status: 'Pending' },
    // Add more pending orders as needed
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
      <MainComponent title={'Pending Orders'} />
      <Title level={2}>Pending Orders</Title>
      <Row>
        <Col span={24}>
          <Table 
            dataSource={pendingOrders} 
            columns={columns} 
            pagination={false} 
            scroll={{ x: 600 }} 
          />
        </Col>
      </Row>
    </>
  );
};

export default PendingOrders;
