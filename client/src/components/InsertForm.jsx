import React, { useState } from 'react';
import apiAxios from '../services/api';

const InsertForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {


      const response = await apiAxios.post('/api/insert',{
        title,
        description,
      },{
        headers:{
          'Content-Type':'application/json',
        },
      });
        
      console.log('Response:', response.data);

      console.log('Response status', response.status);
      
      if (response.status === 201) {
        alert('Item inserted successfully');
      } else {
        alert(`Error: ${response.data.error}`);
      }
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border rounded px-8 py-2 mb-4 font-quick"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border rounded w-72 h-48 mb-4 font-quick"
        required
      />
      <button type="submit" className="bg-black text-white rounded px-4 py-2">
        Insert Item
      </button>
    </form>
  );
};

export default InsertForm;
