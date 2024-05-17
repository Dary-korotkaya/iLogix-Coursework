import React, { useState } from 'react';
import {
  Container,
  TextInput,
  FileInput,
  Textarea,
  Button,
  Title,
  useMantineTheme
} from "@mantine/core";
import { NextPage } from 'next';

const CreateProductPage: NextPage = () => {
  const theme = useMantineTheme();
  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    description: '',
    photo: null,
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    price: '',
    description: '',
    photo: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleFileChange = (files: FileList | null) => {
    setFormValues({ ...formValues, photo: files ? files[0] : null });
    setFormErrors({ ...formErrors, photo: '' });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ваша логика обработки отправки формы здесь
    console.log(formValues);
  };

  const isFormValid = () => {
    return Object.values(formValues).every(value => value !== '') && !Object.values(formErrors).some(error => error !== '');
  };

  return (
    <Container>
      <Title style={{ fontSize: 32 }} c={theme.colors.blue[0]}>Create New Product</Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          required
          name="name"
          label="Product Name"
          placeholder="Enter product name"
          value={formValues.name}
          onChange={handleInputChange}
          error={formErrors.name}
          style={{ marginBottom: 15 }}
        />
        <TextInput
          required
          type="number"
          min="0"
          name="price"
          label="Price"
          placeholder="Enter product price"
          value={formValues.price}
          onChange={handleInputChange}
          error={formErrors.price}
          style={{ marginBottom: 15 }}
        />
        <Textarea
          required
          name="description"
          label="Description"
          placeholder="Enter product description"
          value={formValues.description}
          onChange={handleInputChange}
          error={formErrors.description}
          style={{ marginBottom: 15 }}
        />
        <FileInput
          required
          name="photo"
          label="Product Photo"
          placeholder="Select product photo"
          onChange={handleFileChange}
          error={formErrors.photo}
          style={{ marginBottom: 15 }}
        />
        <Button
          type="submit"
          disabled={!isFormValid()}
          style={{ backgroundColor: theme.colors.blue[0], color: '#fff', marginTop: 15 }}
        >
          Create Product
        </Button>
      </form>
    </Container>
  );
};

export default CreateProductPage;
