import styled from "styled-components";

export const Main = styled.main`
  background-color: linear-gradient(180deg, #F5FFFB 0%, #FFFFFF 100%);
  margin-top: 48px;
;
@media (max-width: 770px) {
    margin-top: 0;
  }
`;

export const Content = styled.div`
  display: flex;

  gap: 226px;

  @media (max-width: 1122px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0;
    margin-top: 80px;
  }


`;

export const Text = styled.div`
  margin-top: 80px;
  width: 488px;
  height: 330px;

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 57px;
  }

  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
  }

  @media (max-width: 1122px) {
    width: auto;
    max-width: 80%;
    height: 300px;
    margin-top: auto;
  }
`;

export const Img = styled.img`
  height: 491px;
  margin-top: 48px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 1122px) {
    width: 90%;
    max-width: 600px;
    height: auto;
    margin-top: 100px;
  }

  @media (max-width: 690px) {
    width: 400px;
    height: auto;
  }
  @media (max-width: 462px) {
    width: 300px;
    height: auto;
    margin-top: 230px;
  }
`;

export const ButtonMain = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  justify-content: center;
  margin-bottom: 80px;

  button {
    width: 232px;
    height: 48px;
    color: white;
    background-color: #018762;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    border-radius: 8px;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    margin-right: 34px;
    border: none;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #006b4e;
    }
  }

  button:nth-child(2) {
    color: #018762;
    background-color: #ffffff;
    border: 2px solid #018762;
    transition: background-color 1s ease;
    
    &:hover {
      background-color: #018762;
      border-color: white;
      color: white;
    }
  }

  @media (max-width: 1122px) {
    flex-direction: column;
    
    button {
      width: 100%;
      max-width: 300px;
      margin-bottom: 16px;
      margin-right: 0;
    }

    button:nth-child(2) {
      margin-bottom: 0;
    }
  }
`;

export const Separator = styled.div`
  width: 9.8rem;
  height: 2px;
  background: rgb(1, 135, 98);
  border-radius: 4px;
  margin: 0.5rem 0px;

  @media (max-width: 1122px) {
    display: none;
  }
`;
