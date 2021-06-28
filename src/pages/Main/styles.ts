import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin: 8px;
  font-size: 40px;
  color: #e35344;
`;

export const LoadingImg = styled.img.attrs({
  alt: 'Loading',
  src: 'http://pngimg.com/uploads/pokeball/small/pokeball_PNG24.png',
})`
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 16px;

  input {
    border: 0;
    border-radius: 8px;
    height: 40px;
    padding: 0 8px;
    margin-right: 16px;

    font-size: 22px;
    color: #a1a1a1;
    background: rgba(0, 0, 0, 0.1);
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 8px;
    height: 40px;
    padding: 8px;
    margin-right: 8px;

    font-size: 20px;
    font-weight: bold;
    background-color: #fff;
    color: #a1a1a1;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  padding: 0px 16px;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 16px;

  button {
    cursor: pointer;
    border: 0;
    border-radius: 8px;
    height: 40px;
    padding: 8px;
    margin-right: 8px;

    font-size: 20px;
    font-weight: bold;
    background-color: #e35344;
    color: #fff;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;
