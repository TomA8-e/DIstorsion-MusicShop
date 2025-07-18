const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const { verificarToken, esAdmin } = require('../middleware/authMiddleware');

// Todos los productos visibles para usuarios autenticados
router.get('/', verificarToken, getAllProducts);

// Crear producto (admin)
router.post('/', verificarToken, esAdmin, createProduct);

// Actualizar producto (admin)
router.put('/:id', verificarToken, esAdmin, updateProduct);

// Eliminar producto (admin)
router.delete('/:id', verificarToken, esAdmin, deleteProduct);

module.exports = router;