// // // import React from 'react';
// // // import MainComponent from './DashboardLayout'; // Assuming this is the updated path for MainComponent
// // // import { Table, Typography, Row, Col, Card } from 'antd';

// // // const Feedback = () => {
// // //     const { Title } = Typography;

// // //     // Example feedback data
// // //     const feedbackData = [
// // //         {
// // //             key: 1,
// // //             customer: 'Alice Johnson',
// // //             feedback: 'Great service and VIP Items!',
// // //             rating: 5,
// // //             date: '2024-10-12',
// // //         },
// // //         {
// // //             key: 2,
// // //             customer: 'Bob Williams',
// // //             feedback: 'The delivery was late, but the food was still warm.',
// // //             rating: 4,
// // //             date: '2024-10-11',
// // //         },
// // //         {
// // //             key: 3,
// // //             customer: 'Charlie Brown',
// // //             feedback: 'Not satisfied with the order, some items were missing.',
// // //             rating: 2,
// // //             date: '2024-10-10',
// // //         },
// // //         // Add more feedback as needed
// // //     ];

// // //     const columns = [
// // //         { title: 'Customer', dataIndex: 'customer', key: 'customer' },
// // //         { title: 'Feedback', dataIndex: 'feedback', key: 'feedback' },
// // //         { title: 'Rating', dataIndex: 'rating', key: 'rating' },
// // //         { title: 'Date', dataIndex: 'date', key: 'date' },
// // //     ];

// // //     return (
// // //         <>
// // //             <MainComponent showMainContent={false} /> {/* Show only sidebar */}
// // //             <Title level={2}>Customer Feedback</Title>
// // //             <Row gutter={[16, 16]} justify="center">
// // //                 <Col xs={24} sm={24} md={22} lg={20} xl={18}>
// // //                     <Card>
// // //                         <Table 
// // //                             dataSource={feedbackData} 
// // //                             columns={columns} 
// // //                             pagination={false} 
// // //                             scroll={{ x: 'max-content' }} 
// // //                             rowKey="key" 
// // //                             bordered
// // //                         />
// // //                     </Card>
// // //                 </Col>
// // //             </Row>
// // //         </>
// // //     );
// // // };

// // // export default Feedback;



// // import React, { useEffect, useState } from 'react';
// // import MainComponent from './DashboardLayout'; // Adjust the path if necessary
// // import { Table, Typography, Row, Col, Card, message, Avatar } from 'antd';
// // import { db } from '../../../Config/firebaseConfig'; // Ensure the path is correct
// // import { collection, getDocs } from 'firebase/firestore';

// // const Feedback = () => {
// //     const { Title } = Typography;
// //     const [feedbackData, setFeedbackData] = useState([]); // State to hold feedback data
// //     const [loading, setLoading] = useState(true); // Loading state

// //     useEffect(() => {
// //         const fetchFeedback = async () => {
// //             try {
// //                 const feedbackCollection = collection(db, 'Feedback');
// //                 const feedbackSnapshot = await getDocs(feedbackCollection);
// //                 const feedbackList = [];

// //                 feedbackSnapshot.forEach((doc) => {
// //                     const data = doc.data();
// //                     if (data && data.feedbacks) {
// //                         data.feedbacks.forEach((feedback) => {
// //                             feedbackList.push({
// //                                 key: doc.id, // Using document ID as key
// //                                 customer: feedback.name || 'Unknown Customer',
// //                                 feedback: feedback.feedback || 'No feedback provided',
// //                                 rating: feedback.rating || 0,
// //                                 date: feedback.timestamp
// //                                     ? feedback.timestamp.toDate().toLocaleDateString()
// //                                     : 'Unknown Date',
// //                                 orderID: feedback.orderID || 'N/A',
// //                                 products: feedback.products.map((product) => ({
// //                                     name: product.title || 'Unknown Product',
// //                                     imageUrl: product.imageUrl || '',
// //                                 })),
// //                             });
// //                         });
// //                     }
// //                 });

