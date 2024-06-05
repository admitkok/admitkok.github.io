import {React, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

import MASHA_SREDINA from "./MASHA_SREDINA_LANDING_SIGN.png";
import masha from "./masha .png";
import Sagrada from "./sagrada.png";
import project1 from "./PORTFOLIO/project1.png";
import project2 from "./PORTFOLIO/project2.png";
import project3 from "./PORTFOLIO/project3.png";
import project4 from "./PORTFOLIO/project4.png";
import project5 from "./PORTFOLIO/project5.png";
import project7 from "./PORTFOLIO/project7.png";
import project8 from "./PORTFOLIO/project8.png";
import project9 from "./PORTFOLIO/project9.png";
import project12 from "./PORTFOLIO/project12.png";
import Torus from "./Torus.png";
import Pasted_Graphic_1 from "./Pasted_Graphic_1.png";
import Pasted_Graphic_2 from "./Pasted_Graphic_2.png";
import Pasted_Graphic_3 from "./art_frames.png";
import Pasted_Graphic_5 from "./Pasted_Graphic_5.png";
import Pasted_Graphic_6 from "./Pasted_Graphic_6.png";






const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <PageContainer>
            <Header/>
            <div id="landing-section"></div>
            <LandingContainer >
                <img src={masha} width='32%' alt={'pic'}
                     style={{position: 'absolute', top: "8%", left: "37%", zIndex: "10"}}></img>
                    <img src={MASHA_SREDINA} width='100%' alt={'pic'} style={{zIndex: "0"}}></img>
                    <div style={{
                        position: "absolute",
                        top: "60%",
                        left: "7%",
                        color: "#fff",
                        fontSize: '35px',
                        zIndex: "1"
                    }}>
                    Hello! I'm a Visual Designer <br/>currently based in the vibrant <br/> streets of Barcelona, Spain.
                </div>
                <img src={Sagrada} width='100%' alt={'pic'} style={{position: "relative", left:"-43%",zIndex: "0"}}></img>
            </LandingContainer>
            <SeparatorContainer id='projects'>
                <Title>PROJECTS</Title>
            </SeparatorContainer>
            <HomeContainer>
                <LinkContainer>
                    <img src={project1} height='450px' alt={'pic'} style={{zIndex: "1"}}></img>
                </LinkContainer>
                <LinkContainer to={'/arfe#landing-section'}>
                    <img src={project5} height='450px' alt={'pic'} style={{zIndex: "1"}}></img>
                </LinkContainer>
                <LinkContainer to={'/MADE#landing-section'}>
                    <img src={project3} height='450px' alt={'pic'} style={{zIndex: "1"}}></img>
                </LinkContainer>
                <LinkContainer>
                    <img src={project2} height='450px' alt={'pic'} style={{zIndex: "1"}}></img>
                </LinkContainer>
                <LinkContainer>
                    <img src={project8} height='450px' alt={'pic'} style={{zIndex: "1"}}></img>
                </LinkContainer>
                <LinkContainer to={'/sloth#landing-section'}>
                    <img src={project12} height='450px' alt={'pic'} style={{zIndex: "1"}}></img>
                </LinkContainer>
                <LinkContainer to={'sagrada-familia#landing-section'}>
                    <img src={project7} height='450px' alt={'pic'} style={{zIndex: "1"}}></img>
                </LinkContainer>
                <LinkContainer>
                    <img src={project4} height='450px' alt={'pic'} style={{zIndex: "1"}}></img>
                </LinkContainer>
                <LinkContainer to={'hercules#landing-section'}>
                    <img src={project9} height='450px' alt={'pic'} style={{zIndex: "1"}}></img>
                </LinkContainer>
            </HomeContainer>
            <DescriptionContainer id='about'>
                <img src={Torus} height='650px' alt={'pic'} style={{zIndex: "1"}}></img>
                <div style={{maxWidth: "530px", gap: "20px", display: 'flex', flexDirection: 'column', textAlign:"start", alignItems:"start", marginTop: "85px"}}>
                    <div style={{fontSize: 80, fontWeight: 400, lineHeight: "68px"}}>SOMETHING ABOUT ME</div>
                    <div style={{fontSize: 25, fontWeight: 400, lineHeight: "32.5px"}}>I'm Masha Sredina, a visual designer with a colorful past.
                        From my artistic roots in Moscow <br/> to my current adventures in Barcelona.
                        From <br/> <MarkBrightPink>fine arts</MarkBrightPink> to <MarkOrange>teaching</MarkOrange> them and now, conquering the design world here in Barcelona.
                          As a <MarkPink>Graphic</MarkPink>, <MarkPink>UI</MarkPink> and <MarkPink>Branding</MarkPink> designer, I'm not just crafting visuals,
                        I'm weaving stories and emotions into every pixel. </div>
                </div>
            </DescriptionContainer>
            <DescriptionContainerPink>
                <div style={{
                    maxWidth: "443px",
                    gap: "20px",
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: "start",
                    alignItems: "start",
                    marginTop: "85px",
                    // marginRight: "120px",
                }}>
                    <div style={{fontSize: 100, fontWeight: 400, lineHeight: "68px"}}>ARFÉ</div>
                    <div style={{fontSize: 35, fontWeight: 400, lineHeight: "32.5px", display: "flex"}}>
                        ARFÉ is a startup designed <br/> to break down the financial barriers
                        that prevent young artists from showcasing their talent.
                    </div>
                </div>
                <img src={Pasted_Graphic_1} height='100%' alt={'pic'} style={{zIndex: "1", position: 'relative', left:"90px"}}></img>
            </DescriptionContainerPink>
            <DescriptionContainer style={{marginTop: '90px'}}>
                <div style={{
                    maxWidth: "624px",
                    gap: "20px",
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: "start",
                    alignItems: "start",
                    marginTop: "15px",
                }}>
                    <div style={{fontSize: 80, fontWeight: 400, lineHeight: "68px"}}>FROM CANVAS TO DIGITAL</div>
                    <div style={{fontSize: 25, fontWeight: 400, lineHeight: "32.5px"}}>
                        Art isn't just what I do – it's who I am.
                        Whether I'm wielding a <MarkOrange>digital stylus or splashing paint on canvas</MarkOrange>,
                        creativity flows through my veins. And hey, I'm not just about creating art,
                        I’m also about sharing that passion with the world.
                        From <MarkPink>teaching art</MarkPink> to preschoolers and adults to online teaching,
                        I'm on a mission to spark imaginations everywhere I go.
                    </div>
                </div>
                <img src={Pasted_Graphic_3} height='500' alt={'pic'} style={{zIndex: "1",  position: "relative", left:"10px"}}></img>
            </DescriptionContainer>
            <DescriptionContainer style={{paddingBottom:"190px"}}>
                <img src={Pasted_Graphic_2} height='524px' alt={'pic'} style={{zIndex: "1"}}></img>
                <div style={{
                    maxWidth: "520px",
                    gap: "20px",
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: "start",
                    alignItems: "start",
                    marginTop: "50px"
                }}>
                    <div style={{fontSize: 80, fontWeight: 400, lineHeight: "68px"}}>LET'S MAKE MAGIC</div>
                    <div style={{fontSize: 25, fontWeight: 400, lineHeight: "32.5px"}}>
                        <MarkOrange>Design isn't just about making things pretty;</MarkOrange><br/>
                        <MarkPink>it's about crafting experiences that leave a lasting impact.</MarkPink> That's where I come in.  With <br/> an eye for detail and a knack for storytelling,
                        <br/>I specialize in creating experiences that resonate with people on a deeper level.
                        <br/>Let's bring your vision to life together!
                    </div>
                </div>
            </DescriptionContainer>
            <FooterHome>
                <img src={Pasted_Graphic_5} width='1200px' alt={'pic'} style={{zIndex: "-1"}}></img>
                <img src={Pasted_Graphic_6} width='770px' alt={'pic'} style={{position: "absolute", top: "5897px", left:"390px", zIndex: "-1"}}></img>
                <div style={{width:"1240px", top: "350px", display: "flex", flexDirection: "row",alignItems: "center", justifyContent: "stretch", gap:"471px", fontSize:"20px"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>© 2024 All Rights Reserved</div>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "stretch", gap:"30px", fontSize: "35px"}}>
                        <StyledLink style={{textDecoration: "underline"}} to={'https://www.instagram.com/mdsredina/'}>INSTAGRAM</StyledLink>
                        <StyledLink style={{textDecoration: "underline"}}>EMAIL</StyledLink>
                        <StyledLink style={{textDecoration: "underline"}} to={'https://www.linkedin.com/in/masha-sredina/'}>LINKEDIN</StyledLink>
                    </div>
                </div>
            </FooterHome>

        </PageContainer>

    )
}


