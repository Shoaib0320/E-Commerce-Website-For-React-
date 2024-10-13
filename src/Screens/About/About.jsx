// // // // import React from 'react'

// // // // export const About = () => {
// // // //   return (
// // // //     <div>About</div>
// // // //   )
// // // // }



// // // // About.js
// // // import React from 'react';
// // // import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
// // // import { EmojiPeople, LocalShipping, WorkspacePremium } from '@mui/icons-material';

// // // export const About = () => {
// // //   return (
// // //     <Container maxWidth="lg" sx={{ py: 5 }}>
// // //       {/* Header Section */}
// // //       <Typography variant="h3" align="center" gutterBottom>
// // //         About Shoaib General Store
// // //       </Typography>
// // //       <Typography variant="h6" align="center" color="textSecondary" paragraph>
// // //         Your one-stop solution for quality products and seamless shopping since 2024.
// // //       </Typography>

// // //       {/* Mission, Vision, Customer Focus */}
// // //       <Grid container spacing={4} sx={{ mt: 4 }}>
// // //         <Grid item xs={12} md={4}>
// // //           <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
// // //             <WorkspacePremium color="primary" sx={{ fontSize: 50 }} />
// // //             <Typography variant="h5" gutterBottom>
// // //               Our Mission
// // //             </Typography>
// // //             <Typography>
// // //               To provide top-quality products that meet your daily needs and ensure customer satisfaction.
// // //             </Typography>
// // //           </Paper>
// // //         </Grid>

// // //         <Grid item xs={12} md={4}>
// // //           <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
// // //             <EmojiPeople color="secondary" sx={{ fontSize: 50 }} />
// // //             <Typography variant="h5" gutterBottom>
// // //               Our Vision
// // //             </Typography>
// // //             <Typography>
// // //               To be the most trusted online store, offering premium products with seamless delivery.
// // //             </Typography>
// // //           </Paper>
// // //         </Grid>

// // //         <Grid item xs={12} md={4}>
// // //           <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
// // //             <LocalShipping color="warning" sx={{ fontSize: 50 }} />
// // //             <Typography variant="h5" gutterBottom>
// // //               Customer Focus
// // //             </Typography>
// // //             <Typography>
// // //               We prioritize our customers by offering the best service and fast delivery with every order.
// // //             </Typography>
// // //           </Paper>
// // //         </Grid>
// // //       </Grid>

// // //       {/* Team & Values Section */}
// // //       <Box sx={{ display: 'flex', alignItems: 'center', mt: 5, gap: 4 }}>
// // //         <Box flex={1}>
// // //           <img
// // //             src="https://via.placeholder.com/500"
// // //             alt="Team"
// // //             style={{ width: '100%', borderRadius: '10px' }}
// // //           />
// // //         </Box>
// // //         <Box flex={1}>
// // //           <Typography variant="h4" gutterBottom>
// // //             Our Values & Team
// // //           </Typography>
// // //           <Typography>
// // //             At Shoaib General Store, we uphold honesty, transparency, and integrity. Our team is dedicated 
// // //             to delivering the best experience with every product and service.
// // //           </Typography>
// // //         </Box>
// // //       </Box>

// // //       {/* Call to Action */}
// // //       <Box textAlign="center" mt={5}>
// // //         <Typography variant="h5" gutterBottom>
// // //           Join Us in Our Journey!
// // //         </Typography>
// // //         <Button variant="contained" color="primary" size="large">
// // //           Shop Now
// // //         </Button>
// // //       </Box>
// // //     </Container>
// // //   );
// // // };



// // // About.js
// // import React from 'react';
// // import { Layout, Typography, Row, Col, Card, Button, Image } from 'antd';
// // import { TrophyOutlined, SmileOutlined, CarOutlined } from '@ant-design/icons';

// // const { Title, Paragraph } = Typography;
// // const { Content } = Layout;

