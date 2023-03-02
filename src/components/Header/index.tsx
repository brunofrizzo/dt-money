import { HeaderContainer, HeaderContent, NewTranscationButton } from "./styles";

import logoImg from '../../assets/logo.svg';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="Logo" />
                <NewTranscationButton>Nova transacao</NewTranscationButton>
            </HeaderContent>
        </HeaderContainer>
    )
}