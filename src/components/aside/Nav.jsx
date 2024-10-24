import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(null);
    const [isFixed, setIsFixed] = useState(false);

    const navItem =[
        {name: "최근이슈", path: "/Issue"},
        {name: "사회정보", path: "/social-info"},
        {name: "이달의 정보", path: "/monthly-info"},
    ]

    useEffect(() => {
        const currrentPath = location.pathname;
        const currentIndex = navItem.findIndex(item => item.path === currrentPath);
        setActiveIndex(currentIndex);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Container isFixed={isFixed}>
            <StyledNav>
                {navItem.map((item, index) => (
                    <NavItem
                        key={index}
                        isActive={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                    >
                        <StyledLink to={item.path}>{item.name}</StyledLink>
                    </NavItem>
                ))}
            </StyledNav>
        </Container>
    );
};

const Container = styled.div`
    flex: 1;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #D5D5D5;
    position: ${({isFixed}) => (isFixed ? 'fixed' : 'relative')};
    top: ${({isFixed}) => (isFixed ? '0' : 'auto')};
    z-index: 1000;
    transition: top 0.3s ease, background-color 0.3s ease;
`;
const StyledNav = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    gap: 5rem;
    padding-left: 15em;
`;

const NavItem = styled.div`
    cursor: pointer;
    padding: 10px;
    color: ${({isActive}) => (isActive ? "#1D99FF" : "inherit")};
    text-decoration: ${({isActive}) => (isActive ? "underline" : "none")};
    text-decoration-color: ${({ isActive }) => (isActive ? "#1D99FF" : "transparent")};
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
export default Nav;
