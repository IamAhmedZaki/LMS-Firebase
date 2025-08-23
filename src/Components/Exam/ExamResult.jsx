import React, { useEffect, useState } from 'react'


const ExamResult = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    subject: '',
    examName: '',
    marksObtained: '',
    maxMarks: '',
    grade: '',
    remarks: ''
  });

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await mockFirebase.getExamResults();
      setResults(data);
    };
    fetchResults();
  }, []);

  const calculateGrade = (obtained, max) => {
    const percentage = (obtained / max) * 100;
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 50) return 'D';
    return 'F';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const grade = calculateGrade(parseInt(formData.marksObtained), parseInt(formData.maxMarks));
    const status = grade !== 'F' ? 'Pass' : 'Fail';
    
    try {
      await mockFirebase.addExamResult({...formData, grade, status});
      alert('Exam result added successfully!');
      setFormData({
        studentId: '',
        studentName: '',
        subject: '',
        examName: '',
        marksObtained: '',
        maxMarks: '',
        grade: '',
        remarks: ''
      });
      // Refresh results
      const data = await mockFirebase.getExamResults();
      setResults(data);
    } catch (error) {
      alert('Error adding exam result');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Exam Results</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Result Entry Form */}
        <div className="lg:col-span-1 bg-white p-6 border border-gray-300 rounded-md">
          <h3 className="text-lg font-medium mb-4">Add Result</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <label className="block text-sm font-medium mb-1">Exam Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.examName}
                onChange={(e) => setFormData({...formData, examName: e.target.value})}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1">Marks Obtained</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.marksObtained}
                  onChange={(e) => setFormData({...formData, marksObtained: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Max Marks</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.maxMarks}
                  onChange={(e) => setFormData({...formData, maxMarks: e.target.value})}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Remarks</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.remarks}
                onChange={(e) => setFormData({...formData, remarks: e.target.value})}
                rows="2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
            >
              Add Result
            </button>
          </form>
        </div>

        {/* Results List */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-medium mb-4">Recent Results</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {results.map((result, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">{result.studentName}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">{result.subject}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">{result.marks}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        result.grade === 'A+' || result.grade === 'A' ? 'bg-green-100 text-green-800' :
                        result.grade === 'B' || result.grade === 'C' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {result.grade}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        result.status === 'Pass' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {result.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamResult