import { StatusBar } from "expo-status-bar";
import React from "react";

import Speed from "../../assets/speed.svg";
import Acceleration from "../../assets/acceleration.svg";
import Force from "../../assets/force.svg";
import Gasoline from "../../assets/gasoline.svg";
import Machine from "../../assets/machine.svg";
import Peaple from "../../assets/peaple.svg";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ICar, Params } from "../../@types";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

export const CarDetails: React.FC = () => {
  const navigate = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const handleConfirmRental = () => {
    navigate.navigate("Scheduling", {
      car,
    });
  };

  const handleBack = () => {
    navigate.goBack();
  };

  return (
    <S.Container>
      <StatusBar style="dark" />
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>
      <S.CarImages>
        <ImageSlider imageUrl={car.photos} />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>R$ {car.rent.price},00</S.Price>
          </S.Rent>
        </S.Details>
        <S.Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </S.Accessories>
        <S.About>{car.about}</S.About>
      </S.Content>
      <S.Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </S.Footer>
    </S.Container>
  );
};
