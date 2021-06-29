import styled from 'styled-components';

import { PokemonType } from '../../constants/enums';
import { colors } from '../../styles/colors';

interface CardProps {
  pokemonType: string;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex: 1;
  padding: 8px 8px 0px 8px;
  border-radius: 16px;

  background-color: ${({ pokemonType }) => colors[pokemonType as PokemonType]};
`;

export const Sprite = styled.img`
  object-fit: cover;
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 4px;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }

  h1 {
    margin-top: auto;
    font-size: 40px;
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const TypeBadge = styled.div`
  display: flex;
  justify-content: center;
  width: 56px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);

  font-size: 12px;
  font-weight: bold;
`;
