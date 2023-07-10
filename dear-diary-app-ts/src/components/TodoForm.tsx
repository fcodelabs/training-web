import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




function TodoForm() {

    // title name set to state 
    const [input, setInput] = useState('');
    // console.log("my input value : ", input);

    // title description set to state
    const [desc, setDescr] = useState('');
    // console.log("This is my Description : ", desc)


    // todo form design 
    return (
        <div>
            <Grid container spacing={0} >


                <Grid item xs={10} className='wite_grid'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 2, width: '96%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic"
                            label="Todo Name"
                            variant="outlined"
                            value={input}
                            onChange={e => setInput(e.target.value)}

                            sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: "50px",
                      
                                  legend: {
                                    marginLeft: "30px"
                                  }
                                },
                                "& .MuiAutocomplete-inputRoot": {
                                  paddingLeft: "20px !important",
                                  borderRadius: "50px"
                                },
                                "& .MuiInputLabel-outlined": {
                                  paddingLeft: "20px"
                                },
                                "& .MuiInputLabel-shrink": {
                                  marginLeft: "20px",
                                  paddingLeft: "10px",
                                  paddingRight: 0,
                                }
                              }}
                        />




                    </Box>


                    
                </Grid>
                <Grid item xs={2} sx={{ paddingTop: 3 }} className='left_grid'>
                    {/* when click submit the button printing in console  */}
                    
                    <Button disabled={!input} type="submit"  variant="contained" className='Form_sumbitbtn' onClick={() => {
                        // createToda(input, desc);
                        console.log("The todo title name : ",input);
                        console.log("The todo description : ",desc);
                        setInput('');
                        setDescr('');
                    }}>Submit</Button>
                </Grid>


            </Grid>

            <Grid> 
            <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 2, width: '90%' },
                             
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                            value={desc}
                        onChange={c => setDescr(c.target.value)}
                        
                        />




                    </Box>
            </Grid>

        </div>
    )
}

export default TodoForm

