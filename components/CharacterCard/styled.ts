import styled from "@emotion/styled";

export const Card = styled.div`
  background: rgb(60, 62, 68);
  display: flex;
  border-radius: 0.5rem;
  margin: 0.75rem;
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

export const Info = styled.div`
  padding: 0.75rem;
`;

export const WhiteText = styled.p`
  color: rgb(245, 245, 245);
  font-size: 16px;
  font-weight: 500;
`;

export const WhiteTextHover = styled(WhiteText)`
  color: rgb(245, 245, 245);
  font-size: 16px;
  font-weight: 500;
  &:hover {
    color: rgb(255, 152, 0);
  }
`;

export const TextGray = styled.p`
  color: rgb(158, 158, 158);
  font-size: 16px;
  font-weight: 500;
`;
