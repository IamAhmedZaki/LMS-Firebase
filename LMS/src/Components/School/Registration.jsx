import React, { useState } from 'react'


const Registration = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    address: '',
    phone: '',
    email: '',
    principalName: '',
    establishedYear: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mockFirebase.registerSchool(formData);
      alert('School registered successfully!');
      setFormData({
        schoolName: '',
        address: '',
        phone: '',
        email: '',
        principalName: '',
        establishedYear: ''
      });
    } catch (error) {
      alert('Error registering school');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">School Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">School Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.schoolName}
            onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
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
          <label className="block text-sm font-medium mb-1">Principal Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.principalName}
            onChange={(e) => setFormData({...formData, principalName: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Established Year</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.establishedYear}
            onChange={(e) => setFormData({...formData, establishedYear: e.target.value})}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Register School
        </button>
      </form>
    </div>
  );
};


export default Registration