import React from 'react'

const overlayStyle = {
  wordBreak: 'break-word',
  fontSize: '5em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  flexDirection: 'column',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  color: 'white',
  backgroundColor: 'rgba(0,0,0,0.7)',
  padding: '1em'
}

export default (props) => {
  if (props.text) {
    return(
      <div>
        <div style={overlayStyle}>
          {props.text}
          <div className="overlay-instruction">↵ Enter to Send</div>
        </div>
      </div>
    )
  }
  return null
}