import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.h1``;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-left: 10px;
  margin-top: 10px;
  flex: 1;
`;

const UploadButton = styled.input`
  background-color: transparent;
  color: var(--primary-color);
  height: 48px;
  border: 0.5px solid var(--primary-color);
  margin: 5px;
  border-radius: 8px;

  :hover {
    background-color: var(--primary-color);
    opacity: 0.7;
    transition: background 0.7s;
    color: white;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 8px;
  margin: 5px;
  height: 48px;

  :hover {
    opacity: 0.8;
    transition: opacity 0.3s;
  }
`;

const Input = styled.input`
  margin: 5px;
`;

const MultilineInput = styled.textarea`
  resize: none;
  margin: 5px;
`;

export {
  Input,
  MultilineInput,
  FormContainer,
  UploadButton,
  SubmitButton,
  Container,
  Title,
};