// //                 setFeedbackData(feedbackList);
// //             } catch (error) {
// //                 console.error('Error fetching feedback:', error);
// //                 message.error('Failed to load feedback data.');
// //             } finally {
// //                 setLoading(false); // Set loading to false once fetching is done
// //             }
// //         };

// //         fetchFeedback();
// //     }, []);

// //     const columns = [
// //         { title: 'Customer', dataIndex: 'customer', key: 'customer' },
// //         {
// //             title: 'Products',
// //             dataIndex: 'products',
// //             key: 'products',
// //             render: (products) =>
// //                 products.map((product, index) => (
// //                     <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
// //                         <Avatar src={product.imageUrl} alt={product.name} style={{ marginRight: '8px' }} />
// //                         <span>{product.name}</span>
// //                     </div>
// //                 )),
// //         },
// //         { title: 'Feedback', dataIndex: 'feedback', key: 'feedback' },
// //         { title: 'Rating', dataIndex: 'rating', key: 'rating' },
// //         { title: 'Date', dataIndex: 'date', key: 'date' },
// //         { title: 'Order ID', dataIndex: 'orderID', key: 'orderID' },
// //     ];

// //     return (
// //         <>
// //             <MainComponent showMainContent={false} /> {/* Show only sidebar */}
// //             <Title level={2}>Customer Feedback</Title>
// //             <Row gutter={[16, 16]} justify="center">
// //                 <Col xs={24} sm={24} md={22} lg={20} xl={18}>
// //                     <Card>
// //                         <Table
// //                             dataSource={feedbackData}
// //                             columns={columns}
// //                             pagination={false}
// //                             scroll={{ x: 'max-content' }}
// //                             rowKey="key"
// //                             bordered
// //                             loading={loading} // Show loading state
// //                         />
// //                     </Card>
// //                 </Col>
// //             </Row>
// //         </>
// //     );
// // };

// // export default Feedback;








// // import React, { useEffect, useState, useContext } from 'react';
// // import { AuthContext } from '../../SingleScreen/AuthContext';
// // import { db } from '../../../Config/firebaseConfig';
// // import { collection, getDocs, onSnapshot, doc } from 'firebase/firestore';
// // import { Table, Typography, message, Row, Col } from 'antd';

// // const { Title, Text } = Typography;

// // const Feedback = () => {
// //     const { user } = useContext(AuthContext); // Get the logged-in user
// //     const [feedbacks, setFeedbacks] = useState([]);
// //     const [loading, setLoading] = useState(true);

// //     // Function to fetch feedback from Firestore
// //     const fetchFeedbacks = async () => {
// //         try {
// //             if (!user) return; // Prevent fetching if user is not logged in
            
// //             console.log(`Fetching feedback for: ${user.name}`); // Debugging info
// //             const feedbackRef = doc(db, 'Feedback', user.name); // Access specific user's feedback
            
// //             onSnapshot(feedbackRef, (snapshot) => {
// //                 if (snapshot.exists()) {
// //                     const fetchedFeedbacks = snapshot.data().feedbacks || [];
// //                     setFeedbacks(fetchedFeedbacks);
// //                 } else {
// //                     console.log('No feedbacks found'); // Debugging
// //                     setFeedbacks([]);
// //                 }
// //                 setLoading(false);
// //             });
// //         } catch (error) {
// //             console.error('Error fetching feedback:', error);
// //             message.error('Failed to load feedback. Please try again.');
// //             setLoading(false);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchFeedbacks(); // Fetch feedbacks on component mount
// //     }, [user]);

// //     const columns = [
// //         {
// //             title: 'Customer Name',
// //             dataIndex: 'name',
// //             key: 'name',
// //         },
// //         {
// //             title: 'Feedback',
// //             dataIndex: 'feedback',
// //             key: 'feedback',
// //         },
// //         {
// //             title: 'Order ID',
// //             dataIndex: 'orderID',
// //             key: 'orderID',
// //         },
// //         {
// //             title: 'Date',
// //             dataIndex: 'timestamp',
// //             key: 'timestamp',
// //             render: (timestamp) => (
// //                 <Text>{timestamp.toDate().toLocaleDateString()}</Text>
// //             ),
// //         },
// //         {
// //             title: 'Products',
// //             dataIndex: 'products',
// //             key: 'products',
// //             render: (products) => (
// //                 <ul>
// //                     {products.map((product, index) => (
// //                         <li key={index}>{product.title}</li>
                    
// //                     ))}
// //                 </ul>
// //             ),
// //         },
// //     ];

// //     if (loading) return <div>Loading feedbacks...</div>;

// //     return (
// //         <div className="feedback-container">
// //             <Title level={1}>Customer Feedback</Title>
// //             <Row gutter={[16, 16]}>
// //                 <Col span={24}>
// //                     <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
// //                         <Table
// //                             columns={columns}
// //                             dataSource={feedbacks}
// //                             rowKey={(record) => record.orderID}
// //                             pagination={false}
// //                             size="middle"
// //                         />
// //                     </div>
// //                 </Col>
// //             </Row>
// //         </div>
// //     );
// // };

// // export default Feedback;






// import React, { useEffect, useState, useContext } from 'react';
// import { AuthContext } from '../../SingleScreen/AuthContext';
// import { db } from '../../../Config/firebaseConfig';
// import { doc, onSnapshot } from 'firebase/firestore';
// import { Table, Typography, Row, Col, Avatar, List, Card, message, Spin } from 'antd';
// import './Feedback.css'; // Import custom CSS for additional styling

// const { Title, Text } = Typography;

// const Feedback = () => {
//     const { user } = useContext(AuthContext); // Get the logged-in user
//     const [feedbacks, setFeedbacks] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Fetch feedback from Firestore
//     const fetchFeedbacks = async () => {
//         try {
//             if (!user) return; // Prevent fetching if user is not logged in

//             const feedbackRef = doc(db, 'Feedback', user.name); // User's feedback
//             onSnapshot(feedbackRef, (snapshot) => {
//                 if (snapshot.exists()) {
//                     const fetchedFeedbacks = snapshot.data().feedbacks || [];
//                     setFeedbacks(fetchedFeedbacks);
//                 } else {
//                     setFeedbacks([]);
//                 }
//                 setLoading(false);
//             });
//         } catch (error) {
//             message.error('Failed to load feedback. Please try again.');
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchFeedbacks(); // Fetch feedback on component mount
//     }, [user]);

//     const columns = [
//         {
//             title: 'Customer Name',
//             dataIndex: 'name',
//             key: 'name',
//             render: (text) => <Text strong>{text}</Text>,
//         },
//         {
//             title: 'Feedback',
//             dataIndex: 'feedback',
//             key: 'feedback',
//         },
//         {
//             title: 'Order ID',
//             dataIndex: 'orderID',
//             key: 'orderID',
//             render: (orderID) => <Text code>{orderID}</Text>,
//         },
//         {
//             title: 'Date',
//             dataIndex: 'timestamp',
//             key: 'timestamp',
//             render: (timestamp) => (
//                 <Text>{timestamp.toDate().toLocaleDateString()}</Text>
//             ),
//         },
//         {
//             title: 'Products',
//             dataIndex: 'products',
//             key: 'products',
//             render: (products) => (
//                 <div className="product-list">
//                     {products.map((product) => (
//                         <div key={product.title} className="product-item">
//                             <Avatar
//                                 src={product.imageUrl}
//                                 style={{ width: 40, height: 40, marginRight: 8 }}
//                             />
//                             <Text>{product.title}</Text>
//                         </div>
//                     ))}
//                 </div>
//             ),
//         },
//     ];

