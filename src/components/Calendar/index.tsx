import React from "react";
import { Feather } from "@expo/vector-icons";
import { ptBR } from "./localeConfig";

import { generateInterval } from "./generateInterval";

import {
  Calendar as CustomCalendar,
  DateData,
  LocaleConfig,
} from "react-native-calendars";
import { useTheme } from "styled-components";

LocaleConfig.locales["pt-BR"] = ptBR;
LocaleConfig.defaultLocale = "pt-BR";

type MarkedDateProps = {
  [date: string]: {
    color: string;
    textColor?: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  };
};

type CalendarProps = {
  markedDates: MarkedDateProps;
  onDayPress: (date: DateData) => void;
};

type DayProps = {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
};
const Calendar: React.FC<CalendarProps> = ({ markedDates, onDayPress }) => {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.shape}
          name={direction === "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_details,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.secondary_500,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        textMonthFontFamily: theme.fonts.secondary_500,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={String(new Date())}
      markingType={"period"}
      markedDates={markedDates}
      onDayPress={onDayPress}
    ></CustomCalendar>
  );
};

export { Calendar, generateInterval, MarkedDateProps, DayProps };
