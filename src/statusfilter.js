
import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { Grid, Typography } from '@material-ui/core';

const FilterStatus = ({ data, all_select_item, each_select_item }) => {
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'All') {
      all_select_item(selectedOption);
    } else {
      each_select_item(selectedOption);
    }
  };

  return (
    <Grid style={{ textAlign: 'center' }}>
      <Typography variant="h5" style={{  marginBottom: '20px' ,marginTop:"20px"}}>
        Select Filter Option
      </Typography>
      <Select
        style={{ width: '300px', backgroundColor: 'black', color: 'white' ,marginBottom: '40px' }}
        onChange={handleSelectChange}
      >
        <MenuItem value="All" onClick={() => all_select_item("All")}>
          All
        </MenuItem>
        {Array.isArray(data) ? (
          data.map((item) => (
            <MenuItem key={item.text} value={item.text} onClick={() => each_select_item(item.text)}>
              {item.text}
            </MenuItem>
          ))
        ) : (
          <MenuItem value="">No data available</MenuItem>
        )}
      </Select>
    </Grid>
  );
        }  

export default FilterStatus;