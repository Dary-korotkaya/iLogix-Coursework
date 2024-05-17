import React, { useState } from 'react';
import {
  Container,
  Paper,
  Title,
  TextInput,
  Text,
  Button,
  Badge,
  Group,
  Checkbox,
  Divider,
  List,
  ListItem,
  SegmentedControl,
  Col,
  Row,
  useMantineTheme
} from "@mantine/core";
import { NextPage } from 'next';

const NewRequestPage: NextPage = () => {
  const theme = useMantineTheme();
  const [formValues, setFormValues] = useState({
    customer: '',
    deliveryAddress: '',
    deliveryDate: '',
    category: '',
  });
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', quantity: 2, totalPrice: 100 },
    { id: 2, name: 'Product 2', quantity: 1, totalPrice: 50 },
    { id: 3, name: 'Product 3', quantity: 3, totalPrice: 150 },
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleChangeQuantity = (productId: number, quantity: number) => {
    setProducts(products.map(product => product.id === productId ? { ...product, quantity } : product));
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleSendRequest = () => {
    console.log('Sending request...');
    console.log('Form values:', formValues);
    console.log('Products:', products);
  };

  return (
    <Container>
      <Title style={{ fontSize: 32 }} c={theme.colors.blue[0]}>New request</Title>
      <Paper padding="lg" style={{ marginBottom: 20 }}>
        <Text component="h2" style={{ marginBottom: 10 }}>Request details</Text>
        <Divider style={{ margin: '0 0 15px' }} />
        <Group spacing="xs" style={{ marginBottom: 15 }}>
          <TextInput
            required
            name="customer"
            label="Customer"
            placeholder="Enter customer name"
            value={formValues.customer}
            onChange={handleInputChange}
          />
          <TextInput
            required
            name="deliveryAddress"
            label="Delivery address"
            placeholder="Enter delivery address"
            value={formValues.deliveryAddress}
            onChange={handleInputChange}
          />
          <TextInput
            required
            name="deliveryDate"
            label="Delivery date"
            type="date"
            value={formValues.deliveryDate}
            onChange={handleInputChange}
          />
          <TextInput
            required
            name="category"
            label="Category"
            placeholder="Enter category"
            value={formValues.category}
            onChange={handleInputChange}
          />
        </Group>
      </Paper>
      <Paper padding="lg">
        <Text component="h2" style={{ marginBottom: 10 }}>Products</Text>
        <Divider style={{ margin: '0 0 15px' }} />
        <List>
          {products.map((product, index) => (
            <ListItem key={product.id}>
              <Badge>{index + 1}</Badge>
              <Text>{product.name}</Text>
              <TextInput
                required
                type="number"
                value={String(product.quantity)}
                onChange={(event) => handleChangeQuantity(product.id, parseInt(event.target.value))}
                style={{ width: 60 }}
              />
              <Text>{product.totalPrice}</Text>
              <Button
                variant="outline"
                color="red"
                onClick={() => handleDeleteProduct(product.id)}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
        <Divider style={{ margin: '15px 0' }} />
        <Group spacing="xs">
          <Text>Total quantity: {products.reduce((total, product) => total + product.quantity, 0)}</Text>
          <Text>Total price: {products.reduce((total, product) => total + product.totalPrice, 0)}</Text>
        </Group>
        <Divider style={{ margin: '15px 0' }} />
        <Button
          fullWidth
          onClick={handleSendRequest}
          style={{ backgroundColor: theme.colors.blue[0], color: '#fff', marginTop: 15 }}
        >
          Send request
        </Button>
      </Paper>
    </Container>
  );
};

export default NewRequestPage;
