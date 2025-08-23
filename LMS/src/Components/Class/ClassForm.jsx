import React, { useEffect, useState } from 'react'


const ClassForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    capacity: '',
    teacher: '',
    room: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mockFirebase.addClass(formData);
      alert('Class added successfully!');
      setFormData({
        name: '',
        capacity: '',
        teacher: '',
        room: ''
      });
    } catch (error) {
      alert('Error adding class');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add Class</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Class Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="e.g., 10A, Grade 5"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Capacity</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.capacity}
              onChange={(e) => setFormData({...formData, capacity: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Room Number</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.room}
              onChange={(e) => setFormData({...formData, room: e.target.value})}
              placeholder="e.g., Room 101"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Class Teacher</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.teacher}
            onChange={(e) => setFormData({...formData, teacher: e.target.value})}
            placeholder="Teacher name"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default ClassForm