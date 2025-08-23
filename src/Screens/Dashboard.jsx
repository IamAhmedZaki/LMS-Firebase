import React, { useState } from 'react'

import Admission from '../Components/Admission/Admission';
import ClassForm from '../Components/Class/ClassForm';
import ClassList from '../Components/Class/ClassList';
import ExamResult from '../Components/Exam/ExamResult';
import ExamSchedule from '../Components/Exam/ExamSchedule';
import FeeStructure from '../Components/Fees/FeeStructure';
import FeeSubmission from '../Components/Fees/FeeSubmission';
import FeeVoucher from '../Components/Fees/FeeVoucher';
import Registration from '../Components/School/Registration';
import AddStudent from '../Components/Student/AddStudent';
import StudentList from '../Components/Student/StudentList';
import TransferStudentList from '../Components/Student/TransferStudentList';
import AddSubject from '../Components/Subject/AddSubject';
import SubjectList from '../Components/Subject/SubjectList';
import SyllabusForm from '../Components/Syllabus/SyllabusForm';
import SyllabusList from '../Components/Syllabus/SyllabusList';
import AddTeacher from '../Components/Teacher/AddTeacher';
import TeacherAllocation from '../Components/Teacher/TeacherAllocation';
import TeacherList from '../Components/Teacher/TeacherList';

