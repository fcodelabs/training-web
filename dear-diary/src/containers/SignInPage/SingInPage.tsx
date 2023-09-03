import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SignInCard from '../../components/SignInCard/SignInCard';

export default function SignInPage() {
    return (
        <Container component="main" maxWidth="xs" sx={{minWidth:'100vw', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#42a5f5'}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <SignInCard />
            </Box>
        </Container>
    );
}