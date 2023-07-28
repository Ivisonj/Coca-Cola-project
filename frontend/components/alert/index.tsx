import { BsEmojiFrownFill } from 'react-icons/bs'


import { Container, AlertContainer, Raw, Icon, Text, AlertButton } from './style'

interface AlertProps {
    confirmButton: () => void
    cancelButton: () => void
    display: string
}

export default function Alert({ confirmButton, cancelButton, display }: AlertProps) {
    return (
        <Container display={display}>
            <AlertContainer>
                <Raw>
                    <Icon>
                        <BsEmojiFrownFill style={{ fontSize: '3rem', color: 'DarkGray' }}/>
                    </Icon>
                    <Text>Tem certeza que deseja excluir este produto?</Text>
                </Raw>
                <Raw>
                    <AlertButton onClick={confirmButton} style={{ backgroundColor: 'red' }}>sim</AlertButton>
                    <AlertButton onClick={cancelButton} style={{ backgroundColor: 'DarkGray' }} >não</AlertButton>
                </Raw>
            </AlertContainer>
        </Container>
    )
}