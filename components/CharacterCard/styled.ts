import styled from "@emotion/styled";
import { WhiteText } from "../../components/styled";

export const Card = styled.div`
  background: rgb(60, 62, 68);
  display: flex;
  border-radius: 0.5rem;
  margin: 0.75rem;
`;

export const Info = styled.div`
  padding: 0.75rem;
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
