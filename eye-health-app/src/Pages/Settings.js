import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const OptionContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const OptionButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const ModalContent = styled.div`
  margin-top: 10px;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  flex: 1;
  font-size: 1rem;
`;

const Input = styled.input`
  flex: 2;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Settings = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showTellAFriend, setShowTellAFriend] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);

  const [profile, setProfile] = useState({
    name: '',
    age: '',
    gender: '',
    hasEyesightIssue: false,
    eyesightPoints: '',
    workType: '',
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('savedProfile'));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleEditProfile = () => {
    setShowEditProfile(true);
    setShowTellAFriend(false);
    setShowWriteReview(false);
  };

  const handleTellAFriend = () => {
    setShowEditProfile(false);
    setShowTellAFriend(true);
    setShowWriteReview(false);
  };

  const handleWriteReview = () => {
    setShowEditProfile(false);
    setShowTellAFriend(false);
    setShowWriteReview(true);
  };

  const handleEdit = (field) => (e) => {
    setProfile({ ...profile, [field]: e.target.value });
  };

  const saveProfile = () => {
    localStorage.setItem('savedProfile', JSON.stringify(profile));
    alert('Profile updated successfully!');
  };

  const handleSubmitReview = () => {
    alert('Review submitted successfully! 👍');
  };

  return (
    <SettingsContainer>
      <OptionContainer>
        <OptionButton onClick={handleEditProfile}>Edit Profile</OptionButton>
        <OptionButton onClick={handleTellAFriend}>Tell a Friend</OptionButton>
        <OptionButton onClick={handleWriteReview}>Write a Review</OptionButton>
      </OptionContainer>

      <ModalContainer open={showEditProfile}>
        <ModalHeader>
          <ModalTitle>Edit Profile</ModalTitle>
          <Button onClick={() => setShowEditProfile(false)}>Close</Button>
        </ModalHeader>
        <ModalContent>
          <FieldContainer>
            <Label>Name:</Label>
            <Input type="text" value={profile.name} onChange={handleEdit('name')} />
          </FieldContainer>
          <FieldContainer>
            <Label>Age:</Label>
            <Input type="number" value={profile.age} onChange={handleEdit('age')} />
          </FieldContainer>
          <FieldContainer>
            <Label>Gender:</Label>
            <Input type="text" value={profile.gender} onChange={handleEdit('gender')} />
          </FieldContainer>
          <FieldContainer>
            <Label>Eyesight Issues:</Label>
            <Input type="checkbox" checked={profile.hasEyesightIssue} onChange={(e) => setProfile({ ...profile, hasEyesightIssue: e.target.checked })} />
          </FieldContainer>
          {profile.hasEyesightIssue && (
            <FieldContainer>
              <Label>Eyesight Points:</Label>
              <Input type="text" value={profile.eyesightPoints} onChange={handleEdit('eyesightPoints')} />
            </FieldContainer>
          )}
          <FieldContainer>
            <Label>Work Type:</Label>
            <Input type="text" value={profile.workType} onChange={handleEdit('workType')} />
          </FieldContainer>
          <Button onClick={saveProfile}>Save Changes</Button>
        </ModalContent>
      </ModalContainer>

      <ModalContainer open={showTellAFriend}>
        <ModalHeader>
          <ModalTitle>Tell a Friend</ModalTitle>
          <Button onClick={() => setShowTellAFriend(false)}>Close</Button>
        </ModalHeader>
        <ModalContent>
          <p>Share this URL with your friends:</p>
          <p><a href="https://yourapp.com">https://yourapp.com</a></p>
        </ModalContent>
      </ModalContainer>

      <ModalContainer open={showWriteReview}>
        <ModalHeader>
          <ModalTitle>Write a Review</ModalTitle>
          <Button onClick={() => setShowWriteReview(false)}>Close</Button>
        </ModalHeader>
        <ModalContent>
          <FieldContainer>
            <Label>Review:</Label>
            <Input as="textarea" rows="4" value={profile.review} onChange={handleEdit('review')} />
          </FieldContainer>
          <Button onClick={handleSubmitReview}>Submit Review</Button>
        </ModalContent>
      </ModalContainer>
    </SettingsContainer>
  );
};

export default Settings;








