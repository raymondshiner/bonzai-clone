import { useState } from "react";
import { PricingCard } from "./PricingCard";

const pricingPackages: PricingCard[] = [
    {
        title: "Starter",
        description: "Ideal for freelancers and contractors just starting out.",
        rate: 24,
        annualRate: 17,
        benefits: [
            "All Templates",
            "Unlimited Clients & Projects",
            "Invoicing & Payments",
            "Proposals & Contracts",
            "Task & Time Tracking",
            "Client CRM",
            "Expense Tracking",
            "Up to 5 Project Collaborators",
        ],
    },
    {
        title: "Professional",
        description:
            "Everything a growing independent business needs to thrive.",
        rate: 39,
        annualRate: 32,
        benefits: [
            "Everything in Starter, plus...",
            "Custom Branding",
            "Forms & Questionaires",
            "Workflow Automations",
            "Client Portal",
            "QuickBooks Integration",
            "Calendly Integration",
            "Zapier Integration",
            "Up to 15 Project Collaborators",
        ],
        mostPopular: true,
    },
    {
        title: "Business",
        description: "The perfect package for small businesses and agencies",
        rate: 79,
        annualRate: 52,
        benefits: [
            "Everything in Starter and Professional, plus...",
            "Subcontractor Management",
            "Hiring Agreement Templates (1099 contracts)",
            "Subcontractor Onboarding",
            "Talent Pool",
            "3 Team Seats (additional seats $9/month)",
            "Accountant Access",
            "Connect Multiple Bank Accountsn",
            "Unlimited Subcontractors",
            "Unlimited Project Collaborators",
        ],
    },
];

export const Pricing = () => {
    const [showYearlyRates, setShowYearlyRates] = useState(false);
    const toggleShowYearlyRates = () => setShowYearlyRates((prev) => !prev);

    return (
        <div className="flex flex-col mx-6 mt-12 gap-6">
            <div className="flex justify-between items-center">
                <div className="text-xl text-black">Plans & Pricing</div>
                <div className="flex gap-2">
                    <input
                        type="checkbox"
                        checked={showYearlyRates}
                        onClick={toggleShowYearlyRates}
                    />
                    Show Yearly Rates
                </div>
            </div>
            {pricingPackages.map((pkg) => (
                <PricingCard
                    key={`pricing-card-${pkg.title}`}
                    title={pkg.title}
                    description={pkg.description}
                    rate={pkg.rate}
                    annualRate={pkg.annualRate}
                    benefits={pkg.benefits}
                    billedYearly={showYearlyRates}
                    mostPopular={pkg.mostPopular}
                />
            ))}
        </div>
    );
};
