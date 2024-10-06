import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ExerciseDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const BackButton = styled.button`
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ExerciseTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const ExerciseDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
`;

const ExerciseCard = styled.div`
  width: 300px;
  height: 150px;
  margin: 10px;
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  max-width: 400px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const exercises = [
  { name: 'Shift Focus Exercise', description: 'Look straight ahead and then quickly shift focus between two distant objects multiple times. Make sure to blink in between focuses so that you do not strain your eyes from focusing too hard and too often on one object.' },
  { name: 'Double Vision Exercise', description: 'Choose an object at either a far or near distance. Practice focusing both eyes in opposing directions without changing the focus of either eye individually. Take breaks between sessions to prevent strain, limiting each session to no more than 5 minutes. This exercise becomes easier with practice and regular breaks to avoid excessive strain.' },
  { name: 'Near-Distance Targeting Exercise', description: ' Find an object at near distance and focus on it for about 20 seconds before shifting focus to an object further away for another 20 seconds, repeating this process several times without straining your eyes too much throughout the exercise.' },
 
  
];

const Hypermetropia = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const openPopup = (exercise) => {
    setSelectedExercise(exercise);
  };

  const closePopup = () => {
    setSelectedExercise(null);
  };

  return (
    <ExerciseDetailContainer>
      <BackButton>
        <Link to="/main/exercises">Back to Exercises</Link>
      </BackButton>
      <ExerciseTitle>Hypermetropia Prevention</ExerciseTitle>
      <ExerciseDescription>
        To relieve eye strain and improve overall eye health
      </ExerciseDescription>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '20px' }}>
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.name} onClick={() => openPopup(exercise)}>
            <h3>{exercise.name}</h3>
            <p>Click to view description</p>
          </ExerciseCard>
        ))}
      </div>
      {selectedExercise && (
        <>
          <Overlay onClick={closePopup} />
          <Popup>
            <h2>{selectedExercise.name}</h2>
            <p>{selectedExercise.description}</p>
            <button onClick={closePopup}>Close</button>
          </Popup>
        </>
      )}
    </ExerciseDetailContainer>
  );
};

export default Hypermetropia;