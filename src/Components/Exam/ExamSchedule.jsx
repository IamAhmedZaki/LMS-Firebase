import React, { useEffect, useState } from 'react'


const ExamSchedule = () => {
  const [formData, setFormData] = useState({
    examName: '',
    subject: '',
    class: '',
    date: '',
    time: '',
    duration: '',
    room: '',
    maxMarks: ''
  });

  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      const data = await mockFirebase.getExamSchedules();
      setSchedules(data);
    };
    fetchSchedules();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mockFirebase.scheduleExam(formData);
      alert('Exam scheduled successfully!');
      setFormData({
        examName: '',
        subject: '',
        class: '',
        date: '',
        time: '',
        duration: '',
        room: '',
        maxMarks: ''
      });
      // Refresh schedules
      const data = await mockFirebase.getExamSchedules();
      setSchedules(data);
    } catch (error) {
      alert('Error scheduling exam');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Exam Schedule</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Schedule Form */}
        <div className="bg-white p-6 border border-gray-300 rounded-md">
          <h3 className="text-lg font-medium mb-4">Schedule New Exam</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Exam Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.examName}
                onChange={(e) => setFormData({...formData, examName: e.target.value})}
                placeholder="e.g., Mid-term, Final Exam"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
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
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time</label>
                <input
                  type="time"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Duration</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  placeholder="e.g., 3 hours"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Room</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.room}
                  onChange={(e) => setFormData({...formData, room: e.target.value})}
                  placeholder="e.g., Room 101"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Maximum Marks</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.maxMarks}
                onChange={(e) => setFormData({...formData, maxMarks: e.target.value})}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Schedule Exam
            </button>
          </form>
        </div>

        {/* Current Schedules */}
        <div className="bg-white p-6 border border-gray-300 rounded-md">
          <h3 className="text-lg font-medium mb-4">Upcoming Exams</h3>
          <div className="space-y-4">
            {schedules.map((schedule) => (
              <div key={schedule.id} className="border border-gray-200 rounded p-4">
                <h4 className="font-medium text-blue-600">{schedule.subject}</h4>
                <p className="text-sm text-gray-600">Class: {schedule.class}</p>
                <p className="text-sm text-gray-600">Date: {schedule.date}</p>
                <p className="text-sm text-gray-600">Time: {schedule.time}</p>
                <p className="text-sm text-gray-600">Duration: {schedule.duration}</p>
                <div className="mt-2 flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Cancel</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSchedule
