import {React } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


const Footer = () => {
    return(
        <FooterContainer>
            <p style={{paddingBottom: "10px", fontWeight: 300}}>© 2024 All Rights Reserved</p>
            <LinkContainer>
                <FooterLink to="https://www.instagram.com/mdsredina/">Instagram</FooterLink>
                <FooterLink to="/about">Email</FooterLink>
                <FooterLink to="https://www.linkedin.com/in/masha-sredina/">LinkedIn</FooterLink>
            </LinkContainer>
        </FooterContainer>
    )
};

const FooterContainer = styled.div`
    height: 30vh;
    background-color: #57B6DE;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    padding: 20px 90px;
    color: #171819;
    width: 100%;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    text-transform: uppercase;
    font-size: 35px;
    text-decoration: underline;
    color: #171819;
`;

const FooterLink = styled(Link)`
    margin: 10px;
    text-decoration: none;
    color: #000;
`;

export default Footer;