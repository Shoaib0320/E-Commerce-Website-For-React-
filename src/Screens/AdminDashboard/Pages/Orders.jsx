
// // // // Main Code

// // // // import React, { useEffect, useState } from 'react';
// // // // import MainComponent from './DashboardLayout';
// // // // import { Table, Typography, Button, Row, Col, Drawer, message, Popconfirm, Card, Tag } from 'antd';
// // // // import { db } from '../../../Config/firebaseConfig';
// // // // import { collection, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore';

// // // // const Orders = () => {
// // // //     const { Title } = Typography;
// // // //     const [orders, setOrders] = useState([]);
// // // //     const [visible, setVisible] = useState(false);
// // // //     const [selectedOrder, setSelectedOrder] = useState(null);
// // // //     const [deliveredCount, setDeliveredCount] = useState(0);
// // // //     const [pendingCount, setPendingCount] = useState(0);
// // // //     const [deliveredTotal, setDeliveredTotal] = useState(0); // Total for delivered orders
// // // //     const [pendingTotal, setPendingTotal] = useState(0); // Total for pending orders
// // // //     const [allTotal, setAllTotal] = useState(0); // Total for all orders

// // // //     // Fetch all orders from Firestore
// // // //     useEffect(() => {
// // // //         const fetchOrders = async () => {
// // // //             try {
// // // //                 const querySnapshot = await getDocs(collection(db, 'Checkout'));
// // // //                 const allOrders = [];

// // // //                 querySnapshot.forEach((doc) => {
// // // //                     const orderData = doc.data().checkouts.map(order => ({
// // // //                         ...order,
// // // //                         timestamp: order.timestamp, // Store timestamp for countdown calculation
// // // //                         user: doc.id, // Store the user ID
// // // //                     }));
// // // //                     allOrders.push(...orderData); // Collect all orders
// // // //                 });

// // // //                 setOrders(allOrders);
// // // //                 updateOrderStats(allOrders); // Update counts and totals
// // // //             } catch (error) {
// // // //                 console.error('Error fetching orders:', error);
// // // //                 message.error('Failed to fetch orders.');
// // // //             }
// // // //         };
// // // //         fetchOrders();
// // // //     }, []);

// // // //     const updateOrderStats = (ordersData) => {
// // // //         const pendingOrders = ordersData.filter(order => getTimeLeft(order.timestamp) !== 'Delivered');
// // // //         const deliveredOrders = ordersData.filter(order => getTimeLeft(order.timestamp) === 'Delivered');

// // // //         // Update counts
// // // //         setDeliveredCount(deliveredOrders.length);
// // // //         setPendingCount(pendingOrders.length);

// // // //         // Calculate totals
// // // //         const allOrdersTotal = ordersData.reduce((sum, order) => sum + order.totalAmount, 0);
// // // //         const deliveredTotalAmount = deliveredOrders.reduce((sum, order) => sum + order.totalAmount, 0);
// // // //         const pendingTotalAmount = pendingOrders.reduce((sum, order) => sum + order.totalAmount, 0);

// // // //         setAllTotal(allOrdersTotal);
// // // //         setDeliveredTotal(deliveredTotalAmount);
// // // //         setPendingTotal(pendingTotalAmount);
// // // //     };

// // // //     const getTimeLeft = (timestamp) => {
// // // //         const orderTime = new Date(timestamp);
// // // //         const now = new Date();
// // // //         const timeLeft = 10 * 60 * 1000 - (now - orderTime); // 10 minutes in ms
    
// // // //         if (timeLeft <= 0) return 'Delivered'; // If time is up
    
// // // //         const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
// // // //         const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
    
// // // //         return `${minutes}m ${seconds}s`;
// // // //     };
    

// // // //     // const getTimeLeft = (timestamp) => {
// // // //     //     const orderTime = new Date(timestamp);
// // // //     //     const now = new Date();
// // // //     //     const timeLeft = 2 * 24 * 60 * 60 * 1000 - (now - orderTime); // 2 days in ms

// // // //     //     if (timeLeft <= 0) return 'Delivered'; // If time is up

// // // //     //     const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
// // // //     //     const hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
// // // //     //     const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
// // // //     //     const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

// // // //     //     return `${days}d ${hours}h ${minutes}m ${seconds}s`;
// // // //     // };

// // // //     useEffect(() => {
// // // //         const interval = setInterval(() => {
// // // //             setOrders((prevOrders) =>
// // // //                 prevOrders.map((order) => ({
// // // //                     ...order,
// // // //                     timeLeft: getTimeLeft(order.timestamp), // Update time left
// // // //                     status: getTimeLeft(order.timestamp) === 'Delivered' ? 'Delivered' : 'Pending', // Update status
// // // //                 }))
// // // //             );
// // // //             updateOrderStats(orders); // Update stats dynamically
// // // //         }, 1000); // Update every second

// // // //         return () => clearInterval(interval); // Clean up on unmount
// // // //     }, [orders]);

// // // //     const showDrawer = (order) => {
// // // //         setSelectedOrder(order);
// // // //         setVisible(true);
// // // //     };

// // // //     const closeDrawer = () => {
// // // //         setVisible(false);
// // // //         setSelectedOrder(null);
// // // //     };

