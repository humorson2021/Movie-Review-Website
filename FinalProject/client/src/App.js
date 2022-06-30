import AddComment from "./components/AddComment";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import MovieWebsites from "./components/MovieWebsites";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Search from "./components/Search";
import "./App.css";
import ListOfSearch from "./components/ListOfSearch";
import NavigationBootStrap from "./components/NavigationBootStrap";

function App() {
  const appName = "30 well-chosen movies of IMDB top-250";
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };
  // const { isAuthenticated, isLoading } = useAuth0();
  return (
    
    <div className="App">
      <NavigationBootStrap />
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/search">Search</Link>
        {isLoading?<img src="https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg" alt="Loading"/>:
        isAuthenticated?<LogoutButton />:<LoginButton />}
      </nav> */}
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
          <Route path="/search/:inputText" element={<ListOfSearch/>}></Route>
          <Route path="*" element={<p>Nothing found here!</p>}></Route>
        </Routes>
        </div>
{/* 
        <footer>
            <p>
                © 2022 Yuze Zhang 
                <a href="https://github.com/humorson2021" target="_blank" rel="noreferrer">
                    <img src={require("../public/githubIcon.png")} alt="github" />
                </a>
                <a href="mailto:zhang.yuze1@northeastern.edu" target="_blank" rel="noreferrer">
                    <img src={require("../public/email.png")} alt="yuze's email" />
                </a>
            </p>
        </footer> */}
      </div>

      
  );
}

export default App;
