import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import * as S from "./styles";

type ConfirmButonProps = RectButtonProps & {
  title: string;
};

export const ConfirmButon: React.FC<ConfirmButonProps> = ({
  title,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
