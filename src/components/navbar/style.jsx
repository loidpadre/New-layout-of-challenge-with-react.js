import styled from "styled-components"
export const NavbarArea = styled.div`
    margin: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logoMenu{
        display: flex;
        align-items: center;
        justify-content: center;
        .logo{
            margin-right: 50px;
            margin-top: -5px;
            cursor: pointer;
        }
        .menu{
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                border: none;
                margin-right: 20px;
                background-color: white;
                cursor: pointer;
                opacity: 0.8;
                &:hover{
                opacity: 1; 
                }
            }
            .feature{
                display: block;
            }
            
            .listfeature{
                position: relative;
                top: 50px;
                right: 100px;
            }
            
            
        }
    }
    .loginRegister{
        margin-right: 5px;
        .login{
            margin-right: 10px;
            border: none;
            cursor: pointer;
            background-color: white;
            opacity: 0.8;
            &:hover{
                opacity: 1; 
            }
        }
        .register{
            background-color: white;
            border: 1px solid black;
            border-radius: 5px;
            padding: 5px 8px;
            cursor: pointer;
            opacity: 0.8;
            &:hover{
                opacity: 1; 
            }
        }
        
    }

`