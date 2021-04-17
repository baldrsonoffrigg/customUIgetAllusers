import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';

function App() {
    const [data, setData] = useState(null);

    useEffect(async () => {
        invoke('getText', { example: 'my-invoke-variable' }).then((value) =>
          setData(value)
        );
    }, []);

    return (
        <div>
        {data ? data : 'Loading...'}
        </div>
    );
}

export default App;
