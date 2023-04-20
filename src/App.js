import './App.css';
import React, { useCallback, useState } from 'react';
import { Button } from './Components/Button';
import { Display } from './Components/Display';
import { Footer } from './Components/Footer';
import { Description } from './Components/Description';

function App() {
    const [counter, setCounter] = useState(0);

    const handleCount = useCallback((num) => {
        setCounter((c) => c + num);
    }, []);

    return (
        <>
            <div className="App">
                <Display counter={counter} />
                <Description version={'0.1'} />
                <Button fn={handleCount} />
                <Footer />
            </div>
        </>
    );
}

export default App;
