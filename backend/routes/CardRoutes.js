const express = require('express');
const router = express.Router();
const Card = require('../models/Card'); // Ensure this path is correct based on your project structure

// POST /api/cards - Create a new card
router.post('/cards', async (req, res) => {
  try {
    const { title, description } = req.body;
    const card = new Card({ title, description });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /api/cards - Get all cards or search by title
router.get('/cards', async (req, res) => {
  try {
    const query = req.query.title;
    // Use a case-insensitive regular expression to allow partial matches
    const filter = query ? { title: new RegExp(query, 'i') } : {};
    const cards = await Card.find(filter);
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/cards/:title - Get a specific card by title (exact match, case-insensitive)
router.get('/cards/:title', async (req, res) => {
  try {
    const title = req.params.title;
    const card = await Card.findOne({ title: new RegExp(`^${title}$`, 'i') }); // Exact match, case-insensitive
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
