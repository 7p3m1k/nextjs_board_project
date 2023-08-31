import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 0 auto;
  padding: 0 102px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 36px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const InputWrapper = styled.div`
  display: block;
  width: 47%;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  margin-top: 10px;
`;

export const TitleInputWrapper = styled.div`
  width: 100%;
`;

export const ContentTextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  height: 520px;
  font-size: 16px;
  margin-top: 10px;
`;

export const AddressInputWrapper = styled.div`
  width: 100%;
`;

export const AddressBox = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const SearchAddressBtn = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 20px;
`;

export const AddressInput = styled.input`
  width: 5%;
  font-size: 16px;
  padding: 20px;
  text-align: center;
  margin-right: 20px;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const SubmitBtn = styled.button`
  background-color: #ffd600;
  border-style: none;
  padding: 10px 60px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;