// // // //     const deleteOrder = async (orderToDelete) => {
// // // //         try {
// // // //             const ordersRef = doc(db, 'Checkout', orderToDelete.user);
// // // //             const userOrdersSnapshot = await getDoc(ordersRef);

// // // //             if (userOrdersSnapshot.exists()) {
// // // //                 const updatedOrders = userOrdersSnapshot
// // // //                     .data()
// // // //                     .checkouts.filter(order => order.timestamp !== orderToDelete.timestamp);

// // // //                 await updateDoc(ordersRef, { checkouts: updatedOrders });
// // // //                 setOrders(prevOrders => prevOrders.filter(order => order.timestamp !== orderToDelete.timestamp));
// // // //                 updateOrderStats(updatedOrders); // Update counts and totals
// // // //                 message.success('Order deleted successfully!');
// // // //             }
// // // //         } catch (error) {
// // // //             console.error('Error deleting order:', error);
// // // //             message.error('Failed to delete order. Please try again.');
// // // //         }
// // // //     };

// // // //     const columns = [
// // // //         { title: 'ID', dataIndex: 'key', key: 'key' },
// // // //         { title: 'Customer', dataIndex: 'name', key: 'name' },
// // // //         { title: 'User ID', dataIndex: 'user', key: 'user' },
// // // //         { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
// // // //         { title: 'Total (PKR)', dataIndex: 'totalAmount', key: 'totalAmount' },
// // // //         {
// // // //             title: 'Status',
// // // //             dataIndex: 'status',
// // // //             key: 'status',
// // // //             render: (text, record) => (
// // // //                 <Tag color={record.status === 'Pending' ? 'orange' : 'green'}>
// // // //                     {record.status}
// // // //                 </Tag>
// // // //             ),
// // // //         },
// // // //         {
// // // //             title: 'Time Remaining',
// // // //             key: 'timeRemaining',
// // // //             render: (text, record) => (
// // // //                 <span>{record.timeLeft}</span>
// // // //             ),
// // // //         },
// // // //         {
// // // //             title: 'Actions',
// // // //             key: 'actions',
// // // //             render: (text, record) => (
// // // //                 <Row gutter={16}>
// // // //                     <Col>
// // // //                         <Button
// // // //                             style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
// // // //                             onClick={() => showDrawer(record)}
// // // //                         >
// // // //                             View Details
// // // //                         </Button>
// // // //                     </Col>
// // // //                     <Col>
// // // //                         <Popconfirm
// // // //                             title="Are you sure you want to delete this order?"
// // // //                             onConfirm={() => deleteOrder(record)}
// // // //                             okText="Yes"
// // // //                             cancelText="No"
// // // //                         >
// // // //                             <Button danger>Delete</Button>
// // // //                         </Popconfirm>
// // // //                     </Col>
// // // //                 </Row>
// // // //             ),
// // // //         },
// // // //     ];

// // // //     return (
// // // //         <>
// // // //             <MainComponent title="Orders" />
// // // //             <Title level={2}>Orders</Title>

// // // //             <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
// // // //                 <Col xs={24} sm={8}>
// // // //                     <Card title="All Orders" bordered={false}>
// // // //                         <p>Total Items: {orders.length}</p>
// // // //                         <p>Total: PKR {allTotal.toFixed(2)}</p>
// // // //                     </Card>
// // // //                 </Col>
// // // //                 <Col xs={24} sm={8}>
// // // //                     <Card title="Delivered Orders" bordered={false}>
// // // //                         <p>Total Items: {deliveredCount}</p>
// // // //                         <p>Total: PKR {deliveredTotal.toFixed(2)}</p>
// // // //                     </Card>
// // // //                 </Col>
// // // //                 <Col xs={24} sm={8}>
// // // //                     <Card title="Pending Orders" bordered={false}>
// // // //                         <p>Total Items: {pendingCount}</p>
// // // //                         <p>Total: PKR {pendingTotal.toFixed(2)}</p>
// // // //                     </Card>
// // // //                 </Col>
// // // //             </Row>

// // // //             <Row>
// // // //                 <Col span={24}>
// // // //                     <Table
// // // //                         dataSource={orders}
// // // //                         columns={columns}
// // // //                         pagination={false}
// // // //                         scroll={{ x: 600 }}
// // // //                     />
// // // //                 </Col>
// // // //             </Row>

// // // //             <Drawer
// // // //                 title="Order Details"
// // // //                 placement="right"
// // // //                 onClose={closeDrawer}
// // // //                 visible={visible}
// // // //                 width={400}
// // // //             >
// // // //                 {selectedOrder && (
// // // //                     <div>
// // // //                         <h3>Customer: {selectedOrder.name}</h3>
// // // //                         <p>User ID: {selectedOrder.user}</p>
// // // //                         <p>Address: {selectedOrder.address}</p>
// // // //                         <p>Phone: {selectedOrder.phone}</p>
// // // //                         <p>Total Items: {selectedOrder.totalItems}</p>
// // // //                         <p>Total Amount: PKR {selectedOrder.totalAmount.toFixed(2)}</p>
// // // //                         <h4>Items:</h4>
// // // //                         {selectedOrder.items.map(item => (
// // // //                             <div key={item.item.id} className="cart-item">
// // // //                                 <img
// // // //                                     src={item.item.imageUrl}
// // // //                                     alt={item.item.title}
// // // //                                     style={{ width: '50px', height: '50px' }}
// // // //                                 />
// // // //                                 <div>
// // // //                                     <h5>{item.item.title}</h5>
// // // //                                     <p>Price: PKR {item.item.price}</p>
// // // //                                     <p>Quantity: {item.quantity}</p>
// // // //                                 </div>
// // // //                             </div>
// // // //                         ))}
// // // //                     </div>
// // // //                 )}

