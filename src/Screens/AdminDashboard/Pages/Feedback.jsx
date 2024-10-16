// // src/pages/Feedback.js
// import { List, ListItem, ListItemText, Button } from "@mui/material";

// const Feedback = () => {
//   const feedbacks = [
//     { id: 1, user: "User A", review: "Great product!" },
//     { id: 2, user: "User B", review: "Fast delivery!" },
//   ];

//   return (
//     <List>
//       {feedbacks.map((item) => (
//         <ListItem key={item.id} secondaryAction={<Button variant="contained">Delete</Button>}>
//           <ListItemText primary={item.user} secondary={item.review} />
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default Feedback;




import React from 'react';
import MainComponent from './DashboardLayout';

const Feedback = () => {
  return (
    <>
      <MainComponent title={'Feedback'}/>
      <br />
      <div>Feedback Page</div>
    </>
  );
};

export default Feedback;
