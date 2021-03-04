import React from 'react'
import {Flex, Input, InputProps, FlexProps} from 'theme-ui'

const inputStyles = {
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
}

const DummyForm: React.FC<FlexProps> = (props) => {
    const {children, ...rest} = props
    return (
        <Flex sx={{
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
            flexDirection: "column"
        }} {...rest}>
            {children}
        </Flex>
    )
}

const FormInput: React.FC<InputProps> = (props) => {
    const {...rest} = props
    return (
        <Input sx={inputStyles} {...rest}/>
    )
}

export {DummyForm, FormInput};