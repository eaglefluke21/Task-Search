import React, { useState } from 'react';

const InsertForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        
        const backendurl = 'http://localhost:3000';
        const url = `${backendurl}/api/insert`;


      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Item inserted successfully');
      } else {
        alert(`Error: ${data.error}`);
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
