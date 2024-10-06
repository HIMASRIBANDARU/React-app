import React, { useState } from 'react';
import styled from 'styled-components';

const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  height: 100vh;
  padding-top: 50px; 
`;

const ProfileForm = styled.form`
  width: 90%;
  max-width: 900px; 
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px; 
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1.2rem; 
  margin-bottom: 10px; 
`;

const Input = styled.input`
  padding: 15px; 
  font-size: 1.1rem; 
  border: 1px solid #ccc;
  border-radius: 10px; 
`;

const Select = styled.select`
  padding: 15px; 
  font-size: 1.1rem; 
  border: 1px solid #ccc;
  border-radius: 10px; 
`;

const Button = styled.button`
  padding: 15px 30px; 
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px; 
  cursor: pointer;
  font-size: 1.2rem; 
  margin-top: 20px; 
`;

const ProfileInfoContainer = styled.div`
  width: 90%;
  max-width: 900px; 
  background-color: #f8f9fa;
  padding: 40px; 
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px; 
`;

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    hasEyesightIssue: false,
    eyesightPoints: '',
    workType: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('savedProfile', JSON.stringify(formData));
    setSubmitted(true);
  };

  return (
    <ProfilePageContainer>
      {!submitted && (
        <ProfileForm onSubmit={handleSubmit}>
          <FormField>
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label>Age:</Label>
            <Input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label>Gender:</Label>
            <Select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </FormField>
          <FormField>
            <Label>Do you have any eyesight issues?</Label>
            <label>
              <input
                type="checkbox"
                name="hasEyesightIssue"
                checked={formData.hasEyesightIssue}
                onChange={handleCheckboxChange}
              />
              Yes
            </label>
          </FormField>
          {formData.hasEyesightIssue && (
            <FormField>
              <Label>Points of Eyesight Issue:</Label>
              <Input
                type="text"
                name="eyesightPoints"
                value={formData.eyesightPoints}
                onChange={handleChange}
                required
              />
            </FormField>
          )}
          <FormField>
            <Label>Work Type:</Label>
            <Select
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              required
            >
              <option value="">Select Work Type</option>
              <option value="screen">Screen Work</option>
              <option value="physical">Physical Work</option>
            </Select>
          </FormField>
          <Button type="submit">Save Profile</Button>
        </ProfileForm>
      )}

      {submitted && (
        <ProfileInfoContainer>
          <ProfileInfo>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Age:</strong> {formData.age}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
            {formData.hasEyesightIssue && (
              <p><strong>Eyesight Issues:</strong> {formData.eyesightPoints}</p>
            )}
            <p><strong>Work Type:</strong> {formData.workType}</p>
          </ProfileInfo>
        </ProfileInfoContainer>
      )}
    </ProfilePageContainer>
  );
};

export default ProfilePage;







