import styled from "@emotion/styled";

export const BackgroundWrapper = styled.div`
  background: #202329;
  padding: 100px 0;
`;

export const ContentWrapper = styled.div`
  padding: 0 24px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Content = styled.div`
  height: calc(100vh - 305px);
  background: #202329;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 50px;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: rgb(245, 245, 245);
  font-weight: 800;
  &:hover {
    color: rgb(255, 152, 0);
  }
`;
export const WhiteText = styled.p`
  color: rgb(245, 245, 245);
  font-size: 16px;
  font-weight: 500;
`;

export const WhiteLink = styled.p`
  color: rgb(245, 245, 245);
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 100px;
`;
