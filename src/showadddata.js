
import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



const Show_add_data = ({ data, delete_handler, edit_handler, selectedOption }) => {
  const filteredData = selectedOption === 'All' ? data : data.filter((item) => item.text === selectedOption);


  const dataArray = Array.isArray(filteredData) ? filteredData : [];

  return (
    <>
      {dataArray.map((item) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          key={item.id}
          container
          alignItems="center"
          style={{
            margin: 'auto',
            textAlign: 'center',
            display: 'flex',
            height: '90%',
            width: '78%',
            marginTop: '5px',
           
          }}
        >
          <Typography
            style={{
              width: '330px',
              height: '50px',
              border: '2px solid',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {item.text}
          </Typography>

          <div style={{ marginLeft: 'auto' }}>
            <Button
              style={{
                height: '55px',
                width: '60px',
                background: 'black',
                color: 'white',
                marginLeft: '2px',
              }}
            >
              <DeleteIcon
                style={{ height: '30px', width: '30px' }}
                onClick={() => delete_handler(item.id)}
              />
            </Button>

            <Button
              style={{
                height: '52px',
                width: '55px',
                background: 'black',
                color: 'white',
                marginLeft: '2px',
              }}
            >
              <EditIcon
                style={{ height: '30px', width: '30px' }}
                onClick={() => edit_handler(item.id)}
              />
            </Button>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default Show_add_data;