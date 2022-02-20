import React from 'react'
import { Box } from '@mui/material'

type ExampleProps = {}

const useSx = (props: ExampleProps) => ({
  root: {
    gridRow: 3
  }
})

const Example: React.FC<ExampleProps> = (props) => {
  const { children } = props
  const styles = useSx(props)

  return (
    <Box sx={styles.root}>
      example
      {children}
    </Box>
  )
}

export { Example }
