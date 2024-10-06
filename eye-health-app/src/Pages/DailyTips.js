import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

const FormContainer = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 10px;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;

const AdviceContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const DailyTips = () => {
  const [formData, setFormData] = useState({
    stressLevel: '',
    eyeStrain: '',
    screenHours: '',
  });

  const [advice, setAdvice] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateAdvice();
  };

  const generateAdvice = () => {
    const { stressLevel, eyeStrain, screenHours } = formData;
    let adviceMessage = 'Here are some tips for you:\n';

    if (stressLevel === 'high' || eyeStrain === 'yes' || parseInt(screenHours) >= 8) {
      adviceMessage += '- Take a break every hour to rest your eyes.\n';
      adviceMessage += '- Practice the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.\n';
      adviceMessage += '- Use artificial tears to keep your eyes moist.\n';
    }

    if (stressLevel === 'medium') {
      adviceMessage += '- Do some relaxation exercises like deep breathing or meditation.\n';
      adviceMessage += '- Ensure your workspace is well-lit and your screen brightness is not too high.\n';
    }

    if (stressLevel === 'low' && eyeStrain === 'no' && parseInt(screenHours) < 8) {
      adviceMessage += '- Continue maintaining good eye care practices.\n';
      adviceMessage += '- Make sure to get a good night\'s sleep to keep your eyes rested.\n';
    }

    setAdvice(adviceMessage);
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Label>How was your day?</Label>
        <Select name="stressLevel" value={formData.stressLevel} onChange={handleChange} required>
          <option value="">Select Stress Level</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>

        <Label>Are your eyes strained more than usual?</Label>
        <Select name="eyeStrain" value={formData.eyeStrain} onChange={handleChange} required>
          <option value="">Select Eye Strain Level</option>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </Select>

        <Label>How many hours did you work on screen today?</Label>
        <Input
          type="number"
          name="screenHours"
          value={formData.screenHours}
          onChange={handleChange}
          min="0"
          required
        />

        <Button type="submit">Get Advice</Button>
      </FormContainer>

      {advice && (
        <AdviceContainer>
          <h3>Daily Eye Care Tips</h3>
          <p>{advice}</p>
        </AdviceContainer>
      )}
    </PageContainer>
  );
};

export default DailyTips;



