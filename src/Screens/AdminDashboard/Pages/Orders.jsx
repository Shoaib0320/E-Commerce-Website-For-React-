// // // // // // // // // import React from 'react';
// // // // // // // // // import MainComponent from './DashboardLayout';
// // // // // // // // // import { Table, Typography, Button, Row, Col } from 'antd';

// // // // // // // // // const Orders = () => {
// // // // // // // // //   const { Title } = Typography;

// // // // // // // // //   // Example order data
// // // // // // // // //   const orders = [
// // // // // // // // //     { key: 1, customer: 'John Doe', date: '2024-10-15', total: 29.99, status: 'Shipped' },
// // // // // // // // //     { key: 2, customer: 'Jane Smith', date: '2024-10-14', total: 49.99, status: 'Pending' },
// // // // // // // // //     { key: 3, customer: 'Alice Johnson', date: '2024-10-13', total: 19.99, status: 'Delivered' },
// // // // // // // // //   ];

// // // // // // // // //   const columns = [
// // // // // // // // //     { title: 'ID', dataIndex: 'key', key: 'key' },
// // // // // // // // //     { title: 'Customer', dataIndex: 'customer', key: 'customer' },
// // // // // // // // //     { title: 'Date', dataIndex: 'date', key: 'date' },
// // // // // // // // //     { title: 'Total ($)', dataIndex: 'total', key: 'total' },
// // // // // // // // //     { title: 'Status', dataIndex: 'status', key: 'status' },
// // // // // // // // //     {
// // // // // // // // //       title: 'Actions',
// // // // // // // // //       key: 'actions',
// // // // // // // // //       render: () => <Button style={{backgroundColor:'#6DA5C0'}} type="primary">View Details</Button>,
// // // // // // // // //     },
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <MainComponent title={'Orders'} />
// // // // // // // // //       <Title level={2}>Orders</Title>
// // // // // // // // //       <Row>
// // // // // // // // //         <Col span={24}>
// // // // // // // // //           <Table dataSource={orders} columns={columns} pagination={false} scroll={{ x: 600 }} />
// // // // // // // // //         </Col>
// // // // // // // // //       </Row>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Orders;









// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import MainComponent from './DashboardLayout';
// // // // // // // // import { Table, Typography, Button, Row, Col, Drawer } from 'antd';
// // // // // // // // import { db } from '../../../Config/firebaseConfig';
// // // // // // // // import { collection, getDocs } from 'firebase/firestore';

// // // // // // // // const Orders = () => {
// // // // // // // //   const { Title } = Typography;

// // // // // // // //   const [orders, setOrders] = useState([]);
// // // // // // // //   const [visible, setVisible] = useState(false);
// // // // // // // //   const [selectedOrder, setSelectedOrder] = useState(null);

// // // // // // // //   // Fetch orders from Firestore
// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchOrders = async () => {
// // // // // // // //       const ordersCollection = collection(db, 'checkout');
// // // // // // // //       const orderSnapshot = await getDocs(ordersCollection);
// // // // // // // //       const orderList = orderSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // // // // // //       setOrders(orderList);
// // // // // // // //     };

// // // // // // // //     fetchOrders();
// // // // // // // //   }, []);

// // // // // // // //   const showDrawer = (order) => {
// // // // // // // //     setSelectedOrder(order);
// // // // // // // //     setVisible(true);
// // // // // // // //   };

// // // // // // // //   const onClose = () => {
// // // // // // // //     setVisible(false);
// // // // // // // //     setSelectedOrder(null);
// // // // // // // //   };

// // // // // // // //   const columns = [
// // // // // // // //     { title: 'ID', dataIndex: 'id', key: 'id' },
// // // // // // // //     { title: 'Customer', dataIndex: 'name', key: 'name' },
// // // // // // // //     { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
// // // // // // // //     { title: 'Total ($)', dataIndex: 'totalAmount', key: 'totalAmount' },
// // // // // // // //     { title: 'Status', dataIndex: 'status', key: 'status' }, // Ensure you have a status field in your Firestore data
// // // // // // // //     {
// // // // // // // //       title: 'Actions',
// // // // // // // //       key: 'actions',
// // // // // // // //       render: (text, order) => (
// // // // // // // //         <Button style={{ backgroundColor: '#6DA5C0' }} type="primary" onClick={() => showDrawer(order)}>
// // // // // // // //           View Details
// // // // // // // //         </Button>
// // // // // // // //       ),
// // // // // // // //     },
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <MainComponent title={'Orders'} />
// // // // // // // //       <Title level={2}>Orders</Title>
// // // // // // // //       <Row>
// // // // // // // //         <Col span={24}>
// // // // // // // //           <Table dataSource={orders} columns={columns} pagination={false} scroll={{ x: 600 }} />
// // // // // // // //         </Col>
// // // // // // // //       </Row>

// // // // // // // //       <Drawer
// // // // // // // //         title="Order Details"
// // // // // // // //         placement="right"
// // // // // // // //         onClose={onClose}
// // // // // // // //         visible={visible}
// // // // // // // //         width={400}
// // // // // // // //       >
// // // // // // // //         {selectedOrder && (
// // // // // // // //           <div>
// // // // // // // //             <h3>Customer: {selectedOrder.name}</h3>
// // // // // // // //             <p>Address: {selectedOrder.address}</p>
// // // // // // // //             <p>Phone: {selectedOrder.phone}</p>
// // // // // // // //             <p>Total Items: {selectedOrder.totalItems}</p>
// // // // // // // //             <p>Total Amount: ${selectedOrder.totalAmount.toFixed(2)}</p>
// // // // // // // //             <h4>Items:</h4>
// // // // // // // //             {selectedOrder.items.map(item => (
// // // // // // // //               <div key={item.item.id} className="cart-item">
// // // // // // // //                 <img
// // // // // // // //                   src={item.item.imageUrl}
// // // // // // // //                   alt={item.item.title}
// // // // // // // //                   style={{ width: '50px', height: '50px' }}
// // // // // // // //                 />
// // // // // // // //                 <div>
// // // // // // // //                   <h5>{item.item.title}</h5>
// // // // // // // //                   <p>Price: ${item.item.price}</p>
// // // // // // // //                   <p>Quantity: {item.quantity}</p>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </Drawer>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Orders;

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import MainComponent from './DashboardLayout';
// // // // // // // import { Table, Typography, Button, Row, Col, Drawer, Popconfirm, message } from 'antd';
// // // // // // // import { db } from '../../../Config/firebaseConfig';
// // // // // // // import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

// // // // // // // const Orders = () => {
// // // // // // //   const { Title } = Typography;

// // // // // // //   const [orders, setOrders] = useState([]);
// // // // // // //   const [visible, setVisible] = useState(false);
// // // // // // //   const [selectedOrder, setSelectedOrder] = useState(null);

// // // // // // //   // Fetch orders from Firestore
// // // // // // //   useEffect(() => {
// // // // // // //     const fetchOrders = async () => {
// // // // // // //       const ordersCollection = collection(db, 'checkout');
// // // // // // //       const orderSnapshot = await getDocs(ordersCollection);
// // // // // // //       const orderList = orderSnapshot.docs.map((doc) => ({
// // // // // // //         id: doc.id,
// // // // // // //         ...doc.data(),
// // // // // // //       }));
// // // // // // //       setOrders(orderList);
// // // // // // //     };

// // // // // // //     fetchOrders();
// // // // // // //   }, []);

// // // // // // //   const showDrawer = (order) => {
// // // // // // //     setSelectedOrder(order);
// // // // // // //     setVisible(true);
// // // // // // //   };

// // // // // // //   const onClose = () => {
// // // // // // //     setVisible(false);
// // // // // // //     setSelectedOrder(null);
// // // // // // //   };

// // // // // // //   const deleteOrder = async (orderId) => {
// // // // // // //     try {
// // // // // // //       await deleteDoc(doc(db, 'checkout', orderId));
// // // // // // //       setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
// // // // // // //       message.success('Order deleted successfully');
// // // // // // //     } catch (error) {
// // // // // // //       message.error('Failed to delete order. Please try again.');
// // // // // // //       console.error('Error deleting order:', error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const columns = [
// // // // // // //     { title: 'ID', dataIndex: 'id', key: 'id' },
// // // // // // //     { title: 'Customer', dataIndex: 'name', key: 'name' },
// // // // // // //     { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
// // // // // // //     { title: 'Total ($)', dataIndex: 'totalAmount', key: 'totalAmount' },
// // // // // // //     { title: 'Status', dataIndex: 'status', key: 'status' },
// // // // // // //     {
// // // // // // //       title: 'Actions',
// // // // // // //       key: 'actions',
// // // // // // //       render: (text, order) => (
// // // // // // //         <Row gutter={8}>
// // // // // // //           <Col>
// // // // // // //             <Button
// // // // // // //               style={{ backgroundColor: '#6DA5C0' }}
// // // // // // //               type="primary"
// // // // // // //               onClick={() => showDrawer(order)}
// // // // // // //             >
// // // // // // //               View Details
// // // // // // //             </Button>
// // // // // // //           </Col>
// // // // // // //           <Col>
// // // // // // //             <Popconfirm
// // // // // // //               title="Are you sure you want to delete this order?"
// // // // // // //               onConfirm={() => deleteOrder(order.id)}
// // // // // // //               okText="Yes"
// // // // // // //               cancelText="No"
// // // // // // //             >
// // // // // // //               <Button type="danger">Delete</Button>
// // // // // // //             </Popconfirm>
// // // // // // //           </Col>
// // // // // // //         </Row>
// // // // // // //       ),
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <MainComponent title={'Orders'} />
// // // // // // //       <Title level={2}>Orders</Title>
// // // // // // //       <Row>
// // // // // // //         <Col span={24}>
// // // // // // //           <Table
// // // // // // //             dataSource={orders}
// // // // // // //             columns={columns}
// // // // // // //             pagination={false}
// // // // // // //             scroll={{ x: 600 }}
// // // // // // //           />
// // // // // // //         </Col>
// // // // // // //       </Row>

// // // // // // //       <Drawer
// // // // // // //         title="Order Details"
// // // // // // //         placement="right"
// // // // // // //         onClose={onClose}
// // // // // // //         visible={visible}
// // // // // // //         width={400}
// // // // // // //       >
// // // // // // //         {selectedOrder && (
// // // // // // //           <div>
// // // // // // //             <h3>Customer: {selectedOrder.name}</h3>
// // // // // // //             <p>Address: {selectedOrder.address}</p>
// // // // // // //             <p>Phone: {selectedOrder.phone}</p>
// // // // // // //             <p>Total Items: {selectedOrder.totalItems}</p>
// // // // // // //             <p>Total Amount: ${selectedOrder.totalAmount.toFixed(2)}</p>
// // // // // // //             <h4>Items:</h4>
// // // // // // //             {selectedOrder.items.map((item) => (
// // // // // // //               <div key={item.item.id} className="cart-item">
// // // // // // //                 <img
// // // // // // //                   src={item.item.imageUrl}
// // // // // // //                   alt={item.item.title}
// // // // // // //                   style={{ width: '50px', height: '50px' }}
// // // // // // //                 />
// // // // // // //                 <div>
// // // // // // //                   <h5>{item.item.title}</h5>
// // // // // // //                   <p>Price: ${item.item.price}</p>
// // // // // // //                   <p>Quantity: {item.quantity}</p>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </Drawer>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Orders;














// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import MainComponent from './DashboardLayout';
// // // // // // import { Table, Typography, Button, Row, Col, Drawer, Popconfirm, message } from 'antd';
// // // // // // import { db } from '../../../Config/firebaseConfig';
// // // // // // import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

// // // // // // const Orders = () => {
// // // // // //   const { Title } = Typography;
// // // // // //   const [orders, setOrders] = useState([]);
// // // // // //   const [visible, setVisible] = useState(false);
// // // // // //   const [selectedOrder, setSelectedOrder] = useState(null);

// // // // // //   // Fetch orders from Firestore
// // // // // //   useEffect(() => {
// // // // // //     const fetchOrders = async () => {
// // // // // //       const ordersCollection = collection(db, 'checkout');
// // // // // //       const orderSnapshot = await getDocs(ordersCollection);
// // // // // //       const orderList = orderSnapshot.docs.map((doc) => ({
// // // // // //         id: doc.id,
// // // // // //         ...doc.data(),
// // // // // //       }));
// // // // // //       setOrders(orderList);
// // // // // //     };

// // // // // //     fetchOrders();
// // // // // //   }, []);

// // // // // //   const showDrawer = (order) => {
// // // // // //     setSelectedOrder(order);
// // // // // //     setVisible(true);
// // // // // //   };

// // // // // //   const onClose = () => {
// // // // // //     setVisible(false);
// // // // // //     setSelectedOrder(null);
// // // // // //   };

// // // // // //   const deleteOrder = async (orderId) => {
// // // // // //     try {
// // // // // //       await deleteDoc(doc(db, 'checkout', orderId));
// // // // // //       setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
// // // // // //       message.success('Order deleted successfully');
// // // // // //     } catch (error) {
// // // // // //       message.error('Failed to delete order. Please try again.');
// // // // // //       console.error('Error deleting order:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   // Function to calculate the remaining time in days, hours, minutes, and seconds
// // // // // //   const getRemainingTime = (orderDate) => {
// // // // // //     const now = new Date();
// // // // // //     const orderTimestamp = new Date(orderDate);
// // // // // //     const twoDaysLater = new Date(orderTimestamp.getTime() + 2 * 24 * 60 * 60 * 1000); // Add 2 days

// // // // // //     const diff = twoDaysLater - now; // Time difference in milliseconds
// // // // // //     if (diff <= 0) return 'Expired'; // Order expired

// // // // // //     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
// // // // // //     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
// // // // // //     const minutes = Math.floor((diff / (1000 * 60)) % 60);
// // // // // //     const seconds = Math.floor((diff / 1000) % 60);

// // // // // //     return `${days}d ${hours}h ${minutes}m ${seconds}s`;
// // // // // //   };

// // // // // //   // Update the timers every second
// // // // // //   useEffect(() => {
// // // // // //     const interval = setInterval(() => {
// // // // // //       setOrders((prevOrders) =>
// // // // // //         prevOrders.map((order) => ({
// // // // // //           ...order,
// // // // // //           remainingTime: getRemainingTime(order.timestamp), // Calculate remaining time
// // // // // //         }))
// // // // // //       );
// // // // // //     }, 1000);

// // // // // //     return () => clearInterval(interval); // Cleanup interval on component unmount
// // // // // //   }, [orders]);

// // // // // //   const columns = [
// // // // // //     { title: 'ID', dataIndex: 'id', key: 'id' },
// // // // // //     { title: 'Customer', dataIndex: 'name', key: 'name' },
// // // // // //     { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
// // // // // //     { title: 'Total ($)', dataIndex: 'totalAmount', key: 'totalAmount' },
// // // // // //     {
// // // // // //       title: 'Time Remaining',
// // // // // //       dataIndex: 'remainingTime',
// // // // // //       key: 'remainingTime',
// // // // // //     },
// // // // // //     {
// // // // // //       title: 'Actions',
// // // // // //       key: 'actions',
// // // // // //       render: (text, order) => (
// // // // // //         <Row gutter={8}>
// // // // // //           <Col>
// // // // // //             <Button
// // // // // //               style={{ backgroundColor: '#6DA5C0' }}
// // // // // //               type="primary"
// // // // // //               onClick={() => showDrawer(order)}
// // // // // //             >
// // // // // //               View Details
// // // // // //             </Button>
// // // // // //           </Col>
// // // // // //           <Col>
// // // // // //             <Popconfirm
// // // // // //               title="Are you sure you want to delete this order?"
// // // // // //               onConfirm={() => deleteOrder(order.id)}
// // // // // //               okText="Yes"
// // // // // //               cancelText="No"
// // // // // //             >
// // // // // //               <Button type="danger">Delete</Button>
// // // // // //             </Popconfirm>
// // // // // //           </Col>
// // // // // //         </Row>
// // // // // //       ),
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <>
// // // // // //       <MainComponent title={'Orders'} />
// // // // // //       <Title level={2}>Orders</Title>
// // // // // //       <Row>
// // // // // //         <Col span={24}>
// // // // // //           <Table
// // // // // //             dataSource={orders}
// // // // // //             columns={columns}
// // // // // //             pagination={false}
// // // // // //             scroll={{ x: 600 }}
// // // // // //           />
// // // // // //         </Col>
// // // // // //       </Row>

// // // // // //       <Drawer
// // // // // //         title="Order Details"
// // // // // //         placement="right"
// // // // // //         onClose={onClose}
// // // // // //         visible={visible}
// // // // // //         width={400}
// // // // // //       >
// // // // // //         {selectedOrder && (
// // // // // //           <div>
// // // // // //             <h3>Customer: {selectedOrder.name}</h3>
// // // // // //             <p>Address: {selectedOrder.address}</p>
// // // // // //             <p>Phone: {selectedOrder.phone}</p>
// // // // // //             <p>Total Items: {selectedOrder.totalItems}</p>
// // // // // //             <p>Total Amount: ${selectedOrder.totalAmount.toFixed(2)}</p>
// // // // // //             <h4>Items:</h4>
// // // // // //             {selectedOrder.items.map((item) => (
// // // // // //               <div key={item.item.id} className="cart-item">
// // // // // //                 <img
// // // // // //                   src={item.item.imageUrl}
// // // // // //                   alt={item.item.title}
// // // // // //                   style={{ width: '50px', height: '50px' }}
// // // // // //                 />
// // // // // //                 <div>
// // // // // //                   <h5>{item.item.title}</h5>
// // // // // //                   <p>Price: ${item.item.price}</p>
// // // // // //                   <p>Quantity: {item.quantity}</p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </Drawer>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default Orders;










// // // // // import React, { useState, useEffect } from 'react';
// // // // // import MainComponent from './DashboardLayout';
// // // // // import { Table, Typography, Button, Row, Col, Drawer, Popconfirm, message } from 'antd';
// // // // // import { db } from '../../../Config/firebaseConfig';
// // // // // import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

// // // // // const Orders = () => {
// // // // //   const { Title } = Typography;
// // // // //   const [orders, setOrders] = useState([]);
// // // // //   const [deliveredOrders, setDeliveredOrders] = useState([]); // Track delivered orders
// // // // //   const [visible, setVisible] = useState(false);
// // // // //   const [selectedOrder, setSelectedOrder] = useState(null);

// // // // //   // Fetch orders from Firestore
// // // // //   useEffect(() => {
// // // // //     const fetchOrders = async () => {
// // // // //       const ordersCollection = collection(db, 'Checkout');
// // // // //       const orderSnapshot = await getDocs(ordersCollection);
// // // // //       const orderList = orderSnapshot.docs.map((doc) => ({
// // // // //         id: doc.id,
// // // // //         ...doc.data(),
// // // // //       }));
// // // // //       setOrders(orderList);
// // // // //     };

// // // // //     fetchOrders();
// // // // //   }, []);

// // // // //   const showDrawer = (order) => {
// // // // //     setSelectedOrder(order);
// // // // //     setVisible(true);
// // // // //   };

// // // // //   const onClose = () => {
// // // // //     setVisible(false);
// // // // //     setSelectedOrder(null);
// // // // //   };

// // // // //   const deleteOrder = async (orderId) => {
// // // // //     try {
// // // // //       await deleteDoc(doc(db, 'checkout', orderId));
// // // // //       setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
// // // // //       message.success('Order deleted successfully');
// // // // //     } catch (error) {
// // // // //       message.error('Failed to delete order. Please try again.');
// // // // //       console.error('Error deleting order:', error);
// // // // //     }
// // // // //   };

// // // // //   // Function to calculate the remaining time
// // // // //   const getRemainingTime = (orderDate) => {
// // // // //     const now = new Date();
// // // // //     const orderTimestamp = new Date(orderDate);
// // // // //     const twoDaysLater = new Date(orderTimestamp.getTime() + 2 * 24 * 60 * 60 * 1000);

// // // // //     const diff = twoDaysLater - now;
// // // // //     if (diff <= 0) return 'Expired'; // If expired, return 'Expired'

// // // // //     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
// // // // //     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
// // // // //     const minutes = Math.floor((diff / (1000 * 60)) % 60);
// // // // //     const seconds = Math.floor((diff / 1000) % 60);

// // // // //     return `${days}d ${hours}h ${minutes}m ${seconds}s`;
// // // // //   };

// // // // //   // Move expired orders to "Delivered Orders"
// // // // //   const moveExpiredOrders = async () => {
// // // // //     const expiredOrders = orders.filter(
// // // // //       (order) => getRemainingTime(order.timestamp) === 'Expired'
// // // // //     );

// // // // //     for (let order of expiredOrders) {
// // // // //       try {
// // // // //         // Update the order's status in Firestore
// // // // //         await updateDoc(doc(db, 'checkout', order.id), { status: 'Delivered' });