// // export const About = () => {
// //   return (
// //     <Layout style={{ backgroundColor: '#fff', padding: '50px' }}>
// //       <Content style={{ maxWidth: '1200px', margin: 'auto' }}>
// //         {/* Header Section */}
// //         <div style={{ textAlign: 'center', marginBottom: '40px' }}>
// //           <Title level={2}>About Shoaib General Store</Title>
// //           <Paragraph>
// //             Your one-stop solution for quality products and seamless shopping since 2024.
// //           </Paragraph>
// //         </div>

// //         {/* Mission, Vision, Customer Focus */}
// //         <Row gutter={[16, 16]} justify="center">
// //           <Col xs={24} md={8}>
// //             <Card bordered={false} style={{ textAlign: 'center' }}>
// //               <TrophyOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
// //               <Title level={3}>Our Mission</Title>
// //               <Paragraph>
// //                 To provide top-quality products that meet your daily needs and ensure customer satisfaction.
// //               </Paragraph>
// //             </Card>
// //           </Col>
// //           <Col xs={24} md={8}>
// //             <Card bordered={false} style={{ textAlign: 'center' }}>
// //               <SmileOutlined style={{ fontSize: '48px', color: '#52c41a' }} />
// //               <Title level={3}>Our Vision</Title>
// //               <Paragraph>
// //                 To be the most trusted online store, offering premium products with seamless delivery.
// //               </Paragraph>
// //             </Card>
// //           </Col>
// //           <Col xs={24} md={8}>
// //             <Card bordered={false} style={{ textAlign: 'center' }}>
// //               <CarOutlined style={{ fontSize: '48px', color: '#faad14' }} />
// //               <Title level={3}>Customer Focus</Title>
// //               <Paragraph>
// //                 We prioritize our customers by offering the best service and fast delivery with every order.
// //               </Paragraph>
// //             </Card>
// //           </Col>
// //         </Row>

// //         {/* Team & Values Section */}
// //         <Row align="middle" gutter={[16, 16]} style={{ marginTop: '40px' }}>
// //           <Col xs={24} md={12}>
// //             <Image
// //               src="https://via.placeholder.com/500"
// //               alt="Team"
// //               style={{ borderRadius: '10px' }}
// //             />
// //           </Col>
// //           <Col xs={24} md={12}>
// //             <Title level={3}>Our Values & Team</Title>
// //             <Paragraph>
// //               At Shoaib General Store, we uphold honesty, transparency, and integrity. Our team is dedicated 
// //               to delivering the best experience with every product and service.
// //             </Paragraph>
// //           </Col>
// //         </Row>

// //         {/* Call to Action */}
// //         <div style={{ textAlign: 'center', marginTop: '40px' }}>
// //           <Title level={4}>Join Us in Our Journey!</Title>
// //           <Button type="primary" size="large">
// //             Shop Now
// //           </Button>
// //         </div>
// //       </Content>
// //     </Layout>
// //   );
// // };










// // About.js
// import React from 'react';
// import { Layout, Typography, Row, Col, Card, Button, Image } from 'antd';
// import { TrophyOutlined, SmileOutlined, CarOutlined } from '@ant-design/icons';

// const { Title, Paragraph, Text } = Typography;
// const { Content } = Layout;

// export const About = () => {
//   return (
//     <Layout style={{ background: 'linear-gradient(135deg, #e3f2fd, #f3e5f5)', minHeight: '100vh' }}>
//       <Content style={{ maxWidth: '1200px', margin: 'auto', padding: '60px 20px' }}>
//         {/* Header Section */}
//         <div style={{ textAlign: 'center', marginBottom: '50px' }}>
//           <Title level={2} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>
//             About Click Shop Store
//           </Title>
//           <Paragraph style={{ fontSize: '18px', color: '#5f6368' }}>
//             Your one-stop solution for quality products and seamless shopping since 2024.
//           </Paragraph>
//         </div>

