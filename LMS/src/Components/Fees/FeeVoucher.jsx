import React, { useEffect, useState } from 'react'


const FeeVoucher = () => {
  const [voucherData, setVoucherData] = useState({
    voucherNo: 'V1724414400000',
    studentName: 'John Doe',
    class: '10A',
    feeType: 'Monthly Fee',
    amount: 5000,
    month: 'August',
    year: 2025,
    paymentMethod: 'Cash',
    date: new Date().toLocaleDateString()
  });

  const printVoucher = () => {
    window.print();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white border-2 border-gray-300 rounded-lg p-8 print:shadow-none">
        {/* Header */}
        <div className="text-center border-b-2 border-gray-300 pb-4 mb-6">
          <h1 className="text-2xl font-bold">ABC SCHOOL</h1>
          <p className="text-gray-600">123 Education Street, Learning City</p>
          <p className="text-gray-600">Phone: (555) 123-4567</p>
        </div>

        {/* Voucher Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold bg-gray-100 py-2 rounded">FEE VOUCHER</h2>
        </div>

        {/* Voucher Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p><strong>Voucher No:</strong> {voucherData.voucherNo}</p>
            <p><strong>Date:</strong> {voucherData.date}</p>
            <p><strong>Student Name:</strong> {voucherData.studentName}</p>
          </div>
          <div>
            <p><strong>Class:</strong> {voucherData.class}</p>
            <p><strong>Fee Type:</strong> {voucherData.feeType}</p>
            <p><strong>Period:</strong> {voucherData.month} {voucherData.year}</p>
          </div>
        </div>

        {/* Amount Section */}
        <div className="border-2 border-gray-300 rounded p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-lg"><strong>Amount:</strong></span>
            <span className="text-2xl font-bold">${voucherData.amount}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">Payment Method: {voucherData.paymentMethod}</p>
        </div>

        {/* Instructions */}
        <div className="text-sm text-gray-600 mb-6">
          <h4 className="font-medium mb-2">Instructions:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Keep this voucher for your records</li>
            <li>Present this voucher when making payment</li>
            <li>Late fee charges apply after due date</li>
            <li>For queries, contact the accounts office</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-600">Thank you for your payment!</p>
        </div>
      </div>

      <div className="flex justify-center mt-6 print:hidden">
        <button
          onClick={printVoucher}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Print Voucher
        </button>
      </div>
    </div>
  );
};

export default FeeVoucher