// // // // //         // Remove from current orders and add to delivered orders state
// // // // //         setOrders((prev) => prev.filter((o) => o.id !== order.id));
// // // // //         setDeliveredOrders((prev) => [...prev, { ...order, status: 'Delivered' }]);
// // // // //       } catch (error) {
// // // // //         console.error('Error updating order status:', error);
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   // Check for expired orders every second
// // // // //   useEffect(() => {
// // // // //     const interval = setInterval(() => {
// // // // //       setOrders((prevOrders) =>
// // // // //         prevOrders.map((order) => ({
// // // // //           ...order,
// // // // //           remainingTime: getRemainingTime(order.timestamp),
// // // // //         }))
// // // // //       );
// // // // //       moveExpiredOrders(); // Move expired orders to "Delivered Orders"
// // // // //     }, 1000);

// // // // //     return () => clearInterval(interval); // Cleanup on unmount
// // // // //   }, [orders]);

// // // // //   const columns = [
// // // // //     { title: 'ID', dataIndex: 'id', key: 'id' },
// // // // //     { title: 'Customer', dataIndex: 'name', key: 'name' },
// // // // //     { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
// // // // //     { title: 'Total ($)', dataIndex: 'totalAmount', key: 'totalAmount' },
// // // // //     {
// // // // //       title: 'Time Remaining',
// // // // //       dataIndex: 'remainingTime',
// // // // //       key: 'remainingTime',
// // // // //     },
// // // // //     {
// // // // //       title: 'Actions',
// // // // //       key: 'actions',
// // // // //       render: (text, order) => (
// // // // //         <Row gutter={8}>
// // // // //           <Col>
// // // // //             <Button
// // // // //               style={{ backgroundColor: '#6DA5C0' }}
// // // // //               type="primary"
// // // // //               onClick={() => showDrawer(order)}
// // // // //             >
// // // // //               View Details
// // // // //             </Button>
// // // // //           </Col>
// // // // //           <Col>
// // // // //             <Popconfirm
// // // // //               title="Are you sure you want to delete this order?"
// // // // //               onConfirm={() => deleteOrder(order.id)}
// // // // //               okText="Yes"
// // // // //               cancelText="No"
// // // // //             >
// // // // //               <Button type="danger">Delete</Button>
// // // // //             </Popconfirm>
// // // // //           </Col>
// // // // //         </Row>
// // // // //       ),
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <>
// // // // //       <MainComponent title={'Orders'} />
// // // // //       <Title level={2}>Orders</Title>
// // // // //       <Row>
// // // // //         <Col span={24}>
// // // // //           <Table
// // // // //             dataSource={orders}
// // // // //             columns={columns}
// // // // //             pagination={false}
// // // // //             scroll={{ x: 600 }}
// // // // //           />
// // // // //         </Col>
// // // // //       </Row>

// // // // //       <Drawer
// // // // //         title="Order Details"
// // // // //         placement="right"
// // // // //         onClose={onClose}
// // // // //         visible={visible}
// // // // //         width={400}
// // // // //       >
// // // // //         {selectedOrder && (
// // // // //           <div>
// // // // //             <h3>Customer: {selectedOrder.name}</h3>
// // // // //             <p>Address: {selectedOrder.address}</p>
// // // // //             <p>Phone: {selectedOrder.phone}</p>
// // // // //             <p>Total Items: {selectedOrder.totalItems}</p>
// // // // //             <p>Total Amount: ${selectedOrder.totalAmount.toFixed(2)}</p>
// // // // //             <h4>Items:</h4>
// // // // //             {selectedOrder.items.map((item) => (
// // // // //               <div key={item.item.id} className="cart-item">
// // // // //                 <img
// // // // //                   src={item.item.imageUrl}
// // // // //                   alt={item.item.title}
// // // // //                   style={{ width: '50px', height: '50px' }}
// // // // //                 />
// // // // //                 <div>
// // // // //                   <h5>{item.item.title}</h5>
// // // // //                   <p>Price: ${item.item.price}</p>
// // // // //                   <p>Quantity: {item.quantity}</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         )}
// // // // //       </Drawer>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Orders;








// // // // import React, { useState, useEffect } from 'react';
// // // // import MainComponent from './DashboardLayout';
// // // // import { Table, Typography, Button, Row, Col, Drawer, Popconfirm, message } from 'antd';
// // // // import { db } from '../../../Config/firebaseConfig';
// // // // import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

// // // // const Orders = () => {
// // // //   const { Title } = Typography;
// // // //   const [orders, setOrders] = useState([]);
// // // //   const [visible, setVisible] = useState(false);
// // // //   const [selectedOrder, setSelectedOrder] = useState(null);

// // // //   // Fetch orders from Firestore
// // // //   useEffect(() => {
// // // //     const fetchOrders = async () => {
// // // //       const ordersCollection = collection(db, 'Checkout');
// // // //       const orderSnapshot = await getDocs(ordersCollection);
// // // //       const orderList = orderSnapshot.docs.map((doc) => ({
// // // //         id: doc.id,
// // // //         ...doc.data(),
// // // //       }));
// // // //       setOrders(orderList);
// // // //     };

// // // //     fetchOrders();
// // // //   }, []);

// // // //   const showDrawer = (order) => {
// // // //     setSelectedOrder(order);
// // // //     setVisible(true);
// // // //   };

// // // //   const onClose = () => {
// // // //     setVisible(false);
// // // //     setSelectedOrder(null);
// // // //   };

// // // //   const deleteOrder = async (orderId) => {
// // // //     try {
// // // //       await deleteDoc(doc(db, 'Checkout', orderId));
// // // //       setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
// // // //       message.success('Order deleted successfully');
// // // //     } catch (error) {
// // // //       message.error('Failed to delete order. Please try again.');
// // // //       console.error('Error deleting order:', error);
// // // //     }
// // // //   };

// // // //   const columns = [
// // // //     { title: 'ID', dataIndex: 'id', key: 'id' },
// // // //     { title: 'Customer', dataIndex: 'name', key: 'name' },
// // // //     { title: 'Phone', dataIndex: 'phone', key: 'phone' },
// // // //     { title: 'Total ($)', dataIndex: 'totalAmount', key: 'totalAmount' },
// // // //     { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
// // // //     {
// // // //       title: 'Actions',
// // // //       key: 'actions',
// // // //       render: (text, order) => (
// // // //         <Row gutter={8}>
// // // //           <Col>
// // // //             <Button
// // // //               type="primary"
// // // //               style={{ backgroundColor: '#6DA5C0' }}
// // // //               onClick={() => showDrawer(order)}
// // // //             >
// // // //               View Details
// // // //             </Button>
// // // //           </Col>
// // // //           <Col>
// // // //             <Popconfirm
// // // //               title="Are you sure you want to delete this order?"
// // // //               onConfirm={() => deleteOrder(order.id)}
// // // //               okText="Yes"
// // // //               cancelText="No"
// // // //             >
// // // //               <Button danger>Delete</Button>
// // // //             </Popconfirm>
// // // //           </Col>
// // // //         </Row>
// // // //       ),
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       <MainComponent title={'Orders'} />
// // // //       <Title level={2}>Orders</Title>
// // // //       <Row>
// // // //         <Col span={24}>
// // // //           <Table
// // // //             dataSource={orders}
// // // //             columns={columns}
// // // //             pagination={false}
// // // //             rowKey="id"
// // // //           />
// // // //         </Col>
// // // //       </Row>

// // // //       <Drawer
// // // //         title="Order Details"
// // // //         placement="right"
// // // //         onClose={onClose}
// // // //         visible={visible}
// // // //         width={400}
// // // //       >
// // // //         {selectedOrder && (
// // // //           <div>
// // // //             <h3>Customer: {selectedOrder.name}</h3>
// // // //             <p>Address: {selectedOrder.address}</p>
// // // //             <p>Phone: {selectedOrder.phone}</p>
// // // //             <p>Total Items: {selectedOrder.totalItems}</p>
// // // //             <p>Total Amount: ${selectedOrder.totalAmount.toFixed(2)}</p>
// // // //             <h4>Items:</h4>
// // // //             {selectedOrder.items.map((item) => (
// // // //               <div key={item.item.id} className="cart-item">
// // // //                 <img
// // // //                   src={item.item.imageUrl}
// // // //                   alt={item.item.title}
// // // //                   style={{ width: '50px', height: '50px' }}
// // // //                 />
// // // //                 <div>
// // // //                   <h5>{item.item.title}</h5>
// // // //                   <p>Price: ${item.item.price}</p>
// // // //                   <p>Quantity: {item.quantity}</p>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         )}
// // // //       </Drawer>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Orders;






// // // // // import React, { useState, useEffect } from 'react';
// // // // // import MainComponent from './DashboardLayout';
// // // // // import { Table, Typography, Button, Row, Col, Drawer, Popconfirm, message } from 'antd';
// // // // // import { db } from '../../../Config/firebaseConfig';
// // // // // import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

// // // // // const Orders = () => {
// // // // //   const { Title } = Typography;
// // // // //   const [orders, setOrders] = useState([]);
// // // // //   const [deliveredOrders, setDeliveredOrders] = useState([]);
// // // // //   const [visible, setVisible] = useState(false);
// // // // //   const [selectedOrder, setSelectedOrder] = useState(null);

// // // // //   // Fetch orders from Firestore
// // // // //   useEffect(() => {
// // // // //     const fetchOrders = async () => {
// // // // //       const ordersCollection = collection(db, 'checkout');
// // // // //       const orderSnapshot = await getDocs(ordersCollection);
// // // // //       const orderList = orderSnapshot.docs.map((doc) => ({
// // // // //         id: doc.id,
// // // // //         ...doc.data(),
// // // // //       }));
// // // // //       setOrders(orderList);
// // // // //     };

// // // // //     fetchOrders();
// // // // //   }, []);

// // // // //   const showDrawer = (order) => {
// // // // //     setSelectedOrder(order);
// // // // //     setVisible(true);
// // // // //   };

// // // // //   const onClose = () => {
// // // // //     setVisible(false);
// // // // //     setSelectedOrder(null);
// // // // //   };

// // // // //   const deleteOrder = async (orderId) => {
// // // // //     try {
// // // // //       await deleteDoc(doc(db, 'checkout', orderId));
// // // // //       setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
// // // // //       message.success('Order deleted successfully');
// // // // //     } catch (error) {
// // // // //       message.error('Failed to delete order. Please try again.');
// // // // //       console.error('Error deleting order:', error);
// // // // //     }
// // // // //   };

// // // // //   // Function to calculate the remaining time (1 minute for testing)
// // // // //   const getRemainingTime = (orderDate) => {
// // // // //     const now = new Date();
// // // // //     const orderTimestamp = new Date(orderDate);
    
// // // // //     const oneMinuteLater = new Date(orderTimestamp.getTime() + 1 * 60 * 1000); // Add 1 minute

// // // // //     const diff = oneMinuteLater - now;
// // // // //     if (diff <= 0) return 'Expired'; // If expired, return 'Expired'

// // // // //     const seconds = Math.floor((diff / 1000) % 60); // Remaining seconds
// // // // //     return `${seconds}s`;
// // // // //   };

// // // // //   // Move expired orders to "Delivered Orders"
// // // // //   const moveExpiredOrders = async () => {
// // // // //     const expiredOrders = orders.filter(
// // // // //       (order) => getRemainingTime(order.timestamp) === 'Expired'
// // // // //     );

// // // // //     for (let order of expiredOrders) {
// // // // //       try {
// // // // //         await updateDoc(doc(db, 'checkout', order.id), { status: 'Delivered' });

// // // // //         setOrders((prev) => prev.filter((o) => o.id !== order.id));
// // // // //         setDeliveredOrders((prev) => [...prev, { ...order, status: 'Delivered' }]);
// // // // //       } catch (error) {
// // // // //         console.error('Error updating order status:', error);
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   // Check for expired orders every second
// // // // //   useEffect(() => {
// // // // //     const interval = setInterval(() => {
// // // // //       setOrders((prevOrders) =>
// // // // //         prevOrders.map((order) => ({
// // // // //           ...order,
// // // // //           remainingTime: getRemainingTime(order.timestamp),
// // // // //         }))
// // // // //       );
// // // // //       moveExpiredOrders(); // Move expired orders to "Delivered Orders"
// // // // //     }, 1000);

// // // // //     return () => clearInterval(interval);
// // // // //   }, [orders]);

// // // // //   const columns = [
// // // // //     { title: 'ID', dataIndex: 'id', key: 'id' },
// // // // //     { title: 'Customer', dataIndex: 'name', key: 'name' },
// // // // //     { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
// // // // //     { title: 'Total ($)', dataIndex: 'totalAmount', key: 'totalAmount' },
// // // // //     {
// // // // //       title: 'Time Remaining',
// // // // //       dataIndex: 'remainingTime',
// // // // //       key: 'remainingTime',
// // // // //     },
// // // // //     {
// // // // //       title: 'Actions',
// // // // //       key: 'actions',
// // // // //       render: (text, order) => (
// // // // //         <Row gutter={8}>
// // // // //           <Col>
// // // // //             <Button
// // // // //               style={{ backgroundColor: '#6DA5C0' }}
// // // // //               type="primary"
// // // // //               onClick={() => showDrawer(order)}
// // // // //             >
// // // // //               View Details
// // // // //             </Button>
// // // // //           </Col>
// // // // //           <Col>
// // // // //             <Popconfirm
// // // // //               title="Are you sure you want to delete this order?"
// // // // //               onConfirm={() => deleteOrder(order.id)}
// // // // //               okText="Yes"
// // // // //               cancelText="No"
// // // // //             >
// // // // //               <Button type="danger">Delete</Button>
// // // // //             </Popconfirm>
// // // // //           </Col>
// // // // //         </Row>
// // // // //       ),
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <>
// // // // //       <MainComponent title={'Orders'} />
// // // // //       <br />
// // // // //       <Title level={2}>Orders</Title>
// // // // //       <Row>
// // // // //         <Col span={24}>
// // // // //           <Table
// // // // //             dataSource={orders}
// // // // //             columns={columns}
// // // // //             pagination={false}
// // // // //             scroll={{ x: 600 }}
// // // // //           />
// // // // //         </Col>
// // // // //       </Row>

// // // // //       <Drawer
// // // // //         title="Order Details"
// // // // //         placement="right"
// // // // //         onClose={onClose}
// // // // //         visible={visible}
// // // // //         width={400}
// // // // //       >
// // // // //         {selectedOrder && (
// // // // //           <div>
// // // // //             <h3>Customer: {selectedOrder.name}</h3>
// // // // //             <p>Address: {selectedOrder.address}</p>
// // // // //             <p>Phone: {selectedOrder.phone}</p>
// // // // //             <p>Total Items: {selectedOrder.totalItems}</p>
// // // // //             <p>Total Amount: ${selectedOrder.totalAmount.toFixed(2)}</p>
// // // // //             <h4>Items:</h4>
// // // // //             {selectedOrder.items.map((item) => (
// // // // //               <div key={item.item.id} className="cart-item">
// // // // //                 <img
// // // // //                   src={item.item.imageUrl}
// // // // //                   alt={item.item.title}
// // // // //                   style={{ width: '50px', height: '50px' }}
// // // // //                 />
// // // // //                 <div>
// // // // //                   <h5>{item.item.title}</h5>
// // // // //                   <p>Price: ${item.item.price}</p>
// // // // //                   <p>Quantity: {item.quantity}</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         )}
// // // // //       </Drawer>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Orders;











// // // // Orders.jsx
// // // import React, { useEffect, useState, useContext } from 'react';
// // // import MainComponent from './DashboardLayout';
// // // import { Table, Typography, Button, Row, Col, Drawer } from 'antd';
// // // import { db } from '../../../Config/firebaseConfig';
// // // import { doc, getDoc } from 'firebase/firestore';
// // // import { AuthContext } from '../../SingleScreen/AuthContext';

// // // const Orders = () => {
// // //     const { Title } = Typography;
// // //     const { user } = useContext(AuthContext); // Get user context
// // //     const [orders, setOrders] = useState([]);
// // //     const [visible, setVisible] = useState(false);
// // //     const [selectedOrder, setSelectedOrder] = useState(null);

// // //     useEffect(() => {
// // //         const fetchOrders = async () => {
// // //             if (user) {
// // //                 const ordersRef = doc(db, 'Checkout', user.name); // Use user name as document ID
// // //                 const orderSnapshot = await getDoc(ordersRef);
// // //                 if (orderSnapshot.exists()) {
// // //                     setOrders(orderSnapshot.data().checkouts); // Set orders from Firestore
// // //                 }
// // //             }
// // //         };
// // //         fetchOrders();
// // //     }, [user]);

// // //     const showDrawer = (order) => {
// // //         setSelectedOrder(order);
// // //         setVisible(true);
// // //     };

// // //     const closeDrawer = () => {
// // //         setVisible(false);
// // //         setSelectedOrder(null);
// // //     };

// // //     const columns = [
// // //         { title: 'ID', dataIndex: 'key', key: 'key' },
// // //         { title: 'Customer', dataIndex: 'name', key: 'name' },
// // //         { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
// // //         { title: 'Total ($)', dataIndex: 'totalAmount', key: 'totalAmount' },
// // //         { title: 'Status', dataIndex: 'status', key: 'status' },
// // //         {
// // //             title: 'Actions',
// // //             key: 'actions',
// // //             render: (text, record) => (
// // //                 <Button style={{ backgroundColor: '#6DA5C0' }} onClick={() => showDrawer(record)}>
// // //                     View Details
// // //                 </Button>
// // //             ),
// // //         },
// // //     ];

// // //     return (
// // //         <>
// // //             <MainComponent title={'Orders'} />
// // //             <Title level={2}>Orders</Title>
// // //             <Row>
// // //                 <Col span={24}>
// // //                     <Table dataSource={orders} columns={columns} pagination={false} scroll={{ x: 600 }} />
// // //                 </Col>
// // //             </Row>

// // //             {/* Drawer for Order Details */}
// // //             <Drawer
// // //                 title="Order Details"
// // //                 placement="right"
// // //                 onClose={closeDrawer}
// // //                 visible={visible}
// // //                 width={400}
// // //             >
// // //                 {selectedOrder && (
// // //                     <>
// // //                         <p><strong>Name:</strong> {selectedOrder.name}</p>
// // //                         <p><strong>Address:</strong> {selectedOrder.address}</p>
// // //                         <p><strong>Phone:</strong> {selectedOrder.phone}</p>
// // //                         <p><strong>Total Amount:</strong> ${selectedOrder.totalAmount}</p>
// // //                         <h4>Items:</h4>
// // //                         <ul>
// // //                             {selectedOrder.items.map((item, index) => (
// // //                                 <li key={index}>
// // //                                     {item.item.title} - Quantity: {item.quantity} - Price: ${item.item.price}
// // //                                 </li>
// // //                             ))}
// // //                         </ul>
// // //                     </>
// // //                 )}
// // //             </Drawer>
// // //         </>
// // //     );
// // // };

// // // export default Orders;





// // // Orders.jsx
// // import React, { useEffect, useState, useContext } from 'react';
// // import MainComponent from './DashboardLayout';
// // import { Table, Typography, Button, Row, Col, Drawer, message, Popconfirm } from 'antd';
// // import { db } from '../../../Config/firebaseConfig';
// // import { doc, getDoc, updateDoc } from 'firebase/firestore';
// // import { AuthContext } from '../../SingleScreen/AuthContext';

// // const Orders = () => {
// //     const { Title } = Typography;
// //     const { user } = useContext(AuthContext); // Get user context
// //     const [orders, setOrders] = useState([]);
// //     const [visible, setVisible] = useState(false);
// //     const [selectedOrder, setSelectedOrder] = useState(null);

// //     useEffect(() => {
// //         const fetchOrders = async () => {
// //             if (user) {
// //                 const ordersRef = doc(db, 'Checkout', user.name); // Use user name as document ID
// //                 const orderSnapshot = await getDoc(ordersRef);
// //                 if (orderSnapshot.exists()) {
// //                     setOrders(orderSnapshot.data().checkouts); // Set orders from Firestore
// //                 }
// //             }
// //         };
// //         fetchOrders();
// //     }, [user]);

// //     const showDrawer = (order) => {
// //         setSelectedOrder(order);
// //         setVisible(true);
// //     };

// //     const closeDrawer = () => {
// //         setVisible(false);
// //         setSelectedOrder(null);
// //     };

// //     const deleteOrder = async (orderToDelete) => {
// //         if (user) {
// //             try {
// //                 const ordersRef = doc(db, 'Checkout', user.name); // Use user's name as document ID
// //                 const orderSnapshot = await getDoc(ordersRef);

// //                 if (orderSnapshot.exists()) {
// //                     const updatedOrders = orderSnapshot
// //                         .data()
// //                         .checkouts.filter(order => order.timestamp !== orderToDelete.timestamp); // Remove the order

