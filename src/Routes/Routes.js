import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import StudentRegistration from "../Pages/RegisterPage/StudentRegistration/StudentRegistration";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/contact-us', element: <ContactUs></ContactUs> },
            { path: '/student-registration', element: <StudentRegistration></StudentRegistration> },
        ]
    }
])

export default router;