const Dashboard = () => {
  const [isStudentDropdownOpen, setIsStudentDropdownOpen] = useState(false);
  const [isTeacherDropdownOpen, setIsTeacherDropdownOpen] = useState(false);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
  const [isFeesDropdownOpen, setIsFeesDropdownOpen] = useState(false);
  const [isAdmissionDropdownOpen, setIsAdmissionDropdownOpen] = useState(false);
  const [isExamDropdownOpen, setIsExamDropdownOpen] = useState(false);
  const [isSchoolDropdownOpen, setIsSchoolDropdownOpen] = useState(false);
  const [isSyllabusDropdownOpen, setIsSyllabusDropdownOpen] = useState(false);


  const [activeScreen, setActiveScreen] = useState(null);



  // componet UI states
  // const [admission,setAdmission]=useState(false)
  // const [classForm,setClassForm]=useState(false)
  // const [classList,setClassList]=useState(false)
  // const [examResult,setExamResult]=useState(false)
  // const [examScheudle,setExamSchedule]=useState(false)
  // const [feeStructure,setFeeStructure]=useState(false)
  // const [feeSubmission,setFeeSubmission]=useState(false)
  // const [feeVoucher,setFeeVoucher]=useState(false)
  // const [registration,setRegistration]=useState(false)
  // const [addStudent,setAddStudent]=useState(false)
  // const [transferStudentlist,setTransferStudentList]=useState(false)
  // const [studentList,setStudenList]=useState(false)
  // const [addSubject,setAddSubject]=useState(false)
  // const [subjectList,setSubjectList]=useState(false)
  // const [syllabusForm,setSyllabusForm]=useState(false)
  // const [syllabusList,setSyllabusList]=useState(false)
  // const [addTeacher,setAddTeacher]=useState(false)
  // const [teacherAllocation,setTeacherAllocation]=useState(false)
  // const [teacherList,setTeacherList]=useState(false)

  // const activeFlag=(currentFlag,allSetter)=>{
  //   allSetter.forEach(setter => setter(false));
  //   currentFlag(true)
  // }

  // const useFlags=()=>{
  //   return{

  //     AddStudenFlag:()=>{
  //       activeFlag(addStudent,[

  //       ])
  //     }
  //   }
  // }


  return (
    <>
      <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>

            {/* Students */}
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setIsStudentDropdownOpen(!isStudentDropdownOpen)}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Students</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul className={`${isStudentDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() =>setActiveScreen('addStudent')}>Student Add</a>
                </li>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('studentList')}>Student List</a>
                </li>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('transferStudentList')}>Transfer Student</a>
                </li>
              </ul>
            </li>

            {/* Teacher */}
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setIsTeacherDropdownOpen(!isTeacherDropdownOpen)}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M17 8h-1V6.5a3.5 3.5 0 1 0-7 0V8H7a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-7-3a1.5 1.5 0 1 1 3 0V8h-3V5Z" />
                  <path d="M6 13c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Teacher</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul className={`${isTeacherDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('addTeacher')}>Teacher Add</a>
                </li>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('teacherList')}>Teacher List</a>
                </li>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('teacherAllocation')}>Teacher Allocation</a>
                </li>
              </ul>
            </li>

            {/* Subjects */}
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setIsSubjectDropdownOpen(!isSubjectDropdownOpen)}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 9a1 1 0 0 0-1 1 6.994 6.994 0 0 1-11.929 5A7 7 0 0 1 17 9ZM6.072 4.072a6.996 6.996 0 0 1 2.52 4.023A6.999 6.999 0 0 1 1 10a1 1 0 0 0 2 0 5 5 0 1 1 10 0 1 1 0 1 0 2 0 7 7 0 0 0-8.928-5.928Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Subjects</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul className={`${isSubjectDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('addSubject')}>Subject Add</a>
                </li>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('subjectList')}>Subject List</a>
                </li>
              </ul>
            </li>

            {/* School */}
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setIsSchoolDropdownOpen(!isSchoolDropdownOpen)}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">School</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul className={`${isSchoolDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('registration')}>Registration</a>
                </li>
              </ul>
            </li>

            {/* Syllabus */}
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setIsSyllabusDropdownOpen(!isSyllabusDropdownOpen)}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Syllabus</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul className={`${isSyllabusDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('syllabusForm')}>Syllabus Form</a>
                </li>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('syllabusList')}>Syllabus List</a>
                </li>
              </ul>
            </li>

            {/* Class */}
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setIsClassDropdownOpen(!isClassDropdownOpen)}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Class</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul className={`${isClassDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('classForm')}>Class Form</a>
                </li>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('classList')}>Class List</a>
                </li>
              </ul>
            </li>

            {/* Fees */}
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setIsFeesDropdownOpen(!isFeesDropdownOpen)}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM5 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Fees</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul className={`${isFeesDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('feeStructure')}>Fee Structure</a>
                </li>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('feeSubmission')}>Fee Submission</a>
                </li>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setActiveScreen('feeVoucher')}>Fee Voucher</a>
                </li>
              </ul>
            </li>

            {/* Admission */}
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setIsAdmissionDropdownOpen(!isAdmissionDropdownOpen)}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Admission</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul className={`${isAdmissionDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => {setActiveScreen('admission') }}>Admission Screen</a>
                </li>
              </ul>
            </li>

            {/* Exam */}
            <li>
              <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => setIsExamDropdownOpen(!isExamDropdownOpen)}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                  <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Exam</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul className={`${isExamDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => {setActiveScreen('examSchedule') }}>Exam Schedule</a>
                </li>
                <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" onClick={() => {setActiveScreen('examResult') }}>Exam Result</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        {activeScreen === 'admission' ? <Admission /> : null}
        {activeScreen === 'classForm' ? <ClassForm /> : null}
        {activeScreen === 'classList' ? <ClassList /> : null}
        {activeScreen === 'examResult' ? <ExamResult /> : null}
        {activeScreen === 'examSchedule' ? <ExamSchedule /> : null}
        {activeScreen === 'feeStructure' ? <FeeStructure /> : null}
        {activeScreen === 'feeSubmission' ? <FeeSubmission /> : null}
        {activeScreen === 'feeVoucher' ? <FeeVoucher /> : null}
        {activeScreen === 'registration' ? <Registration /> : null}
        {activeScreen === 'addStudent' ? <AddStudent /> : null}
        {activeScreen === 'studentList' ? <StudentList /> : null}
        {activeScreen === 'transferStudentList' ? <TransferStudentList /> : null}
        {activeScreen === 'addSubject' ? <AddSubject /> : null}
        {activeScreen === 'subjectList' ? <SubjectList /> : null}
        {activeScreen === 'syllabusForm' ? <SyllabusForm /> : null}
        {activeScreen === 'syllabusList' ? <SyllabusList /> : null}
        {activeScreen === 'addTeacher' ? <AddTeacher /> : null}
        {activeScreen === 'teacherAllocation' ? <TeacherAllocation /> : null}
        {activeScreen === 'teacherList' ? <TeacherList /> : null}
      </div>
    </>
  )
}

export default Dashboard