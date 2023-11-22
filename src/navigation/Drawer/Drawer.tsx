import { styled } from "styled-components";
import BonzaiLogoSmall from "../../assets/bonzai-logo-small.svg";
import { LogInButton, StartFreeButton } from "../../components/Buttons";
import { MenuItem } from "./MenuItem";

interface DrawerProps {
    open?: boolean;
}

const generateMenuItem = (title: string) => ({
    title,
});

export const Drawer = (props: DrawerProps) => {
    const productSubItems = [
        generateMenuItem("Bonsai Workflow"),
        generateMenuItem("Bonsai Tax"),
        generateMenuItem("Bonsai Cash"),
    ];

    const templateSubItems = [
        generateMenuItem("Contract Templates"),
        generateMenuItem("Proposal Templates"),
        generateMenuItem("Invoice Templates"),
        generateMenuItem("Agreement Templates"),
        generateMenuItem("Quote Templates"),
        generateMenuItem("Scope of Work Templates"),
    ];

    return (
        <DrawerWrapper {...props}>
            <div className="flex flex-col gap-4 mx-14 my-7">
                <img
                    src={BonzaiLogoSmall}
                    alt="Bonzai Logo Small"
                    className="w-10 mb-20"
                />
                <MenuItem title="Product" subItems={productSubItems} />
                <MenuItem title="Templates" subItems={templateSubItems} />
                <MenuItem title="Pricing" />
                <MenuItem title="Reviews" />
                <LogInButton />
                <StartFreeButton />
            </div>
        </DrawerWrapper>
    );
};

const DrawerWrapper = styled.div<DrawerProps>`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
    right: ${(props) => (props.open ? "0px" : "-100%")};
    transition: right 0.4s ease;
`;
