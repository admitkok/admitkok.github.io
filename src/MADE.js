import {React, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Toggle from "./Toggle";
import Footer from "./Footer";


import Project_1 from "./Project_1.jpg";
import MASHADAMID from "./MASHADAMID.jpg";
import TeamWorkP1 from "./TeamWorkP1.jpg";
import TACTICAL  from "./TACTICAL.jpg";
import Bricks from "./Bricks.jpg";
import Bricks2 from "./Bricks2.jpg";
import StillP1 from "./StillP1.jpg";
import blga1 from "./blga1.jpg";
import blga2 from "./blga2.jpg";
import blga3 from "./blga3.jpg";
import Wall from "./Wall.jpg";
import presp1 from "./presp1.jpg";
import ipadp1 from "./ipadp1.jpg";
import takeaways from "./takeaways.jpg";
import finalp1 from "./finalp1.jpg";
import project1_next_project from "./project1_next_project.jpg";


const MADE = () => {
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
            <img src={Project_1} style={{height: "100vh"}} alt="Project_1"/>
            <Exp3Container>
                <h1>"MADE"</h1>
                <div>
                    <h2>INTERACTIVE INSTALLATION</h2>
                    <h3>“MADE” project: Mixing Physical Textures with Digital Art.</h3>
                </div>
                <p>Interaction Design, <br/>
                    Interactive Installations,
                    Projection Mapping.
                    <br/>
                    <br/>
                    August 2021</p>
            </Exp3Container>
            <Exp4Container>
                <div style={{width: "3fr"}}>
                    <h3 style={{color: "#FF5858"}}>Team</h3>
                    <h3 style={{textDecoration: "underline"}}>EGOR NELYUBIN</h3>
                    <h3 style={{textDecoration: "underline"}}>AMIR KARIM</h3>
                    <h3 style={{textDecoration: "underline"}}>DAVID PETRO</h3>
                </div>
                <div>
                    <h3 style={{color: "#FF5858"}}>Mentor</h3>
                    <h3><MarkNone>DANIEL SCHIEBEL</MarkNone> FROM <MarkNone>RED PAPER HEART</MarkNone></h3>
                </div>
                <div>
                    <h3 style={{color: "#FF5858"}}>My Role</h3>
                    <h3>INTERACTION DESIGNER</h3>
                </div>
                <div>
                    <h3 style={{color: "#FF5858"}}>Time</h3>
                    <h3>3 WEEKS</h3>
                </div>
            </Exp4Container>
            <OrangeContainer>
                <h3 style={{textTransform: "uppercase"}}>"Digital Surfaces" is a project that<br/>translates the diverse
                    textures of <br/> Barcelona into a digital experience.
                    <br/>
                    <br/>
                    We brainstormed the concept, built <br/>prototypes, and pushed the <br/>boundaries to make it
                    happen. </h3>
            </OrangeContainer>
            <GalleryContainer>
                <img src={MASHADAMID} alt="MASHADAMID" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer>
                <h4>OUR BRIEF</h4>
                <h3 style={{textTransform: "uppercase"}}>Was to make an installation about<br/> anything that is fun and
                    exciting,<br/> and wil fill users with joy and<br/> surprise.</h3>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4>BRAINSTORM</h4>
                <p1>We kicked off our project with a team brainstorming session, pooling together various ideas and
                    settling on a topic. The room was full of ideas.
                    <br/><br/>
                    But given our shared experience of being in Barcelona at
                    that time, despite our diverse backgrounds originating from different countries, we found it
                    compelling to create smth resonant with our surroundings. Additionally, we aimed to engage people's
                    senses in interacting with the installation, envisioning a tactile experience enriched with
                    captivating textures.
                </p1>
            </DescriptionContainer>
            <GalleryContainerWhite>
                <img src={TeamWorkP1} alt="TeamWork" style={{width: "100%"}}/>
            </GalleryContainerWhite>
            <DescriptionContainerWhite>
                <div style={{width: "30%"}}></div>
                <p1 style={{maxWidth: "50%"}}>In wrapping up our planning, we were keen to step away from the digital
                    world, even just for a bit, to bring a tangible aspect to our project. We saw the mix of analog and
                    digital as crucial in making our vision more real.
                    <br/><br/>
                    These three main ideas shaped our project: staying true to our local surroundings, focusing on
                    touch, and smoothly blending digital and analog experiences.
                </p1>
            </DescriptionContainerWhite>
            <GalleryContainer>
                <img src={TACTICAL} alt="TACTICAL" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer>
                <h4>CONCEPTING</h4>
                <p1>Barcelona's vibrant art scene served as our main muse. The city's diverse textures, patterns, and
                    decorative details ignited our creativity.
                    <br/><br/>
                    Exploring local inspirations, we pinpointed key elements that define Barcelona's aesthetic: from the
                    distinct bricks of Vila Olímpica to the luxurious marble interiors, the mesmerizing mosaics of
                    Gaudi's heritage, and the charming street tiles. These became the heart of our project, deeply
                    rooted in the city's essence.
                    <br/><br/>
                    In our quest to blend the analog and digital worlds, we envisioned a striking feature: a large
                    surface, maybe even an entire wall, adorned with these textures, beckoning people to interact with
                    them.
                </p1>
            </DescriptionContainer>
            <GalleryContainerWhite>
                <img src={Bricks} alt="Bricks" style={{width: "100%"}}/>
            </GalleryContainerWhite>
            <GalleryContainerWhite>
                <img src={Bricks2} alt="Bricks2" style={{width: "100%"}}/>
            </GalleryContainerWhite>
            <DescriptionContainerWhite>
                <div style={{width: "40%"}}></div>
                <p1 style={{maxWidth: "55%"}}>As we progressed, we brainstormed how users would interact with our
                    installation. Stepping outside, we engaged in a hands-on exploration of these textures, each
                    revealing its unique tactile qualities. While traditional interaction methods involve touchscreens
                    or buttons, we envisioned a more immersive approach: What if the textures themselves acted as the
                    controls? Imagine swiping your hand across a smooth marble surface, triggering a dazzling array of
                    digital effects.
                    <br/><br/>
                    Our concept evolved into a dynamic fusion of the physical and digital worlds. Picture only a portion
                    of the wall adorned with tangible tiles, enticing users to touch and explore. But here's the twist:
                    as your hand glides across a physical tile, its texture seamlessly transitions into a digital
                    projection, morphing into an enchanting display of swirling particles. It's an opportunity to blur
                    the boundaries between reality and imagination, where your gestures breathe life into the digital
                    canvas.
                </p1>
            </DescriptionContainerWhite>
            <GalleryContainerWhite style={{paddingBottom: "90px"}}>
                <img src={StillP1} alt="StillP1" style={{width: "100%"}}/>
            </GalleryContainerWhite>
            <DescriptionContainer>
                <h4>IF WE HAD FUNDING...</h4>
                <p1> If we didn't have to think about a budget, we'd get a big exhibition space with a lot of walls.
                    Every wall would have its own texture and it's own pattern. Chunks of physical textures would be
                    scattered around the walls. Around every chunk we'd have special frames that would detect touch
                    gestures on the surface and basically turn the wall into a touchscreen.
                    <br/><br/>
                    How cool would it be to just walk by the walls, swipe your
                    hand on a piece of mosaic and see how your motion continues on huge walls around you? That would be
                    so, if we had the budget for it.
                </p1>
            </DescriptionContainer>
            <GalleryContainer style={{gap: "50px"}}>
                <img src={blga1} alt="blga1" style={{width: "26.9%"}}/>
                <img src={blga2} alt="blga2" style={{width: "27%"}}/>
                <img src={blga3} alt="blga3" style={{width: "36.7%"}}/>
            </GalleryContainer>
            <GalleryContainer>
                <img src={Wall} alt="Wall" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>In a World Without Financial Limits</h4>
                <p1 style={{maxWidth: "55%"}}>If we had the budget, we could've fully realized our original vision. But,
                    with constraints on both
                    finances and space, we had to find an alternative way to showcase our concept.
                    <br/><br/>
                    To tackle the hardware challenge, we opted for a practical solution: using an iPad surrounded by
                    actual tiles instead of investing in specialized frames. Though this didn't align perfectly with our
                    goal of merging analog and digital, it was the most feasible option given our resources. So,
                    compromise was necessary.
                    <br/><br/>
                    We mounted the setup onto a whiteboard, making it portable enough to take around campus and share
                    with fellow students. To enhance the experience, we added music to complement the visuals and set
                    out to engage people with our installation.
                    <br/><br/>
                    For our MVP, we streamlined our focus to one texture and one wall for projection mapping. We chose
                    the Passeig de Gracia tiles for their geometric simplicity, making them easier to work with. Plus,
                    their beautiful floral pattern resonated perfectly with Barcelona's aesthetic.
                </p1>
            </DescriptionContainer>
            <GalleryContainerWhite style={{paddingBottom: "90px"}}>
                <img src={presp1} alt="presp1" style={{width: "100%"}}/>
            </GalleryContainerWhite>
            <DescriptionContainer>
                <h4>TALKING TECH</h4>
                <p1 style={{maxWidth: "50%"}}>
                    In the realm of technology, Egor took the lead in crafting the code for our installation. Employing
                    JavaScript alongside the SpaceBrew library, he established a seamless connection between the
                    gestures detected by the iPad and the corresponding visual effects projected onto the wall.
                    <br/><br/>
                    As gestures are registered on the iPad, they're translated into movement vectors sent to the server.
                    This process triggers the release of particles from the center, dynamically influencing the scaling
                    of tiles based on their proximity to these particles. The entire operation is meticulously executed
                    using JavaScript canvas, with the results displayed on a dedicated webpage, offering users an
                    immersive and interactive experience.
                    <br/><br/>
                    For projection mapping, we used to the MapTastic library. This tool enabled to accurately align the
                    digital elements displayed on the webpage with the physical layout of the whiteboard.
                    <br/><br/>
                    In terms of hardware, our setup was relatively modest, comprising an iPad, a laptop, and a basic
                    projector. Despite the simplicity of our equipment, our innovative approach showcased the remarkable
                    possibilities that emerge when creativity meets technology.
                </p1>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={ipadp1} alt="ipadp1" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer>
                <h4>KEY TAKEAWAYS</h4>
                <p1>
                    One of the main concerns for us before launching the installation was that it would be just boring.
                    We thought that it wouldn't be enough to keep people entertained.
                    <br/><br/>
                    And then the day of presentations comes. Imagine how happy we were when people stood there for solid
                    4-5 minutes just swiping left and right on the ipad. The fact that your movement goes beyond the
                    screen of an ipad was truly fascinating. And all of that was done by a very simple gesture.
                    <br/><br/>
                    So, we were quite satisfied with the outcome. We proved our concept, came to a conclusion that
                    installations don't have to be crazy expensive and complicated and got a lot of inspiration for
                    future projects.
                </p1>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={takeaways} alt="takeaways" style={{width: "100%"}}/>
            </GalleryContainer>
            <OrangeContainer>
                <h3 style={{textTransform: "uppercase"}}>
                    P.S. i had a wonderful team on this project!
                    <br/>
                    once againg, thank you! egor, amir & david.</h3>
            </OrangeContainer>
            <GalleryContainer>
                <img src={finalp1} alt="finalp1" style={{width: "100%"}}/>
            </GalleryContainer>
            <GalleryContainer>
                <Toggle redirectUrl="/sloth#landing-section"/>
            </GalleryContainer>
            <GalleryContainer>
                <img src={project1_next_project} alt="project1_next_project" style={{width: "100%"}}/>
            </GalleryContainer>
            <Footer/>
        </PageContainer>
    );

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

const Exp3Container = styled.div`
    overflow: hidden;
    text-align: start;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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

const OrangeContainer = styled.div`
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
    background-color: #FF5858;
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
    gap: 90px;
    color: #fff;
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

const MarkNone = styled.mark`
    text-decoration: underline;
    color: white;
    background-color: rgba(0, 0, 0, 0);
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


const StyledButton = styled.button`
    background-color: #0AD70A;
    color: #0a0a0a;
    //background-color: #fff;
    margin-top: 30px;
    margin-right: 10px;
    font-size: 18px;
    font-weight: 500;
    padding: 20px 40px;
    border: 2px solid #0AD70A;
    //border-radius: 30px;
    //text-shadow: 2px 1px 2px rgba(0,0,0,0.3);
    //box-shadow: 2px 4px 5px rgba(0,0,0,0.7);
    z-index: 1;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #0a0a0a;
        color: #0AD70A;
        border: 2px solid #0AD70A;
        transition: all 0.2s ease-in-out;
    }
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

export default MADE;
