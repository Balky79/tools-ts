import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import WheelOfFortunePresentation from '../presentation/wheelpresentation';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function WheelContainer(): ReactElement {
    const query = useQuery();
    return (
        <div>
            <WheelOfFortunePresentation>{query}</WheelOfFortunePresentation>
        </div>
    );
}

export default WheelContainer;
