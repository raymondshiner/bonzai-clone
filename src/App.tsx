import { useState } from "react";
import BonzaiLogoSVG from "./assets/bonzai-logo.svg";
import { Drawer } from "./navigation/Drawer/Drawer";
import { MenuButton } from "./navigation/MenuButton";
import { Pricing } from "./pricing/Pricing";

function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Drawer open={drawerOpen} />
            <div className="flex p-8 px-12 justify-between items-center">
                <BonzaiLogo />
                <MenuButton
                    active={drawerOpen}
                    onClick={() => setDrawerOpen((prev) => !prev)}
                />
            </div>
            <Pricing />
        </>
    );
}

export default App;

const BonzaiLogo = () => (
    <img src={BonzaiLogoSVG} alt="Bonzai Logo" style={{ width: "8rem" }} />
);
