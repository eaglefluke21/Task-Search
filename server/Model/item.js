import mongoose from 'mongoose';


const ItemSchema = new mongoose.Schema({
  title: String,
  description: String
});

const ItemSchemaModel = mongoose.model('Item', ItemSchema);

export default ItemSchemaModel;