//         {/* Mission, Vision, Customer Focus */}
//         <Row gutter={[24, 24]} justify="center">
//           <Col xs={24} md={8}>
//             <Card
//               bordered={false}
//               hoverable
//               style={{
//                 textAlign: 'center',
//                 borderRadius: '12px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//               }}
//             >
//               <TrophyOutlined style={{ fontSize: '50px', color: '#1976d2', marginBottom: '15px' }} />
//               <Title level={4} style={{ fontFamily: 'Poppins, sans-serif' }}>Our Mission</Title>
//               <Paragraph style={{ color: '#616161' }}>
//                 To provide top-quality products that meet your daily needs and ensure customer satisfaction.
//               </Paragraph>
//             </Card>
//           </Col>

//           <Col xs={24} md={8}>
//             <Card
//               bordered={false}
//               hoverable
//               style={{
//                 textAlign: 'center',
//                 borderRadius: '12px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//               }}
//             >
//               <SmileOutlined style={{ fontSize: '50px', color: '#4caf50', marginBottom: '15px' }} />
//               <Title level={4} style={{ fontFamily: 'Poppins, sans-serif' }}>Our Vision</Title>
//               <Paragraph style={{ color: '#616161' }}>
//                 To be the most trusted online store, offering premium products with seamless delivery.
//               </Paragraph>
//             </Card>
//           </Col>

//           <Col xs={24} md={8}>
//             <Card
//               bordered={false}
//               hoverable
//               style={{
//                 textAlign: 'center',
//                 borderRadius: '12px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//               }}
//             >
//               <CarOutlined style={{ fontSize: '50px', color: '#ff9800', marginBottom: '15px' }} />
//               <Title level={4} style={{ fontFamily: 'Poppins, sans-serif' }}>Customer Focus</Title>
//               <Paragraph style={{ color: '#616161' }}>
//                 We prioritize our customers by offering the best service and fast delivery with every order.
//               </Paragraph>
//             </Card>
//           </Col>
//         </Row>

//         {/* Team & Values Section */}
//         <Row align="middle" gutter={[24, 24]} style={{ marginTop: '50px' }}>
//           <Col xs={24} md={12}>
//             <Image
//               src="https://www.synapseindia.com/UserFiles/Step-by-Step%20Guide%20to%20Building%20an%20eCommerce%20Website%20with%20OpenCart.jpg"
//               alt="Team"
//               style={{ borderRadius: '12px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}
//             />
//           </Col>
//           <Col xs={24} md={12}>
//             <Title level={3} style={{ fontFamily: 'Poppins, sans-serif' }}>Our Values & Team</Title>
//             <Paragraph style={{ fontSize: '16px', color: '#616161' }}>
//               At Shoaib General Store, we uphold honesty, transparency, and integrity. Our team is 
//               dedicated to delivering the best experience with every product and service.
//             </Paragraph>
//             <Text strong style={{ color: '#ff5722' }}>
//               "Together, we build trust and excellence."
//             </Text>
//           </Col>
//         </Row>

//         {/* Call to Action */}
//         <div style={{ textAlign: 'center', marginTop: '60px' }}>
//           <Title level={4} style={{ fontFamily: 'Poppins, sans-serif' }}>Join Us in Our Journey!</Title>
//           <Button
//             type="primary"
//             size="large"
//             style={{
//               borderRadius: '30px',
//               backgroundColor: '#1976d2',
//               borderColor: '#1976d2',
//               padding: '0 40px',
//               fontSize: '18px',
//             }}
//           >
//             Shop Now
//           </Button>
//         </div>
//       </Content>
//     </Layout>
//   );
// };









// About.js
import React from 'react';
import { Layout, Typography, Row, Col, Card, Button, Image } from 'antd';
import { TrophyOutlined, SmileOutlined, CarOutlined } from '@ant-design/icons';
import './About.css'; // Make sure to import your CSS file here

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

