import { useState, useCallback } from 'react';

import api from '../../services/api';

import {
  Input,
  MultilineInput,
  FormContainer,
  UploadButton,
  SubmitButton,
  Container,
  Title,
  LoadingContainer,
  LoadingIndicator,
  MessageContainer,
  Message,
} from './styles';

// eslint-disable-next-line react/prop-types
function Essence({ title }) {
  const [isLoading, setLoading] = useState(false);
  const [essenceName, setEssenceName] = useState(null);
  const [essenceProposal, setEssenceProposal] = useState(null);
  const [essenceDescription, setEssenceDescription] = useState(null);
  const [brandId, setBrandId] = useState(null);

  const [message, setMessage] = useState('');
  const [isError, setError] = useState(false);

  const [iconId, setIconId] = useState(null);
  const [imageId, setImageId] = useState(null);

  async function handleUploadImage(event) {
    try {
      setLoading(true);
      if (event.target.files) {
        const data = new FormData();
        data.append('image', event.target.files[0]);
        const response = await api.patch('/images', data);
        setIconId(response.data.icon.id);
        setImageId(response.data.image.id);
      }

      setError(false);
      setMessage('Imagem enviada com sucesso');
    } catch (err) {
      setError(true);
      if (err.response) {
        setMessage(err.response.data.error);
      } else {
        setMessage(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  const resetForm = useCallback(() => {
    setEssenceName('');
    setEssenceProposal('');
    setEssenceDescription('');
    setBrandId(0);
    setImageId(null);
    setIconId(null);
    setMessage('');
  });

  const handleSubmitForm = useCallback(async (e) => {
    e.preventDefault();
    if (
      !essenceName ||
      !essenceProposal ||
      !brandId ||
      brandId === 0 ||
      !imageId ||
      !iconId
    ) {
      setError(true);
      setMessage('Preencha todos os campos');
      return;
    }

    try {
      setLoading(true);

      await api.post('/essences', {
        name: essenceName,
        description: essenceDescription,
        proposal: essenceProposal,
        brand_id: brandId,
        image_id: imageId,
        icon_id: iconId,
      });

      setError(false);
      setMessage('Essência adicionada com sucesso');
      resetForm();
    } catch (err) {
      setError(true);
      if (err.response) {
        setMessage(err.response.data.error);
      } else {
        setMessage(err.message);
      }
    } finally {
      setLoading(false);
    }
  });

  return (
    <Container>
      {isLoading && (
        <LoadingContainer>
          <LoadingIndicator
            type="spin"
            color="#8257e5"
            height={100}
            width={60}
          />
        </LoadingContainer>
      )}
      <Title>{title}</Title>
      <FormContainer onSubmit={handleSubmitForm}>
        <UploadButton
          type="file"
          accept="image/*"
          onChange={handleUploadImage}
        />
        <p>{`Image ID: ${imageId}`}</p>
        <p>{`Icon ID: ${iconId}`}</p>
        <Input
          type="text"
          placeholder="Nome da essência"
          value={essenceName}
          onChange={(e) => setEssenceName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Proposta"
          value={essenceProposal}
          onChange={(e) => setEssenceProposal(e.target.value)}
        />
        <MultilineInput
          rows="10"
          placeholder="Descrição"
          value={essenceDescription}
          onChange={(e) => setEssenceDescription(e.target.value)}
        />
        <Input
          type="number"
          placeholder="ID da marca"
          value={brandId}
          onChange={(e) => setBrandId(parseInt(e.target.value, 10))}
        />
        <SubmitButton type="submit">Cadastrar</SubmitButton>
        <MessageContainer className={isError ? 'error' : 'success'}>
          <Message>{message}</Message>
        </MessageContainer>
      </FormContainer>
    </Container>
  );
}

export default Essence;
