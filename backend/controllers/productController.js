const db = require('../models/db');

const getAllProducts = (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM productos');
    const rows = stmt.all();
    res.json(rows);
  } catch (err) {
    console.error('Error al obtener productos:', err.message);
    res.status(500).json({ error: 'Error interno al obtener productos' });
  }
};

const createProduct = (req, res) => {
  const { nombre, precio, descripcion, imagen } = req.body;

  if (!nombre || typeof precio !== 'number' || precio <= 0) {
    return res.status(400).json({
      error: 'El nombre es obligatorio y el precio debe ser un número positivo'
    });
  }

  try {
    const stmt = db.prepare(
      'INSERT INTO productos (nombre, precio, descripcion, imagen) VALUES (?, ?, ?, ?)'
    );
    const result = stmt.run(nombre, precio, descripcion || '', imagen || '');

    res.status(201).json({
      message: 'Producto creado correctamente',
      producto: {
        id: result.lastInsertRowid,
        nombre,
        precio,
        descripcion,
        imagen
      }
    });
  } catch (err) {
    console.error('Error al crear producto:', err.message);
    res.status(500).json({
      error: 'Error interno al crear producto',
      detalle: err.message
    });
  }
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { nombre, precio, descripcion, imagen } = req.body;

  if (!nombre || typeof precio !== 'number' || precio <= 0) {
    return res.status(400).json({
      error: 'El nombre es obligatorio y el precio debe ser un número positivo'
    });
  }

  try {
    const stmt = db.prepare(
      'UPDATE productos SET nombre = ?, precio = ?, descripcion = ?, imagen = ? WHERE id = ?'
    );
    const result = stmt.run(nombre, precio, descripcion || '', imagen || '', id);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({
      message: 'Producto actualizado correctamente',
      producto: { id, nombre, precio, descripcion, imagen }
    });
  } catch (err) {
    console.error('Error al actualizar producto:', err.message);
    res.status(500).json({ error: 'Error interno al actualizar producto' });
  }
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  try {
    const stmt = db.prepare('DELETE FROM productos WHERE id = ?');
    const result = stmt.run(id);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto eliminado correctamente' });
  } catch (err) {
    console.error('Error al eliminar producto:', err.message);
    res.status(500).json({ error: 'Error interno al eliminar producto' });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
};