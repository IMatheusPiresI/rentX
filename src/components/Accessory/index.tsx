import React from "react";
import { SvgProps } from "react-native-svg";
import * as S from "./styles";

type Accessory = {
  name: string;
  icon: React.FC<SvgProps>;
};

export const Accessory: React.FC<Accessory> = ({ name, icon: Icon }) => {
  return (
    <S.Container>
      <Icon width={32} height={32} />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
};
