import React from 'react'

function PassMessage(props){
    console.log(props.data);
    return (
        <div>
            <h1 style = {
                {
                textAlign: 'center',
                color: 'red'
                }
            }>{props.data.map((user) => {
                return <p key={user.id}>{user.username}</p>
            })}</h1>
        </div>
    )
}

export default PassMessage