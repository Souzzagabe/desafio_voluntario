import styled from "styled-components";

export const Infos = styled.div`
  height: 95px;
  display: flex;
  align-items: top;
  justify-content: center;
 
;
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
`;

export const ButtonScroll = styled.button`

  width: 48px;
  height: 48px;
  border-radius: 8px; /* Radius 8px */
  border: 2px solid #018762; /* Border 2px */
  padding: 10px 12px; /* Padding 10px, 12px, 10px, 12px */
  gap: 16px; /* Gap 16px */
 background-color: white;
 box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
`;
