import React from 'react';
import { Container, Paper, Title, Text, Button, useMantineTheme, Table, Group, Image, Badge } from "@mantine/core";
import { useRouter } from 'next/router';
import { Line } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MainSupplierPage = () => {
  const theme = useMantineTheme();
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  const historyRequests = [
    { id: '123456', endpoint: '/api/request/123456', productCategory: 'Electronics', requestStatus: 'Done', totalPrice: 500 },
    { id: '789012', endpoint: '/api/request/789012', productCategory: 'Clothing', requestStatus: 'Done', totalPrice: 300 },
  ];

  const currentRequests = [
    { id: '345678', endpoint: '/api/request/345678', productCategory: 'Furniture', requestStatus: 'In Process', totalPrice: 800 },
    { id: '901234', endpoint: '/api/request/901234', productCategory: 'Books', requestStatus: 'On the Way', totalPrice: 200 },
  ];

  const requestsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Requests',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const budgetData = {
    labels: ['Allocated Budget', 'Expenditures', 'Remaining Funds'],
    datasets: [
      {
        label: 'Budget Overview',
        data: [100000, 75000, 25000],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const storeLocations = [
    { id: 1, name: 'Store A', position: [53.9, 27.5667], address: 'Address 1' },
    { id: 2, name: 'Store B', position: [53.9333, 27.55], address: 'Address 2' },
    { id: 3, name: 'Store C', position: [53.95, 27.5833], address: 'Address 3' },
  ];

  return (
    <Container>
      <Title style={{ fontSize: 32 }} c={theme.colors.blue[0]}>Main</Title>

      <Paper padding="lg" style={{ marginBottom: 20 }}>
        <Paper style={{ padding: 20, marginBottom: 20, background: 'rgba(0, 0, 0, 0.1)' }}>
          <Text component="h2" style={{ marginBottom: 10 }}>Profile</Text>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <Image src="/profile-photo.jpg" alt="Profile" width={50} height={50} radius={50} style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 18 }}>John Doe</Text>
          </div>
          <Link href="/profile">
            <Button variant="outline" style={{ width: 200 }}>View Profile</Button>
          </Link>
        </Paper>

        <Paper style={{ padding: 20, marginBottom: 20, background: 'rgba(0, 0, 0, 0.1)' }}>
          <Text component="h2" style={{ marginBottom: 10 }}>Requests</Text>

          <Text component="h3" style={{ marginBottom: 10 }}>History of Requests</Text>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Endpoint</th>
                <th>Product Category</th>
                <th>Request Status</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {historyRequests.map(request => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.endpoint}</td>
                  <td>{request.productCategory}</td>
                  <td>{request.requestStatus}</td>
                  <td>{request.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Text component="h3" style={{ marginBottom: 10, marginTop: 20 }}>Current Requests</Text>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Endpoint</th>
                <th>Product Category</th>
                <th>Request Status</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {currentRequests.map(request => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.endpoint}</td>
                  <td>{request.productCategory}</td>
                  <td>{request.requestStatus}</td>
                  <td>{request.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
            <Button style={{ width: 200, backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '8px' }} onClick={() => handleRedirect('/new-request')}>
              New Request
            </Button>
            <Button style={{ width: 200, backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '8px' }} onClick={() => handleRedirect('/request-analysis')}>
              Requests Analysis
            </Button>
          </div>
        </Paper>
      </Paper>

      <Paper padding="lg" style={{ marginBottom: 20 }}>
        <Text component="h2" style={{ marginBottom: 10 }}>Analysis</Text>

        <Paper style={{ padding: 20, marginBottom: 20, background: 'rgba(0, 0, 0, 0.1)' }}>
          <Text component="h3" style={{ marginBottom: 10 }}>Requests Analysis</Text>
          <Line data={requestsData} />
          <Table style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Number of Requests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Electronics</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Clothing</td>
                <td>30</td>
              </tr>
            </tbody>
          </Table>
        </Paper>

        <Paper style={{ padding: 20, marginBottom: 20, background: 'rgba(0, 0, 0, 0.1)' }}>
          <Text component="h3" style={{ marginBottom: 10 }}>Finance Analysis</Text>
          <Table>
            <thead>
              <tr>
                <th>Allocated Budget</th>
                <th>Expenditures</th>
                <th>Remaining Funds</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$100,000</td>
                <td>$75,000</td>
                <td>$25,000</td>
              </tr>
            </tbody>
          </Table>
        </Paper>

        <Paper style={{ padding: 20, marginBottom: 20, background: 'rgba(0, 0, 0, 0.1)' }}>
          <Text component="h3" style={{ marginBottom: 10 }}>Supplier Analysis</Text>
          <Table>
            <thead>
              <tr>
                <th>Supplier</th>
                <th>Quality</th>
                <th>Delivery Time</th>
                <th>Pricing</th>
                <th>Customer Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Supplier A</td>
                <td>4.5</td>
                <td>4.0</td>
                <td>3.5</td>
                <td>4.0</td>
              </tr>
              <tr>
                <td>Supplier B</td>
                <td>4.0</td>
                <td>3.5</td>
                <td>4.5</td>
                <td>4.5</td>
              </tr>
            </tbody>
          </Table>
        </Paper>
      </Paper>

      <Paper padding="lg" style={{ marginBottom: 20 }}>
        <Text
