import React from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';



function Host() {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    return (
        <div className='formContainerHostPage'>
        <form>
            <div className='inputsContainerHostPage'>
            <TextField label="Name" fullWidth />
            <TextField label="Description" multiline rows={4} fullWidth />
            <TextField label="Hours" fullWidth />
            <TextField label="Guests" type="number" fullWidth />
            <TextField label="Number" type="tel" fullWidth />
            <TextField label="Price" type="number" fullWidth />
            <TextField label="Address" fullWidth />
            
            {/* Drag and drop area */}
            <Typography>Picture Upload</Typography>
            <div className='squareDragAndDropHostPage'><h5>Drag and drop picture here</h5></div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>click <span style={{color:'blue', textDecoration:'underline',cursor:'pointer'}}>here</span> to select files</p>
            </div>
            
            <ul>
                {acceptedFiles.map(file => (
                    <li key={file.path}> {file.path} </li>
                ))}
            </ul>
            
            {/* Button to submit */}
            <Button variant="contained" color="primary">Submit</Button>
            </div>
        </form>
        </div>
    );
}

export default Host;
