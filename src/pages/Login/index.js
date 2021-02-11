import { BsChevronRight } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

import LogoImg from '../../assets/logo.png';

import {
  Container,
  FormContainer,
  Input,
  Logo,
  PasswordContainer,
} from './styles';

function Login() {
  const history = useHistory();

  function handlePasswordKeyPress(e) {
    if (e.keyCode === 13) {
      history.push('/home');
    }
  }

  return (
    <Container>
      <FormContainer>
        <Logo src={LogoImg} />
        <Input type="email" placeholder="Email" />
        <PasswordContainer>
          <Input
            type="password"
            placeholder="Senha"
            onKeyDown={handlePasswordKeyPress}
          />
          <BsChevronRight size={26} className="icon" color="#5a5c5a" />
        </PasswordContainer>
      </FormContainer>
    </Container>
  );
}

export default Login;
