import React, { useEffect, useState } from 'react'


const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    rollNo: '',
    fatherName: '',
    motherName: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mockFirebase.addStudent(formData);
      alert('Student added successfully!');
      setFormData({
        name: '',
        class: '',
        rollNo: '',
        fatherName: '',
        motherName: '',
        email: '',
        phone: '',
        address: '',
        dateOfBirth: ''
      });
    } catch (error) {
      alert('Error adding student');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Student Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
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
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Roll Number</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.rollNo}
              onChange={(e) => setFormData({...formData, rollNo: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Father's Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.fatherName}
              onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mother's Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.motherName}
              onChange={(e) => setFormData({...formData, motherName: e.target.value})}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
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
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent