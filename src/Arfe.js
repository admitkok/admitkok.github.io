import {React, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Toggle from "./Toggle";


import arfe_landing_image from "./arfe_landing_image.png";
import arfe_phones from "./arfe_phones.png";
import arfe_problem from "./arfe_problem.png";
import arfe_solution from "./arfe_solution.png";
import arfe_mission from "./arfe_mission.png";
import arfe_vision from "./arfe_vision.png";
import arfe_tagline from "./arfe_tagline.png";
import arfe_interior_1 from "./arfe_interior_1.png";
import arfe_interior_2 from "./arfe_interior_2.png";
import arfe_interior_3 from "./arfe_interior_3.png";
import arfe_arframe_gallery from "./arfe_arframe_gallery.png";
import arfe_arframe_phone_1 from "./arfe_arframe_phone_1.png";
import arfe_arframe_phone_2 from "./arfe_arframe_phone_2.png";
import arfe_app_1 from "./arfe_app_1.png";
import arfe_app_2 from "./arfe_app_2.png";
import arfe_app_3 from "./arfe_app_3.png";
import arfe_app_4 from "./arfe_app_4.png";
import arfe_app_5 from "./arfe_app_5.png";
import arfe_app_gallery from "./arfe_app_gallery.png";
import arfe_sticker_gallery_1 from "./arfe_sticker_gallery_1.png";
import arfe_sticker_gallery_2 from "./arfe_sticker_gallery_2.png";
import arfe_qr from "./arfe_qr.png";
import arfe_final_gallery from "./arfe_final_gallery.png";
import arfe_next_project from "./arfe_next_project.png";



const Arfe = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return(
        <PageContainer>
            <Header/>
            <div id="landing-section"></div>
            <img src={arfe_landing_image} alt="Sloth" style={{width: "100%"}}/>
            <Exp3Container>
                <h1>“ARFÉ”</h1>
                <div style={{paddingTop: "10px"}}>
                    <h2>STARTUP</h2>
                    <h3 style={{textTransform: "uppercase"}}>“ARFÉ” building a brand with a soul from the ground up.</h3>
                </div>
                <p style={{paddingTop: "20px"}}>Brand strategy,<br/>
                    Art Direction,<br/>
                    Concepting,<br/>
                    Branding,<br/>
                    Visual design.<br/><br/>
                    September 2023</p>
            </Exp3Container>
            <Exp4Container>
                <div style={{width: "0.5fr"}}>
                </div>
                <div>
                </div>
                <div style={{gap: 0}}>
                    <h3 style={{color: "#F857A6"}}>My Role</h3>
                    <ul style={{fontSize: "35px", textTransform: "uppercase", position: "relative", left: "-40px", top: "-30px"}}>
                        <li>CEO</li>
                        <li>Brand, Product & UI Designer</li>
                        <li>Art Director</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{color: "#F857A6"}}>Time</h3>
                    <h3>6 MONTHS</h3>
                </div>
            </Exp4Container>
            <PinkContainer style={{paddingInline: "280px", flexDirection: "column", gap: "30px"}}>
                <h3 style={{textTransform: "uppercase"}}> ARFÉ is a groundbreaking startup that speaks to the common challenge faced by young, gifted artists: The financial barriers that stand in the way of showcasing their talents. </h3>
                <p1>At the heart of our solution lies a welcoming space – a vibrant café infused with artistic energy. Here, artists are offered the opportunity to exhibit their creations free of charge, facilitated by an innovative voting system. Our overarching mission is to cultivate a supportive and inspiring community that fosters creativity, bolsters confidence, and encourages collaboration. Picture a realm where the aroma of freshly brewed coffee harmonises with an array of artistic expressions, creating an atmosphere where artists can truly flourish.</p1>
            </PinkContainer>
            <GalleryContainer>
                <img src={arfe_phones} alt="ARFÉ Phones" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer style={{paddingBottom: 0}}>
                <h4 style={{width: "20vw"}}>PROBLEM</h4>
                <h3 style={{textTransform: "uppercase", width: "35vw", position: "relative", left:"-200px"}}>Young talented artists <MarkPink>can’t afford</MarkPink> to run their own <MarkBrightPink>exhibitions.</MarkBrightPink></h3>
            </DescriptionContainer>
            <GalleryContainer style={{paddingTop: 0}}>
                <img src={arfe_problem} alt="ARFÉ Problem" style={{width: "30%", position: 'relative', left: "-250px"}}/>
            </GalleryContainer>
            <DescriptionContainer style={{paddingBottom: 0}}>
                <h4 style={{width: "20vw"}}>SOLUTION</h4>
                <h3 style={{textTransform: "uppercase", width: "40vw", position: "relative", left:"-135px"}}>
                    A space where artists can <MarkBrightPink>display</MarkBrightPink> their work <MarkPink>for FREE</MarkPink> through a voting system.
                </h3>
            </DescriptionContainer>
            <GalleryContainer style={{padding: 0, height: "50vh"}}>
                <img src={arfe_solution} alt="ARFÉ Solution" style={{width: "30%", position: 'relative', left: "475px", top: "-70px"}}/>
            </GalleryContainer>
            <SeparatorContainer>
                <h4>BRAND <br/>EVOLUTION</h4>
                <h3 style={{textTransform: "uppercase"}}>
                    Mission, Vision, Values
                </h3>
            </SeparatorContainer>
            <DescriptionContainer style={{paddingBottom: 0}}>
                <h4>MISSION</h4>
                <h3 style={{textTransform: "uppercase"}}>
                    Our mission is to support people in the creative realm through coffee houses, in order to shape a society of <MarkPink>creative</MarkPink>, <MarkOrange>confident</MarkOrange> and <MarkBrightPink>collaborative</MarkBrightPink> individuals.
                </h3>
            </DescriptionContainer>
            <GalleryContainer style={{padding: 0}}>
                <img src={arfe_mission} alt="ARFÉ Mission" style={{width: "30%", position: "relative", left: "40px"}}/>
            </GalleryContainer>
            <DescriptionContainer style={{paddingBottom: 0}}>
                <h4>VISION</h4>
                <h3 style={{textTransform: "uppercase"}}>
                    We aim to provide an energized, supportive and inspiring environment to reach an appreciation for art of all kinds.
                </h3>
            </DescriptionContainer>
            <GalleryContainer style={{padding: 0}}>
                <img src={arfe_vision} alt="ARFÉ Vision" style={{width: "56%", position: "relative", left: "170px"}}/>
            </GalleryContainer>
            <SeparatorContainer>
                <h4>BRAND <br/>EVOLUTION</h4>
                <h3 style={{textTransform: "uppercase"}}>
                    Slogan & Tagline
                </h3>
            </SeparatorContainer>
            <DescriptionContainer>
                <h4>SLOGAN</h4>
                <h4 style={{textTransform: "uppercase", fontWeight: 500}}>
                    ARFÉ - A SPACE <br/> FOR YOUR TALENT.
                </h4>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4>TAGLINE</h4>
                <div style={{display: "flex", flexDirection: "row", position: "relative", justifyContent: "end", padding: 0}}>
                    <h4 style={{textTransform: "uppercase", fontWeight: 500}}>
                        COFFEE. <br/>
                        CREATE. <br/>
                        REPEAT. <br/>
                    </h4>
                    <img src={arfe_tagline} alt="ARFÉ Tagline" style={{width: "47.5%", position: "relative", left: "30px", top: "-50px"}}/>
                </div>
            </DescriptionContainer>
            <SeparatorContainer>
                <h4 style={{width:"30vw"}}>INTERIOR<br/>DESIGN</h4>
                <h3 style={{textTransform: "uppercase"}}>
                    INSPIRATION & 3D RENDERS
                </h3>
            </SeparatorContainer>
            <GalleryContainer>
                <img src={arfe_interior_1} alt="ARFÉ Interior 1" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer>
                <div style={{width: "110vw"}}>
                </div>
                <p1>We designed the space to be a blank canvas for the art. It is important for us to give it and art gallery feel first, and coffee shop second. We want to make the space very open and free-flow, to make it multifunctional for all types of visitors.</p1>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={arfe_interior_2} alt="ARFÉ Interior 2" style={{width: "100%"}}/>
            </GalleryContainer>
            <GalleryContainer>
                <img src={arfe_interior_3} alt="ARFÉ Interior 3" style={{width: "100%"}}/>
            </GalleryContainer>
            <SeparatorContainer style={{alignItems: "center"}}>
                <h4 style={{width:"80vw"}}>ARFRAME</h4>
                <h3 style={{textTransform: "uppercase"}}>
                    Arframe is a feature in our app and in the physical space that is accessible for everyone.
                </h3>
            </SeparatorContainer>
            <GalleryContainer>
                <img src={arfe_arframe_gallery} alt="ARFÉ Arframe" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer>
                <img src={arfe_arframe_phone_1} alt="ARFÉ Arframe" style={{width: "33%", position: "relative", top: "-20px"}}/>
                <p1> In the gallery of the app people will be able to find a hidden ‘Arframe’. Here users can upload any artwork they have for free. The artwork will then be displayed on a digital frame we have in our café.</p1>
            </DescriptionContainer>
            <DescriptionContainer>
                <img src={arfe_arframe_phone_2} alt="ARFÉ Arframe" style={{width: "33%", position: "relative", top: "-20px"}}/>
                <p1>
                    The artwork will be displayed until someone else uploads their artwork. With this feature we want users to interact with our cafe gallery and experience what’s it like to have your work displayed in our cafe.
                </p1>
            </DescriptionContainer>
            <SeparatorContainer>
                <h4>THE APP</h4>
            </SeparatorContainer>
            <DescriptionContainer>
                <div style={{display:"flex", flexDirection:"column", gap: "90px"}}>
                    <h4>
                        ONBOARDING
                    </h4>
                    <p1>
                        We want to present a short onboarding so people know the purpose of the app and what the different features are.
                    </p1>
                </div>
                <img src={arfe_app_1} alt="ARFÉ App 1" style={{width: "50%"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <div style={{display:"flex", flexDirection:"column", gap: "90px"}}>
                    <h4>
                        LOGIN
                    </h4>
                    <p1>
                        After the onboarding, users can choose to login or sign up.
                        <br/><br/>
                        They can also skip this step and do it later, but this will only give them access to the gallery page and the menu. They have to log in to vote and have access to the loyalty card.
                    </p1>
                </div>
                <img src={arfe_app_2} alt="ARFÉ App 2" style={{width: "50%"}}/>
            </DescriptionContainer>
            <DescriptionContainer style={{alignItems: "center", paddingBottom: "30px"}}>
                <h4>
                    PROFILE<br/> RANKING
                </h4>
                <img src={arfe_app_3} alt="ARFÉ App 2" style={{width: "51%"}}/>
            </DescriptionContainer>
            <DescriptionContainer style={{paddingTop: 0}}>
                <div style={{width: "68vw"}}>
                </div>
                <p1>
                    1. Users can see their profile and current statistics.
                    <br/><br/>
                    2. Users can upload art to their profile here.
                    <br/><br/>
                    3. There is a seperate ranking page where the user can see their ranking and the current top 3 voted
                    artworks.
                </p1>
            </DescriptionContainer>
            <DescriptionContainer style={{paddingBottom: "30px"}}>
                <h4 style={{position: "relative", top:"100px"}}>
                    MENU
                </h4>
                <img src={arfe_app_4} alt="ARFÉ App 4" style={{width: "50%"}}/>
            </DescriptionContainer>
            <DescriptionContainer style={{paddingTop: 0}}>
                <div style={{width: "59vw"}}>
                </div>
                <p1>
                    1. A menu that is divided into coffee, drinks and snacks.
                    Each with their own colour theme.
                    <br/><br/>
                    2. Each item has a small description and a button to add to cart.
                    <br/><br/>
                    3. All items will be shown in their colour theme in the cart.
                    The user can still alter their order.
                </p1>
            </DescriptionContainer>
            <DescriptionContainer style={{paddingBottom: "30px"}}>
                <h4 style={{position: "relative", top:"100px"}}>
                    GALLERY
                </h4>
                <img src={arfe_app_5} alt="ARFÉ App 4" style={{width: "50%"}}/>
            </DescriptionContainer>
            <DescriptionContainer style={{paddingTop: 0}}>
                <div style={{width: "73vw"}}>
                </div>
                <p1>
                    1. This will be the home page with all the artworks.
                    <br/><br/>
                    2. Clicking on an artwork will allow you to see the name, artist and description. Users can vote for the artwork here.
                    <br/><br/>
                    3. Arframe will be hidden in the gallery for users to find.
                </p1>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4>SPECIAL<br/> FEATURES</h4>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={arfe_app_gallery} alt="ARFÉ App Gallery" style={{width: "100%"}}/>
            </GalleryContainer>
            <Exp3Container style={{gridTemplateColumns: "1fr 1fr 1fr", paddingTop: 0}}>
                <p1>
                    1. A loyalty card in the app
                    will attract people to keep using the app and help the environment.
                </p1>
                <p1>
                    2. You can choose the colour
                    of your coffee with natural based colouring.
                </p1>
                <p1>
                    3. Clients will be able to
                    know the timing of their order.
                </p1>
            </Exp3Container>
            <SeparatorContainer style={{alignItems: "start"}}>
                <h4 style={{width: "100vw"}}> STICKERS</h4>
                <h3 style={{textTransform: "uppercase"}}>
                    We want to support the chosen artists even more by giving them the opportunity to print stickers of their artwork.
                </h3>
            </SeparatorContainer>
            <GalleryContainer>
                <img src={arfe_sticker_gallery_1} alt="Arfe Stickers" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer>
                <div style={{width: "110vw"}}>
                </div>
                <p1>
                    The stickers will be put on the coffee cups of our café, this together with a sticker of our logo. These stickers are, however, not free. The artist will have to pay a small fee to be able to get these stickers printed and put on our cups. It is the artist’s choice to invest in this and not mandatory.
                </p1>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={arfe_sticker_gallery_2} alt="Arfe Stickers" style={{width: "100%"}}/>
            </GalleryContainer>
            <SeparatorContainer>
                <h4>APP PROTOTYPE</h4>
            </SeparatorContainer>
            <GalleryContainer style={{backgroundColor: "#57B6DE"}}>
                <img src={arfe_qr} alt="ARFÉ QR" style={{width: "30%"}}/>
            </GalleryContainer>
            <DescriptionContainer  style={{paddingBottom: 0}}>
                <h4>KEY LEARNINGS & <br/>TAKEAWAYS</h4>
            </DescriptionContainer>
            <GalleryContainerWhite style={{paddingInline: "120px"}}>
                <ul style={{textTransform: "uppercase", fontSize: "25px"}}>
                    <li>
                        This project taught me to adapt and innovate on the fly, turning setbacks into stepping stones
                        for creativity.
                    </li>
                    <br/>
                    <li>
                        By blending animation, fashion, and games, I discovered the magic of integrated design, weaving
                        together diverse elements into a cohesive brand story.
                    </li>
                    <br/>
                    <li>
                        Turning a dull spot into a vibrant hangout spot made me realize the power of design to transform
                        environments and elevate experiences.
                    </li>
                    <br/>
                    <li>
                        Adding humor to the brand identity reminded me that design is more than just aesthetics—it's
                        about connecting with people on a personal level and leaving a lasting impression.
                    </li>
                </ul>
            </GalleryContainerWhite>
            <GalleryContainer>
                <img src={arfe_final_gallery} alt="ARFÉ" style={{width: "100%"}}/>
            </GalleryContainer>
            <GalleryContainer>
                <Toggle redirectUrl="/MADE#landing-section" />
            </GalleryContainer>
            <GalleryContainer style={{paddingTop: 0}}>
                <img src={arfe_next_project} alt="ARFÉ next project" style={{width: "100%"}}/>
            </GalleryContainer>
            <Footer/>
        </PageContainer>
    )
};

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
    grid-template-columns: 1fr 0.9fr 1.3fr 0.8fr;
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
    background-color: #57B6DE;
    color: #171819;
    gap: 120px;
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


export default Arfe;
