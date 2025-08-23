import React, { useEffect, useState } from 'react'


const AddSubject = () => {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    credits: '',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mockFirebase.addSubject(formData);
      alert('Subject added successfully!');
      setFormData({
        name: '',
        code: '',
        credits: '',
        description: ''
      });
    } catch (error) {
      alert('Error adding subject');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add Subject</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Subject Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Subject Code</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.code}
              onChange={(e) => setFormData({...formData, code: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Credits</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.credits}
              onChange={(e) => setFormData({...formData, credits: e.target.value})}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Add Subject
        </button>
      </form>
    </div>
  );
};


export default AddSubject