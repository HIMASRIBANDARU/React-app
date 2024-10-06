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
  { name: '20-20-20 Rule', description: 'Every 20 minutes, look at something 20 feet away for at least 20 seconds to reduce eye strain from prolonged screen use' },
  { name: 'Figure Eight', description: 'Imagine a large figure eight on the wall in front of you. Trace it slowly with your eyes, moving in both directions for a few minutes to exercise and relax your eye muscles.' },
  { name: 'Near and Far Focus', description: 'Hold your thumb or a small object about 10 inches away from your face. Focus on it for 15 seconds, then shift your focus to an object at least 10 feet away for another 15 seconds. Repeat several times.' },
  { name: 'Eye Squeezes', description: 'Close your eyes tightly for 5 seconds, then open them wide. Repeat this exercise 10 times to improve circulation around the eyes.' },
  
];

const WorkingProfessionals = () => {
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
      <ExerciseTitle> For Working Professionals</ExerciseTitle>
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

export default WorkingProfessionals;