// // // //             </Drawer>
// // // //         </>
// // // //     );
// // // // };

// // // // export default Orders;







// // // import React, { useEffect, useState } from 'react';
// // // import MainComponent from './DashboardLayout';
// // // import { Table, Typography, Button, Row, Col, Drawer, message, Popconfirm, Card, Tag, Form, Input } from 'antd';
// // // import { db } from '../../../Config/firebaseConfig';
// // // import { collection, getDocs, updateDoc, doc, getDoc, setDoc } from 'firebase/firestore';

// // // const Orders = () => {
// // //     const { Title } = Typography;
// // //     const [orders, setOrders] = useState([]);
// // //     const [visible, setVisible] = useState(false);
// // //     const [selectedOrder, setSelectedOrder] = useState(null);
// // //     const [deliveredCount, setDeliveredCount] = useState(0);
// // //     const [pendingCount, setPendingCount] = useState(0);
// // //     const [deliveredTotal, setDeliveredTotal] = useState(0);
// // //     const [pendingTotal, setPendingTotal] = useState(0);
// // //     const [allTotal, setAllTotal] = useState(0);
// // //     const [feedbackVisible, setFeedbackVisible] = useState(false);
// // //     const [feedback, setFeedback] = useState('');

// // //     useEffect(() => {
// // //         const fetchOrders = async () => {
// // //             try {
// // //                 const querySnapshot = await getDocs(collection(db, 'Checkout'));
// // //                 const allOrders = [];

// // //                 querySnapshot.forEach((doc) => {
// // //                     const orderData = doc.data().checkouts.map(order => ({
// // //                         ...order,
// // //                         timestamp: order.timestamp,
// // //                         user: doc.id,
// // //                     }));
// // //                     allOrders.push(...orderData);
// // //                 });

// // //                 setOrders(allOrders);
// // //                 updateOrderStats(allOrders);
// // //             } catch (error) {
// // //                 console.error('Error fetching orders:', error);
// // //                 message.error('Failed to fetch orders.');
// // //             }
// // //         };
// // //         fetchOrders();
// // //     }, []);

// // //     const updateOrderStats = (ordersData) => {
// // //         const pendingOrders = ordersData.filter(order => getTimeLeft(order.timestamp) !== 'Delivered');
// // //         const deliveredOrders = ordersData.filter(order => getTimeLeft(order.timestamp) === 'Delivered');

// // //         setDeliveredCount(deliveredOrders.length);
// // //         setPendingCount(pendingOrders.length);

// // //         const allOrdersTotal = ordersData.reduce((sum, order) => sum + order.totalAmount, 0);
// // //         const deliveredTotalAmount = deliveredOrders.reduce((sum, order) => sum + order.totalAmount, 0);
// // //         const pendingTotalAmount = pendingOrders.reduce((sum, order) => sum + order.totalAmount, 0);

// // //         setAllTotal(allOrdersTotal);
// // //         setDeliveredTotal(deliveredTotalAmount);
// // //         setPendingTotal(pendingTotalAmount);
// // //     };

// // //     const updateOrderStatus = async (order) => {
// // //         const orderRef = doc(db, 'Checkout', order.user);
// // //         const userOrdersSnapshot = await getDoc(orderRef);

// // //         if (userOrdersSnapshot.exists()) {
// // //             const updatedOrders = userOrdersSnapshot.data().checkouts.map(o => {
// // //                 if (o.timestamp === order.timestamp) {
// // //                     return { ...o, status: 'Delivered' }; // Update status to Delivered
// // //                 }
// // //                 return o;
// // //             });

// // //             await updateDoc(orderRef, { checkouts: updatedOrders });
// // //             setOrders(prevOrders => prevOrders.map(o => o.timestamp === order.timestamp ? { ...o, status: 'Delivered' } : o)); // Update state
// // //             message.success('Order status updated to Delivered!');
// // //         }
// // //     };


// // //     const getTimeLeft = (timestamp) => {
// // //         const orderTime = new Date(timestamp);
// // //         const now = new Date();
// // //         const timeLeft = 10 * 60 * 1000 - (now - orderTime);

// // //         if (timeLeft <= 0) return 'Delivered';

// // //         const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
// // //         const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

// // //         return `${minutes}m ${seconds}s`;
// // //     };

// // // //     // const getTimeLeft = (timestamp) => {
// // // //     //     const orderTime = new Date(timestamp);
// // // //     //     const now = new Date();
// // // //     //     const timeLeft = 2 * 24 * 60 * 60 * 1000 - (now - orderTime); // 2 days in ms