// //                     await updateDoc(ordersRef, { checkouts: updatedOrders }); // Update Firestore
// //                     setOrders(updatedOrders); // Update state
// //                     message.success('Order deleted successfully!');
// //                 }
// //             } catch (error) {
// //                 console.error('Error deleting order:', error);
// //                 message.error('Failed to delete order. Please try again.');
// //             }
// //         }
// //     };

// //     const columns = [
// //         { title: 'ID', dataIndex: 'key', key: 'key' },
// //         { title: 'Customer', dataIndex: 'name', key: 'name' },
// //         { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
// //         { title: 'Total ($)', dataIndex: 'totalAmount', key: 'totalAmount' },
// //         { title: 'Status', dataIndex: 'status', key: 'status' },
// //         {
// //             title: 'Actions',
// //             key: 'actions',
// //             render: (text, record) => (
// //                 <Row gutter={16}>
// //                     <Col>
// //                         <Button
// //                             style={{ backgroundColor: '#6DA5C0',color:'#fff' }}
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
// //                 </Row>
// //             ),
// //         },
// //     ];

// //     return (
// //         <>
// //             <MainComponent title={'Orders'} />
// //             <Title level={2}>Orders</Title>
// //             <Row>
// //                 <Col span={24}>
// //                     <Table
// //                         dataSource={orders}
// //                         columns={columns}
// //                         pagination={false}
// //                         scroll={{ x: 600 }}
// //                     />
// //                 </Col>
// //             </Row>

// //             {/* Drawer for Order Details */}
// //             <Drawer
// //                 title="Order Details"
// //                 placement="right"
// //                 onClose={closeDrawer}
// //                 visible={visible}
// //                 width={400}
// //             >

// //                    {selectedOrder && (
// //                       <div>
// //                         <h3>Customer: {selectedOrder.name}</h3>
// //                         <p>Address: {selectedOrder.address}</p>
// //                         <p>Phone: {selectedOrder.phone}</p>
// //                         <p>Total Items: {selectedOrder.totalItems}</p>
// //                         <p>Total Amount: ${selectedOrder.totalAmount.toFixed(2)}</p>
// //                         <h4>Items:</h4>
// //                         {selectedOrder.items.map((item) => (
// //                           <div key={item.item.id} className="cart-item">
// //                             <img
// //                               src={item.item.imageUrl}
// //                               alt={item.item.title}
// //                               style={{ width: '50px', height: '50px' }}
// //                             />
// //                             <div>
// //                               <h5>{item.item.title}</h5>
// //                               <p>Price: ${item.item.price}</p>
// //                               <p>Quantity: {item.quantity}</p>
// //                             </div>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     )}
// //             </Drawer>
// //         </>
// //     );
// // };

// // export default Orders;












// import React, { useEffect, useState, useContext } from 'react';
// import MainComponent from './DashboardLayout';
// import { Table, Typography, Button, Row, Col, Drawer, message, Popconfirm, Card, Tag } from 'antd';
// import { db } from '../../../Config/firebaseConfig';
// import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
// import { AuthContext } from '../../SingleScreen/AuthContext';

// const Orders = () => {
//     const { Title } = Typography;
//     const [orders, setOrders] = useState([]);
//     const [visible, setVisible] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [deliveredCount, setDeliveredCount] = useState(0);
//     const [pendingCount, setPendingCount] = useState(0);

//     // Fetch all orders from Firestore
//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const querySnapshot = await getDocs(collection(db, 'Checkout'));
//                 const allOrders = [];

//                 querySnapshot.forEach((doc) => {
//                     const orderData = doc.data().checkouts.map(order => ({
//                         ...order,
//                         timeLeft: getTimeLeft(order.timestamp), // Initialize time left for each order
//                         user: doc.id, // Store the user ID for each order
//                     }));
//                     allOrders.push(...orderData); // Collect all orders
//                 });

//                 setOrders(allOrders);
//                 updateOrderCounts(allOrders);
//             } catch (error) {
//                 console.error('Error fetching orders:', error);
//                 message.error('Failed to fetch orders.');
//             }
//         };
//         fetchOrders();
//     }, []);

//     const getTimeLeft = (timestamp) => {
//       const orderTime = new Date(timestamp);
//       const now = new Date();
//       const timeLeft = 2 * 24 * 60 * 60 * 1000 - (now - orderTime); // 2 days in ms
  
//       if (timeLeft <= 0) return 'Delivered'; // If time is up
  
//       const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
//       const hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
//       const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
//       const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
  
//       return `${days}d ${hours}h ${minutes}m ${seconds}s`;
//   };
  
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//         setOrders((prevOrders) =>
//             prevOrders.map((order) => {
//                 if (order.status === 'Pending') {
//                     const timeLeft = getTimeLeft(order.timestamp);
//                     return { ...order, timeLeft };
//                 }
//                 return order;
//             })
//         );
//     }, 1000); // Update every second

//     return () => clearInterval(interval); // Clean up on unmount
// }, []);


//     const updateOrderCounts = (ordersData) => {
//         const delivered = ordersData.filter(order => order.status === 'Delivered').length;
//         const pending = ordersData.filter(order => order.status === 'Pending').length;
//         setDeliveredCount(delivered);
//         setPendingCount(pending);
//     };

//     const showDrawer = (order) => {
//         setSelectedOrder(order);
//         setVisible(true);
//     };

//     const closeDrawer = () => {
//         setVisible(false);
//         setSelectedOrder(null);
//     };

//     const deleteOrder = async (orderToDelete) => {
//         try {
//             const ordersRef = doc(db, 'Checkout', orderToDelete.user);
//             const userOrdersSnapshot = await getDoc(ordersRef);

//             if (userOrdersSnapshot.exists()) {
//                 const updatedOrders = userOrdersSnapshot
//                     .data()
//                     .checkouts.filter(order => order.timestamp !== orderToDelete.timestamp);

//                 await updateDoc(ordersRef, { checkouts: updatedOrders });
//                 setOrders(prevOrders => prevOrders.filter(order => order.timestamp !== orderToDelete.timestamp));
//                 updateOrderCounts(updatedOrders);
//                 message.success('Order deleted successfully!');
//             }
//         } catch (error) {
//             console.error('Error deleting order:', error);
//             message.error('Failed to delete order. Please try again.');
//         }
//     };

