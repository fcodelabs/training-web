import { TextField,Button,CardHeader } from "@mui/material";
import { toast, ToastContainer } from 'react-toastify';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Icon from "./Icons.png";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

interface FormToAddNewDiaryProps {
    onCloseOverlay: () => void;
    onSubmit: (formData:{title:string, description:string}) => void;
  }

function FormToAddNewDiary({ onCloseOverlay, onSubmit }: FormToAddNewDiaryProps){
        const [formData, setFormData] = useState({
          title: '',
          description: '',
        });
      
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };
      
        const handleSubmit = () => {
            if (!formData.title || !formData.description){
                toast.error("Title and Description are required");
            }
            else{
          onSubmit(formData);
            }
          // Clear form data
          setFormData({
            title: '',
            description: '',
          });
      
        };
      
    
    return (
        
        <div className="form-div"
        style={{
            width: "400px",
            height: "100%",
            position: "relative",
            right: "0px",
            background: "#FFFFFF"

        }}
        >
            <div 
            className="card"
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "26px",
                padding: "24px",
                alignItems: "center",
            }}
            >
            <div
                style={{
                    width: "100%",
                }}
                >
            <CardHeader
                title={
                    <div 
                        className="heading-div"
                        style={{
                            fontFamily: "public sans, sans-serif",
                            fontSize: "18px",
                            fontWeight: 500,
                            fontStyle: "normal",
                            lineHeight: "24px",
                        }}  
                        >

                        Submit New
                    </div>
                }
                action={
                    <IconButton aria-label="close">
                        <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            borderRadius: "6px",
                            background: "var(--light-opacity-color-gray-gray-16, rgba(75, 70, 92, 0.16))",
                        }}  
                        >
                            <Avatar 
                                src={Icon} 
                                alt="icon" 
                                style={{
                                    width: "24px",
                                    height: "24px",
                                    padding: "7px",
                                }}
                                />

                        </div>
                    
                    </IconButton>
                }
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                style={{
                    padding: "0px",
                    gap: "6px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"space-between"
                }}
    />
            </div>

            <form
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100%",
            
            }}>

                <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "4px",
                    flexDirection: "column",
                }}
                >
                    <div
                    style={{
                        alignSelf:"stretch",
                        color: "var(--light-typography-color-heading-text, #4B465C)",
                        fontFamily: "Public Sans, sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        fontStyle: "normal",
                        lineHeight: "normal",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                    }}
                    >
                    Title
                    </div>
                    <TextField 
                    placeholder="Title"
                    style={{
                        width: "100%",
                        

                    }}
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                </div>
            <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "4px",
                flexDirection: "column",
            }}
            >
                <div
                style={{
                    alignSelf:"stretch",
                    color: "var(--light-typography-color-heading-text, #4B465C)",
                    fontFamily: "Public Sans, sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    fontStyle: "normal",
                    lineHeight: "normal",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                }}
                >
                    Description
                </div>
            <TextField
                placeholder="Write your diary here"
                style={{
                    width: "100%",
                }}
                multiline
                rows={6} 
                variant="outlined"
                name="description"
                value={formData.description}
                onChange={handleChange}
                />
            </div>
        </form>
        <div className="buttons"
        style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "16px",
            alignSelf: "stretch",
        }}
        >
                <Button
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit}
                    style={{
                        textTransform: "none",
                        borderRadius: "6px",
                        background: "#0092DD",
                        padding: "10px 20px",

                    }}
                >
                    <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        justifyContent: "center",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontFamily: "Public Sans, sans-serif",
                        fontSize: "15px",
                        fontWeight: 500,
                        fontStyle: "normal",
                        lineHeight: "18px",
                        letterSpacing: "0.43px",
                        
                    }}
                    >
                    Submit
                    </div>
                    
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    className="cancelButton"
                    onClick={onCloseOverlay}
                    style={{
                        textTransform: "none",
                        borderRadius: "6px",
                        padding: "10px 20px",
                        opacity: 0.65,
                        background: "var(--light-opacity-color-secondary-secondary-16, rgba(168, 170, 174, 0.16))",

                    }}
                ><div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    justifyContent: "center",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontFamily: "Public Sans, sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    fontStyle: "normal",
                    lineHeight: "18px",
                    letterSpacing: "0.43px",
                    color: "var(--light-solid-color-secondary-secondary-500-base, #A8AAAE)",
                    
                }}
                >
                Cancel
                </div>
                </Button>

                <ToastContainer
                autoClose={false}
                />
        </div>
        </div>
        </div>

        
    );
}

export default FormToAddNewDiary;