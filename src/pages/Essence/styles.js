import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Container = styled.div`
  .success {
    background-color: #7dff97;
  }

  .error {
    background-color: #f74a2f;
  }
`;

const LoadingContainer = styled.div`
  position: absolute;
  background-color: transparent;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const LoadingIndicator = styled(ReactLoading)`
  margin-left: 48vw;
  margin-top: 48vh;
`;

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

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  margin: 30px 8px 0px 8px;
`;

const Message = styled.div`
  text-align: center;
`;

export {
  Input,
  MultilineInput,
  FormContainer,
  UploadButton,
  SubmitButton,
  Container,
  LoadingContainer,
  LoadingIndicator,
  Title,
  MessageContainer,
  Message,
};
