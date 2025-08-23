import React, { useEffect, useState } from 'react'


const FeeStructure = () => {
  const [formData, setFormData] = useState({
    class: '',
    tuitionFee: '',
    examFee: '',
    miscFee: '',
    labFee: '',
    libraryFee: ''
  });

  const [feeStructures, setFeeStructures] = useState([]);

  useEffect(() => {
    const fetchFeeStructures = async () => {
      const data = await mockFirebase.getFeeStructures();
      setFeeStructures(data);
    };
    fetchFeeStructures();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const total = parseInt(formData.tuitionFee || 0) + 
                  parseInt(formData.examFee || 0) + 
                  parseInt(formData.miscFee || 0) + 
                  parseInt(formData.labFee || 0) + 
                  parseInt(formData.libraryFee || 0);
    
    try {
      await mockFirebase.addFeeStructure({...formData, total});
      alert('Fee structure created successfully!');
      setFormData({
        class: '',
        tuitionFee: '',
        examFee: '',
        miscFee: '',
        labFee: '',
        libraryFee: ''
      });
      // Refresh list
      const data = await mockFirebase.getFeeStructures();
      setFeeStructures(data);
    } catch (error) {
      alert('Error creating fee structure');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Fee Structure</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="bg-white p-6 border border-gray-300 rounded-md">
          <h3 className="text-lg font-medium mb-4">Create Fee Structure</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Tuition Fee</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.tuitionFee}
                  onChange={(e) => setFormData({...formData, tuitionFee: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Exam Fee</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.examFee}
                  onChange={(e) => setFormData({...formData, examFee: e.target.value})}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Miscellaneous Fee</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.miscFee}
                  onChange={(e) => setFormData({...formData, miscFee: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Lab Fee</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.labFee}
                  onChange={(e) => setFormData({...formData, labFee: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Library Fee</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.libraryFee}
                onChange={(e) => setFormData({...formData, libraryFee: e.target.value})}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Create Fee Structure
            </button>
          </form>
        </div>

        {/* List */}
        <div className="bg-white p-6 border border-gray-300 rounded-md">
          <h3 className="text-lg font-medium mb-4">Current Fee Structures</h3>
          <div className="space-y-4">
            {feeStructures.map((fee) => (
              <div key={fee.id} className="border border-gray-200 rounded p-4">
                <h4 className="font-medium mb-2">Class: {fee.class}</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Tuition Fee: ${fee.tuitionFee}</p>
                  <p>Exam Fee: ${fee.examFee}</p>
                  <p>Misc Fee: ${fee.miscFee}</p>
                  <p className="font-medium text-gray-800">Total: ${fee.total}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure