// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../SingleScreen/AuthContext'; // Ensure this is the correct path
// import { db } from '../../Config/firebaseConfig';
// import { doc, getDoc } from 'firebase/firestore';
// import { Drawer, Table, Button, Row, Col } from 'antd'; // Importing Ant Design components
// import './CustomersOrders.css'; // Importing the CSS file for styles

// export const CustomersOrders = () => {
//     const { user } = useContext(AuthContext);
//     const [orders, setOrders] = useState([]);
//     const [visible, setVisible] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             if (user) {
//                 const checkoutRef = doc(db, 'Checkout', user.name); // Use user name as document ID
//                 const docSnapshot = await getDoc(checkoutRef);
//                 if (docSnapshot.exists()) {
//                     setOrders(docSnapshot.data().checkouts || []);
//                 }
//             }
//         };

//         fetchOrders();
//     }, [user]);

//     const showDrawer = (order) => {
//         setSelectedOrder(order);
//         setVisible(true);
//     };

//     const onClose = () => {
//         setVisible(false);
//         setSelectedOrder(null);
//     };

//     const columns = [
//         {
//             title: 'Name',
//             dataIndex: 'name',
//             key: 'name',
//         },
//         {
//             title: 'Total Amount',
//             dataIndex: 'totalAmount',
//             key: 'totalAmount',
//             render: (text) => `$${text.toFixed(2)}`,
//         },
//         {
//             title: 'Total Items',
//             dataIndex: 'totalItems',
//             key: 'totalItems',
//         },
//         {
//             title: 'Status',
//             dataIndex: 'status',
//             key: 'status',
//             render: (text) => text || 'Pending',
//         },
//         {
//             title: 'Actions',
//             key: 'actions',
//             render: (_, order) => (
//                 <Button className="view-detail-btn" onClick={() => showDrawer(order)}>
//                     View Detail
//                 </Button>
//             ),
//         },
//     ];

//     return (
//         <div className="customers-orders">
//             <h1>Customers Orders</h1>
//             <Row gutter={16}>
//                 <Col span={24}>
//                     <Table
//                         className="orders-table"
//                         columns={columns}
//                         dataSource={orders}
//                         pagination={false}
//                         rowKey={(record) => record.name} // Ensure unique keys for each row
//                     />
//                 </Col>
//             </Row>

//             <Drawer
//                 title="Order Details"
//                 placement="right"
//                 onClose={onClose}
//                 visible={visible}
//                 width={400}
//             >
//                 {selectedOrder && (
//                     <div className="order-details">
//                         <h3>Items in your order:</h3>
//                         <ul>
//                             {selectedOrder.items.map((item, index) => (
//                                 <li key={index} className="order-item">
//                                     <h3>{item.item.title}</h3>
//                                     <img src={item.item.imageUrl} alt={item.item.title} className="order-item-image" />
//                                     <h5>{item.item.category}</h5>
//                                     <span style={{ margin: '0px 10px' }}>
//                                         Quantity: {item.quantity}
//                                     </span>
//                                     <h5>${item.item.price.toFixed(2)}</h5>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </Drawer>
//         </div>
//     );
// };





// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../SingleScreen/AuthContext'; // Ensure this is the correct path
// import { db } from '../../Config/firebaseConfig';
// import { doc, getDoc } from 'firebase/firestore';
// import { Drawer, Table, Button, Typography, List, Avatar, Row, Col } from 'antd'; // Importing Ant Design components
// import './CustomersOrders.css'; // Importing the CSS file for additional styles

// const { Title, Text } = Typography;

// export const CustomersOrders = () => {
//     const { user } = useContext(AuthContext);
//     const [orders, setOrders] = useState([]);
//     const [visible, setVisible] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             if (user) {
//                 const checkoutRef = doc(db, 'Checkout', user.name); // Use user name as document ID
//                 const docSnapshot = await getDoc(checkoutRef);
//                 if (docSnapshot.exists()) {
//                     setOrders(docSnapshot.data().checkouts || []);
//                 }
//             }
//         };

//         fetchOrders();
//     }, [user]);

//     const showDrawer = (order) => {
//         setSelectedOrder(order);
//         setVisible(true);
//     };

//     const onClose = () => {
//         setVisible(false);
//         setSelectedOrder(null);
//     };

//     const columns = [
//         {
//             title: 'Name',
//             dataIndex: 'name',
//             key: 'name',
//         },
//         {
//             title: 'Total Amount',
//             dataIndex: 'totalAmount',
//             key: 'totalAmount',
//             render: (text) => `PKR ${text.toFixed(2)}`,
//         },
//         {
//             title: 'Total Items',
//             dataIndex: 'totalItems',
//             key: 'totalItems',
//         },
//         {
//             title: 'Status',
//             dataIndex: 'status',
//             key: 'status',
//             render: (text) => text || 'Pending',
//         },
//         {
//             title: 'Actions',
//             key: 'actions',
//             render: (_, order) => (
//                 <Button type="primary" style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
//                     onClick={() => showDrawer(order)}>
//                     View Detail
//                 </Button>
//             ),
//         },
//     ];

