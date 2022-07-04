import { Container } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField'

function SubmitForm() {
    return (
        <Container>
            <form noValidate autoComplete='off'>
                <TextField label="Submit New" />
            </form>
        </Container>

    )
}

export default SubmitForm