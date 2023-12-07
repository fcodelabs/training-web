import React from 'react'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

interface TextAreaProps {
    minLines: number;
    placeholder: string;
  }
  

export default function CustomizeTextArea({minLines,placeholder}: TextAreaProps) {


    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        
        width: 320px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        fontSize: "10px",
        color: "#0092DD",
        background: white;
        border: 1px solid #DBDADE;
    
        &:focus {
            border: 2px solid #0092DD;
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );

  return (
    <Textarea
      minRows={minLines}
      aria-label="maximum height"
      placeholder={placeholder}
    />
  )
}
