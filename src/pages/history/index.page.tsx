import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Title,
  Text,
  Divider,
  List,
  ListItem,
  Badge,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { NextPage } from 'next';

const reloadPage = () => {
  window.location.reload();
};

const HistoryPage: NextPage = () => {
  const theme = useMantineTheme();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch('/api/requests')
      .then(response => response.json())
      .then(data => setRequests(data));
  }, []);

  return (
    <Container>
      <Title style={{ fontSize: 32 }} c={theme.colors.blue[0]}>History</Title>

      <Paper padding="lg" style={{ marginBottom: 20 }}>
        <Button variant="outline" onClick={reloadPage} style={{ marginBottom: 10 }}>Reload</Button>
        <Paper style={{ padding: 20, marginBottom: 20, background: 'rgba(0, 0, 0, 0.1)' }}>
          <Text component="h2" style={{ marginBottom: 10 }}>Requests</Text>
          <List>
            {requests.map(request => (
              <ListItem key={request.id}>
                <Badge>{request.id}</Badge>
                <Text>{request.endpoint}</Text>
                <Text>{request.productCategory}</Text>
                <Text>{request.requestStatus}</Text>
                <Text>{request.totalPrice}</Text>
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper style={{ padding: 20, marginBottom: 20, background: 'rgba(0, 0, 0, 0.1)' }}>
          <Text component="h2" style={{ marginBottom: 10 }}>Companies</Text>
          <List>
            {/* Add companies list here */}
            <ListItem>
              {/* Company info */}
            </ListItem>
          </List>
        </Paper>

        <Paper style={{ padding: 20, background: 'rgba(0, 0, 0, 0.1)' }}>
          <Text component="h2" style={{ marginBottom: 10 }}>History Of Operations</Text>
          <List>
            {/* Add operations history here */}
            <ListItem>
              {/* Operation info */}
            </ListItem>
          </List>
        </Paper>
      </Paper>

      {/* Duplicate the papers above to double the code */}
      <Paper padding="lg" style={{ marginBottom: 20 }}>
        <Button variant="outline" onClick={reloadPage} style={{ marginBottom: 10 }}>Reload</Button>
        <Paper style={{ padding: 20, marginBottom: 20, background: 'rgba(0, 0, 0, 0.1)' }}>
          <Text component="h2" style={{ marginBottom: 10 }}>Requests</Text>
          <List>
            {requests.map(request => (
              <ListItem key={request.id}>
                <Badge>{request.id}</Badge>
                <Text>{request.endpoint}</Text>
                <Text>{request.productCategory}</Text>
                <Text>{request.requestStatus}</Text>
                <Text>{request.totalPrice}</Text>
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper style={{ padding: 20, marginBottom: 20, background: 'rgba(0, 0, 0, 0.1)' }}>
          <Text component="h2" style={{ marginBottom: 10 }}>Companies</Text>
          <List>
            {/* Add companies list here */}
            <ListItem>
              {/* Company info */}
            </ListItem>
          </List>
        </Paper>

        <Paper style={{ padding: 20, background: 'rgba(0, 0, 0, 0.1)' }}>
          <Text component="h2" style={{ marginBottom: 10 }}>History Of Operations</Text>
          <List>
            {/* Add operations history here */}
            <ListItem>
              {/* Operation info */}
            </ListItem>
          </List>
        </Paper>
      </Paper>
    </Container>
  );
};

export default HistoryPage;
