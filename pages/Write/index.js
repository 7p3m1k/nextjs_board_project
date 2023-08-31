import {
  Title,
  ContentTextArea,
  Container,
  TitleWrapper,
  InputContainer,
  InputWrapper,
  TitleInputWrapper,
  AddressInputWrapper,
  AddressBox,
  SearchAddressBtn,
  AddressInput,
  SubmitWrapper,
  SubmitBtn,
  Label,
  Input,
} from "../../styles/write";

export default function Write() {
  return (
    <Container>
      <TitleWrapper>
        <Title>게시물 등록</Title>
      </TitleWrapper>

      <InputContainer>
        <InputWrapper>
          <Label>작성자</Label>
          <Input type="text" placeholder="이름을 적어주세요." />
        </InputWrapper>

        <InputWrapper>
          <Label>작성자</Label>
          <Input type="text" placeholder="비밀번호를 입력해주세요." />
        </InputWrapper>
      </InputContainer>

      <InputContainer>
        <TitleInputWrapper>
          <Label>제목</Label>
          <Input type="text" placeholder="제목을 작성해주세요." />
        </TitleInputWrapper>
      </InputContainer>

      <InputContainer>
        <TitleInputWrapper>
          <Label>내용</Label>
          <ContentTextArea type="text" placeholder="내용을 작성해주세요." />
        </TitleInputWrapper>
      </InputContainer>

      <InputContainer>
        <AddressInputWrapper>
          <Label>주소</Label>
          <AddressBox>
            <AddressInput type="text" placeholder="07250" />
            <SearchAddressBtn>우편번호 검색</SearchAddressBtn>
          </AddressBox>
        </AddressInputWrapper>
      </InputContainer>

      <InputContainer>
        <AddressInputWrapper>
          <Input type="text" />
        </AddressInputWrapper>
      </InputContainer>

      <InputContainer>
        <AddressInputWrapper>
          <Input type="text" />
        </AddressInputWrapper>
      </InputContainer>

      <InputContainer>
        <TitleInputWrapper>
          <Label>유튜브</Label>
          <Input type="text" placeholder="링크를 복사해주세요." />
        </TitleInputWrapper>
      </InputContainer>

      <InputContainer>
        <TitleInputWrapper>
          <Label>사진 첨부</Label>
          <button>Upload</button>
          <button>Upload</button>
          <button>Upload</button>
        </TitleInputWrapper>
      </InputContainer>

      <InputContainer>
        <TitleInputWrapper>
          <Label>메인 설정</Label>
          <label>
            <input type="checkbox" />
            유튜브
          </label>
          <label>
            <input type="checkbox" />
            사진
          </label>
        </TitleInputWrapper>
      </InputContainer>

      <SubmitWrapper>
        <SubmitBtn>등록하기</SubmitBtn>
      </SubmitWrapper>
    </Container>
  );
}
