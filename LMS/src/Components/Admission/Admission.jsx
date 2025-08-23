import React, { useEffect, useState } from 'react'


const Admission = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
    previousSchool: '',
    classAppliedFor: '',
    guardianOccupation: '',
    emergencyContact: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await mockFirebase.addAdmission(formData);
      alert(`Admission application submitted successfully! Admission No: ${result.admissionNo}`);
      setFormData({
        studentName: '',
        fatherName: '',
        motherName: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        phone: '',
        email: '',
        previousSchool: '',
        classAppliedFor: '',
        guardianOccupation: '',
        emergencyContact: ''
      });
    } catch (error) {
      alert('Error submitting admission application');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">New Admission Application</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Student Name *</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.studentName}
                onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth *</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Gender *</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Class Applied For *</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.classAppliedFor}
                onChange={(e) => setFormData({...formData, classAppliedFor: e.target.value})}
                placeholder="e.g., Grade 1, 10A"
                required
              />
            </div>
          </div>
        </div>

        {/* Parent/Guardian Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Parent/Guardian Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Father's Name *</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.fatherName}
                onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mother's Name *</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.motherName}
                onChange={(e) => setFormData({...formData, motherName: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Guardian Occupation</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.guardianOccupation}
                onChange={(e) => setFormData({...formData, guardianOccupation: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Emergency Contact *</label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.emergencyContact}
                onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                required
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Address *</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                rows="3"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Educational Background */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Educational Background</h3>
          <div>
            <label className="block text-sm font-medium mb-1">Previous School</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.previousSchool}
              onChange={(e) => setFormData({...formData, previousSchool: e.target.value})}
              placeholder="Name of previous school (if any)"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 font-medium"
        >
          Submit Admission Application
        </button>
      </form>
    </div>
  );
};

export default Admission