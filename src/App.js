import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercises from './components/edit-exercises.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import "bootstrap/dist/css/bootstrap.min.css"
import Mainpage from './components/main-page.component';

function App() {
  return (

    <Router>
      <div className="container bg-info">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercises} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/mainpage" component={Mainpage} />
      </div>
    </Router>
  );
}

export default App;
