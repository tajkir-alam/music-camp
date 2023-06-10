import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/AccessControl/Login/Login";
import Registration from "../Pages/AccessControl/Registration/Registration";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import StudentDashboard from "../Pages/Dashboard/StudentDashboard/StudentDashboard";
import InstructorDashboard from "../Pages/Dashboard/InstructorDashboard/InstructorDashboard";
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";
import Dashboard from "../layout/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'instructors',
                element: <AllInstructors></AllInstructors>
            },
            {
                path: 'classes',
                element: <AllClasses></AllClasses>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'student',
                element: <StudentRoute><StudentDashboard></StudentDashboard></StudentRoute>
            },
            {
                path: 'instructor',
                element: <InstructorRoute><InstructorDashboard></InstructorDashboard></InstructorRoute>
            }
        ]
    }
]);

export default router;