//     return (
//         <div className="feedback-container">
//             <Title level={1}>Customer Feedback</Title>

//             {loading ? (
//                 <div className="loading-container">
//                     <Spin size="large" />
//                 </div>
//             ) : (
//                 <Row gutter={[16, 16]}>
//                     <Col span={24}>
//                         <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
//                             <Table
//                                 columns={columns}
//                                 dataSource={feedbacks}
//                                 rowKey={(record) => record.orderID}
//                                 pagination={{ pageSize: 5 }}
//                                 size="middle"
//                                 bordered
//                                 className="feedback-table"
//                             />
//                         </div>
//                     </Col>
//                 </Row>
//             )}
//         </div>
//     );
// };

// export default Feedback;





import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../SingleScreen/AuthContext';
import { db } from '../../../Config/firebaseConfig';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { Table, Typography, Row, Col, Avatar, Spin, message } from 'antd';
import './Feedback.css'; // Import custom CSS for additional styling
import MainComponent from './DashboardLayout';

const { Title, Text } = Typography;

const Feedback = () => {
    const { user } = useContext(AuthContext); // Get the logged-in user
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all feedbacks from Firestore
    const fetchAllFeedbacks = async () => {
        try {
            const feedbackQuery = query(collection(db, 'Feedback')); // Query the entire Feedback collection
            onSnapshot(feedbackQuery, (querySnapshot) => {
                const allFeedbacks = [];

                querySnapshot.forEach((doc) => {
                    const feedbackData = doc.data().feedbacks || [];
                    feedbackData.forEach((feedback) => {
                        allFeedbacks.push({ ...feedback, user: doc.id }); // Add user ID to each feedback
                    });
                });

                setFeedbacks(allFeedbacks);
                setLoading(false);
            });
        } catch (error) {
            message.error('Failed to load feedback. Please try again.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllFeedbacks(); // Fetch feedback on component mount
    }, []);

    const columns = [
        {
            title: 'Customer Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <Text strong>{text}</Text>,
        },
        {
            title: 'User ID',
            dataIndex: 'user',
            key: 'user',
            render: (text) => <Text>{text}</Text>, // Show the user who gave the feedback
        },
        {
            title: 'Feedback',
            dataIndex: 'feedback',
            key: 'feedback',
        },
        {
            title: 'Order ID',
            dataIndex: 'orderID',
            key: 'orderID',
            render: (orderID) => <Text code>{orderID}</Text>,
        },
        {
            title: 'Date',
            dataIndex: 'timestamp',
            key: 'timestamp',
            render: (timestamp) => (
                <Text>{timestamp.toDate().toLocaleDateString()}</Text>
            ),
        },
        {
            title: 'Feedback Products',
            dataIndex: 'products',
            key: 'products',
            render: (products) => (
                <div className="product-list">
                    {products.map((product) => (
                        <div key={product.title} className="product-item">
                            <Avatar
                                src={product.imageUrl}
                                style={{ width: 40, height: 40, marginRight: 8 }}
                            />
                            <Text>{product.title}</Text>
                        </div>
                    ))}
                </div>
            ),
        },
    ];

    return (

        <div className="feedback-container">
            <MainComponent showMainContent={false} title="Customers Feedback"/> {/* Show only sidebar */}
            <Title level={1}>Customer Feedback</Title>
    
            {loading ? (
                <div className="loading-container">
                    <Spin size="large" />
                </div>
            ) : (
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        {/* Wrap the table in a div for horizontal scrolling */}
                        <div style={{ overflowX: 'auto' }}>
                            <Table
                                columns={columns}
                                dataSource={feedbacks}
                                rowKey={(record) => record.orderID}
                                pagination={{ pageSize: 5 }}
                                size="middle"
                                bordered
                                className="feedback-table"
                            />
                        </div>
                    </Col>
                </Row>
            )}
        </div>
    );
    
};

export default Feedback;
