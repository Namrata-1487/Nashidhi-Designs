import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const services = [
 { value: '3d', label: '3D Mechanical Modeling' },
 { value: 'animation', label: 'Animation' },
 { value: 'rendering', label: 'Rendering' }
];

const ServiceSelect = ({ value, onChange }) => (
 <FormControl variant="outlined" sx={{ minWidth: 220, background: 'rgba(20,30,50,0.85)', borderRadius: 2 }}>
  <InputLabel sx={{ color: '#1ec6ff' }}>Select Service</InputLabel>
  <Select
   value={value}
   onChange={onChange}
   label="Select Service"
   sx={{
    color: '#fff',
    '.MuiOutlinedInput-notchedOutline': { borderColor: '#1ec6ff' },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#1ec6ff' },
    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#1ec6ff' },
    '.MuiSvgIcon-root': { color: '#1ec6ff' },
   }}
  >
   {services.map(s => (
    <MenuItem key={s.value} value={s.value}>{s.label}</MenuItem>
   ))}
  </Select>
 </FormControl>
);

export default ServiceSelect;