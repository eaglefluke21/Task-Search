import express from 'express';
import ItemSchemaModel from '../Model/item.js';

const searchrouter = express.Router();



 searchrouter.get('/search', async (req, res) => {
  try {
    const query = req.query.q;
    const items = await ItemSchemaModel.find({ title: { $regex: query, $options: 'i' } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export  default searchrouter;