import * as Styles from './styles';
import * as Types from './types';

const Header: Component<Types.HeaderProps> = ({ appName, onLogout }) => {
  return <Styles.Container>
    <Styles.Title>{appName}</Styles.Title>

    <Styles.Button onClick={onLogout}>Sair</Styles.Button>
  </Styles.Container>;
};

export default Header;
