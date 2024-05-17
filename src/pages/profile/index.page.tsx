import React from 'react';
import {
  Container,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  useMantineTheme,
  Group,
  Divider,
  Avatar,
} from "@mantine/core";
import { NextPage } from 'next';

const ProfilePage: NextPage = () => {
  const theme = useMantineTheme();

  return (
    <Container>
      <Title style={{ fontSize: 32 }} c={theme.colors.blue[0]}>Profile</Title>

      <Paper padding="lg" style={{ marginBottom: 20 }}>
        <Group position="center" spacing="lg" style={{ marginBottom: 20 }}>
          <Avatar src="/profile-photo.jpg" radius="lg" size="lg" />
          <Button variant="light">Change Photo</Button>
        </Group>
        <Divider />
        <Text component="h2" style={{ marginBottom: 10 }}>Login Information</Text>
        <TextInput label="Login" />
        <TextInput label="Password" type="password" />
      </Paper>

      <Paper padding="lg" style={{ marginBottom: 20 }}>
        <Text component="h2" style={{ marginBottom: 10 }}>Contacts</Text>
        <TextInput label="E-mail" type="email" />
        <TextInput label="Contact number" type="tel" />
      </Paper>

      <Paper padding="lg" style={{ marginBottom: 20 }}>
        <Text component="h2" style={{ marginBottom: 10 }}>Company Info</Text>
        <TextInput label="Company name" />
        <TextInput label="Company address" />
        <TextInput label="Additional contact information" />
      </Paper>

      <Button
        style={{ backgroundColor: theme.colors.blue[0], color: '#fff', marginTop: 15 }}
        component="a"
        href="/edit-profile"
      >
        Edit Info
      </Button>
    </Container>
  );
};

export default ProfilePage;