//     const columns = [
//       { title: 'ID', dataIndex: 'key', key: 'key' },
//       { title: 'Customer', dataIndex: 'name', key: 'name' },
//       { title: 'User ID', dataIndex: 'user', key: 'user' }, // Show User ID
//       { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
//       { title: 'Total (PKR)', dataIndex: 'totalAmount', key: 'totalAmount' },
//       {
//           title: 'Status',
//           dataIndex: 'status',
//           key: 'status',
//           render: (text, record) => (
//               <Tag color={record.status === 'Pending' ? 'orange' : 'green'}>
//                   {record.status}
//               </Tag>
//           ),
//       },
//       {
//           title: 'Time Remaining',
//           key: 'timeRemaining',
//           render: (text, record) => (
//               <span>
//                   {record.timeLeft === 'Delivered' ? 'Delivered' : record.timeLeft}
//               </span>
//           ),
//       },
//       {
//           title: 'Actions',
//           key: 'actions',
//           render: (text, record) => (
//               <Row gutter={16}>
//                   <Col>
//                       <Button
//                           style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
//                           onClick={() => showDrawer(record)}
//                       >
//                           View Details
//                       </Button>
//                   </Col>
//                   <Col>
//                       <Popconfirm
//                           title="Are you sure you want to delete this order?"
//                           onConfirm={() => deleteOrder(record)}
//                           okText="Yes"
//                           cancelText="No"
//                       >
//                           <Button danger>Delete</Button>
//                       </Popconfirm>
//                   </Col>
//               </Row>
//           ),
//       },
//   ];
  
  

//     return (
//         <>
//             <MainComponent title="Orders" />
//             <Title level={2}>Orders</Title>

//             <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
//                 <Col xs={24} sm={8}>
//                     <Card title="All Orders" bordered={false}>
//                         <p>{orders.length}</p>
//                     </Card>
//                 </Col>
//                 <Col xs={24} sm={8}>
//                     <Card title="Delivered Orders" bordered={false}>
//                         <p>{deliveredCount}</p>
//                     </Card>
//                 </Col>
//                 <Col xs={24} sm={8}>
//                     <Card title="Pending Orders" bordered={false}>
//                         <p>{pendingCount}</p>
//                     </Card>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col span={24}>
//                     <Table
//                         dataSource={orders}
//                         columns={columns}
//                         pagination={false}
//                         scroll={{ x: 600 }}
//                     />
//                 </Col>
//             </Row>

//             <Drawer
//                 title="Order Details"
//                 placement="right"
//                 onClose={closeDrawer}
//                 visible={visible}
//                 width={400}
//             >
//                 {selectedOrder && (
//                     <div>
//                         <h3>Customer: {selectedOrder.name}</h3>
//                         <p>User ID: {selectedOrder.user}</p>
//                         <p>Address: {selectedOrder.address}</p>
//                         <p>Phone: {selectedOrder.phone}</p>
//                         <p>Total Items: {selectedOrder.totalItems}</p>
//                         <p>Total Amount: PKR {selectedOrder.totalAmount.toFixed(2)}</p>
//                         <h4>Items:</h4>
//                         {selectedOrder.items.map(item => (
//                             <div key={item.item.id} className="cart-item">
//                                 <img
//                                     src={item.item.imageUrl}
//                                     alt={item.item.title}
//                                     style={{ width: '50px', height: '50px' }}
//                                 />
//                                 <div>
//                                     <h5>{item.item.title}</h5>
//                                     <p>Price: PKR {item.item.price}</p>
//                                     <p>Quantity: {item.quantity}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </Drawer>
//         </>
//     );
// };

// export default Orders;































import React, { useEffect, useState, useContext } from 'react';
import MainComponent from './DashboardLayout';
import { Table, Typography, Button, Row, Col, Drawer, message, Popconfirm, Card, Tag } from 'antd';
import { db } from '../../../Config/firebaseConfig';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../../SingleScreen/AuthContext';

const Orders = () => {
    const { Title } = Typography;
    const [orders, setOrders] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [deliveredCount, setDeliveredCount] = useState(0);
    const [pendingCount, setPendingCount] = useState(0);

    // Fetch all orders from Firestore
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Checkout'));
                const allOrders = [];

                querySnapshot.forEach((doc) => {
                    const orderData = doc.data().checkouts.map(order => ({
                        ...order,
                        timestamp: order.timestamp, // Store the timestamp for countdown calculation
                        user: doc.id, // Store the user ID for each order
                    }));
                    allOrders.push(...orderData); // Collect all orders
                });

                setOrders(allOrders);
                updateOrderCounts(allOrders);
            } catch (error) {
                console.error('Error fetching orders:', error);
                message.error('Failed to fetch orders.');
            }
        };
        fetchOrders();
    }, []);

    const getTimeLeft = (timestamp) => {
        const orderTime = new Date(timestamp);
        const now = new Date();
        const timeLeft = 2 * 24 * 60 * 60 * 1000 - (now - orderTime); // 2 days in ms

        if (timeLeft <= 0) return 'Delivered'; // If time is up

        const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
        const hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setOrders((prevOrders) =>
                prevOrders.map((order) => {
                    if (order.status === 'Pending') {
                        const timeLeft = getTimeLeft(order.timestamp);
                        return { ...order, timeLeft };
                    }
                    return order;
                })
            );
        }, 1000); // Update every second

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    const updateOrderCounts = (ordersData) => {
        const delivered = ordersData.filter(order => order.status === 'Delivered').length;
        const pending = ordersData.filter(order => order.status === 'Pending').length;
        setDeliveredCount(delivered);
        setPendingCount(pending);
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
                const updatedOrders = userOrdersSnapshot
                    .data()
                    .checkouts.filter(order => order.timestamp !== orderToDelete.timestamp);

                await updateDoc(ordersRef, { checkouts: updatedOrders });
                setOrders(prevOrders => prevOrders.filter(order => order.timestamp !== orderToDelete.timestamp));
                updateOrderCounts(updatedOrders);
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
        { title: 'User ID', dataIndex: 'user', key: 'user' }, // Show User ID
        { title: 'Date', dataIndex: 'timestamp', key: 'timestamp' },
        { title: 'Total (PKR)', dataIndex: 'totalAmount', key: 'totalAmount' },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => (
                <Tag color={record.status === 'Pending' ? 'orange' : 'green'}>
                    {record.status}
                </Tag>
            ),
        },
        {
            title: 'Time Remaining',
            key: 'timeRemaining',
            render: (text, record) => (
                <span>
                    {record.timeLeft === 'Delivered' ? 'Delivered' : getTimeLeft(record.timestamp)}
                </span>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <Row gutter={16}>
                    <Col>
                        <Button
                            style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
                            onClick={() => showDrawer(record)}
                        >
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
                </Row>
            ),
        },
    ];

    return (
        <>
            <MainComponent title="Orders" />
            <Title level={2}>Orders</Title>

            <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
                <Col xs={24} sm={8}>
                    <Card title="All Orders" bordered={false}>
                        <p>{orders.length}</p>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card title="Delivered Orders" bordered={false}>
                        <p>{deliveredCount}</p>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card title="Pending Orders" bordered={false}>
                        <p>{pendingCount}</p>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Table
                        dataSource={orders}
                        columns={columns}
                        pagination={false}
                        scroll={{ x: 600 }}
                    />
                </Col>
            </Row>

            <Drawer
                title="Order Details"
                placement="right"
                onClose={closeDrawer}
                visible={visible}
                width={400}
            >
                {selectedOrder && (
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
                                    alt={item.item.title}
                                    style={{ width: '50px', height: '50px' }}
                                />
                                <div>
                                    <h5>{item.item.title}</h5>
                                    <p>Price: PKR {item.item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Drawer>
        </>
    );
};

export default Orders;
