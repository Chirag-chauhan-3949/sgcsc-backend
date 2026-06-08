// src/routes/franchiseReceiptRoutes.js
const express = require('express');
const router = express.Router();
const franchiseAuth = require('../middleware/franchiseAuthMiddleware');
const {
  createReceipt,
  getReceipts,
  updateReceipt,
  deleteReceipt
} = require('../controllers/franchiseReceiptController');

router.use(franchiseAuth);

router.post('/', createReceipt);
router.get('/', getReceipts);
router.put('/:id', updateReceipt);
router.delete('/:id', deleteReceipt);

module.exports = router;
