import React from 'react'


const Error = ({mode}) => {
  return (
    <div className="mb-3" style={{color: mode==='light'?'black':'white'}}>
      <h1>Error-404 Page Not Found</h1>
    </div>

  )
}

export default Error