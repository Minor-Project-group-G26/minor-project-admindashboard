import React, { useState } from 'react';
import styled, { createGlobalStyle, css }  from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        height:100%;
    }
    body {
        background-image: url('bg2.jpg');
        background-repeat: no-repeat; 
        background-attachment: fixed;
        background-size: cover;
        font-family: 'Anton', sans-serif;
        height:100%;
        margin:0;
        color:#555;
    }
`;
const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin:10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;
const StyledFormWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 760px;
    padding: 0 40px;

`;
const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

    h2 {
        color: black;
    }
    label.Mfile {
        margin-top: 10px;
        margin-bottom:15px;
        font-size: 17px;
        position: relative;
        font-family: "Montserrat", sans-serif;
        color: white;
        height: 40px;
        border-radius: 5px;
        background-color: #c71585;
        display: flex;
    }

    .Labelstyle{
        width:100%;
        color:white;
        padding-top:10px;
        text-align:center;
        border-radius: 5px;
    }
  
`;

const Finput = styled.input.attrs({ type: 'file' })`
    display: none;
`

const StyledInput = styled.input`
    display:block;
    width: 100%;
    ${sharedStyles}

`;
const StyledButton = styled.button`
    display:block;
    background-color: #020024;
    font-size: 0.9rem;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing:border-box;

    color: ${props => (props.primary ? 'violet' : 'palevioletred')};
    border: ${props =>
    props.primary ? '2px solid #040447' : '2px solid palevioletred'};

&:hover {
    color: white;
    background-color: ${props =>
      props.primary ? '#040447' : 'violet'};
  }
`;
const StyledFieldset = styled.fieldset`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 20px 0;

    legend {
        padding: 0 10px;
    }
    label {
        padding-right: 20px;
    }
    input {
        margin-right: 10px;
    }

`;
const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 40px 0;

`;

export const myfunction = ()=>{
    var x = document.getElementById("myfile");
    var txt = "";
    if('files' in x){
        if(x.file.length === 0){
            txt = "Select"
        }
        else{
            for(var i=0; i<x.files.length; i++){
                txt +="<br> <strong>" + (i+1) + ".File </strong> <br>";
                var file = x.file[i];
                if('name' in file){
                    txt += "Name:" + file.name + "<br>";
                }
                if('size' in file){
                    txt += "Size:" + file.size + "bytes <br>";
                }
            }
        }
    }
    else{
        if(x.value === ""){
            txt += "Select One more";
        }
        else{
            txt += "The File Property is not supported in Browser";
            txt += "<br> The Path Of The Selected File:" + x.value;
        }
    }
    document.getElementById("demo").innerHTML = txt;
}


function AddMovie() {
    
    return (
        <>
        <GlobalStyle />
        <StyledFormWrapper>
            <StyledForm>
            <h2>Add New Movie</h2>
            <label htmlFor="moviename">Movie Name</label>
            <StyledInput type="text" name="moviename" />

            <label className="movieposter" htmlFor="movieposter">Movie Poster</label>
              
            <div>
            <Finput type="file" id="myfile" onChange={myfunction} accept="image/*" />
            <label id="demo" for="file" className="Mfile" >
                <div className="Labelstyle">
                Choose a Poster
                </div>
            </label>
            </div>
            
            
            <label className="movielink" htmlFor="movielink">Movie Link</label>
            <StyledInput type="text" name="movielink" />
            

            
            <label htmlFor="moviecategory">Movie Category</label>    
            <StyledFieldset>
                <legend>Choose From Here</legend>
                <label>
                <input type="checkbox" value="Action" name="category" />
                Action
                </label>
                <label>
                <input type="checkbox" value="Comedy" name="category" />
                Comedy
                </label>
                <label>
                <input type="checkbox" value="Horror" name="category" />
                Horror
                </label>
                <div>
                    
                </div>
            </StyledFieldset>
                <StyledError><p>Error message Here</p></StyledError>
                <StyledButton primary type="submit">Add Movie</StyledButton>       
        </StyledForm>
        </StyledFormWrapper>
        </>
    );
}

export default AddMovie;