// // // //     //     if (timeLeft <= 0) return 'Delivered'; // If time is up

// // // //     //     const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
// // // //     //     const hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
// // // //     //     const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
// // // //     //     const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

// // // //     //     return `${days}d ${hours}h ${minutes}m ${seconds}s`;
// // // //     // };

// // //     useEffect(() => {
// // //         const interval = setInterval(() => {
// // //             setOrders((prevOrders) =>
// // //                 prevOrders.map((order) => ({
// // //                     ...order,
// // //                     timeLeft: getTimeLeft(order.timestamp),
// // //                     status: getTimeLeft(order.timestamp) === 'Delivered' ? 'Delivered' : 'Pending',
// // //                 }))
// // //             );
// // //             updateOrderStats(orders);
// // //         }, 1000);

// // //         return () => clearInterval(interval);
// // //     }, [orders]);

// // //     const showDrawer = (order) => {
// // //         setSelectedOrder(order);
// // //         setVisible(true);
// // //         if (order.status === 'Delivered') {
// // //             setFeedbackVisible(true);
// // //         }
// // //     };

// // //     const closeDrawer = () => {
// // //         setVisible(false);
// // //         setSelectedOrder(null);
// // //         setFeedbackVisible(false);
// // //         setFeedback(''); // Reset feedback
// // //     };

// // //     const deleteOrder = async (orderToDelete) => {
// // //         try {
// // //             const ordersRef = doc(db, 'Checkout', orderToDelete.user);
// // //             const userOrdersSnapshot = await getDoc(ordersRef);

// // //             if (userOrdersSnapshot.exists()) {
// // //                 const updatedOrders = userOrdersSnapshot.data().checkouts.filter(order => order.timestamp !== orderToDelete.timestamp);
// // //                 await updateDoc(ordersRef, { checkouts: updatedOrders });
// // //                 setOrders(prevOrders => prevOrders.filter(order => order.timestamp !== orderToDelete.timestamp));
// // //                 updateOrderStats(updatedOrders);
// // //                 message.success('Order deleted successfully!');
// // //             }
// // //         } catch (error) {
// // //             console.error('Error deleting order:', error);
// // //             message.error('Failed to delete order. Please try again.');
// // //         }
// // //     };

// // //     // const handleFeedbackSubmit = async () => {
// // //     //     if (!feedback) {
// // //     //         message.warning('Please provide feedback before submitting.');
// // //     //         return;
// // //     //     }

// // //     //     try {
// // //     //         const feedbackRef = doc(db, 'Feedback', selectedOrder.user); // User ID as document ID
// // //     //         await setDoc(feedbackRef, {
// // //     //             feedback: feedback,
// // //     //             orderID: selectedOrder.timestamp, // Store order ID for reference
// // //     //             timestamp: new Date(),
// // //     //         });

// // //     //         message.success('Feedback submitted successfully!');
// // //     //         closeDrawer(); // Close the drawer after submission
// // //     //     } catch (error) {
// // //     //         console.error('Error submitting feedback:', error);
// // //     //         message.error('Failed to submit feedback. Please try again.');
// // //     //     }
// // //     // };

// // //     const columns = [
// // //         { title: 'ID', dataIndex: 'key', key: 'key' },
// // //         { title: 'Customer', dataIndex: 'name', key: 'name' },
// // //         { title: 'User ID', dataIndex: 'user', key: 'user' },
// // //         { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
// // //         { title: 'Total (PKR)', dataIndex: 'totalAmount', key: 'totalAmount' },
// // //         {
// // //             title: 'Status',
// // //             dataIndex: 'status',
// // //             key: 'status',
// // //             render: (text, record) => (
// // //                 <Tag color={record.status === 'Pending' ? 'orange' : 'green'}>
// // //                     {record.status}
// // //                 </Tag>
// // //             ),
// // //         },
// // //         {
// // //             title: 'Time Remaining',
// // //             key: 'timeRemaining',
// // //             render: (text, record) => (
// // //                 <span>{record.timeLeft}</span>
// // //             ),
// // //         },
// // //         {
// // //             title: 'Actions',
// // //             key: 'actions',
// // //             render: (text, record) => (
// // //                 <Row gutter={16}>
// // //                     <Col>
// // //                         <Button
// // //                             style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
// // //                             onClick={() => showDrawer(record)}
// // //                         >
// // //                             View Details
// // //                         </Button>
// // //                     </Col>
// // //                     <Col>
// // //                         <Popconfirm
// // //                             title="Are you sure you want to delete this order?"
// // //                             onConfirm={() => deleteOrder(record)}
// // //                             okText="Yes"
// // //                             cancelText="No"
// // //                         >
// // //                             <Button danger>Delete</Button>
// // //                         </Popconfirm>
// // //                     </Col>
// // //                     <Col>
// // //                         <Button onClick={() => updateOrderStatus(record)}>Mark as Delivered</Button>
// // //                     </Col>
// // //                 </Row>
// // //             ),
// // //         },
// // //     ];

// // //     return (
// // //         <>
// // //             <MainComponent title="Orders" />
// // //             <br />
// // //             <Title level={2}>All Orders Details</Title>

