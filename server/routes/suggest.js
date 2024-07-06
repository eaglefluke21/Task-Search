import express from 'express';
import ItemSchemaModel from '../Model/item.js';



const suggestionrouter = express.Router();

suggestionrouter.get('/suggest', async (req, res) => {
    try {
      const query = req.query.q;
      const items = await ItemSchemaModel.find({ title: { $regex: query, $options: 'i' } }).limit(10);
      const suggestions = items.map(item => item.title);
      res.json(suggestions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  
  export default suggestionrouter;