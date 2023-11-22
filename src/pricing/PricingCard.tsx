import { BsCurrencyDollar } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { StartFreeButton } from "../components/Buttons";

export type PricingCard = {
    title: string;
    description: string;
    rate: number;
    annualRate: number;
    benefits: string[];
    billedYearly?: boolean;
    mostPopular?: boolean;
};

export const PricingCard = ({
    title,
    description,
    rate,
    annualRate,
    benefits,
    billedYearly,
}: PricingCard) => {
    return (
        <div className="border-2 rounded bg-[#FBFCFF] py-10 px-4 flex flex-col">
            <div className="text-2xl text-gray-600 font-semibold tracking-wider">
                {title}
            </div>
            <div className="text-sm text-gray-500">{description}</div>
            <div
                className="flex gap-1 text-gray-600 mt-4 items-end"
                style={{
                    borderBottom: "2px solid #02B289",
                    lineHeight: "4.5rem",
                }}
            >
                <BsCurrencyDollar size="2rem" className="mb-8 " />
                <div style={{ fontSize: "4.5rem" }} className="font-bold">
                    {billedYearly ? annualRate : rate}
                </div>
                <div className="text-xl uppercase mb-1 ml-4 tracking-wider font-medium">
                    /month
                </div>
                {billedYearly && (
                    <div className="text-sm ml-auto tracking-wide fint-medium">
                        Billed yearly
                    </div>
                )}
                <div></div>
            </div>
            <div className="flex flex-col gap-4 my-10">
                {benefits.map((benefit) => (
                    <div
                        key={benefit}
                        className="flex items-center gap-3 text-gray-500"
                    >
                        <FaCheck className="text-[#02B289]" />
                        <div>{benefit}</div>
                    </div>
                ))}
            </div>
            <StartFreeButton />
        </div>
    );
};