// // //             <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
// // //                 <Col xs={24} sm={8}>
// // //                     <Card title="All Orders" bordered={false}>
// // //                         <p>Total Items: {orders.length}</p>
// // //                         <p>Total: PKR {allTotal.toFixed(2)}</p>
// // //                     </Card>
// // //                 </Col>
// // //                 <Col xs={24} sm={8}>
// // //                     <Card title="Delivered Orders" bordered={false}>
// // //                         <p>Total Items: {deliveredCount}</p>
// // //                         <p>Total: PKR {deliveredTotal.toFixed(2)}</p>
// // //                     </Card>
// // //                 </Col>
// // //                 <Col xs={24} sm={8}>
// // //                     <Card title="Pending Orders" bordered={false}>
// // //                         <p>Total Items: {pendingCount}</p>
// // //                         <p>Total: PKR {pendingTotal.toFixed(2)}</p>
// // //                     </Card>
// // //                 </Col>
// // //             </Row>

// // //             <Table
// // //                 columns={columns}
// // //                 dataSource={orders}
// // //                 pagination={false}
// // //                 rowKey={(record) => record.timestamp} // Ensure unique keys for each row
// // //             />

// // //             <Drawer
// // //                 title="Order Details"
// // //                 placement="right"
// // //                 onClose={closeDrawer}
// // //                 visible={visible}
// // //                 width="35%"
// // //             >
// // //                 {selectedOrder && (
// // //                     <>
// // //                         <Title level={4}>Order ID: {selectedOrder.timestamp}</Title>
// // //                         <p>Total Amount: PKR {selectedOrder.totalAmount.toFixed(2)}</p>
// // //                         <p>Status: {selectedOrder.status}</p>

// // //                         <div>
// // //                              <h3>Customer: {selectedOrder.name}</h3>
// // //                              <p>User ID: {selectedOrder.user}</p>
// // //                              <p>Address: {selectedOrder.address}</p>
// // //                              <p>Phone: {selectedOrder.phone}</p>
// // //                              <p>Total Items: {selectedOrder.totalItems}</p>
// // //                              <p>Total Amount: PKR {selectedOrder.totalAmount.toFixed(2)}</p>
// // //                              <h4>Items:</h4>
// // //                              {selectedOrder.items.map(item => (
// // //                             <div key={item.item.id} className="cart-item">
// // //                                 <img
// // //                                     src={item.item.imageUrl}
// // //                                     alt={item.item.title}
// // //                                     style={{ width: '50px', height: '50px' }}
// // //                                 />
// // //                                 <div>
// // //                                     <h5>{item.item.title}</h5>
// // //                                     <p>Price: PKR {item.item.price}</p>
// // //                                     <p>Quantity: {item.quantity}</p>
// // //                                 </div>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 </>
// // //                 )}
// // //             </Drawer>

// // //             {/* <Drawer
// // //                 title="Submit Feedback"
// // //                 placement="right"
// // //                 onClose={() => setFeedbackVisible(false)}
// // //                 visible={feedbackVisible}
// // //                 width="35%"
// // //             >
// // //                 <Form onFinish={handleFeedbackSubmit}>
// // //                     <Form.Item label="Feedback" required>
// // //                         <Input.TextArea
// // //                             value={feedback}
// // //                             onChange={(e) => setFeedback(e.target.value)}
// // //                             placeholder="Enter your feedback here"
// // //                             rows={4}
// // //                         />
// // //                     </Form.Item>
// // //                     <Form.Item>
// // //                         <Button type="primary" htmlType="submit">Submit Feedback</Button>
// // //                     </Form.Item>
// // //                 </Form>
// // //             </Drawer> */}
// // //         </>
// // //     );
// // // };

// // // export default Orders;






// // import React, { useEffect, useState } from 'react';
// // import MainComponent from './DashboardLayout';
// // import { Table, Typography, Button, Row, Col, Drawer, message, Popconfirm, Card, Tag, Form, Input } from 'antd';
// // import { db } from '../../../Config/firebaseConfig';
// // import { collection, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore';

// // const Orders = () => {
// //     const { Title } = Typography;
// //     const [orders, setOrders] = useState([]);
// //     const [visible, setVisible] = useState(false);
// //     const [selectedOrder, setSelectedOrder] = useState(null);
// //     const [deliveredCount, setDeliveredCount] = useState(0);
// //     const [pendingCount, setPendingCount] = useState(0);
// //     const [deliveredTotal, setDeliveredTotal] = useState(0);
// //     const [pendingTotal, setPendingTotal] = useState(0);
// //     const [allTotal, setAllTotal] = useState(0);
// //     const [feedbackVisible, setFeedbackVisible] = useState(false);
// //     const [feedback, setFeedback] = useState('');

// //     useEffect(() => {
// //         const fetchOrders = async () => {
// //             try {
// //                 const querySnapshot = await getDocs(collection(db, 'Checkout'));
// //                 const allOrders = [];

// //                 querySnapshot.forEach((doc) => {
// //                     const orderData = doc.data().checkouts.map(order => ({
// //                         ...order,
// //                         timestamp: order.timestamp,
// //                         user: doc.id,
// //                     }));
// //                     allOrders.push(...orderData);
// //                 });

