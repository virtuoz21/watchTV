import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Rating } from '@mui/material';
import './singleItemTabs.css'

const BoxStyle = {
  p: 3, 
  overflowY: 'scroll', 
  WebkitOverflowScrolling: 'touch', 
  maxHeight: '300px', 
  '&::-webkit-scrollbar': { display: 'none' }
};

function CustomTabPanel({ children, value, index, ...other }) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={BoxStyle}>
          <div>
            {children}
            </div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

   function SingleItemTabs({
    summary, 
    series,
    rating
   }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex', justifyContent:'center', marginTop:'50px',backgroundColor:'black'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
        sx={{'& .MuiTab-textColorPrimary.Mui-selected': {color: '#D12E27'},
        '& .MuiTab-textColorPrimary': {color: 'white'},
        '& .MuiTabs-indicator': {backgroundColor: '#D12E27'},
      }}>
          <Tab className='label' label="Description" {...a11yProps(0)} />
          <Tab className='label' label="Series" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel style={{backgroundColor:'black'}} value={value} index={0}>
      <div
              dangerouslySetInnerHTML={{ __html: summary }}
              style={{
                color: "white",
                fontSize:'1.1rem',
                textAlign:'justify',
              }}
            />
      </CustomTabPanel>
      <CustomTabPanel style={{backgroundColor:'black'}} value={value} index={1}>
        <table style={{width:'100%', marginTop:'-20px'}}>
            <thead>
                <tr
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "25px",
                    backgroundColor: "black",
                    height: "3.5rem",
                  }}
                >
                  <th style={{ textAlign: "left", paddingLeft: '15px' }}>Episode</th>
                  <th style={{ textAlign: "center" }}>Airdate</th>
                  <th style={{ textAlign: "center" }}>Raiting</th>
                </tr>
              </thead>
              <tbody>
                {series.map((series) => (
                  <tr
                    key={series.id}
                    style={{
                      margin: "1rem",
                      color:'white',
                      fontWeight:'400'
                    }}
                  >
                    <td
                      style={{
                        margin: "1rem",
                        backgroundColor: "#313131",
                        height: "2rem",
                        paddingLeft: '15px'
                      }}
                    >
                      {series.name} (Season {series.season}, Episode
                      {series.number})
                      </td>
                    <td
                      style={{
                        margin: "1rem",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      {series.airdate}
                    </td>
                    <td
                      style={{
                        margin: "1rem",
                        backgroundColor: "#313131",
                        textAlign: "center",
                      }}
                    >
                      <Rating
                        name={rating-`${series.id}`}
                        value={series.rating.average}
                        max={10}
                        size="small"
                        readOnly
                        style={{ color: "red" }}
                      />
                      {series.rating.average}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
       </CustomTabPanel>
    </Box>
  );
}

export default SingleItemTabs;

