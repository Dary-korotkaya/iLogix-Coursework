import {
    Center,
    Container,
    Flex,
    Paper,
    PasswordInput,
    Stack,
    Text,
    TextInput,
    Title,
    useMantineTheme
} from "@mantine/core";
import { NextPage } from 'next';

const LoginPage: NextPage = () => {
    const theme = useMantineTheme();
    return (
        <>
            <Container >
                <Text style={{ fontSize: '70px', marginTop: 25, fontWeight: 700 }} c={theme.colors.blue[0]}>iLogix</Text>
                <div>


                    <Title style={{fontSize: 32}} c={theme.colors.blue[0]} > Log into your account</Title>


                </div>
            </Container>
            <Stack gap={112} align='stretch' justify={'center'}>
                <TextInput/>
                <PasswordInput/>
            </Stack>
        </>
    )
}

export default LoginPage;