import React from "react";
import * as S from "./styles";
import Gasoline from "../../assets/gasoline.svg";
import { TouchableOpacityProps } from "react-native";
import { ICar } from "../../@types";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

type CarProps = TouchableOpacityProps & {
  data: ICar;
};

export const Car: React.FC<CarProps> = ({ data, ...rest }) => {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <S.Container {...rest}>
      <S.Details>
        <S.Brand>{data.brand}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{data.rent.period}</S.Period>
            <S.Price>{`R$ ${data.rent.price}`}</S.Price>
          </S.Rent>

          <S.Type>
            <MotorIcon />
          </S.Type>
        </S.About>
      </S.Details>
      <S.CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </S.Container>
  );
};
