import {React, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";


import Sloth_landing_page from "./Sloth_landing_page.jpg";
import sloth_gallery_1 from "./sloth_gallery_1.png";
import sloth_gallery_2 from "./sloth_gallery_2.png";
import gal_1 from "./PORTFOLIO/PORTFOLIO/8 project.png";
import gal_2 from "./PORTFOLIO/PORTFOLIO/8 project-1.png";
import gal_3 from "./PORTFOLIO/PORTFOLIO/9 project.png";
import gal_4 from "./PORTFOLIO/PORTFOLIO/7 project.png";
import sloths_lines from "./sloths_lines.png";
import sloths_cups from "./sloths_cups.png";
import sloth_logo_evo from "./sloth_logo_evo.png";
import sloth_colors_1 from "./sloth_colors_1.png";
import sloth_colors_2 from "./sloth_colors_2.png";
import sloth_colors_3 from "./sloth_colors_3.png";
import sloth_faces_1 from "./sloth_faces_1.png";
import sloth_faces_2 from "./sloth_faces_2.png";
import sloth_merch_1 from "./sloth_merch_1.png";
import sloth_merch_2 from "./sloth_merch_2.png";
import sloth_merch_3 from "./sloth_merch_3.png";
import sloth_merch_4 from "./sloth_merch_4.png";
import sloth_merch_5 from "./sloth_merch_5.png";
import sloth_merch_6 from "./sloth_merch_6.png";
import sloth_merch_7 from "./sloth_merch_7.png";
import sloth_merch_8 from "./sloth_merch_8.png";
import sloth_merch_9 from "./sloth_merch_9.png";
import sloth_gal_1 from "./sloth_gal_1.png";
import sloth_gal_2 from "./sloth_gal_2.png";
import sloth_gal_3 from "./sloth_gal_3.png";
import sloth_gal_4 from "./sloth_gal_4.png";
import sloth_gal_5 from "./sloth_gal_5.png";
import sloth_gal_6 from "./sloth_gal_6.png";
import sloth_next_project from "./sloth_next_project.png";
import Toggle from "./Toggle";




const Sloth = () => {
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
            <img src={Sloth_landing_page} alt="Sloth" style={{width: "100%"}}/>
            <Exp3Container>
                <h1>"SLOTH COFFEE"</h1>
                <div>
                    <h2>REBRANDING</h2>
                    <h3>“SLOTH COFFEE” IMAGINE HAVING YOUR SECRET JUNGLE IN THE MIDDLE OF THE CITY!</h3>
                </div>
                <p>Re/Branding,<br/>
                    Brand strategy, <br/>
                    Concepting, <br/>
                    Visual design.
                    <br/>
                    <br/>
                    April 2022</p>
            </Exp3Container>
            <Exp4Container>
                <div style={{width: "3fr"}}>

                </div>
                <div>
                    <h3 style={{color: "#F857A6"}}>Mentor</h3>
                    <h3><MarkNone>DIEGO MARINI</MarkNone> FROM <MarkNone>YUMMY COLORS</MarkNone></h3>
                </div>
                <div>
                    <h3 style={{color: "#F857A6"}}>My Role</h3>
                    <h3>BRAND IDENTITY DESIGNER</h3>
                </div>
                <div>
                    <h3 style={{color: "#F857A6"}}>Time</h3>
                    <h3>3 WEEKS</h3>
                </div>
            </Exp4Container>
            <PinkContainer style={{paddingInline: "272px"}}>
                <h3 style={{textTransform: "uppercase"}}>From a failed gift shop collab rose the world's 1st cafe to
                    blend animation, fashion, and games. And I didn't just stop at a rebrandingI I transformed it into a
                    secret jungle in the heart of the city where you can enjoy
                    your coffee & leave all your worries behind.</h3>
            </PinkContainer>
            <DescriptionContainer>
                <h4>OVERVIEW</h4>
                <p1>
                    Gift Coffee, named after its initial collaboration with a gift shop that eventually went out of
                    business, used to be one of the trendiest cafes in Moscow before it faced bankruptcy. It was a
                    jungle in the middle of a megalopolis - a cozy coffee shop with a friendly atmosphere, fluffy
                    sloths, and lots of greenery.
                </p1>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={sloth_gallery_1} alt="Sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer style={{display: "grid", gridTemplateColumns: "1.2fr 1fr", gridGap: "90px"}}>
                <h4>SECRETS OF OUR
                    COMPETITORS:</h4>
                <p1>
                    Our jungle cafe aims to differentiate from direct and indirect competitors in the coffee industry by
                    prioritising consistent and immersive customer experiences, building a strong brand community, and
                    leveraging unique selling points like our jungle-themed visuals and colourful drinks. Direct
                    competitors have issues with opening hours and social media despite offering beautiful visuals and
                    community building. Indirect competitors offer a different experience for customers.
                </p1>
            </DescriptionContainer>
            <GalleryContainer style={{paddingTop: "0px"}}>
                <img src={sloth_gallery_2} alt="Sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <SeparatorContainer>
                <h4>BRAND <br/>EVOLUTION</h4>
                <h3 style={{textTransform: "uppercase"}}>
                    Mission, Vision, Values
                </h3>
            </SeparatorContainer>
            <DescriptionContainer style={{paddingBottom: "60px"}}>
                <h4>MISSION</h4>
                <h3 style={{textTransform: "uppercase"}}>
                    To create a <MarkOrange>place</MarkOrange> for our customers <br/> to be in <MarkPink>any
                    mood</MarkPink> they want before <br/> their <MarkBrightPink>1st cup</MarkBrightPink> of
                    coffee.
                </h3>
            </DescriptionContainer>
            <DescriptionContainer style={{paddingTop: "0"}}>
                <div style={{width: "141vw"}}></div>
                <NiceList>
                    <OrangeItem>
                        And we are not talking just about a coffee place.
                        We are building a world around our beloved community.
                    </OrangeItem>
                    <PinkItem>
                        We believe everyone has the right to a personalised experience at our place. We'll adjust our
                        service to suit each individual's unique needs. For example, if you prefer not to talk in the
                        morning, you can order online
                        and request no small talk with the barista.
                    </PinkItem>
                    <BrightPinkItem>
                        We are gonna be opened at 6 in the morning. Because we want our customers to know that no matter
                        how early their shift starts we will provide them with the best quality coffee.
                    </BrightPinkItem>
                </NiceList>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4>VISION</h4>
                <h3 style={{textTransform: "uppercase", maxWidth: "48vw"}}>to be the world's 1st café to merge the
                    realms of animation, fashion,
                    and games, while maintaining our core values.</h3>
            </DescriptionContainer>
            <DescriptionContainer style={{paddingTop: "0"}}>
                <div style={{width: "167vw"}}></div>
                <NiceList>
                    <PinkItem>
                        We build the world around our coffee place with no limits. Our 6 sloths come to life in games,
                        Tamagotchis, and unique headphones. Our café offers amazing coffee, healthy sweets, and a space
                        to enjoy alone or with loved ones. It's a great place to work, read, write, sketch, or just
                        drink coffee and hug a sloth.
                    </PinkItem>
                </NiceList>
            </DescriptionContainer>
            <DescriptionContainer style={{paddingBottom: "30px"}}>
                <h4>VALUES</h4>
            </DescriptionContainer>
            <GalExp4Container>
                <img src={gal_1} alt="gal_1" style={{height: "21vw"}}/>
                <img src={gal_2} alt="gal_2" style={{height: "21vw"}}/>
                <img src={gal_3} alt="gal_3" style={{height: "21vw"}}/>
                <img src={gal_4} alt="gal_4" style={{height: "21vw"}}/>
                <div style={{backgroundColor: "#F857A6"}}>
                    <h3 style={{textTransform: "uppercase"}}>
                        Hug your sloth
                    </h3>
                </div>
                <div style={{backgroundColor: "#F857A6"}}>
                    <h3 style={{textTransform: "uppercase"}}>
                        secret JUNGLE
                    </h3>
                </div>
                <div style={{backgroundColor: "#F857A6"}}>
                    <h3 style={{textTransform: "uppercase"}}>
                        HEALTHY & TASTY <br/><br/>
                    </h3>
                </div>
                <div style={{backgroundColor: "#F857A6"}}>
                    <h3 style={{textTransform: "uppercase"}}>
                        LET’S BE REAL
                    </h3>
                </div>
                <p1>
                    Where coziness comfort and warmth come together.
                </p1>
                <p1>
                    You'll find the perfect secluded spot here to read, work or simply enjoy your coffee without
                    interruptions.
                </p1>
                <p1>
                    We will provide you with an amazing coffee, healthy sweets and a huge selection of vegan,
                    vegetarian, gluten-free, sugar-free options.
                </p1>
                <p1>
                    Understanding + Honesty + Boldness + Fun.
                </p1>
            </GalExp4Container>
            <SeparatorContainer>
                <h4 style={{lineHeight: "85px"}}>FROM "GIFT" TO "SLOTH".</h4>
                <p1 style={{width: "75vw"}}>
                    We ditched the old name that was no longer serving any purpose. This cafe used to be an integrated
                    business model-collab with a gift shop, which soon went out of business, but GIFT COFFEE for some
                    unknown reason never got rid of the name, so now it’s time.
                </p1>
            </SeparatorContainer>
            <GalleryContainer>
                <img src={sloths_lines} alt="Sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <GalleryContainer style={{paddingTop: "0"}}>
                <img src={sloths_cups} alt="Sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <GalleryContainer style={{paddingTop: "0"}}>
                <img src={sloth_logo_evo} alt="Sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <SeparatorContainer>
                <h4>COLOUR PALETTE</h4>
                <p1 style={{width: "70vw"}}>We ditched the old name that was no longer serving any purpose. This cafe
                    used to be an integrated business model-collab with a gift shop, which soon went out of business,
                    but GIFT COFFEE for some unknown reason never got rid of the name, so now it’s time.
                </p1>
            </SeparatorContainer>
            <DescriptionContainer>
                <h4>PRIMARY PALETTE</h4>
                <img src={sloth_colors_1} alt="Sloth" style={{width: "50vw"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4>COLOUR PALETTE RATIO</h4>
                <img src={sloth_colors_2} alt="Sloth" style={{width: "50vw"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4>SECONDARY PALETTE</h4>
                <img src={sloth_colors_3} alt="Sloth" style={{width: "47vw"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>palette of elements in our colors</h4>
                <p1 style={{width: "120vw"}}>I've crafted a collection of dynamic elements that emerged from my creative
                    experimentation with the logo. These elements are absolute game-changers, perfect for enhancing
                    brand across various platforms like social media, merchandise, and banners. The best part? They
                    offer complete freedom of customization, allowing you to mix and match them to your heart's content.
                    With these versatile elements at your disposal, you have the power to create captivating designs
                    that exude both professionalism and a touch of playfulness. Get ready to unleash the creativity and
                    make Sloth Cafe stand out like
                    never before!
                </p1>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={sloth_faces_1} alt="sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer>
                <h4>EXAMPLES OF USE</h4>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={sloth_faces_2} alt="sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <SeparatorContainer style={{alignItems: "start"}}>
                <h4 style={{textTransform: "uppercase"}}>our Merch</h4>
                <p1 style={{width: "50vw"}}>This merchandise collection serves as an expansion to the brand's universe,
                    offering a tangible way for fans to further engage and explore its world. It allows individuals to
                    immerse themselves in the brand's story and extend their connection beyond digital experiences.
                </p1>
            </SeparatorContainer>
            <DescriptionContainer>
                <h4>SLOTH PHONE CASES</h4>
                <img src={sloth_merch_1} alt="sloth" style={{width: "50vw"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>the most huggable SLOTHS</h4>
                <img src={sloth_merch_2} alt="sloth" style={{width: "60vw", position: "relative", left: "-60px"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>music with the SLOTH</h4>
                <img src={sloth_merch_3} alt="sloth" style={{width: "60vw", position: "relative", left: "75px"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>sloth'S game centre</h4>
                <img src={sloth_merch_4} alt="sloth" style={{width: "50vw"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}></h4>
                <img src={sloth_merch_5} alt="sloth" style={{width: "50vw"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}></h4>
                <img src={sloth_merch_6} alt="sloth" style={{width: "50vw"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>Slothings</h4>
                <img src={sloth_merch_7} alt="sloth" style={{width: "50vw"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>SLOTHA<br/>GOTCHI</h4>
                <img src={sloth_merch_8} alt="sloth" style={{width: "50vw"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>SLOCKS</h4>
                <img src={sloth_merch_9} alt="sloth" style={{width: "50vw"}}/>
            </DescriptionContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>Branded Essential <br/>of OUr Cafe</h4>
                <p1 style={{width: "70vw"}}>
                    This merchandise collection, including loyalty cards, packaging, and menus, is an integral part of
                    the cafe's
                    brand experience, enriching the overall atmosphere and inviting customers to fully immerse
                    themselves in the cafe's unique world. It enhances the sense of belonging and connection, making
                    each visit a memorable and cohesive
                    part of the cafe's universe.
                </p1>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={sloth_gal_1} alt="sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <GalleryContainer>
                <img src={sloth_gal_2} alt="sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>SOCIAL MEDIA</h4>
                <p1 style={{width: "70vw"}}>
                    Choosing Pinterest and Instagram as Sloth Cafe's main social media platforms is a strategic move
                    that perfectly fits the brand's identity and target audience. Pinterest's focus on visuals allows
                    the café to highlight its charming sloth-themed atmosphere and delicious menu items.
                </p1>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={sloth_gal_3} alt="sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>Insta & pinterest</h4>
                <p1 style={{width: "70vw"}}>
                    Utilizing Instagram's interactive features, such as curated posts, engaging stories, and live
                    videos, helps Sloth Cafe connect with a broader audience. Through these platforms, our cafe
                    effectively communicates its unique appeal, engages its target market, and boosts both foot traffic
                    and online interactions.
                </p1>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={sloth_gal_4} alt="sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>Customise Your Coffee Experience</h4>
                <p1 style={{width: "70vw"}}>
                    Experience coffee like never before at Sloth Cafe! Our custom blends cater to your energy and mood,
                    ensuring a personalised delight. Whether you need a bold kickstart or a soothing unwind, our menu
                    has just what you're looking for. Crafted with care, each blend matches your desired mood perfectly.
                    Come visit us for a satisfying cup that's tailored specifically to your energy level.
                </p1>
            </DescriptionContainer>
            <GalleryContainer>
                <img src={sloth_gal_5} alt="sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <DescriptionContainer>
                <h4 style={{textTransform: "uppercase"}}>KEY LEARNINGS & TAKEAWAYS</h4>
                <p1 style={{width: "70vw"}}>
                </p1>
            </DescriptionContainer>
            <PinkContainer style={{flexDirection: "column", padding: "90px"}}>
                <NiceList style={{paddingInline: "90px"}}>
                    <BlackItem style={{textTransform: "uppercase", fontSize: "25px"}}>
                        This project taught me to adapt and innovate on the fly, turning setbacks into stepping stones
                        for
                        creativity.
                    </BlackItem>
                    <BlackItem style={{textTransform: "uppercase", fontSize: "25px"}}>
                        By blending animation, fashion, and games, I discovered the magic of integrated design, weaving
                        together diverse elements into a cohesive brand story.
                    </BlackItem>
                    <BlackItem style={{textTransform: "uppercase", fontSize: "25px"}}>
                        Turning a dull spot into a vibrant hangout spot made me realize the power of design to transform
                        environments and elevate experiences.
                    </BlackItem>
                    <BlackItem style={{textTransform: "uppercase", fontSize: "25px"}}>
                        Adding humor to the brand identity reminded me that design is more than just aesthetics—it's
                        about connecting with people on a personal level and leaving a lasting impression.
                    </BlackItem>
                </NiceList>
            </PinkContainer>
            <GalleryContainer>
                <img src={sloth_gal_6} alt="sloth" style={{width: "100%"}}/>
            </GalleryContainer>
            <GalleryContainer>
                <Toggle redirectUrl="/"/>
            </GalleryContainer>
            <GalleryContainer style={{paddingTop: 0}}>
                <img src={sloth_next_project} alt="sloth" style={{width: "20vw"}}/>
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


export default Sloth;
