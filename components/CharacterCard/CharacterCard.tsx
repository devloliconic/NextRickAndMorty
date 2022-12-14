import React from "react";
import { Card, Info, TextGray, WhiteTextHover } from "./styled";
import Image from "next/image";
import Link from "next/link";
import { Name, WhiteText } from "../styled";

interface Props {
  name: string;
  id: number;
  status: string;
  image: string;
  url: string;
  location: {
    name: string;
    url: string;
  };
}

export const CharacterCard = ({ name, id, status, image, location }: Props) => {
  return (
    <Card>
      <Image
        unoptimized={true}
        src={image}
        alt="char"
        width={200}
        height={200}
      />
      <Info>
        <Link href={`${id}`}>
          <Name>{name}</Name>
        </Link>
        <WhiteText>{status}</WhiteText>
        <TextGray>Last known location:</TextGray>
        <Link href={location.url}>
          <WhiteTextHover>{location.name}</WhiteTextHover>
        </Link>
      </Info>
    </Card>
  );
};
