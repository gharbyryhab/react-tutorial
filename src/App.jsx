import "./App.css";
import Hello from "./components/hello/Hello";
import TaskPage from "./pages/taskPage/TaskPage";
import TaskDetails from "./pages/taskDetails/TaskDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TeacherRoutes from "./components/teacherRoutes/TeacherRoutes";
import StudentsRoutes from "./components/studentsRoute/StudentRoutes";
import Login from "./pages/login/Login";
import { me } from "./services/tasks3.service";
import { useState } from "react";
import { useEffect } from "react";
import { RoleContext } from "./context/RoleContext";
function App() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchMe = async () => {
      try {

        const user = await me();
        setUser(user);
        console.log("user: ", user);
      } catch {
  // ignore error
}
    };
    if (token) {
      // setUser({ role: "user" });
      fetchMe();
    }
  }, [token]);
  {
    /*  Cas 1 : token avec role=admin ==> teachers routes */
  }
  if (token && user.role === "admin") {
    return (
      <RoleContext.Provider value={user}>
      <div className="App">
        <Router>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/hello" element={<Hello />} />
          */}

            <Route path="/" element={<Navigate to="/teachers" />} />
            <Route path="/login" element={<Login />} />

            <Route path="/teachers" element={<TeacherRoutes />}>
              <Route path="" element={<Navigate to="tasks" />} />
              <Route path="tasks" element={<TaskPage />} />
              <Route path="tasks/:id" element={<TaskDetails />} />
            </Route>
          </Routes>
        </Router>
      </div>
      </RoleContext.Provider>
    );
  // ✅ commentaire ici, pas après le );
  } else if (token && user.role === "user") {
    return (
      <div className="App">
        <Router>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/hello" element={<Hello />} />
          */}
            <Route path="/" element={<Navigate to="/students" />} />

            <Route path="/login" element={<Login />} />

            <Route path="/students" element={<StudentsRoutes />}>
              <Route path="" element={<Navigate to="hello" />} />
              <Route path="hello" element={<Hello />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  } else if (!token) {
    /*  Cas 3 : pas token  ==> rediriger vers login */
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>

        {/*  Cas 4 : token mais pas encore de role connu ==> ???? */}
      </div>
    );
  } else {
    <div>loading</div>;
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           {/* <Route path="/" element={<Navigate to="/tasks" />} />
//           <Route path="/hello" element={<Hello />} />
//           */}
//           <Route path="/login" element={<Login />} />

//           <Route path="/teachers" element={<TeacherRoutes />}>
//             <Route path="" element={<Navigate to="tasks" />} />
//             <Route path="tasks" element={<TaskPage />} />
//             <Route path="tasks/:id" element={<TaskDetails />} />
//           </Route>
//           <Route path="/students" element={<StudentsRoutes />}>
//             <Route path="" element={<Navigate to="hello" />} />
//             <Route path="hello" element={<Hello />} />
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

export default App;