// //                 setOrders(allOrders);
// //                 updateOrderStats(allOrders);
// //             } catch (error) {
// //                 console.error('Error fetching orders:', error);
// //                 message.error('Failed to fetch orders.');
// //             }
// //         };
// //         fetchOrders();
// //     }, []);

// //     const updateOrderStats = (ordersData) => {
// //         const pendingOrders = ordersData.filter(order => order.status !== 'Delivered');
// //         const deliveredOrders = ordersData.filter(order => order.status === 'Delivered');

// //         setDeliveredCount(deliveredOrders.length);
// //         setPendingCount(pendingOrders.length);

// //         const allOrdersTotal = ordersData.reduce((sum, order) => sum + order.totalAmount, 0);
// //         const deliveredTotalAmount = deliveredOrders.reduce((sum, order) => sum + order.totalAmount, 0);
// //         const pendingTotalAmount = pendingOrders.reduce((sum, order) => sum + order.totalAmount, 0);

// //         setAllTotal(allOrdersTotal);
// //         setDeliveredTotal(deliveredTotalAmount);
// //         setPendingTotal(pendingTotalAmount);
// //     };

// //     const updateOrderStatus = async (order) => {
// //         const orderRef = doc(db, 'Checkout', order.user);
// //         const userOrdersSnapshot = await getDoc(orderRef);

// //         if (userOrdersSnapshot.exists()) {
// //             const updatedOrders = userOrdersSnapshot.data().checkouts.map(o => {
// //                 if (o.timestamp === order.timestamp) {
// //                     return { ...o, status: 'Delivered' }; // Update status to Delivered
// //                 }
// //                 return o;
// //             });

// //             await updateDoc(orderRef, { checkouts: updatedOrders });
// //             setOrders(prevOrders => prevOrders.map(o => o.timestamp === order.timestamp ? { ...o, status: 'Delivered' } : o)); // Update state
// //             message.success('Order status updated to Delivered!');
// //         }
// //     };

// //     const showDrawer = (order) => {
// //         setSelectedOrder(order);
// //         setVisible(true);
// //         if (order.status === 'Delivered') {
// //             setFeedbackVisible(true);
// //         }
// //     };

// //     const closeDrawer = () => {
// //         setVisible(false);
// //         setSelectedOrder(null);
// //         setFeedbackVisible(false);
// //         setFeedback(''); // Reset feedback
// //     };

// //     const deleteOrder = async (orderToDelete) => {
// //         try {
// //             const ordersRef = doc(db, 'Checkout', orderToDelete.user);
// //             const userOrdersSnapshot = await getDoc(ordersRef);

// //             if (userOrdersSnapshot.exists()) {
// //                 const updatedOrders = userOrdersSnapshot.data().checkouts.filter(order => order.timestamp !== orderToDelete.timestamp);
// //                 await updateDoc(ordersRef, { checkouts: updatedOrders });
// //                 setOrders(prevOrders => prevOrders.filter(order => order.timestamp !== orderToDelete.timestamp));
// //                 updateOrderStats(updatedOrders);
// //                 message.success('Order deleted successfully!');
// //             }
// //         } catch (error) {
// //             console.error('Error deleting order:', error);
// //             message.error('Failed to delete order. Please try again.');
// //         }
// //     };

// //     const columns = [
// //         { title: 'ID', dataIndex: 'key', key: 'key' },
// //         { title: 'Customer', dataIndex: 'name', key: 'name' },
// //         { title: 'User ID', dataIndex: 'user', key: 'user' },
// //         { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
// //         { title: 'Total (PKR)', dataIndex: 'totalAmount', key: 'totalAmount' },
// //         {
// //             title: 'Status',
// //             dataIndex: 'status',
// //             key: 'status',
// //             render: (text, record) => (
// //                 <Tag color={record.status === 'Pending' ? 'orange' : 'green'}>
// //                     {record.status}
// //                 </Tag>
// //             ),
// //         },
// //         {
// //             title: 'Actions',
// //             key: 'actions',
// //             render: (text, record) => (
// //                 <Row gutter={16}>
// //                     <Col>
// //                         <Button
// //                             style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
// //                             onClick={() => showDrawer(record)}
// //                         >
// //                             View Details
// //                         </Button>
// //                     </Col>
// //                     <Col>
// //                         <Popconfirm
// //                             title="Are you sure you want to delete this order?"
// //                             onConfirm={() => deleteOrder(record)}
// //                             okText="Yes"
// //                             cancelText="No"
// //                         >
// //                             <Button danger>Delete</Button>
// //                         </Popconfirm>
// //                     </Col>
// //                     <Col>
// //                         <Button onClick={() => updateOrderStatus(record)}>Mark as Delivered</Button>
// //                     </Col>
// //                 </Row>
// //             ),
// //         },
// //     ];

// //     return (
// //         <>
// //             <MainComponent showMainContent={false} title="Orders"/> {/* Show only sidebar */}

// //             <br />
// //             <Title level={2}>All Orders Details</Title>

