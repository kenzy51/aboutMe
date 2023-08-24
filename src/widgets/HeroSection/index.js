import { theme } from '@/styles/theme';
import React from 'react';
import styled from 'styled-components';
import code from '../../../public/code.png'
import Image from 'next/image';
const Hero = () => {
    const array = [
        {
            link: 'https://prj-front.vercel.app/',
            name: 'Project 1'
        },
        {
            link: 'https://elevensproject.vercel.app/',
            name: 'Project 2'
        },
        {
            link: 'https://dataxway-front.vercel.app/',
            name: 'Project 3'
        }
    ]
    return (
        <div>
            <Main>

                <Container>
                    <Line/>
            <Title>
<img src="https://icon-library.com/images/code-icon-png/code-icon-png-0.jpg" alt="" width={60} height={60} />
            Hi world
<img src="https://icon-library.com/images/code-icon-png/code-icon-png-0.jpg" alt="" width={60} height={60} />

                </Title>
                    <br />
                    My name is Kanat...and i am a Full-Stack engineer
                    <br />
                    <br />
                    Let's see my projects
               <List>
               {array.map((item)=>(
                    <BlockItem href={item.link} target='_blank'>
                        {item.name}

                    </BlockItem>

                ))}
               </List>
                </Container>
            </Main>
        </div>
    );
};


export default Hero;

const Title = styled.div`
display:flex;
align-items:center;
${theme.mqMax('lg')} {
    margin-top:100px;
  }

`
const List = styled.div`
display:flex;
justify-content :space-between;
${theme.mqMax('lg')} {
    flex-direction:column;
    gap:2rem;
  }

`
const BlockItem = styled.a`
border: 1px grey solid;
padding:20px;
border-radius:10px;
transition-duration:.2s;
min-width:300px;
max-height:250px;
&:hover{
    border:1px white solid;
    
}
`
const Line = styled.div`
height:600px;
width:1px;
background-color:white;
position:absolute;
left:120px;
${theme.mqMax('lg')} {
    display:none;
  }
`
const Main = styled.h1`
    color:white;
    font-family: 'JetBrains Mono', monospace; 

`
const Container = styled.div`
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: ${theme.containers.main};
  margin: 0 auto;
  width: 100%;
  ${theme.mqMax('xl')} {
    padding: 0 35px;
  }
  ${theme.mqMax('lg')} {
    padding: 0 25px;
  }
`;