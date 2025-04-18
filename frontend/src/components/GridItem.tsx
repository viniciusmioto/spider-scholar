import React from 'react';
import { Grid } from '@mui/material';

// Define props interface for type safety
interface GridItemProps {
  children: React.ReactNode;
  xs?: number | boolean;
  md?: number | boolean;
  item?: boolean;
  [key: string]: any;
}

// Create a component that wraps Grid to avoid TypeScript errors
const GridItem: React.FC<GridItemProps> = (props) => {
  const { children, ...other } = props;
  return (
    <Grid {...other}>
      {children}
    </Grid>
  );
};

export default GridItem;
