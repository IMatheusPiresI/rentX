import React from "react";
import * as S from "./styles";
import Logo from "../../assets/schedulingcomplete.svg";
import Done from "../../assets/done.svg";
import { useWindowDimensions } from "react-native";
import { ConfirmButon } from "../../components/ConfirmButon";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export const SchedulingComplete: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigation();

  const handleConfirmRental = () => {
    navigate.navigate("Home");
  };
  return (
    <S.Container>
      <StatusBar style="light" />
      <Logo width={width} />

      <S.Content>
        <Done />
        <S.Title>Carro alugado!</S.Title>
        <S.Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </S.Message>
      </S.Content>

      <S.Footer>
        <ConfirmButon title="Ok" onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  );
};
