import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Title = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid container sx={{ color: 'white', alignItems: 'center' }}>
        <Grid item md={10} xs={12}>
          <h1>Home</h1>
        </Grid>
        <Grid
          item
          md={2}
          rowSpacing={0}
          sx={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.5)',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0 }}>You are here:</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Title;
