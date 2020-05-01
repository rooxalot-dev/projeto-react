import styled, { css } from 'styled-components';
import { darken, shade } from 'polished';

const buttonColor = '#04d361';

interface FormProps {
  hasError: boolean;
}

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;

    transition: transform 0.1s ease-in-out;

    &:hover {
      transform: translateX(-10px);
    }

    svg {
      margin-right: 3px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 40px;

  header {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      width: 120px;
      height: auto;
    }

    div {
      flex: 1;
      margin-left: 30px;

      strong {
        font-size: 36px;
        display: block;
        margin-bottom: 10px;
        color: #3d3d4d;
      }

      p {
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    list-style-type: none;
    margin-top: 40px;

    li {
      display: flex;
      flex-direction: column;
      margin-right: 80px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 50px;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    text-decoration: none;
    color: #3a3a3a;
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
