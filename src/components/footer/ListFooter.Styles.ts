import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 233px;;
  margin-top: 60px;
  margin-bottom: 60px;
  border-bottom: 1px solid #B2DFD0;
  gap: 300px;
;

  @media (max-width: 1122px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  li {
    display: flex;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 60px;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    line-height: 40px;
    color: rgb(31, 31, 31);
  }

  @media (max-width: 790px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 169px;
  height: 48px;
  margin-bottom: 40px;
  cursor: pointer;
`;
