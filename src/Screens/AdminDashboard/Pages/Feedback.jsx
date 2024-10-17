import React from 'react';
import MainComponent from './DashboardLayout';
import { Table, Typography, Row, Col, Card } from 'antd';

const Feedback = () => {
  const { Title } = Typography;

  // Example feedback data
  const feedbackData = [
    {
      key: 1,
      customer: 'Alice Johnson',
      feedback: 'Great service and Vip Items!',
      rating: 5,
      date: '2024-10-12',
    },
    {
      key: 2,
      customer: 'Bob Williams',
      feedback: 'The delivery was late, but the food was still warm.',
      rating: 4,
      date: '2024-10-11',
    },
    {
      key: 3,
      customer: 'Charlie Brown',
      feedback: 'Not satisfied with the order, some items were missing.',
      rating: 2,
      date: '2024-10-10',
    },
    // Add more feedback as needed
  ];

  const columns = [
    { title: 'Customer', dataIndex: 'customer', key: 'customer' },
    { title: 'Feedback', dataIndex: 'feedback', key: 'feedback' },
    { title: 'Rating', dataIndex: 'rating', key: 'rating' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
  ];

  return (
    <>
      <MainComponent title={'Feedback'} />
      <Title level={2}>Customer Feedback</Title>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={22} lg={20} xl={18}>
          <Card>
            <Table 
              dataSource={feedbackData} 
              columns={columns} 
              pagination={false} 
              scroll={{ x: 'max-content' }} 
              rowKey="key" 
              bordered
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Feedback;
