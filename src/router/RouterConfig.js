import React from "react";
import DesktopLayout from "../layout/DesktopLayout";
import LoginLayout from "../layout/LoginLayout";
import MapLayout from "../layout/MapLayout";


const Teachers = React.lazy(() => import("../views/Teachers"));
const NumberOfStudents = React.lazy(() => import("../views/NumberOfStudents"));
const Home = React.lazy(() => import("../views/Home"));
const StudentsResidence = React.lazy(() => import("../views/StudentsResidence"));
const TuitBranches = React.lazy(() => import("../views/TuitBranches"));
const SocialStatus = React.lazy(() => import("../views/SocialStatus"));
const FacultyTeachers = React.lazy(() => import("../views/FacultyTeachers"));
const AllFaculties = React.lazy(() => import("../views/AllFaculties"));
const LoginPage = React.lazy(() => import("../views/LoginPage"));
const MapComponent = React.lazy(() => import("../views/MapComponent"));


export const RoutesConfig = [{
    title: "teachers",
    path: "/teachers",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: Teachers,
  },
  {
    title: "students",
    path: "/students",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: NumberOfStudents,
  },
  {
    title: "",
    path: "/",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: Home,
  },
  {
    title: "students-residence",
    path: "/students-residence",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: StudentsResidence,
  },
  {
    title: "tuit-branches",
    path: "/tuit-branches",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: TuitBranches,
  },
  {
    title: "social-status",
    path: "/social-status",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: SocialStatus,
  },
  {
    title: "mapping",
    path: "/mapping",
    Layout: MapLayout,
    roles: [],
    subOptions: [],
    Component: MapComponent,
  },
  {
    title: "faculty-teachers",
    path: "/faculty-teachers",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: FacultyTeachers,
  },

  {
    title: "all-faculties",
    path: "/all-faculties",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: AllFaculties,
  },
  {
    title: "login",
    path: "/login",
    Layout: LoginLayout,
    roles: [],
    subOptions: [],
    Component: LoginPage,
  },
];