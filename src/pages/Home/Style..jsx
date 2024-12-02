import styled from 'styled-components'

export const AddButton = styled.button `
background-color: #6cf000;
color: black;
height: 35px;
padding: 5px 10px;
cursor: pointer;
border: none;
border-radius: 5px;
margin-left: 5px;

&:hover{
    opacity: 0.8;
}
`

export const Container = styled.div `
background: #b752ff;
padding: 20px;
border-radius: 10px;


h1{
    color: wheat;
}
 input{
    height: 35px;
    border: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 10px;

 }

`

export const Product = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
background: #fff;
margin-top: 10px;
border-radius: 15px;
padding: 12px;
font-size: 19px;

p{
    text-transform: capitalize;
    font-weight: bold;
}

`

export const TrashButton = styled.button`
background: transparent;
border: none;
cursor: pointer;
font-size: 25px;
`
