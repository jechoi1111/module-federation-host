import React from 'react';
import {Button} from 'webpack_remote/Button'
import {useExampleStore} from 'webpack_remote/Store'
import {ExamplePage} from "webpack_remote/ExamplePage";

export const App = () => {
    const {bears, addBear} =  useExampleStore();
    return (<>
            <div>HOST
                <div>
                    Bears: {bears} {' '}
                    <Button onClick={addBear}/>
                    <ExamplePage />
                </div>
            </div>
    </>)
}