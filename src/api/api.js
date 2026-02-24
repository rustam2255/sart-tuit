import axiosT from "./axios";


// dashboard
export const GetAcademicYears = () => {
  return axiosT.get("/dashboard/academic-years");
};
export const GetDashboardFaculties = () => {

  return axiosT.get("/dashboard/faculties", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const GetDashboardStatistic = () => {
  return axiosT.get("/dashboard/statistic", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};


// Faculty Student
export const GetOneFacultyStudentsAddention = (id) => {
  return axiosT.get("/faculty-students/addention/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const GetOneFacultyStudentsCitizenship = (id) => {
  return axiosT.get("/faculty-students/citizenship/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const GetOneFacultyStudentsCourseGender = (id) => {
  return axiosT.get("/faculty-students/course-gender/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const GetOneFacultyStudentsCourseGroups = (id) => {
  return axiosT.get("/faculty-students/course-groups/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const GetOneFacultyStudentsCoursePayment = (id) => {
  return axiosT.get("/faculty-students/course-payment/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const GetOneFacultyStudentsEducationType = (id) => {
  return axiosT.get("/faculty-students/education-type/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const GetOneFacultyStudentsForeignLocal = (id) => {
  return axiosT.get("/faculty-students/foreign-local?faculty_id=" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};

export const DashboardStudentAbroad = () => {
  return axiosT.get("/faculty-students/foreign-local", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const GetOneFacultyStudentsRegionCourse = (id) => {
  return axiosT.get("/faculty-students/region-course/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const GetOneFacultyStudentsRegionGenderCount = (id) => {
  return axiosT.get("/faculty-students/region-gender-count/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const GetOneFacultyStudentsSocialStatus = (id) => {
  return axiosT.get("/faculty-students/social-status/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const GetOneFacultyStudents = (id) => {
  return axiosT.get("/faculty-students/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const GetOneFacultyStudentsAccommodation = (id) => {
  return axiosT.get("/faculty-students/accommodation/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};


// dashboard teacher
export const DashboardTeacherPositions = () => {
  return axiosT.get("/dashboard-teacher/teacher-positions", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const DashboardTeacherGender = () => {
  return axiosT.get("/dashboard-teacher/teacher-gender", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const DashboardTeacherAcademicDegree = () => {
  return axiosT.get("/dashboard-teacher/teacher-academic-degree", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const DashboardTeacherPolitics = () => {
  return axiosT.get("/dashboard-teacher/politics", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const DashboardTeacherFacultyAcademicPercentage = () => {
  return axiosT.get("/dashboard-teacher/faculty-academic-percentage", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const DashboardTeacherFaculty = () => {
  return axiosT.get("/dashboard-teacher/teacher-faculty", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};


// Faculty Teacher
export const FacultyTeacherAcademicDegree = (id) => {
  return axiosT.get("/faculty-teacher/academic-degree/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyTeacherAcademicPercentage = (id) => {
  return axiosT.get("/faculty-teacher/academic-percentage/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyTeacherAverageAge = (id) => {
  return axiosT.get("/faculty-teacher/average-age/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyTeacherCount = (id) => {
  return axiosT.get("/faculty-teacher/count/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyTeacherDepartmentAcademicPercentage = (id) => {
  return axiosT.get("/faculty-teacher/department-academic-percentage/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyTeacherDepartmentCertificates = (id) => {
  return axiosT.get("/faculty-teacher/department-certificates/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyTeacherDepartmentContingent = (id) => {
  return axiosT.get("/faculty-teacher/department-contingent/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyTeacherDepartmentGender = (id) => {
  return axiosT.get("/faculty-teacher/department-gender/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyTeacherDepartmentGlobal = (id) => {
  return axiosT.get("/faculty-teacher/department-global/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyTeacherDepartmentLocale = (id) => {
  return axiosT.get("/faculty-teacher/department-locale/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyTeacherDepartmentTeacherCount = (id) => {
  return axiosT.get("/faculty-teacher/department-teacher-count/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyTeacherGender = (id) => {
  return axiosT.get("/faculty-teacher/gender/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyTeacherPositions = (id) => {
  return axiosT.get("/faculty-teacher/positions/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};






// dashboard students
export const DashboardStudentSocial = () => {
  return axiosT.get("/dashboard-students/social-students", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const DashboardStudentBranches = () => {
  return axiosT.get("/dashboard-students/student-branches", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const DashboardStudentFaculty = () => {
  return axiosT.get("/dashboard-students/student-faculty", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const DashboardStudentLevelOfStudy = () => {
  return axiosT.get("/dashboard-students/student-level-of-study", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const DashboardStudentLocationOfStudy = () => {
  return axiosT.get("/dashboard-students/student-location-of-study", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const DashboardStudentRegionsOfStudy = () => {
  return axiosT.get("/dashboard-students/student-regions-of-study", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const DashboardStudent = () => {
  return axiosT.get("/dashboard-students/students", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};

export const DashboardStudentPayment = () => {
  return axiosT.get("/dashboard-students/students-payment", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};



// Faculty awards
export const FacultyAwardsAllAwardsGender = (id) => {
  return axiosT.get("/faculty-awards/all-awards-gender/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyAwardsCertificateCourseGender = (id) => {
  return axiosT.get("/faculty-awards/certificate-course-gender/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyAwardsCourseGenderEmp = (id) => {
  return axiosT.get("/faculty-awards/course-gender-employements/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyAwardsEmployedStudents = (id) => {
  return axiosT.get("/faculty-awards/employed-students/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyAwardsEmployements = (id) => {
  return axiosT.get("/faculty-awards/employements/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyAwardsStudents = (id) => {
  return axiosT.get("/faculty-awards/students-all/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyAwardsAward = (id, faculty_id) => {
  return axiosT.get(`/faculty-awards/${faculty_id}/award/${id}/`, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};


// Dashboard Accommodation - done
export const DashboardAccommodationStudentGender = () => {
  return axiosT.get("/dashboard-accommodation/students-accommodation-gender/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const DashboardAccommodationStudentAccommodation = () => {
  return axiosT.get("/dashboard-accommodation/students-accommodation/", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};





// student-rating
export const StudentRatingCourseTop20 = (id) => {
  return axiosT.get(`/student-rating/student/course-top20?search=${id}`, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const StudentRatingTop20 = (id) => {
  return axiosT.get(`/student-rating/student/top20?search=${id}`, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};


// Faculty Departments
export const FacultyDepartmentsAddentionalInfo = (id) => {
  return axiosT.get("/faculty-departments/addentional-info/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyDepartmentsTeacherPositions = (id) => {
  return axiosT.get("/faculty-departments/teacher-positions/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyDepartmentsLabaratories = (id) => {
  return axiosT.get("/faculty-departments/labaratories/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyDepartmentsTeachersCount = (id) => {
  return axiosT.get("/faculty-departments/teachers-count/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyDepartmentsTeachersCount1 = (id) => {
  return axiosT.get("/faculty-departments/teachers-count/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyDepartmentsTeachersEmploymentForm = (id) => {
  return axiosT.get("/faculty-departments/teachers-employment-form/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const FacultyDepartmentsTeachersGenders = (id) => {
  return axiosT.get("/faculty-departments/teachers-genders/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};



// building

export const BuildingList = () => {
  return axiosT.get("/building/list", {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};
export const BuildingItem = (id) => {
  return axiosT.get("/building/" + id, {
    headers: {
      "Content-Type": "application/json",
      "semester-id": +localStorage.getItem("active-semester") || 2
    }
  });
};