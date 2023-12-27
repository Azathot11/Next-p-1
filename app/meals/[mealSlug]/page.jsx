import React from 'react';

const Page = ({params}) => {
    return (
        <div>
            <p>Meals  {params.mealSlug}</p>
        </div>
    );
};

export default Page;