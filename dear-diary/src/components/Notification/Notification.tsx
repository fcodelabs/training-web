import React, { useEffect } from 'react';
import { hideNotification } from '../../redux/notification/notificationSlice';
import { IconButton, Snackbar, SnackbarContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const StyledSnackbarContent = styled(SnackbarContent)`
    background-color: white !important;
    color: black !important;
    display: flex !important ;
    justify-content: space-between !important;
    align-items: center !important;
    width: 100% !important;

  .MuiSnackbarContent-message {
    padding: 0px 0px 0px 0px !important;
    width: 90% !important;}

  .MuiSnackbarContent-action {
    padding: 0px 0px 0px 0px !important;
  }

    @media screen and (max-width: 768px) {

        .MuiSnackbarContent-message {
            width: max-content !important;
        }
    }
`;

const StyledSnackbar = styled(Snackbar)`
    z-index: 9999 !important;
    position: fixed !important;
    min-width: 300px !important;
    max-width: 400px !important;
    padding: 0 !important;
    width: 100% !important;
    top: 120px !important;
    right: 20px!important;
    height: 30px !important;

    @media screen and (max-width: 400px) {
        min-width: 290px !important;
        width: 96% !important;
    }


`;

const StyledMessageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    `;

const StyledMessage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    `
const StyledText = styled.div`
    display: flex;
    margin-right: 8px;
    margin-left: 8px;
    flex-direction: row;
    font-weight: 550;
    color: rgba(75, 70, 92, 0.8);
    align-items: center;`

const StyledTime = styled.div`
    color: rgba(75, 70, 92, 0.6);
    display: flex;
    align-items: center;
    font-size: 11px;
    margin-right: -5px !important;
    margin-left: auto;
    
    @media screen and (max-width: 400px) {
        display: none !important;
    }`

const StyledCloseIcon = styled(CloseIcon)`
    color: rgba(75, 70, 92, 0.6);`


const StyledDonIcon = styled(DoneIcon)`
    color: rgba(40, 199, 111, 0.6)`

const StyledErrorIcon = styled(ErrorOutlineIcon)`
    color: red;`


const Notification: React.FC = () => {
    const dispatch = useAppDispatch();
    const { type, message, show, showtime, elapsedMinutes } = useAppSelector((state) => state.notification);

    useEffect(() => {
        let autoCloseTimeout: NodeJS.Timeout | null = null;

        if (!showtime) {
            autoCloseTimeout = setTimeout(() => {
                dispatch(hideNotification());
            }, 3000);
        }

        return () => {
            if (autoCloseTimeout) {
                clearTimeout(autoCloseTimeout);
            }
        };
    }, [showtime]);

    const handleCloseNotification = () => {
        dispatch(hideNotification());
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <StyledDonIcon />;
            case 'error':
                return <StyledErrorIcon />;
            default:
                return null;
        }
    };

    return (
        <StyledSnackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={show}
            autoHideDuration={null}
            onClose={handleCloseNotification}
        >
            <StyledSnackbarContent
                message={
                    <StyledMessageWrapper >
                        <StyledMessage >
                            {getIcon()}
                            <StyledText>{message}</StyledText>
                        </StyledMessage>
                        {showtime && (
                            <StyledTime>
                                {elapsedMinutes} min{elapsedMinutes !== 1 && 's'} ago
                            </StyledTime>
                        )}
                    </StyledMessageWrapper>
                }
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleCloseNotification}
                    >
                        <StyledCloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </StyledSnackbar>
    );
};

export default Notification;
