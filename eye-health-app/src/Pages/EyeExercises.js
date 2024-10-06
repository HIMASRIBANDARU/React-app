import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ExerciseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
`;

const ExerciseCard = styled.div`
  width: 300px;
  height: 200px;
  margin: 10px;
  padding: 15px;
  background-color: ${(props) => props.bgColor};
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

const ExerciseTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
`;

const ExerciseDescription = styled.p`
  color: #fff;
  font-size: 1rem;
`;

const ExerciseImage = styled.img`
  width: 100px;
  height: 100px;
  align-self: flex-end;
`;

const EyeExercise = () => {
  return (
    <div>
      <h1>Exercises</h1>
      <ExerciseContainer>
        <ExerciseCard bgColor="#5f2c82">
          <Link to="/main/eye-exercise/general-eye-care">
            <ExerciseTitle>General Eye Care</ExerciseTitle>
            <ExerciseDescription>
              To relieve eye strain and improve overall eye health
            </ExerciseDescription>
            
          </Link>
        </ExerciseCard>
        <ExerciseCard bgColor="#49a09d">
          <Link to="/main/eye-exercise/before-bed-eye-care">
            <ExerciseTitle>Before-bed Eye Care</ExerciseTitle>
            <ExerciseDescription>
              To help you wind down and prepare for sleep.
              They include relaxation techniques and eye exercises.
            </ExerciseDescription>
          
          </Link>
        </ExerciseCard>
        <ExerciseCard bgColor="#2c3e50">
          <Link to="/main/eye-exercise/working-professionals">
            <ExerciseTitle>Working Professionals</ExerciseTitle>
            <ExerciseDescription>
              For individuals who spend long hours in front of computer, such as office workers and programmers.
            </ExerciseDescription>
            
          </Link>
        </ExerciseCard>
        <ExerciseCard bgColor="#16a085">
          <Link to="/main/eye-exercise/dry-eye-relief">
            <ExerciseTitle>Dry Eye Relief</ExerciseTitle>
            <ExerciseDescription>
              For individuals with dry eye syndrome, a condition where the eyes don't produce enough tears.
            </ExerciseDescription>
            
          </Link>
        </ExerciseCard>
        <ExerciseCard bgColor="#2980b9">
          <Link to="/main/eye-exercise/myopia">
            <ExerciseTitle>Myopia Prevention</ExerciseTitle>
            <ExerciseDescription>
            For individuals with myopia, or near-sightedness. They aim to slow down the progression of myopia.
            </ExerciseDescription>
            
          </Link>
        </ExerciseCard>
        <ExerciseCard bgColor="#d35400">
          <Link to="/main/eye-exercise/hypermetropia">
            <ExerciseTitle>Hypermetropia Prevention</ExerciseTitle>
            <ExerciseDescription>
            For individuals with hypermetropia, or far-sightedness. 
            </ExerciseDescription>
           
          </Link>
        </ExerciseCard>
      </ExerciseContainer>
    </div>
  );
};

export default EyeExercise;




