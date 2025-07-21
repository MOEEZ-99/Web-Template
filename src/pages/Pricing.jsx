import React from 'react'
import { PriceCard } from '../components/PriceCard'
import { Accordion } from '../components/Accordion';
import { pricingFaqs } from '../data/Price';
import {Title} from "../components/Title.jsx"

export const Pricing = () => {
    const basicFeatures = [
        "1 Website",
        "10 GB Storage",
        "Basic Support",
        "Free SSL"
    ];

    const proFeatures = [
        "5 Websites",
        "100 GB Storage",
        "Priority Support",
        "Custom Domains",
        "Analytics Tools"
    ];

    const eliteFeatures = [
        "Unlimited Websites",
        "1 TB Storage",
        "24/7 Premium Support",
        "Advanced Security",
        "Dedicated Account Manager",
        "White-labeling"
    ];

    return (
        <>
            <div className="title flex flex-col gap-3 mt-8 md:mt-0">
                <h1 className='text-6xl font-semibold'>Pricing</h1>
                <p className='text-black1 block md:w-[45%] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt alias qui soluta assumenda, sed voluptate repellat hic illo sapiente minima.</p>
            </div>
            <div className="mt-8 md:mt-10 grid md:grid-cols-3 md:gap-7 gap-3 grid-cols-1">
                <div className="main">
                    <PriceCard title="Basic Plan" price="500" mid={false} list={basicFeatures} />
                </div>

                <div className="main">
                    <PriceCard title="Pro Plan" price="500" mid={true} list={proFeatures} />
                </div>

                <div className="main">
                    <PriceCard title="Elite Plan" price="500" mid={false} list={eliteFeatures} />
                </div>
            </div>

            <div className="main faqs">
                <div className="title mt-20 md:mt-27">
                    <Title title="Frequently Asked Questions"/>
                </div>

                <div className="content mt-8 md:mt-10">
                <Accordion Data={pricingFaqs}/>
                </div>

            </div>
        </>
    )
}
