import React, { useContext } from "react";
import ActivityContext from "./ActivityContext";

const CurrentActivity = () => {
    const activityMarkup = useContext(ActivityContext);

    return (
        <div>
            {activityMarkup}
        </div>
    );
};

export default CurrentActivity;