// //             <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
// //                 <Col xs={24} sm={8}>
// //                     <Card title="All Orders" bordered={false}>
// //                         <h3>Total Items: {orders.length}</h3>
// //                         <h5>Total: PKR {allTotal}</h5>
// //                     </Card>
// //                 </Col>
// //                 <Col xs={24} sm={8}>
// //                     <Card title="Delivered Orders" bordered={false}>
// //                         <h3>Total Items: {deliveredCount}</h3>
// //                         <h5>Total: PKR {deliveredTotal}</h5>
// //                     </Card>
// //                 </Col>
// //                 <Col xs={24} sm={8}>
// //                     <Card title="Pending Orders" bordered={false}>
// //                         <h3>Total Items: {pendingCount}</h3>
// //                         <h5>Total: PKR {pendingTotal}</h5>
// //                     </Card>
// //                 </Col>
// //             </Row>

// //             <Table
// //                 columns={columns}
// //                 dataSource={orders}
// //                 pagination={false}
// //                 rowKey={(record) => record.timestamp} // Ensure unique keys for each row
// //             />

// //             <Drawer
// //                 title="Order Details"
// //                 placement="right"
// //                 onClose={closeDrawer}
// //                 visible={visible}
// //                 width="35%"
// //             >
// //                 {selectedOrder && (
// //                     <>
// //                         <Title level={4}>Order ID: {selectedOrder.timestamp}</Title>
// //                         <p>Total Amount: PKR {selectedOrder.totalAmount.toFixed(2)}</p>
// //                         <p>Status: {selectedOrder.status}</p>

// //                            <div>
// //                                <h3>Customer: {selectedOrder.name}</h3>
// //                                <p>User ID: {selectedOrder.user}</p>
// //                                <p>Address: {selectedOrder.address}</p>
// //                                <p>Phone: {selectedOrder.phone}</p>
// //                                <p>Total Items: {selectedOrder.totalItems}</p>
// //                                <p>Total Amount: PKR {selectedOrder.totalAmount.toFixed(2)}</p>
// //                                <h4>Items:</h4>
// //                                {selectedOrder.items.map(item => (
// //                                 <div key={item.item.id} className="cart-item">
// //                                     <img
// //                                         src={item.item.imageUrl}
// //                                         alt={item.item.name}
// //                                         style={{ width: '50px', marginRight: '10px' }}
// //                                     />
// //                                     <br />
// //                                     <span>{item.item.name}</span>
// //                                     <span style={{ marginLeft: '10px' }}>Quantity: {item.quantity}</span>
// //                                     <span style={{ marginLeft: '10px' }}>Price: PKR {item.item.price.toFixed(2)}</span>
// //                                 </div>
// //                             ))}
// //                             </div>

// //                         {selectedOrder.status === 'Delivered' && (
// //                             <div>
// //                                 <Title level={4}>Feedback</Title>
// //                                 <Form layout="vertical">
// //                                     <Form.Item label="Leave your feedback">
// //                                         <Input.TextArea
// //                                             rows={4}
// //                                             value={feedback}
// //                                             onChange={(e) => setFeedback(e.target.value)}
// //                                         />
// //                                     </Form.Item>
// //                                     <Button type="primary" onClick={() => console.log(feedback)}>
// //                                         Submit Feedback
// //                                     </Button>
// //                                 </Form>
// //                             </div>
// //                         )}
// //                     </>
// //                 )}
// //             </Drawer>
// //         </>
// //     );
// // };

// // export default Orders;






