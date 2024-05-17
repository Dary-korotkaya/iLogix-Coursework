import { NextPage } from "next";
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
import MainLayout from "../_app/layout/MainLayout";

const Profile: NextPage = () => {
    const theme = useMantineTheme();
    return (
        <MainLayout>
        <div style={{ position: 'relative' }}>
            <div
                style={{
                    position: 'absolute',
                    top: '205px',
                    left: '73px',
                    width: '1310px',
                    height: '530px',
                    backgroundColor: '#F8F8F8',
                    opacity: '0.5',
                    borderRadius: '32px',
                }}
            ></div>
            <Text style={{ fontSize: '70px', position: 'absolute', top: '60px', left: '78px', fontWeight: 700 }} c={theme.colors.blue[0]}>Profile</Text>
        </div>
        </MainLayout>
    );
};
export default Profile;
