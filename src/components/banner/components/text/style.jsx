import styled from "styled-components";
export const TextArea = styled.div`
    margin: 15px;
    width: 450px;
    .title{
        h1{
            font-size: 73px;
        }
    }
    .text{
        margin-top: -15px;
        small{
            
        }
    }
    .btn{
        margin-top: 55px;
        button{
            padding: 10px 15px;
            color: white;
            background-color: black;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            &:hover{
                background-color: white;
                color: black;
                border: 1px solid black ;

            }
        }
    }
`