import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type MenuItem = {
    title: string;
    onClick?: () => void;
    subItems?: MenuItem[];
};

const generateAlert = () => alert("Sorry, I'm a stub");

export const MenuItem = ({
    title,
    onClick = generateAlert,
    subItems: children,
}: MenuItem) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded((prev) => !prev);

    const hasSubItems = !!children && children.length > 0;

    return (
        <div
            onClick={hasSubItems ? toggleExpanded : onClick}
            className="flex flex-col cursor-pointer pb-4"
            style={{ borderBottom: "1px solid #C3C3C3" }}
        >
            <div className="flex justify-between items-center">
                <div className="text-lg text-gray-500">{title}</div>
                {hasSubItems && (
                    <>
                        {!expanded && (
                            <MdKeyboardArrowDown
                                size="1.5rem"
                                color="#4C4D5F"
                            />
                        )}
                        {expanded && (
                            <MdKeyboardArrowUp size="1.5rem" color="#4C4D5F" />
                        )}
                    </>
                )}
            </div>
            {children?.map((menuItem) => (
                <div
                    className={`${
                        expanded ? "fade-in" : "fade-out"
                    } transition-all`}
                >
                    <div
                        className={`px-6 py-1 flex items-center gap-2 text-green-600 text-opacity-85`}
                        key={menuItem.title}
                        onClick={(e) => {
                            e.stopPropagation();
                            menuItem.onClick
                                ? menuItem.onClick()
                                : generateAlert();
                        }}
                    >
                        {menuItem.title} <FaArrowRight />
                    </div>
                </div>
            ))}
        </div>
    );
};
