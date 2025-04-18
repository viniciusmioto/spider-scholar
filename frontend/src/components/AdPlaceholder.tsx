import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface AdPlaceholderProps {
  height?: number;
  width?: string;
  label?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ 
  height = 100, 
  width = '100%',
  label = 'Advertisement'
}) => {
  return (
    <Paper 
      elevation={0}
      sx={{
        height,
        width,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        border: '1px dashed #ccc',
        borderRadius: 2,
        mb: 2,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
        Google AdSense Placeholder
      </Typography>
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 5, 
          right: 5, 
          backgroundColor: 'primary.light',
          color: 'white',
          px: 1,
          py: 0.5,
          borderRadius: 1,
          fontSize: '10px'
        }}
      >
        REPLACE WITH YOUR ADSENSE CODE
      </Box>
    </Paper>
  );
};

export default AdPlaceholder;
