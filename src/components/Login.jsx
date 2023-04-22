import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
  gap: 10px;
`;
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.accent};
`;
const SubTitle = styled.h2`
  color: ${({ theme }) => theme.subheading};
  font-size: 25px;
  font-weight: bold;
`;
const Input = styled.input`
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
  background-color: #eeeeee;
  margin: 10px;
  width: 440px;
  height: 50px;
  color: ${({ theme }) => theme.text};
  font-size: 25px;
  font-weight: bold;
  transition: 0.3s;
  ::placeholder {
    color: ${({ theme }) => theme.subheading};
    font-size: 25px;
    font-weight: bold;
  }
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 20px;
  background-color: rgb(77, 107, 254);
  width: 500px;
  margin: 10px;
  padding: 20px 40px;
  color: white;
  font-size: 25px;
  font-weight: bold;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;

const SignPrompt = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.accent};
  font-size: 25px;
  font-weight: bold;
  transition: 0.3s;
  :hover {
    opacity: 0.7;
  }
`;
const Signin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);
    const navigate = useNavigate();


    return (
        <Container>
            <Wrapper>
                <Title>Budgetbuddy</Title>
                {!register ? (
                    <>
                        <SubTitle>Welcome Back. Sign in now.</SubTitle>
                        <Input
                            placeholder="Username"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button onClick={() => {
                            navigate("/")
                        }} >Sign In</Button>

                        <Button
                            style={{
                                backgroundColor: "white",
                                color: "black",
                                border: "0.5px solid lightgrey",
                            }}

                        >
                            Sign in with Google
                        </Button>
                    </>
                ) : (
                    ""
                )}
                {register ? (
                    <>
                        {" "}
                        <SubTitle>Easy Customs.</SubTitle>
                        <Input
                            placeholder="Enter a unique username"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button onClick={() => {
                            navigate("/")
                        }}>Sign Up</Button>
                    </>
                ) : (
                    ""
                )}
            </Wrapper>

            <SignPrompt
                onClick={() => setRegister(!register)}
                style={{ margin: "30px" }}
            >
                {register ? "Already have an account?" : "Sign up here!"}
            </SignPrompt>
        </Container>
    );
};

export default Signin;