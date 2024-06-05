import {React, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Toggle from "./Toggle";


import sagrada_landing_image from "./sagrada_landing_image.png"
import sagrada_gallery from "./sagrada_gallery.png"
import sagrada_next_project from "./sagrada_next_project.png"



const Sagrada = () => {
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
            <DescriptionContainer>
                <img src={sagrada_landing_image} alt="Hercules" style={{width: "40vw"}}/>
                <div style={{display: "flex", flexDirection: "column", paddingTop: "50px", gap: "50px"}}>
                    <h1 style={{textTransform: "uppercase", lineHeight: "100px"}}>“Sagrada Família” </h1>
                    <p1>And finally, we wanted to get out of the digital space at least for a bit. The idea of mixing
                        analog and digital would turn this project to something real. These were our three pillars:
                        being local, using sense of touch and
                        a transition of digital to analog.
                    </p1>
                    <p1 style={{marginTop: "50px"}}> Digital Art,<br/>
                        Sketching,<br/>
                        Integrated Media<br/><br/>
                        2023
                    </p1>
                </div>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={sagrada_gallery} alt="Hercules" style={{width: "88vw", position: "relative", left: "7px"}}/>
            </GalleryContainer>
            <SeparatorContainer style={{paddingInline: "180px"}}>
                <h3 style={{textTransform: "uppercase"}}>
                    From a failed gift shop collab rose the world's 1st cafe to blend animation, fashion, and games. And
                    I didn't just stop at a rebrandingI I transformed it into a secret jungle in the heart of the city
                    where you can enjoy
                    your coffee & leave all your worries behind.
                </h3>
            </SeparatorContainer>
            <GalleryContainer>
                <Toggle redirectUrl="/#landing-section"/>
            </GalleryContainer>
            <GalleryContainer style={{paddingTop: "0"}}>
                <img src={sagrada_next_project} alt="Hercules" style={{width: "30vw"}}/>
            </GalleryContainer>
            <Footer/>
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
    color: #171819;
    background-color: #fff;
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

const Exp3Container = styled.div`
    overflow: hidden;
    text-align: start;
    display: grid;
    grid-template-columns: 1fr 1.4fr 0.6fr;
    grid-gap: 100px;
    justify-content: start;
    align-items: start;
    padding: 90px 90px 0 90px;
`;

const Exp4Container = styled.div`
    overflow: hidden;
    text-align: start;
    display: grid;
    grid-template-columns: 1fr 1.2fr 1fr 0.8fr;
    grid-gap: 75px;
    justify-content: start;
    align-items: start;
    padding: 90px;
`;

const GalExp4Container = styled.div`
    overflow: hidden;
    text-align: start;
    display: grid;
    grid-template-columns: 0.7fr 0.75fr 1fr 0.8fr;
    grid-column-gap: 90px;
    grid-row-gap: 30px;
    justify-content: center;
    align-items: start;
    padding: 90px;
    
`;

const NiceList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 25px;
    gap: 50px;
`;

const OrangeItem = styled.li`
    position: relative;
    padding-left: 20px;
    margin-bottom: 30px;
    &::before {
        content: '•';
        position: absolute;
        font-size: 50px;
        left: -20px;
        top: -18px;
        color: #FF5858;
    }
`;

const PinkItem = styled.li`
    position: relative;
    padding-left: 20px;
    margin-bottom: 30px;
    &::before {
        content: '•';
        position: absolute;
        font-size: 50px;
        left: -20px;
        top: -18px;
        color: #F857A6;
    }
`;

const BrightPinkItem = styled.li`
    position: relative;
    padding-left: 20px;
    margin-bottom: 30px;
    &::before {
        content: '•';
        position: absolute;
        font-size: 50px;
        left: -20px;
        top: -18px;
        color: #FFC8E3;
    }
`;

const BlackItem = styled.li`
    position: relative;
    padding-left: 20px;
    margin-bottom: 30px;
    &::before {
        content: '•';
        position: absolute;
        font-size: 50px;
        left: -20px;
        top: -18px;
        color: #171819;
    }
`;

const GalleryContainer= styled.div`
    max-height: 100vh;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 90px;
    padding-right: 90px;
    padding-top: 90px;
    padding-bottom: 90px;
    color: #fff;
    z-index: 0;
`;

const GalleryContainerWhite= styled.div`
    max-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 90px;
    padding-right: 90px;
    padding-top: 90px;
    //padding-bottom: 90px;
    background-color: #fff;
    z-index: 0;
`;

const MarkBrightPink = styled.mark`
background-color: #FFC8E3;
color: #171819;
font-weight: 400;
line-height: 1.5;
`;

const MarkPink = styled.mark`
background-color: #F857A6;
color: #171819;
font-weight: 400;
line-height: 1.5;
`;

const MarkOrange = styled.mark`
background-color: #FF5858;
color: #171819;
font-weight: 400;
line-height: 1.5;    
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

const PinkContainer = styled.div`
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
    background-color: #F857A6;
    color: #171819;
    z-index: 0;
`;


const DescriptionContainer = styled.div`
    //max-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    padding-left: 90px;
    padding-right: 90px;
    padding-top: 90px;
    padding-bottom: 90px;
    gap: 120px;
    color: #171819;
    z-index: 0;
`;

const DescriptionContainerWhite = styled.div`
    max-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    padding-left: 90px;
    padding-right: 90px;
    padding-top: 90px;
    padding-bottom: 90px;
    gap: 90px;
    background-color: #fff;
    color: #171819;
    z-index: 0;
`;

const MarkNone = styled.mark`
    text-decoration: underline;
    color: #171819;
    background-color: rgba(0, 0, 0, 0);
`;

const SeparatorContainer = styled.div`
    overflow: hidden;
    text-align: start;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: end;
    padding: 90px;
    background-color: #FF5858;
    color: #171819;
    gap: 90px;
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


const Styledvideo = styled.video`
    position: absolute;
    top: -75px;
    left: -0px;
`;

const StyledLink = styled(Link)`
    color: #171819;
    text-decoration: none;
    position: relative;
    margin-top: 10px;
    padding-bottom: 10px;
`;

export default Sagrada;