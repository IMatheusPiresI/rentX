import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as S from "./styles";
import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { ICar } from "../../@types";

import { Loading } from "../../components/Loading";

import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

export const Home: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigation();
  const [cars, setCars] = useState<ICar[]>([]);
  const [loading, seLoading] = useState<boolean>(true);

  const loadCars = async () => {
    try {
      const response = await api.get("/cars");
      console.log(response.data);
      setCars(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      seLoading(false);
    }
  };
  const carData = {
    brand: "audi",
    name: "RS 5 Coupé",
    rent: {
      period: "ao dia",
      price: "120",
    },
    thumbnail:
      "https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png",
  };

  const carDataTwo = {
    brand: "Porsche",
    name: "Panamera",
    rent: {
      period: "ao dia",
      price: "340",
    },
    thumbnail:
      "https://i.pinimg.com/originals/e3/99/6c/e3996cbc32b254dd28205dd7e36a6a11.png",
  };

  const handleCarDetails = (car: ICar) => {
    navigate.navigate("CarDetails", {
      car,
    });
  };

  const handleOpenMyCars = () => {
    navigate.navigate("MyCars");
  };

  useEffect(() => {
    loadCars();
  }, []);

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" />
      <S.Container>
        <S.Header>
          <S.HeaderContent>
            <Logo />
            <S.TotalCars>Total de 12 carros</S.TotalCars>
          </S.HeaderContent>
        </S.Header>
        {loading ? (
          <Loading />
        ) : (
          <S.CarList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Car data={item} onPress={() => handleCarDetails(item)} />
            )}
          />
        )}

        <S.MyCarsButton onPress={handleOpenMyCars}>
          <Ionicons name="ios-car-sport" size={38} color={theme.colors.shape} />
        </S.MyCarsButton>
      </S.Container>
    </>
  );
};
