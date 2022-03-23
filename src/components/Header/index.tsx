import logoImg from '../../assets/logo.svg';
import { Container } from './styles';
import { Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void; //Repasse de funções
}
export function Header({ onOpenNewTransactionModal }: HeaderProps) {   

    return(
        <Container>
            <Content>
            <img src={logoImg} alt="" />
            <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>        
    )
}