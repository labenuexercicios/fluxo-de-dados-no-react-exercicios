import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border-right: 2px solid black;
  height: 100%;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 5px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ProfileName = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const ProfileBio = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
  color: #444;
`;