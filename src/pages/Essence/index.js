import { useState } from 'react';

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

  let iconId = null;
  let imageId = null;

  async function handleUploadImage(event) {
    try {
      setLoading(true);
      if (event.target.files && event.target.files[0]) {
        const response = await api.post('/images', event.target.files[0]);
        imageId = response.data.image.id;
        iconId = response.data.icon.id;
      }

      setError(false);
      setMessage('Imagem enviada com sucesso');
    } catch (err) {
      setError(true);
      setMessage(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmitForm() {
    if (!essenceName || !essenceProposal || !brandId || brandId === 0) {
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
    } catch (err) {
      setError(true);
      setMessage(err);
    } finally {
      setLoading(false);
    }
  }

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
      <FormContainer>
        <UploadButton
          type="file"
          accept="image/*"
          onChange={handleUploadImage}
        />
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
          onChange={(e) => setBrandId(e.target.value)}
        />
        <SubmitButton type="submit" onSubmit={handleSubmitForm}>
          Cadastrar
        </SubmitButton>
        <MessageContainer className={isError ? 'error' : 'success'}>
          <Message>{message}</Message>
        </MessageContainer>
      </FormContainer>
    </Container>
  );
}

export default Essence;
