import React, { useEffect, useState } from 'react'


const SyllabusForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    class: '',
    topics: '',
    description: '',
    books: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mockFirebase.addSyllabus(formData);
      alert('Syllabus created successfully!');
      setFormData({
        subject: '',
        class: '',
        topics: '',
        description: '',
        books: ''
      });
    } catch (error) {
      alert('Error creating syllabus');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Create Syllabus</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Class</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.class}
              onChange={(e) => setFormData({...formData, class: e.target.value})}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Topics Covered</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.topics}
            onChange={(e) => setFormData({...formData, topics: e.target.value})}
            placeholder="List the main topics to be covered"
            rows="3"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Detailed description of the syllabus"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Recommended Books</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.books}
            onChange={(e) => setFormData({...formData, books: e.target.value})}
            placeholder="List recommended textbooks and reference materials"
            rows="2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Create Syllabus
        </button>
      </form>
    </div>
  );
};

export default SyllabusForm