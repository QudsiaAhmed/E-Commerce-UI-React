import React, { useState, useRef } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

const inputFieldStyle = {
  marginRight: '8px',
};

const headerCellStyle = {
  fontWeight: 'bold',
  fontSize: '1.1rem',
};

const containerStyle = {
  maxWidth: '75.2rem',
  marginBottom: '16px',
  marginTop: '2rem',
  backgroundColor: 'rgba(0, 0, 0, 0)',
};

const rootStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '16px',
  padding: '8px',
};

const tableStyle = {
  minWidth: '750px',
};

const rows = [
  createData('Ali', 'T-Shirt', 1000, 3, '10-08-2023'),
  createData('Sarah', 'Mugs', 2000, 2, '09-08-2023'),
  createData('Qudsia Ahmed', 'T-Shirt', 1500, 4, '10-08-2023'),
  createData('Abdul Hannan', 'Watch', 15000, 1, '01-08-2023'),
  createData('Abdul Mannan', 'Lamp', 3000, 2, '07-08-2023'),
  createData('Aisha Ahmed', 'LED', 40000, 1, '05-08-2023'),
];

export default function CustomTable() {
  const [searchText, setSearchText] = useState({});
  const focusedInput = useRef(null);

  const handleSearchChange = (key) => (event) => {
    const updatedSearchText = {
      ...searchText,
      [key]: event.target.value,
    };
    setSearchText(updatedSearchText);
  };

  const handleInputFocus = (key) => () => {
    if (focusedInput.current !== key) {
      setSearchText((prevSearchText) => ({
        ...prevSearchText,
        [focusedInput.current]: '',
        [key]: '',
      }));
    }
    focusedInput.current = key;
  };

  const filteredRows = rows.filter((row) =>
    Object.keys(searchText).every(
      (key) =>
        searchText[key] === '' ||
        row[key].toString().toLowerCase().includes(searchText[key].toLowerCase())
    )
  );

  return (
    <div style={rootStyle}>
      <div>
        <TextField
          variant="outlined"
          size="small"
          label="Username"
          value={searchText.username || ''}
          onChange={handleSearchChange('username')}
          onFocus={handleInputFocus('username')}
          style={inputFieldStyle}
        />
        <TextField
          variant="outlined"
          size="small"
          label="Product Name"
          value={searchText.productName || ''}
          onChange={handleSearchChange('productName')}
          onFocus={handleInputFocus('productName')}
          style={inputFieldStyle}
        />
        <TextField
          variant="outlined"
          size="small"
          label="Price"
          value={searchText.price || ''}
          onChange={handleSearchChange('price')}
          onFocus={handleInputFocus('price')}
          style={inputFieldStyle}
        />
        <TextField
          variant="outlined"
          size="small"
          label="Quantity"
          value={searchText.quantity || ''}
          onChange={handleSearchChange('quantity')}
          onFocus={handleInputFocus('quantity')}
          style={inputFieldStyle}
        />
        <TextField
          variant="outlined"
          size="small"
          label="Date"
          value={searchText.date || ''}
          onChange={handleSearchChange('date')}
          onFocus={handleInputFocus('date')}
          style={inputFieldStyle}
        />
      </div>
      <TableContainer component={Paper} style={containerStyle}>
        <Table style={tableStyle} aria-label="custom table">
          <TableHead>
            <TableRow>
              <TableCell style={headerCellStyle}>Username</TableCell>
              <TableCell style={headerCellStyle}>Product Name</TableCell>
              <TableCell style={headerCellStyle}>Price</TableCell>
              <TableCell style={headerCellStyle}>Quantity</TableCell>
              <TableCell style={headerCellStyle}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.username}>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.productName}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function createData(username, productName, price, quantity, date) {
  return { username, productName, price, quantity, date };
}
