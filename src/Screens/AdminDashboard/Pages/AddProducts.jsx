// import React, { useState, useEffect } from 'react';
// import {
//   TextField, Button, Container, Typography, Card, CardContent, Grid,
//   CircularProgress, Snackbar, Alert, Dialog, DialogActions, DialogContent, DialogTitle
// } from '@mui/material';
// import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { db, storage } from '../../../Config/firebaseConfig';

// const AddProducts = () => {
//   const [productData, setProductData] = useState({
//     name: '', category: '', description: '', price: ''
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [editMode, setEditMode] = useState(false); // Track if in edit mode
//   const [currentProductId, setCurrentProductId] = useState(null); // Store the product ID being edited
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   const handleAddOrUpdateProduct = async () => {
//     setLoading(true);
//     try {
//       let imageUrl = '';

//       // If an image is selected, upload it
//       if (imageFile) {
//         const imageRef = ref(storage, `images/${imageFile.name}`);
//         await uploadBytes(imageRef, imageFile);
//         imageUrl = await getDownloadURL(imageRef);
//       }

//       // If editing, update the product
//       if (editMode && currentProductId) {
//         const productRef = doc(db, 'products', currentProductId);
//         await updateDoc(productRef, {
//           ...productData,
//           price: parseFloat(productData.price),
//           ...(imageUrl && { imageUrl }) // Only update imageUrl if a new image was uploaded
//         });

//         setSnackbar({ open: true, message: 'Product updated successfully!', severity: 'success' });
//       } else {
//         // Add a new product
//         await addDoc(collection(db, 'products'), {
//           ...productData,
//           price: parseFloat(productData.price),
//           imageUrl
//         });

//         setSnackbar({ open: true, message: 'Product added successfully!', severity: 'success' });
//       }

//       resetForm();
//       fetchProducts();
//     } catch (error) {
//       console.error('Error adding/updating product:', error);
//       setSnackbar({ open: true, message: 'Error adding/updating product. Please try again.', severity: 'error' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchProducts = async () => {
//     const querySnapshot = await getDocs(collection(db, 'products'));
//     const productsArray = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setProducts(productsArray);
//   };

//   const handleEdit = (product) => {
//     setProductData({
//       name: product.name,
//       category: product.category,
//       description: product.description,
//       price: product.price,
//     });
//     setCurrentProductId(product.id);
//     setEditMode(true);
//     setImageFile(null); // Reset the image file
//   };

//   const handleDelete = async (productId) => {
//     try {
//       await deleteDoc(doc(db, 'products', productId));
//       setSnackbar({ open: true, message: 'Product deleted successfully!', severity: 'success' });
//       fetchProducts();
//     } catch (error) {
//       console.error('Error deleting product:', error);
//       setSnackbar({ open: true, message: 'Error deleting product. Please try again.', severity: 'error' });
//     }
//   };

//   const resetForm = () => {
//     setProductData({ name: '', category: '', description: '', price: '' });
//     setImageFile(null);
//     setEditMode(false);
//     setCurrentProductId(null);
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar({ open: false, message: '', severity: '' });
//   };

//   return (
//     <Container>
//       <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 3, textAlign: 'center' }}>
//         {editMode ? 'Edit Product' : 'Add Product'}
//       </Typography>

//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="Product Name"
//             name="name"
//             value={productData.name}
//             onChange={handleChange}
//             fullWidth
//             required
//           />
//         </Grid>

//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="Category"
//             name="category"
//             value={productData.category}
//             onChange={handleChange}
//             fullWidth
//             required
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <TextField
//             label="Description"
//             name="description"
//             value={productData.description}
//             onChange={handleChange}
//             fullWidth
//             required
//           />
//         </Grid>

//         <Grid item xs={12} sm={6}>
//           <TextField
//             label="Price"
//             name="price"
//             value={productData.price}
//             onChange={handleChange}
//             fullWidth
//             required
//             type="number"
//           />
//         </Grid>

//         <Grid item xs={12} sm={6}>
//           <Button variant="contained" component="label" fullWidth>
//             Upload Image
//             <input type="file" hidden onChange={handleImageChange} />
//           </Button>
//         </Grid>

//         <Grid item xs={12}>
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             onClick={handleAddOrUpdateProduct}
//             sx={{ marginTop: 2 }}
//             disabled={loading}
//           >
//             {loading ? <CircularProgress size={24} /> : editMode ? 'Update Product' : 'Add Product'}
//           </Button>
//         </Grid>
//       </Grid>

//       <Typography variant="h5" sx={{ marginTop: 5, marginBottom: 2 }}>
//         Products List
//       </Typography>

//       <Grid container spacing={2}>
//         {products.map((product) => (
//           <Grid item xs={12} sm={6} md={4} key={product.id}>
//             <Card sx={{ boxShadow: 3, padding: 2, textAlign: 'center' }}>
//               <CardContent>
//                 <Typography variant="h6">{product.name}</Typography>
//                 <Typography variant="subtitle1">{product.category}</Typography>
//                 <Typography variant="body2" sx={{ marginBottom: 1 }}>
//                   {product.description}
//                 </Typography>
//                 <Typography variant="h6">Price: ${product.price}</Typography>
//                 {product.imageUrl && (
//                   <img
//                     src={product.imageUrl}
//                     alt={product.name}
//                     style={{ width: '100%', height: '200px', objectFit: 'cover', marginTop: 5 }}
//                   />
//                 )}
//                 <Button onClick={() => handleEdit(product)} sx={{ marginTop: 1 }}>
//                   Edit
//                 </Button>
//                 <Button color="error" onClick={() => handleDelete(product.id)} sx={{ marginLeft: 1 }}>
//                   Delete
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={4000}
//         onClose={handleCloseSnackbar}
//       >
//         <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default AddProducts;










import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Container, Typography, Card, CardContent, Grid, 
  CircularProgress, Snackbar, Alert, Dialog, DialogActions, 
  DialogContent, DialogTitle, IconButton, Avatar, Box
} from '@mui/material';
import { AddPhotoAlternate, Edit, Delete } from '@mui/icons-material';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../Config/firebaseConfig';

const AddProducts = () => {
  const [productData, setProductData] = useState({
    name: '', category: '', description: '', price: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(''); // For showing uploaded image preview
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file)); // Preview the image
  };

  const handleAddOrUpdateProduct = async () => {
    setLoading(true);
    try {
      let imageUrl = '';

      if (imageFile) {
        const imageRef = ref(storage, `images/${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      if (editMode && currentProductId) {
        const productRef = doc(db, 'products', currentProductId);
        await updateDoc(productRef, {
          ...productData,
          price: parseFloat(productData.price),
          ...(imageUrl && { imageUrl })
        });

        setSnackbar({ open: true, message: 'Product updated successfully!', severity: 'success' });
      } else {
        await addDoc(collection(db, 'products'), {
          ...productData,
          price: parseFloat(productData.price),
          imageUrl
        });

        setSnackbar({ open: true, message: 'Product added successfully!', severity: 'success' });
      }

      resetForm();
      fetchProducts();
    } catch (error) {
      console.error('Error adding/updating product:', error);
      setSnackbar({ open: true, message: 'Error adding/updating product. Please try again.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const productsArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productsArray);
  };

  const handleEdit = (product) => {
    setProductData({
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price,
    });
    setImagePreview(product.imageUrl || '');
    setCurrentProductId(product.id);
    setEditMode(true);
    setImageFile(null);
  };

  const handleDelete = async (productId) => {
    try {
      await deleteDoc(doc(db, 'products', productId));
      setSnackbar({ open: true, message: 'Product deleted successfully!', severity: 'success' });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      setSnackbar({ open: true, message: 'Error deleting product. Please try again.', severity: 'error' });
    }
  };

  const resetForm = () => {
    setProductData({ name: '', category: '', description: '', price: '' });
    setImagePreview('');
    setImageFile(null);
    setEditMode(false);
    setCurrentProductId(null);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '', severity: '' });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {editMode ? 'Edit Product' : 'Add Product'}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Product Name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            fullWidth
            required
            type="number"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            component="label"
            fullWidth
            startIcon={<AddPhotoAlternate />}
          >
            Upload Image
            <input type="file" hidden onChange={handleImageChange} />
          </Button>

          {imagePreview && (
            <Box mt={2} textAlign="center">
              <Avatar
                src={imagePreview}
                variant="rounded"
                sx={{ width: 200, height: 200, margin: 'auto' }}
              />
            </Box>
          )}
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddOrUpdateProduct}
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : editMode ? 'Update Product' : 'Add Product'}
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
        Products List
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ boxShadow: 3, p: 2, textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="subtitle1">{product.category}</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>{product.description}</Typography>
                <Typography variant="h6">Price: ${product.price}</Typography>
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: '100%', height: '150px', objectFit: 'cover', marginTop: 8 }}
                  />
                )}
                <IconButton onClick={() => handleEdit(product)}><Edit /></IconButton>
                <IconButton color="error" onClick={() => handleDelete(product.id)}><Delete /></IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddProducts;
