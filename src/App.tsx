import React from 'react';
import {Button} from 'webpack_remote/Button'
import {useExampleStore} from 'webpack_remote/Store'
import {ExamplePage} from "webpack_remote/ExamplePage";
import {TestPage} from 'remote_host/TestPage'

export const App = () => {
    const {bears, addBear} =  useExampleStore();
    return (<>
            <div>
                HOST PAGE
                <div>
                    HOST Bears: {bears} {' '}
                    <Button onClick={addBear}/>
                    <ExamplePage />
                    <TestPage />
                </div>
            </div>
    </>)
}