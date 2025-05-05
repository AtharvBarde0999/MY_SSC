import React, { useContext } from "react"; // Added useContext import
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "./context/AuthContext"; // Import AuthContext
import Navbar from "./components/navbar"; // Corrected case to match your file
import Footer from "./components/Footer";



//Quizzes subject wise  ke pages 
import SubjectQuiz1Test1 from './components/Quizzes/Subject/SubjectQuiz1Test1';
import SubjectQuiz1Test2 from "./components/Quizzes/Subject/SubjectQuiz1Test2";
import SubjectQuiz1Test3 from "./components/Quizzes/Subject/SubjectQuiz1Test3";
import SubjectQuiz1Test4 from "./components/Quizzes/Subject/SubjectQuiz1Test4";
import SubjectQuiz1Test5 from "./components/Quizzes/Subject/SubjectQuiz1Test5";
import SubjectQuiz1Test6 from "./components/Quizzes/Subject/SubjectQuiz1Test6";
import SubjectQuiz1Test7 from "./components/Quizzes/Subject/SubjectQuiz1Test7";
import SubjectQuiz1Test8 from "./components/Quizzes/Subject/SubjectQuiz1Test8";
import SubjectQuiz1Test9 from "./components/Quizzes/Subject/SubjectQuiz1Test9";
import SubjectQuiz1Test10 from "./components/Quizzes/Subject/SubjectQuiz1Test10";



// Quizzes Topic wise 

import TopicQuiz1Test1 from './components/Quizzes/Topic/TopicQuiz1Test1';
import TopicQuiz1Test2 from './components/Quizzes/Topic/TopicQuiz1Test2';
import TopicQuiz1Test3 from './components/Quizzes/Topic/TopicQuiz1Test3';
import TopicQuiz1Test4 from './components/Quizzes/Topic/TopicQuiz1Test4';
import TopicQuiz1Test5 from './components/Quizzes/Topic/TopicQuiz1Test5';
import TopicQuiz1Test6 from './components/Quizzes/Topic/TopicQuiz1Test6';
import TopicQuiz1Test7 from './components/Quizzes/Topic/TopicQuiz1Test7';
import TopicQuiz1Test8 from './components/Quizzes/Topic/TopicQuiz1Test8';
import TopicQuiz1Test9 from './components/Quizzes/Topic/TopicQuiz1Test9';
import TopicQuiz1Test10 from './components/Quizzes/Topic/TopicQuiz1Test10';
import TopicQuiz1Test11 from './components/Quizzes/Topic/TopicQuiz1Test11';
import TopicQuiz1Test12 from './components/Quizzes/Topic/TopicQuiz1Test12';
import TopicQuiz1Test13 from './components/Quizzes/Topic/TopicQuiz1Test13';
import TopicQuiz1Test14 from './components/Quizzes/Topic/TopicQuiz1Test14';
import TopicQuiz1Test15 from './components/Quizzes/Topic/TopicQuiz1Test15';


import FullTest1 from './components/Quizzes/FullTest/FullTest1';
import FullTest2 from './components/Quizzes/FullTest/FullTest2';





// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import StudyMaterial from "./pages/StudyMaterial";
import Notes from "./pages/Notes";
import Quizzes from "./pages/Quizzes";
import Books from "./pages/Books";
import Chats from "./pages/Chats";
import YouTubePlaylists from "./pages/YouTubePlaylists";
import Playlists from "./pages/Playlists";
import CurrentAffairs from "./pages/CurrentAffairs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cutoff from "./pages/Cutoff";
import AboutSSC from "./pages/AboutSSC";
import PaidCourses from "./pages/PaidCourses";

import CommunityPage from './pages/communityPage';



// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>



          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cutoff" element={<Cutoff />} /> {/* <-- Add this */}
          <Route path="/about-ssc" element={<AboutSSC />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/study-material" element={<StudyMaterial />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/books" element={<Books />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/youtube-playlists" element={<YouTubePlaylists />} />
          <Route path="/current-affairs" element={<CurrentAffairs />} />

          <Route path="/paidcourses" element={<PaidCourses />} />
          <Route path="/community" element={<CommunityPage />} />








          (// Subject wise Quis ka route )
          <Route path="/quiz/subjectwise/1" element={<SubjectQuiz1Test1 />} />
          <Route path="/quiz/subjectwise/2" element={<SubjectQuiz1Test2 />} />
          <Route path="/quiz/subjectwise/3" element={<SubjectQuiz1Test3 />} />
          <Route path="/quiz/subjectwise/4" element={<SubjectQuiz1Test4 />} />
          <Route path="/quiz/subjectwise/5" element={<SubjectQuiz1Test5 />} />
          <Route path="/quiz/subjectwise/6" element={<SubjectQuiz1Test6 />} />
          <Route path="/quiz/subjectwise/7" element={<SubjectQuiz1Test7 />} />
          <Route path="/quiz/subjectwise/8" element={<SubjectQuiz1Test8 />} />
          <Route path="/quiz/subjectwise/9" element={<SubjectQuiz1Test9 />} />
          <Route path="/quiz/subjectwise/10" element={<SubjectQuiz1Test10 />} />






          <Route path="/quiz/topicwise/1" element={<TopicQuiz1Test1 />} />
          <Route path="/quiz/topicwise/2" element={<TopicQuiz1Test2 />} />
          <Route path="/quiz/topicwise/3" element={<TopicQuiz1Test3 />} />
          <Route path="/quiz/topicwise/4" element={<TopicQuiz1Test4 />} />
          <Route path="/quiz/topicwise/5" element={<TopicQuiz1Test5 />} />
          <Route path="/quiz/topicwise/6" element={<TopicQuiz1Test6 />} />
          <Route path="/quiz/topicwise/7" element={<TopicQuiz1Test7 />} />
          <Route path="/quiz/topicwise/8" element={<TopicQuiz1Test8 />} />
          <Route path="/quiz/topicwise/9" element={<TopicQuiz1Test9 />} />
          <Route path="/quiz/topicwise/10" element={<TopicQuiz1Test10 />} />
          <Route path="/quiz/topicwise/11" element={<TopicQuiz1Test11 />} />
          <Route path="/quiz/topicwise/12" element={<TopicQuiz1Test12 />} />
          <Route path="/quiz/topicwise/13" element={<TopicQuiz1Test13 />} />
          <Route path="/quiz/topicwise/14" element={<TopicQuiz1Test14 />} />
          <Route path="/quiz/topicwise/15" element={<TopicQuiz1Test15 />} />


          <Route path="/quiz/fulltest/1" element={<FullTest1 />} />
          <Route path="/quiz/fulltest/2" element={<FullTest2 />} />







          {/* Protected Route */}
          <Route path="/chats" element={
            <ProtectedRoute>
              <Chats />
            </ProtectedRoute>
          } />

          {/* 404 Page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;