import AddComment from "./components/AddComment";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const appName = "My movie reviews";
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <nav>
        <Link to="/">Movies</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      {isAuthenticated?<LogoutButton />:<LoginButton />}
      <Routes>
          <Route path="/" 
            element={
            <>
            <Header 
            app={appName}
            />
            <ul><TasksList /></ul>
            </>
          }></Route>

          <Route path="/:movieTitle" 
            element={
            <>
              <TaskDetails 
                onAddTaskClicked={toggleShowForm}
                showForm={showForm}
              />
              {showForm && <AddComment />}
            </>
          }></Route>

          <Route path="/profile" element={<ProtectedRoute Component={Profile} />}></Route>
          <Route path="*" element={<p>Nothing found here!</p>}></Route>
        </Routes>
      </div>
  );
}

export default App;
