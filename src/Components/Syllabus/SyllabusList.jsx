import React, { useEffect, useState } from 'react'


const SyllabusList = () => {
  const [syllabi, setSyllabi] = useState([]);

  useEffect(() => {
    const fetchSyllabi = async () => {
      const data = await mockFirebase.getSyllabus();
      setSyllabi(data);
    };
    fetchSyllabi();
  }, []);

  const releaseSyllabus = (id) => {
    console.log('Releasing syllabus:', id);
    alert('Syllabus released to students!');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Syllabus List</h2>
      <div className="grid gap-4">
        {syllabi.map((syllabus) => (
          <div key={syllabus.id} className="bg-white border border-gray-300 rounded-md p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium">{syllabus.subject} - {syllabus.class}</h3>
              <button
                onClick={() => releaseSyllabus(syllabus.id)}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
              >
                Release
              </button>
            </div>
            <p className="text-gray-600 mb-2"><strong>Topics:</strong> {syllabus.topics}</p>
            <p className="text-gray-600">{syllabus.description}</p>
            <div className="mt-2 flex space-x-2">
              <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
              <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusList