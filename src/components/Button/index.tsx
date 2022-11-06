import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import * as S from "./styles";

type ButtonProps = RectButtonProps & {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  color,
  enabled = true,
  loading = false,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <S.Container
      {...rest}
      color={color}
      enabled={enabled}
      style={{
        opacity: enabled === false || loading === true ? 0.5 : 1,
      }}
    >
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.shape} />
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.Container>
  );
};
