import styled from 'styled-components';
import { darken, shade } from 'polished';

const buttonColor = '#04d361';

export const Title = styled.h1`
  max-width: 450px;
  font-size: 48px;
  color: #3a3a3a;

  margin-top: 80px;
`;

export const Form = styled.form`
  max-width: 700px;
  margin-top: 40px;
  margin-bottom: 50px;

  display: flex;

  input,
  button {
    border: 0;
    height: 70px;
  }

  input[type='text'] {
    flex: 1;
    padding: 15px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #cacaca;
    }
  }

  button {
    width: 200px;
    background-color: ${buttonColor};
    color: #fff;
    border-radius: 0 5px 5px 0;
    font-weight: bold;

    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${darken(0.05, buttonColor)};
    }
  }
`;

export const Repositories = styled.div`
  max-width: 700px;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    text-decoration: none;
    background-color: #fff;
    border-radius: 4px;

    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 15px;
    }

    &:visited,
    &:active {
      color: #3a3a3a;
    }

    img {
      width: 60px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 20px;

      strong {
        font-size: 20px;
      }

      p {
        margin-top: 8px;
        font-size: 12px;
        color: #a3a3b3;
      }
    }

    svg {
      color: #3a3a3a;
    }
  }
`;
