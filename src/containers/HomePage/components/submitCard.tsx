import * as React from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import close from '../../../assets/close.svg';

const SubmitCard: React.FC = () => {
    const handleSubmit = () => {
        // Handle form submission logic here
        // You can access form values using state or refs
    };

    const onClose = () => {
        // Handle close logic here
    };

    return (
        <div style={{ width: '400px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', boxSizing: 'border-box', position: 'relative', height: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{
                    color: '#4B465C',
                    fontFamily: 'public sans',
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',

                }}>Submit New</span>
                <IconButton style={{ backgroundColor: '#4B465C29', width: '24px', height: '24px', borderRadius: '6px', padding: '7px' }} color="inherit" onClick={onClose}>
                    <img src={close} alt="Close Icon" />
                </IconButton>
            </div>
            <form>
                <div style={{ marginBottom: '20px' }}>
                    <span style={{
                        marginBottom: '8px', marginRight: '330px',
                        fontFamily: 'public sans',
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontSize: '13px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                        color: '#4B465C'
                    }}>Title</span>
                    <TextField style={{marginTop: '10px'}} label="Placeholder" variant="outlined" fullWidth size='small' />
                </div>
                <div style={{ marginBottom: '20px', }}>
                    <span style={{
                        marginBottom: '8px', marginRight: '330px',
                        fontFamily: 'public sans',
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontSize: '13px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                        color: '#4B465C'
                    }}>Description</span>
                    <TextField style={{marginTop: '10px'}} label="Placeholder" variant="outlined" multiline rows={13} fullWidth />
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Button style={{
                        width: '94px', height: '38px', padding: '10px 20px', gap: '12px', borderRadius: '6px',
                        fontFamily: 'public sans',
                        fontSize: '15px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '18px',
                        color: '#ffffff',
                        backgroundColor: '#0092DD',
                        letterSpacing: '0.43px',
                        textTransform: 'none',
                        
                    }}
                        variant="contained" disableElevation onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button style={{
                        width: '94px', height: '38px', padding: '10px 20px', gap: '12px', borderRadius: '6px',
                        fontFamily: 'public sans',
                        fontSize: '15px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '18px',
                        color: '#A8AAAE',
                        backgroundColor: 'rgba(168, 170, 174, 0.16)',
                        letterSpacing: '0.43px',
                        textTransform: 'none',
                    }} variant="contained" disableElevation onClick={onClose}>
                        Cancel
                    </Button>
                </div>
            </form >
        </div >
    );
};

export default SubmitCard;
