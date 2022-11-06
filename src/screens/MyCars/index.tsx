import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { ICar } from "../../@types";
import { BackButton } from "../../components/BackButton";
import { Car } from "../../components/Car";
import { api } from "../../services/api";
import { AntDesign } from "@expo/vector-icons";
import * as S from "./styles";
import { Loading } from "../../components/Loading";

type CarProps = {
  id: string;
  car: ICar;
  user_id: string;
  startDate: string;
  endDate: string;
};

export const MyCars: React.FC = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigation();
  const theme = useTheme();

  const fetchCars = async () => {
    try {
      const response = await api.get("/schedules_byuser?user_id=1");
      setCars(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate.goBack();
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <S.Title>
          Seus agendamentos, {`\n`}
          estão aqui. {`\n`}
        </S.Title>

        <S.SubTitle>Conforto, segurança e praticidade.</S.SubTitle>
      </S.Header>

      <S.Content>
        {loading ? (
          <Loading />
        ) : (
          <>
            <S.Appointments>
              <S.AppointmentsTitle>Agendamentos feitos</S.AppointmentsTitle>
              <S.AppointmentsQty>
                {cars.length < 10 ? "0" + cars.length : cars.length}
              </S.AppointmentsQty>
            </S.Appointments>

            <S.MyCarsList
              data={cars}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <S.CarWrapper>
                  <Car data={item.car} />
                  <S.CarFooter>
                    <S.CarFooterTitle>Período</S.CarFooterTitle>
                    <S.CarFooterPeriod>
                      <S.CarFooterDate>{item.startDate}</S.CarFooterDate>
                      <AntDesign
                        name="arrowright"
                        size={26}
                        color={theme.colors.title}
                        style={{ marginHorizontal: 10 }}
                      />
                      <S.CarFooterDate>{item.endDate}</S.CarFooterDate>
                    </S.CarFooterPeriod>
                  </S.CarFooter>
                </S.CarWrapper>
              )}
            />
          </>
        )}
      </S.Content>
    </S.Container>
  );
};
