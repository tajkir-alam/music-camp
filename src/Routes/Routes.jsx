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
import StudentCart from "../Pages/Dashboard/StudentDashboard/StudentCart";
import StudentClasses from "../Pages/Dashboard/StudentDashboard/StudentClasses";
import Checkout from "../Pages/Dashboard/StudentDashboard/Checkout";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass";

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
                path: 'instructor',
                element: <InstructorRoute><InstructorDashboard></InstructorDashboard></InstructorRoute>,
            },
            {
                path: 'instructor/add-class',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'student',
                element: <StudentRoute><StudentDashboard></StudentDashboard></StudentRoute>
            },
            {
                path: 'student/cart',
                element: <StudentRoute><StudentCart></StudentCart></StudentRoute>
            },
            {
                path: 'student/enrolled-classes',
                element: <StudentRoute><StudentClasses></StudentClasses></StudentRoute>
            },
            {
                path: 'checkout',
                element: <StudentRoute><Checkout></Checkout></StudentRoute>
            },
            {
                path: 'student/payment-history',
                element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
            }
        ]
    }
]);

export default router;