const PageContainer = styled.div`
    display: flex;
    //overflow: hidden;
    width: 100vw;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    color: #fff;
    background-color: #171819;
`;

const LandingContainer = styled.div`
    scale: 1;
    background: linear-gradient(to right, #F857A6, #FF5858);
    height: 100%;
    text-align: start;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    justify-content: start;
    align-items: start;
    color: #fff
`;

const HomeContainer = styled.div`
    height: 100%;
    text-align: start;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding-inline: 95px;
    background-color: #171819;
    color: #fff;
    z-index: 0;
`;


const DescriptionContainer = styled.div`
    max-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 90px;
    padding-right: 90px;
    padding-top: 90px;
    padding-bottom: 90px;
    gap: 90px;
    color: #fff;
    z-index: 0;
`;

const DescriptionContainerPink = styled.div`
    height: 850px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    padding-left: 90px;
    padding-right: 90px;
    padding-top: 90px;
    padding-bottom: 90px;
    gap: 50px;
    color: #171819;
    background-color: #F857A6;
    z-index: 0;
`;

const MarkBrightPink = styled.mark`
    background-color: #FFC8E3;
    color: #171819;
    font-weight: 400;
`;

const MarkPink = styled.mark`
    background-color: #F857A6;
    color: #171819;
    font-weight: 400;
`;

