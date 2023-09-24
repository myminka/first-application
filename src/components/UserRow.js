import React from 'react'
import styles from'../assets/userRow.module.css'

function UserRow(props){
    return (
        <div>
            <h1 className={styles.userrow}>
            {props.data.map(({id, username}) => {
                return <p key={id}>{username}</p>
            })}</h1>
        </div>
    )
}

export default UserRow