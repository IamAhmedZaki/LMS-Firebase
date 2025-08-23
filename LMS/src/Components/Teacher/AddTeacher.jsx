import React, { useEffect, useState } from 'react'


const AddTeacher = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
    address: '',
    salary: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mockFirebase.addTeacher(formData);
      alert('Teacher added successfully!');
      setFormData({
        name: '',
        subject: '',
        email: '',
        phone: '',
        qualification: '',
        experience: '',
        address: '',
        salary: ''
      });
    } catch (error) {
      alert('Error adding teacher');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add Teacher</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Teacher Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
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
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Qualification</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.qualification}
            onChange={(e) => setFormData({...formData, qualification: e.target.value})}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Experience (Years)</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Salary</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.salary}
              onChange={(e) => setFormData({...formData, salary: e.target.value})}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default AddTeacher