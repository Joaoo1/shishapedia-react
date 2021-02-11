import {
  Input,
  MultilineInput,
  FormContainer,
  UploadButton,
  SubmitButton,
  Container,
  Title,
} from './styles';

// eslint-disable-next-line react/prop-types
function Essence({ title }) {
  // const [isLoading, setLoading] = useState(false);
  // const [isUploadded, setUploaded] = useState(false);
  // const [imageUrl, setImageUrl] = useState('');

  // async function handleUploadImage() {
  //   try {
  //     setLoading(true);
  //     // const response = await api.post('/images');
  //   } catch (err) {
  //     if (err.response) {
  //       alert(err.response.error);
  //     } else {
  //       alert(err.message);
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  return (
    <Container>
      <Title>{title}</Title>
      <FormContainer>
        <UploadButton type="file" />
        <Input type="text" placeholder="Nome da essência" />
        <Input type="text" placeholder="Proposta" />
        <MultilineInput rows="10" placeholder="Descrição" />
        <Input type="number" placeholder="ID da marca" />
        <SubmitButton>Cadastrar</SubmitButton>
      </FormContainer>
    </Container>
  );
}

export default Essence;