const MarkOrange = styled.mark`
    background-color: #FF5858;
    color: #171819;
    font-weight: 400;
`;

const SeparatorContainer = styled.div`
    overflow: hidden;
    height: 300px;
    text-align: start;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding-left: 90px;
    background-color: #171819;
    color: #fff;
    z-index: 0;
`;

const FooterHome = styled.div`
    overflow: hidden;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    padding-top: 90px;
    padding-inline: 90px;
    padding-bottom: 50px;
    gap: 90px;
    background-color: #fff;
    color: #171819;
    z-index: 0;
`;

const Title = styled.div`
    font-size: 100px;
    font-weight: 400;
    color: #fff;
    //text-shadow: 1px 1px 5px rgba(0,0,0,1);
    z-index: 1;
`;


const SubTitle = styled.div`
    font-size: 32px;
    font-weight: 200;
    padding: 0px 10px;
    color: #fff;
    text-shadow: 1px 1px 5px rgba(0,0,0,0.5);
    z-index: 1;
`;


const LinkContainer = styled(Link)`
    text-align: start;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    //color: #fff;
    //border: 1px solid rgba(10, 215, 10, 0);
    transition: all 0.5s ease-in-out;
    &:hover{
        cursor: pointer;
        scale: 1.1;
        //border: 1px solid rgba(10, 215, 10, 1);
        //background-color: rgba(255, 255, 255, 0.1);
        transition: all 0.5s ease-in-out;
    }
`;

const StyledLink = styled(Link)`
    color: #171819;
    text-decoration: none;
    position: relative;
    margin-top: 10px;
    padding-bottom: 10px;
`;


export default Home;