import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FacultyDashboard from './components/FacultyDashboard';

function App() {
  return (
    <Router>
      <Route path="/dashboard" component={FacultyDashboard} />
    </Router>
  );
}

export default App;
