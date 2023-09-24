import React, {useEffect} from 'react';

function HeaderChildFunction(){
    useEffect(() => {
        return (() => {
            alert("Functional component was unmounted");
        })
    }, []);

    return (
        <h1>Whats up?</h1>
    )
}

export default HeaderChildFunction;