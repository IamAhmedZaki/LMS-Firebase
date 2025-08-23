import React, { useEffect, useState } from 'react'


const TeacherAllocation = () => {
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [allocations, setAllocations] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const teacherData = await mockFirebase.getTeachers();
      const classData = await mockFirebase.getClasses();
      setTeachers(teacherData);
      setClasses(classData);
    };
    fetchData();
  }, []);

  const handleAllocation = (classId, teacherId) => {
    setAllocations(prev => ({
      ...prev,
      [classId]: teacherId
    }));
  };

  const saveAllocations = () => {
    console.log('Saving allocations:', allocations);
    alert('Teacher allocations saved successfully!');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Teacher Allocation</h2>
      <div className="space-y-4">
        {classes.map((cls) => (
          <div key={cls.id} className="bg-white p-4 border border-gray-300 rounded-md">
            <h3 className="font-medium mb-2">Class: {cls.name}</h3>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={allocations[cls.id] || ''}
              onChange={(e) => handleAllocation(cls.id, e.target.value)}
            >
              <option value="">Select Teacher</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name} - {teacher.subject}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button
        onClick={saveAllocations}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Save Allocations
      </button>
    </div>
  );
};

export default TeacherAllocation