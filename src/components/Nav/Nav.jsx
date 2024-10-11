import React, { useState } from "react";
import styled from "styled-components";

const Nav = () => {
    const [activeIndex, setActiveIndex] = useState(null);  // 현재 활성화된 인덱스를 저장

    const handleClick = (index) => {
        setActiveIndex(index);  // 클릭한 항목의 인덱스를 active 상태로 설정
    };

    return (
        <Container>
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
`;

const StyledNav = styled.div`
    border-top: 1px solid #D5D5D5;
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
