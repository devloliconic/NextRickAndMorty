import React, { Context } from "react";
import {
  BackgroundWrapper,
  ContentWrapper,
  GridWrapper,
} from "../components/styled";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Info } from "../_types/info";
import { Character } from "../_types/сharacter";
import { CharacterCard } from "../components/CharacterCard";

type Response = {
  info: Info;
  results: Character[];
};

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  return (
    <BackgroundWrapper>
      <ContentWrapper>
        <GridWrapper>
          {data.results.map((character: Character) => (
            <CharacterCard
              url={character.url}
              key={character.id}
              name={character.name}
              id={character.id}
              status={character.status}
              image={character.image}
              location={character.location}
            />
          ))}
        </GridWrapper>
      </ContentWrapper>
    </BackgroundWrapper>
  );
};
export const getServerSideProps: GetServerSideProps<{
  data: Response;
}> = async () => {
  const response = await axios.get("https://rickandmortyapi.com/api/character");
  const data = response.data;
  return {
    props: {
      data,
    },
  };
};
export default Home;
