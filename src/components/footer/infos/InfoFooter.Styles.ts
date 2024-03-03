import styled from "styled-components";

export const Infos = styled.div`
  height: 95px;
  display: flex;
  align-items: top;
  justify-content: center;
  
  @media (max-width: 1170px) {
    align-items: center;
    flex-direction: column;
    padding: 10px;
  }
`;

export const InfosText = styled.div`
  width: 1020px;
  height: 95px;
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  p:last-child {
    margin-top: 40px;
    line-height: 0;
  }
  
  @media (max-width: 1170px) {
    width: 400px;
    height: auto;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;

    p {
      font-size: 10px;
    }

    p:first-child {
      display: none;
    }

    p:nth-child(2) {
      display: none;
    }
  }

  @media (max-width: 690px) {
    p {
      font-size: 8px;
    }
  }
`;

export const ButtonScroll = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid #018762;
  padding: 10px 12px;
  gap: 16px;
  background-color: white;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  @media (max-width: 1170px) { 
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;
