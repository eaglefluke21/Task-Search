import express from 'express';
import ItemSchemaModel from '../Model/item.js';

const datarouter = express.Router();

datarouter.post('/insert', async (req, res) => {
    try {
      const { title, description } = req.body;
      const newItem = new ItemSchemaModel({ title, description });
      await newItem.save();
      res.status(201).json({ message: 'Item inserted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

export default datarouter;