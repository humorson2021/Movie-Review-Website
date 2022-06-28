import AddComment from "./components/AddComment";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import MovieWebsites from "./components/MovieWebsites";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Search from "./components/Search";
import "./App.css";

function App() {
  const appName = "My movie reviews";
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    
    <div className="App">
      <nav>
        <Link to="/">Movies</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/search">Search</Link>
      </nav>
      {isLoading?<img src="https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg" alt="Loading"/>:
      isAuthenticated?<LogoutButton />:<LoginButton />}
      <aside id="asideWeb">
        <ul>
          <MovieWebsites />
        </ul>
      </aside>
      <div className="afterAside">
      <Routes>
          <Route path="/" 
            element={
            <>
            <Header 
            app={appName}
            />
            <ul className="moviesList"><MoviesList /></ul>
            </>
          }></Route>

          <Route path="/:movieTitle" 
            element={
            <>
              <MovieDetails 
                onAddCommentClicked={toggleShowForm}
                showForm={showForm}
              />
              {showForm && <AddComment />}
            </>
          }></Route>

          <Route path="/profile" element={<ProtectedRoute Component={Profile} />}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="*" element={<p>Nothing found here!</p>}></Route>
        </Routes>
        </div>
      </div>
  );
}

export default App;
