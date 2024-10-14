import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Nav = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isFixed, setIsFixed] = useState(false);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

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
                {["최근이슈", "사회정보", "이달의 정보", "블로그"].map((item, index) => (
                    <NavItem
                        key={index}
                        isActive={index === activeIndex}
                        onClick={() => handleClick(index)}
                    >
                        {item}
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

export default Nav;
