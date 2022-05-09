import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'free', price: 0, benefits: [
                'lifetime free',
                'unlimeted deals',
                'localized',
                'fantastic deals',
                'crazy deals',
                'Tech Amirul Islam'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'everytime free',
                'unlimeted deals',
                'localized',
                'fantastic deals',
                'crazy deals',
                'Tech Amirul Islam'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'everything on Regular ',
                'unlimeted deals',
                'localized',
                'fantastic deals',
                'crazy deals',
                'Tech Amirul Islam'
            ]
        },
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font mono text-white '>Best Deals of the Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat deserunt dolores a minus. Unde, sapiente. Aperiam incidunt exercitationem laudantium, blanditiis numquam esse, porro magni rerum, eaque dolore iste molestias.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}

                    ></PricingOption>)
                }
            </div>
            <footer className='bg-black text-white hover:text-green-500'>CopyRightAll-TechAmirulIslam</footer>
        </div>
    );
};

export default Pricing;