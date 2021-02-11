import PropTypes from 'prop-types';
import Menu from './DefaultAside';

import { Container, Main } from './styles';

const propTypes = {
  children: PropTypes.element.isRequired,
};

export default function DefaultLayout({ children }) {
  return (
    <>
      <Container>
        <Menu />
        <Main>{children}</Main>
      </Container>
    </>
  );
}

DefaultLayout.propTypes = propTypes;
