import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import MainPage from './components/mainpage';
import ProfilePage from './Pages/ProfilePage'; // Import your Profile component
import Settings from './Pages/Settings'; // Import your Settings component
import EyeExercises from './Pages/EyeExercises'; // Import your EyeExercises component
import DailyTips from './Pages/DailyTips'; // Import your DailyTips component

import GeneralEyeCareExercise from './Pages/GeneralEyeCareExercise';
import BedTimeExercise from './Pages/BedTimeExercise';
import WorkingProfessionals  from './Pages/WorkingProfessionals';
import DryEyeRelief from './Pages/DryEyeRelief';
import Myopia from './Pages/Myopia';
import Hypermetropia from './Pages/Hypermetropia';

// Import other exercise detail components as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main" element={<MainPage />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="tips" element={<DailyTips />} />
          <Route path="exercises" element={<EyeExercises />} />
          <Route path="eye-exercise/general-eye-care" element={<GeneralEyeCareExercise />} />
          <Route path="eye-exercise/before-bed-eye-care"element={<BedTimeExercise />} />
          <Route path="eye-exercise/working-professionals"element={<WorkingProfessionals />} />
          <Route path="eye-exercise/dry-eye-relief"element={<DryEyeRelief />} />
          <Route path="eye-exercise/myopia"element={<Myopia />} />
          <Route path="eye-exercise/hypermetropia"element={<Hypermetropia />} />
          
          {/* Add routes for other exercise detail components */}
          <Route path="settings" element={<Settings />} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;












