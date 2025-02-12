import React from 'react';
import {useExampleStore} from 'webpack_remote/Store'

const App2 = () => {
    const {bears, addBear} =  useExampleStore();
    return (
        <div>
            {bears}
        </div>
    );
};

export {App2};