export const About = () => {
  return (
    <Layout
      style={{
        background: '#c8e6c9',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Content style={{ maxWidth: '1200px', margin: 'auto', padding: '60px 20px' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Title level={2} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#37474f' }}>
            About Shoaib General Store
          </Title>
          <Paragraph style={{ fontSize: '18px', color: '#4f6367' }}>
            Your one-stop solution for quality products and seamless shopping since 2024.
          </Paragraph>
        </div>

        {/* Mission, Vision, Customer Focus */}
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={8}>
            <Card
              bordered={false}
              hoverable
              className="card-hover" // Add the hover class here
              style={{
                textAlign: 'center',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                background: '#6DA5C0',
                color: '#fff',
              }}
            >
              <div style={{
                borderRadius: '50%',
                background: '#1976d2',
                display: 'inline-block',
                padding: '20px',
                marginBottom: '15px',
              }}>
                <TrophyOutlined style={{ fontSize: '40px', color: '#fff' }} />
              </div>
              <Title level={4} style={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>Our Mission</Title>
              <Paragraph style={{ color: '#fff' }}>
                To provide top-quality products that meet your daily needs and ensure customer satisfaction.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              bordered={false}
              hoverable
              className="card-hover" // Add the hover class here
              style={{
                textAlign: 'center',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                background: 'linear-gradient(180deg, #4caf50, #66bb6a)',
                color: '#fff',
              }}
            >
              <div style={{
                borderRadius: '50%',
                background: '#fff',
                display: 'inline-block',
                padding: '20px',
                marginBottom: '15px',
              }}>
                <SmileOutlined style={{ fontSize: '40px', color: '#4caf50' }} />
              </div>
              <Title level={4} style={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>Our Vision</Title>
              <Paragraph style={{ color: '#fff' }}>
                To be the most trusted online store, offering premium products with seamless delivery.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              bordered={false}
              hoverable
              className="card-hover" // Add the hover class here
              style={{
                textAlign: 'center',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                background: '#45DFB1',
                color: '#fff',
              }}
            >
              <div style={{
                borderRadius: '50%',
                background: '#fff',
                display: 'inline-block',
                padding: '20px',
                marginBottom: '15px',
              }}>
                <CarOutlined style={{ fontSize: '40px', color: '#ff9800' }} />
              </div>
              <Title level={4} style={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>Customer Focus</Title>
              <Paragraph style={{ color: '#fff' }}>
                We prioritize our customers by offering the best service and fast delivery with every order.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Team & Values Section */}
        <Row align="middle" gutter={[24, 24]} style={{ marginTop: '50px' }}>
          <Col xs={24} md={12}>
            <Image
              src="https://www.synapseindia.com/UserFiles/Step-by-Step%20Guide%20to%20Building%20an%20eCommerce%20Website%20with%20OpenCart.jpg"alt="Team"
              style={{
                borderRadius: '12px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                width: '100%',
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <Title level={3} style={{ fontFamily: 'Poppins, sans-serif', color: '#37474f' }}>Our Values & Team</Title>
            <Paragraph style={{ fontSize: '16px', color: '#616161' }}>
              At Shoaib General Store, we uphold honesty, transparency, and integrity. Our team is
              dedicated to delivering the best experience with every product and service.
            </Paragraph>
            <Text strong style={{ color: '#ff5722' }}>
              "Together, we build trust and excellence."
            </Text>
          </Col>
        </Row>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Title level={4} style={{ fontFamily: 'Poppins, sans-serif', color: '#37474f' }}>Join Us in Our Journey!</Title>
          <Button
            type="primary"
            size="large"
            style={{
              borderRadius: '30px',
              background: 'linear-gradient(90deg, #6DA5C0, #14919B)',
              borderColor: '#1976d2',
              padding: '0 40px',
              fontSize: '18px',
              color: '#fff',
              transition: '0.3s',
            }}
          >
            Shop Now
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default About;
