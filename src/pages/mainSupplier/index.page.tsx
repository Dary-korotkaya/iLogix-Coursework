import React, { useState } from 'react';
import {
  Container,
  Paper,
  Title,
  Text,
  Button,
  useMantineTheme,
  Badge,
  Divider,
  List,
  ListItem,
  Loader,
  Group,
  TextInput,
  TextArea,
  Checkbox,
  Modal,
  Image,
  Grid,
  Col,
  Card,
  Avatar
} from "@mantine/core";
import { NextPage } from 'next';
import Link from 'next/link';

const MainSupplierPage: NextPage = () => {
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const currentRequests = [
    { id: 123456, endpoint: '/api/request/123456', productCategory: 'Electronics', requestStatus: 'In Process', totalPrice: 500 },
    { id: 789012, endpoint: '/api/request/789012', productCategory: 'Clothing', requestStatus: 'On the Way', totalPrice: 300 },
  ];

  const requestHistory = [
    { id: 456789, endpoint: '/api/request/456789', productCategory: 'Furniture', requestStatus: 'Delivered', totalPrice: 800 },
    { id: 345678, endpoint: '/api/request/345678', productCategory: 'Books', requestStatus: 'Paid', totalPrice: 200 },
  ];

  const handleSendReminder = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Reminder sent successfully!');
    }, 2000);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Title style={{ fontSize: 32 }} c={theme.colors.blue[0]}>Main Supplier Page</Title>

      <Paper padding="lg" style={{ marginBottom: 20 }}>
        <Text component="h2" style={{ marginBottom: 10 }}>Profile</Text>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
          <Avatar src="/profile-photo.jpg" radius="lg" size="lg" />
          <Text>John Doe</Text>
        </div>
        <Link href="/profile">
          <a>Go to profile</a>
        </Link>
      </Paper>

      <Paper padding="lg" style={{ marginBottom: 20 }}>
        <Text component="h2" style={{ marginBottom: 10 }}>Current Requests</Text>
        <List>
          {currentRequests.map(request => (
            <ListItem key={request.id}>
              <Badge>{request.id}</Badge>
              <Text>{request.endpoint}</Text>
              <Text>{request.productCategory}</Text>
              <Text>{request.requestStatus}</Text>
              <Text>{request.totalPrice}</Text>
            </ListItem>
          ))}
        </List>
        <Button
          style={{ marginTop: 15 }}
          onClick={handleSendReminder}
          disabled={loading}
          variant={loading ? 'outline' : 'filled'}
          color={loading ? 'gray' : 'blue'}
        >
          {loading ? <Loader size={24} /> : 'Send Reminder'}
        </Button>
      </Paper>

      <Paper padding="lg" style={{ marginBottom: 20 }}>
        <Text component="h2" style={{ marginBottom: 10 }}>Request History</Text>
        <List>
          {requestHistory.map(request => (
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

      <Button
        component="a"
        href="/create-product"
        style={{ backgroundColor: theme.colors.blue[0], color: '#fff', marginTop: 15 }}
      >
        Create a new product
      </Button>

      <Modal opened={showModal} onClose={handleCloseModal} title="Product Details">
        <Image src="/product-image.jpg" alt="Product Image" />
        <Text style={{ marginTop: 10 }}>Product Name: Product ABC</Text>
        <Text>Category: Electronics</Text>
        <Text>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text>Price: $500</Text>
        <Checkbox style={{ marginTop: 10 }}>I agree to the terms and conditions</Checkbox>
        <Button style={{ marginTop: 10 }}>Add to Cart</Button>
      </Modal>
    </Container>
  );
};

export default MainSupplierPage;
