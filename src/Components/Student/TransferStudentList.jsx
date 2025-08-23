import React, { useEffect, useState } from 'react'


const TransferStudentList = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [newClass, setNewClass] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await mockFirebase.getStudents();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  const handleTransfer = async (e) => {
    e.preventDefault();
    if (!selectedStudent || !newClass) return;
    
    try {
      await mockFirebase.transferStudent(selectedStudent, newClass);
      alert('Student transferred successfully!');
      setSelectedStudent('');
      setNewClass('');
    } catch (error) {
      alert('Error transferring student');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Transfer Student</h2>
      <form onSubmit={handleTransfer} className="mb-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Select Student</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              required
            >
              <option value="">Choose Student</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name} - {student.class}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">New Class</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={newClass}
              onChange={(e) => setNewClass(e.target.value)}
              placeholder="Enter new class"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Transfer Student
        </button>
      </form>
    </div>
  );
};

export default TransferStudentList