import React from 'react'
import {Flex, Input} from 'theme-ui'

const styles = {
  form: {
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
    flexDirection: "column",
  },
  input: {
    fontWeight: "medium",
    lineHeight: "normal",
    color: "gray.600",
    backgroundColor: "white",
    borderRadius: 0,
    border: "1px solid #E2E8F0",
    sm: {
      fontSize: "0.75rem",
      px: 2,
      py: 1,
    },
    md: {
      fontSize: "0.875rem",
      px: 3,
      py: 2,
    },
  },
}

export function DummyForm(props) {
  const {size, variant, children, ...rest} = props
  return (
    <Flex sx={styles.form} {...rest}>
      {children}
    </Flex>
  )
}

export function FormInput(props){
  const {size, variant, children, ...rest} = props
  return (
    <Input sx={styles.input} {...rest}/>
  )
}