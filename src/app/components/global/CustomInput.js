import React from 'react';
import { Box, TextField, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const CustomInput = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  touched,
  errors,
  sx,
  type = "text", 
}) => {
  return (
    <Box sx={{ marginBottom: 3 }}>
      <FormControl fullWidth error={touched && Boolean(errors)} sx={{ marginBottom: 0}}>
        <InputLabel htmlFor={name} sx={{ color: '#gray' }}>{label}</InputLabel>
        <Input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          disableUnderline
          sx={{
            borderBottom: '2px solid #e0e0e0',
            '&:hover': { borderBottom: '2px solid rgb(40, 136, 160)' },
            '&.Mui-focused': { borderBottom: '2px solid #2888a0' },
            padding: '0px 10px',
            fontSize: '16px',
            transition: 'all 0.3s ease',
            ...sx,
          }}
        />
        {touched && errors && (
          <FormHelperText sx={{ color: 'red', fontSize: '12px' }}>
            {errors}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default CustomInput;
