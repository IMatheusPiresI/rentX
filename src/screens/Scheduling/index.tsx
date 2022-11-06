import React, { useState } from "react";
import { Alert } from "react-native";

import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import * as S from "./styles";

import Arrow from "../../assets/arrow.svg";
import { StatusBar } from "expo-status-bar";
import { Button } from "../../components/Button";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from "../../components/Calendar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ICar, Params, RentalPeriod } from "../../@types";
import { format } from "date-fns";
import { getPlataformDate } from "../../utils/getPlataformDate";

export const Scheduling: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const handleConfirmRental = () => {
    navigate.navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDates),
    });
  };

  const handleBack = () => {
    navigate.goBack();
  };

  const handleChangeDate = (date: DayProps) => {
    console.log("entrei");
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    console.log("dasdasfafda");
    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    console.log("sai");
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(
        getPlataformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlataformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
  };

  return (
    <S.Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <S.Header>
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <S.Title>
          Escolha uma {`\n`}
          data de ínicio e {`\n`}
          fim do período.
        </S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </S.DateValue>
          </S.DateInfo>

          <Arrow />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>
      </S.Header>

      <S.Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </S.Content>

      <S.Footer>
        <Button
          title="Confirmar"
          onPress={handleConfirmRental}
          enabled={!!rentalPeriod.startFormatted}
        />
      </S.Footer>
    </S.Container>
  );
};
