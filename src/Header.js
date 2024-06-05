import {React} from'react';
import styled from "styled-components";
import {Link} from'react-router-dom';
import { useNavigate } from'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <HeaderContainer  isScrolled={isScrolled}>
            <NavBar>
                <StyledLink to={'/#projects'}>PROJECTS</StyledLink>
                <StyledLink to={'/#about'}>ABOUT</StyledLink>
                <StyledLink to={'/'}>SKETCHBOOK</StyledLink>
            </NavBar>
            <Logo to={'/#landing-section'}>
                MASHA SREDINA
            </Logo>
            <UserContainer>
                <StyledLink to={'https://www.linkedin.com/in/masha-sredina/'}>
                    <FontAwesomeIcon icon={faLinkedin} size={'2xl'} />
                </StyledLink>
                <StyledLink to={'https://www.instagram.com/mdsredina/'}>
                    <FontAwesomeIcon icon={faInstagram} size={'2xl'} />
                </StyledLink>

            </UserContainer>
        </HeaderContainer>
    )
};

const HeaderContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 59px;
    color: #171819;
    display: inline-grid;
    grid-template-columns: 0.9fr 1.9fr 0.2fr;
    justify-content: start;
    align-items: center;
    padding: 0px 90px;
    font-weight: 400;
    z-index: 1000;
    transition: background-color 0.3s;
    background: linear-gradient(to right, #F857A6, #FF5858);
`;

const StyledLink = styled(Link)`
    color: #171819;
    text-decoration: none;
    position: relative;
    margin-top: 10px;
    padding-bottom: 10px;
`;

const Logo = styled(Link)`
    color: #171819;
    display: flex;
    flex-direction: row;
    font-size: 40px;
    font-weight: 400;
    align-items: center;
    justify-content: center;
    margin-left: 115px;
    margin-right: auto;
    text-decoration: none;

`;


const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: end;
    font-size: 20px;
    gap: 40px;
    margin-left: 0;
    margin-right: 0;
    align-items: stretch;
    
`;

const UserContainer = styled.div`
    display: flex;
    color: #000;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    font-size: 20px;
    //margin-left: 120px;
    //padding: 0 15px;
    gap: 15px;
    margin: 0 0;
`;
export default Header;