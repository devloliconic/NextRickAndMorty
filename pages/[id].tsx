import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import { Character } from "../_types/сharacter";
import Image from "next/image";
import {
  BackgroundWrapper,
  ContentWrapper,
  FlexBox,
  WhiteLink,
  WhiteText,
} from "../components/styled";
import { Name } from "../components/styled";
import Link from "next/link";

const Char = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  return (
    <BackgroundWrapper>
      <ContentWrapper>
        <Link href="/">
          <WhiteLink>Back To Home</WhiteLink>
        </Link>
        <FlexBox>
          <Image
            unoptimized={true}
            src={data.image}
            alt="char"
            width={200}
            height={200}
          />
          <div>
            <Name>{data.name}</Name>
            <WhiteText>{data.location.name}</WhiteText>
            <WhiteText>{data.status}</WhiteText>
          </div>
        </FlexBox>
      </ContentWrapper>
    </BackgroundWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: Character;
}> = async (ctx) => {
  const { id } = ctx.query;
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = response.data;
  return {
    props: {
      data,
    },
  };
};
export default Char;
