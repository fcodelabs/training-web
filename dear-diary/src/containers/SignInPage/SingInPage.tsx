import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SignInCard from '../../components/SignInCard/SignInCard';

interface signInProps {
    setUser: React.Dispatch<React.SetStateAction<string>>;
}

export default function SignInPage ({ setUser }: signInProps) {
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
                <SignInCard setUser={setUser}/>
            </Box>
        </Container>
    );
}