import React from "react";
import * as S from "./styles";

type ImageSliderProps = {
  imageUrl: string[];
};

export const ImageSlider: React.FC<ImageSliderProps> = ({ imageUrl }) => {
  return (
    <S.Container>
      <S.ImageIndexes>
        <S.ImageIndex active={true} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
      </S.ImageIndexes>

      <S.CarImageWrapper>
        <S.CarImage source={{ uri: imageUrl[0] }} resizeMode="contain" />
      </S.CarImageWrapper>
    </S.Container>
  );
};