import React, { useEffect, useState } from 'react';
import MainComponent from './DashboardLayout';
import { Table, Typography, Button, Row, Col, Drawer, message, Popconfirm, Card, Tag } from 'antd';
import { db } from '../../../Config/firebaseConfig';
import { collection, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore';
import './Orders.css'; // Import CSS

const Orders = () => {
    const { Title } = Typography;
    const [orders, setOrders] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [deliveredCount, setDeliveredCount] = useState(0);
    const [pendingCount, setPendingCount] = useState(0);
    const [deliveredTotal, setDeliveredTotal] = useState(0);
    const [pendingTotal, setPendingTotal] = useState(0);
    const [allTotal, setAllTotal] = useState(0);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Checkout'));
                const allOrders = [];

                querySnapshot.forEach((doc) => {
                    const orderData = doc.data().checkouts.map(order => ({
                        ...order,
                        timestamp: order.timestamp,
                        user: doc.id,
                    }));
                    allOrders.push(...orderData);
                });

                setOrders(allOrders);
                updateOrderStats(allOrders);
            } catch (error) {
                console.error('Error fetching orders:', error);
                message.error('Failed to fetch orders.');
            }
        };
        fetchOrders();
    }, []);

    const updateOrderStats = (ordersData) => {
        const pendingOrders = ordersData.filter(order => order.status !== 'Delivered');
        const deliveredOrders = ordersData.filter(order => order.status === 'Delivered');

        setDeliveredCount(deliveredOrders.length);
        setPendingCount(pendingOrders.length);

        const allOrdersTotal = ordersData.reduce((sum, order) => sum + order.totalAmount, 0);
        const deliveredTotalAmount = deliveredOrders.reduce((sum, order) => sum + order.totalAmount, 0);
        const pendingTotalAmount = pendingOrders.reduce((sum, order) => sum + order.totalAmount, 0);

        setAllTotal(allOrdersTotal);
        setDeliveredTotal(deliveredTotalAmount);
        setPendingTotal(pendingTotalAmount);
    };

    const updateOrderStatus = async (order) => {
        const orderRef = doc(db, 'Checkout', order.user);
        const userOrdersSnapshot = await getDoc(orderRef);

        if (userOrdersSnapshot.exists()) {
            const updatedOrders = userOrdersSnapshot.data().checkouts.map(o => {
                if (o.timestamp === order.timestamp) {
                    return { ...o, status: 'Delivered' };
                }
                return o;
            });

            await updateDoc(orderRef, { checkouts: updatedOrders });
            setOrders(prevOrders => prevOrders.map(o => o.timestamp === order.timestamp ? { ...o, status: 'Delivered' } : o));
            message.success('Order status updated to Delivered!');
        }
    };

    const showDrawer = (order) => {
        setSelectedOrder(order);
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
        setSelectedOrder(null);
    };

    const deleteOrder = async (orderToDelete) => {
        try {
            const ordersRef = doc(db, 'Checkout', orderToDelete.user);
            const userOrdersSnapshot = await getDoc(ordersRef);

            if (userOrdersSnapshot.exists()) {
                const updatedOrders = userOrdersSnapshot.data().checkouts.filter(order => order.timestamp !== orderToDelete.timestamp);
                await updateDoc(ordersRef, { checkouts: updatedOrders });
                setOrders(prevOrders => prevOrders.filter(order => order.timestamp !== orderToDelete.timestamp));
                updateOrderStats(updatedOrders);
                message.success('Order deleted successfully!');
            }
        } catch (error) {
            console.error('Error deleting order:', error);
            message.error('Failed to delete order. Please try again.');
        }
    };

    const columns = [
        { title: 'ID', dataIndex: 'key', key: 'key' },
        { title: 'Customer', dataIndex: 'name', key: 'name' },
        { title: 'User ID', dataIndex: 'user', key: 'user' },
        { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
        { title: 'Total (PKR)', dataIndex: 'totalAmount', key: 'totalAmount' },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => {
                const status = record.status === 'Delivered' ? 'Delivered' : 'Pending';
                const color = status === 'Pending' ? 'orange' : 'green';
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <Row gutter={16}>
                    <Col>
                        <Button style={{ backgroundColor: '#6DA5C0', color: '#fff' }} onClick={() => showDrawer(record)}>
                            View Details
                        </Button>
                    </Col>
                    <Col>
                        <Popconfirm
                            title="Are you sure you want to delete this order?"
                            onConfirm={() => deleteOrder(record)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger>Delete</Button>
                        </Popconfirm>
                    </Col>
                    <Col>
                        <Button onClick={() => updateOrderStatus(record)}>Mark as Delivered</Button>
                    </Col>
                </Row>
            ),
        },
    ];

    return (
        <>
            <MainComponent showMainContent={false} title="Orders" />
            <br />
            <Title level={2}>All Orders Details</Title>

            <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
                <Col xs={24} sm={8}>
                    <Card title="All Orders" bordered={false}>
                        <h3>Total Items: {orders.length}</h3>
                        <h5>Total: PKR {allTotal}</h5>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card title="Delivered Orders" bordered={false}>
                        <h3>Total Items: {deliveredCount}</h3>
                        <h5>Total: PKR {deliveredTotal}</h5>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card title="Pending Orders" bordered={false}>
                        <h3>Total Items: {pendingCount}</h3>
                        <h5>Total: PKR {pendingTotal}</h5>
                    </Card>
                </Col>
            </Row>

            <div className="table-responsive">
                <Table columns={columns} dataSource={orders} pagination={false} rowKey={(record) => record.timestamp} />
            </div>

            <Drawer title="Order Details" placement="right" onClose={closeDrawer} visible={visible} width="35%">
                {selectedOrder && (
                    <>
                        <Title level={4}>Order ID: {selectedOrder.timestamp}</Title>
                        <p>Total Amount: PKR {selectedOrder.totalAmount.toFixed(2)}</p>
                        <p>Status: {selectedOrder.status}</p>

                        
                                <div>
                                    <h3>Customer: {selectedOrder.name}</h3>
                                    <p>User ID: {selectedOrder.user}</p>
                                    <p>Address: {selectedOrder.address}</p>
                                    <p>Phone: {selectedOrder.phone}</p>
                                    <p>Total Items: {selectedOrder.totalItems}</p>
                                    <p>Total Amount: PKR {selectedOrder.totalAmount.toFixed(2)}</p>
                                    <h4>Items:</h4>
                                    {selectedOrder.items.map(item => (
                                        <div key={item.item.id} className="cart-item">
                                            <img
                                                src={item.item.imageUrl}
                                                alt={item.item.name}
                                                style={{ width: '50px', marginRight: '10px' }}
                                            />
                                            <br />
                                            <span>{item.item.name}</span>
                                            <span style={{ marginLeft: '10px' }}>Quantity: {item.quantity}</span>
                                            <span style={{ marginLeft: '10px' }}>Price: PKR {item.item.price.toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>
                        
                    </>
                )}
            </Drawer>
        </>
    );
};

export default Orders;
