import React from 'react'

export default (props) => {
  return (
    <div style={{position: "fixed", top: 0, bottom: '70vh', overflowY: 'scroll', wordBreak: 'break-all'}}>
      {
        props.users.map((user, index) => (
          <p key={index}>{user.username}</p>
        ))
      }
    </div>
  )
}