import React from "react";
import * as S from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { BorderlessButtonProps } from "react-native-gesture-handler";

type BackButtonProps = BorderlessButtonProps & {
  color?: string;
};

export const BackButton: React.FC<BackButtonProps> = ({ color, ...rest }) => {
  const theme = useTheme();

  return (
    <S.Button {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </S.Button>
  );
};