//     return (
//         <div className="customers-orders">
//             <Title level={1}>Customers Orders</Title>
//             <Row gutter={[16, 16]}>
//                 <Col span={24}>
//                     <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
//                         <Table
//                             columns={columns}
//                             dataSource={orders}
//                             pagination={false}
//                             rowKey={(record) => record.name} // Ensure unique keys for each row
//                             size="middle"
//                             style={{ whiteSpace: 'nowrap' }} // Prevents wrapping
//                         />
//                     </div>
//                 </Col>
//             </Row>

//             <Drawer
//                 title="Order Details"
//                 placement="right"
//                 onClose={onClose}
//                 visible={visible}
//                 width="35%" // Changed to a percentage for better responsiveness
//                 bodyStyle={{ padding: '20px' }} // Add padding inside the drawer
//             >
//                 {selectedOrder && (
//                     <div className="order-details">
//                         <Title level={3}>Items in your order:</Title>
//                         <List
//                             itemLayout="horizontal"
//                             dataSource={selectedOrder.items}
//                             renderItem={(item) => (
//                                 <List.Item>
//                                     <List.Item.Meta
//                                         avatar={<Avatar src={item.item.imageUrl} alt={item.item.title} />}
//                                         title={<Text strong>{item.item.title}</Text>}
//                                         description={
//                                             <div>
//                                                 <Text>{item.item.category}</Text>
//                                                 <Text style={{ margin: '0 10px' }}>
//                                                     Quantity: {item.quantity}
//                                                 </Text>
//                                                 <Text>PKR {item.item.price.toFixed(2)}</Text>
//                                             </div>
//                                         }
//                                     />
//                                 </List.Item>
//                             )}
//                         />
//                     </div>
//                 )}
//             </Drawer>
//         </div>
//     );
// };










import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../SingleScreen/AuthContext'; // Ensure this is the correct path
import { db } from '../../Config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Drawer, Table, Button, Typography, List, Avatar, Row, Col } from 'antd'; // Importing Ant Design components
import './CustomersOrders.css'; // Importing the CSS file for additional styles

const { Title, Text } = Typography;

export const CustomersOrders = ({ setHasOrders }) => { // Accept setHasOrders as a prop
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            if (user) {
                const checkoutRef = doc(db, 'Checkout', user.name); // Use user name as document ID
                const docSnapshot = await getDoc(checkoutRef);
                if (docSnapshot.exists()) {
                    const fetchedOrders = docSnapshot.data().checkouts || [];
                    setOrders(fetchedOrders);
                    setHasOrders(fetchedOrders.length > 0); // Update hasOrders state based on the fetched orders
                } else {
                    setHasOrders(false); // No orders found
                }
            }
        };

        fetchOrders();
    }, [user, setHasOrders]); // Add setHasOrders to the dependency array

    const showDrawer = (order) => {
        setSelectedOrder(order);
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
        setSelectedOrder(null);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Total Amount',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            render: (text) => `PKR ${text.toFixed(2)}`,
        },
        {
            title: 'Total Items',
            dataIndex: 'totalItems',
            key: 'totalItems',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => text || 'Pending',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, order) => (
                <Button type="primary" style={{ backgroundColor: '#6DA5C0', color: '#fff' }}
                    onClick={() => showDrawer(order)}>
                    View Detail
                </Button>
            ),
        },
    ];

    return (
        <div className="customers-orders">
            <Title level={1}>Customers Orders</Title>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
                        <Table
                            columns={columns}
                            dataSource={orders}
                            pagination={false}
                            rowKey={(record) => record.name} // Ensure unique keys for each row
                            size="middle"
                            style={{ whiteSpace: 'nowrap' }} // Prevents wrapping
                        />
                    </div>
                </Col>
            </Row>

            <Drawer
                title="Order Details"
                placement="right"
                onClose={onClose}
                visible={visible}
                width="35%" // Changed to a percentage for better responsiveness
                bodyStyle={{ padding: '20px' }} // Add padding inside the drawer
            >
                {selectedOrder && (
                    <div className="order-details">
                        <Title level={3}>Items in your order:</Title>
                        <List
                            itemLayout="horizontal"
                            dataSource={selectedOrder.items}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.item.imageUrl} alt={item.item.title} />}
                                        title={<Text strong>{item.item.title}</Text>}
                                        description={
                                            <div>
                                                <Text>{item.item.category}</Text>
                                                <Text style={{ margin: '0 10px' }}>
                                                    Quantity: {item.quantity}
                                                </Text>
                                                <Text>PKR {item.item.price.toFixed(2)}</Text>
                                            </div>
                                        }
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                )}
            </Drawer>
        </div>
    );
};
