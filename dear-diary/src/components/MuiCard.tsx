import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Stack,
    TextField
} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { generateRandomNickname } from "../utils/signin";


export const MuiCard = () => {
    const [nickname, setNickname] = useState('');
    const [nicknameError, setNicknameError] = useState(false);

    const handleContinue = () => {
        if (nickname.trim() === '') {
            setNicknameError(true);
        } else {
            setNicknameError(false);
            // Navigate to home
        }
    }

    return (
        <Box sx={{
            backgroundImage: 'linear-gradient(-45deg, #039BE5 0%, #039BE5 33%, #00BCD4 100%)',
            backgroundAttachment: 'fixed',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: 'auto'
            }} >
                <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <Card component={Box} sx={{ borderRadius: 3, padding: 2 }} >
                        <CardContent>
                            <Typography
                                variant='subtitle1'
                                align='left' >Dear Diary</Typography>
                            <Typography
                                variant='h4'
                                color='primary.light'>Sign In</Typography>
                        </CardContent>
                        <CardActions>
                            <Stack
                                spacing={4}
                                direction='column'
                                component={Box}
                                alignItems='center'
                                paddingLeft={10}
                                paddingRight={10} >
                                <Stack
                                    spacing={4}
                                    direction='row'
                                    alignItems='center'>
                                    <TextField
                                        label='Your Nickname'
                                        sx={{ width: 400, fontSize: 10 }}
                                        required value={nickname}
                                        onChange={(e) => setNickname(e.target.value)}
                                        error={nicknameError}
                                        helperText={nicknameError && "Required"}
                                    />
                                    <Button
                                        variant='contained'
                                        size='small'
                                        sx={{ borderRadius: 25, backgroundColor: "primary.light" }}
                                        onClick={() => setNickname(generateRandomNickname())}> Random</Button>
                                </Stack>
                                <Button
                                    variant='contained'
                                    sx={{ borderRadius: 25, backgroundColor: "primary.light" }}
                                    endIcon={<ArrowForwardIcon />}
                                    onClick={handleContinue}>Continue</Button>
                            </Stack>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}