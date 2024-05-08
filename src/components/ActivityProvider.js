import React from "react";
import ActivityContext from "./ActivityContext";

const ActivityProvider = ( {children} ) => {
    const activityTitle = 'Currently Learning: Tailwind';
    const activityDescription = 'I am learning how to use Tailwind in order to improve my CSS knowledge and project styles';

    const value = (
        <div>
            <h2>{activityTitle}</h2>
            <p>{activityDescription}</p>
        </div>
    );

    return(
        <ActivityContext.Provider value={value}>
            {children}
        </ActivityContext.Provider>
    );
};

export default ActivityProvider;