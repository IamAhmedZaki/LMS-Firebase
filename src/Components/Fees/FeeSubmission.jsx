
import React, { useEffect, useState } from 'react'

const FeeSubmission = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    class: '',
    feeType: 'monthly',
    amount: '',
    paymentMethod: 'cash',
    month: '',
    year: new Date().getFullYear()
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await mockFirebase.submitFee(formData);
      alert(`Fee submitted successfully! Voucher No: ${result.voucherNo}`);
      setFormData({
        studentId: '',
        studentName: '',
        class: '',
        feeType: 'monthly',
        amount: '',
        paymentMethod: 'cash',
        month: '',
        year: new Date().getFullYear()
      });
    } catch (error) {
      alert('Error submitting fee');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Fee Submission</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Student ID</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.studentId}
              onChange={(e) => setFormData({...formData, studentId: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Student Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.studentName}
              onChange={(e) => setFormData({...formData, studentName: e.target.value})}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
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
          <div>
            <label className="block text-sm font-medium mb-1">Fee Type</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.feeType}
              onChange={(e) => setFormData({...formData, feeType: e.target.value})}
            >
              <option value="monthly">Monthly Fee</option>
              <option value="admission">Admission Fee</option>
              <option value="exam">Exam Fee</option>
              <option value="annual">Annual Fee</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Payment Method</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.paymentMethod}
              onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
            >
              <option value="cash">Cash</option>
              <option value="cheque">Cheque</option>
              <option value="online">Online Transfer</option>
              <option value="card">Debit/Credit Card</option>
            </select>
          </div>
        </div>
        {formData.feeType === 'monthly' && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Month</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.month}
                onChange={(e) => setFormData({...formData, month: e.target.value})}
                required
              >
                <option value="">Select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.year}
                onChange={(e) => setFormData({...formData, year: e.target.value})}
                required
              />
            </div>
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
        >
          Submit Fee
        </button>
      </form>
    </div>
  );
};

export default FeeSubmission