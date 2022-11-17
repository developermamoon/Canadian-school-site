import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import BusinessPartnerRegistration from "../Pages/RegisterPage/BusinessPartnerRegistration/BusinessPartnerRegistration";
import EmployeeStaffRegistration from "../Pages/RegisterPage/EmployeeStaffRegistration/EmployeeStaffRegistration";
import MinistryRegistration from "../Pages/RegisterPage/MinistryRegistration/MinistryRegistration";
import ParentRegistration from "../Pages/RegisterPage/ParentRegistration/ParentRegistration";
import StudentRegistration from "../Pages/RegisterPage/StudentRegistration/StudentRegistration";
import TeacherRegistration from "../Pages/RegisterPage/TeacherRegistration/TeacherRegistration";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },

            { path: '/contact-us', element: <ContactUs></ContactUs> },

            { path: '/student-registration', element: <StudentRegistration></StudentRegistration> },

            { path: '/teacher-registration', element: <TeacherRegistration></TeacherRegistration> },

            { path: '/business-partner-registration', element: <BusinessPartnerRegistration></BusinessPartnerRegistration> },

            { path: '/parent-registration', element: <ParentRegistration></ParentRegistration> },

            { path: '/ministry-registration', element: <MinistryRegistration></MinistryRegistration> },

            { path: '/employee-staff-registration', element: <EmployeeStaffRegistration></EmployeeStaffRegistration> },
            
            { path: '/login', element: <Login></Login> },

            { path: '/forget-password', element: <ForgetPassword></ForgetPassword> },
        ]
    }
])

export default router;