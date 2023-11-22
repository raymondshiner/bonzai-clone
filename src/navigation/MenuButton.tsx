import styled from "styled-components";

interface HamburgerButtonProps {
    active: boolean;
    onClick: () => void;
}

export const MenuButton = ({ active, onClick }: HamburgerButtonProps) => {
    return (
        <HamburgerButton id="menuButton" active={active} onClick={onClick}>
            <span id="menuButtonLine" />
            <span id="menuButtonLine" />
            <span id="menuButtonLine" />
        </HamburgerButton>
    );
};

const HamburgerButton = styled.div<HamburgerButtonProps>`
    width: 32px;
    height: 24px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    span {
        transform-origin: left;
        transition: all ease 0.5s;
        width: 100%;
        height: 3px;
        background-color: black;
        &:first-child {
            transform: ${(props) => props.active && "rotate(42.5deg)"};
        }
        &:nth-child(2) {
            opacity: ${(props) => props.active && "0"};
        }
        &:last-child {
            transform: ${(props) => props.active && "rotate(-42.5deg)"};
        }
    }
`;
