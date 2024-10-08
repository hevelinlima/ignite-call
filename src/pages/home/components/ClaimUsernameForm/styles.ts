import { Box, Button, styled, Text } from "@ignite-ui/react";

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  padding: '$4',
  marginTop: '$4',

  '@media (max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },

  [`> ${Button}`]: {
    borderRadius: '8px'
  }
});

export const FormAnnotation = styled('div', {
  marginTop: '$2',

  [`> ${Text}`]: {
    color: '$gray400',
  }
})