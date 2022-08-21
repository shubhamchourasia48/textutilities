import React from 'react'

const Alert = ({alert}) => {
    const capitalize = (word)=>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase()+lower.slice(1);
    }


  return (
    alert && <div className={`alert alert-${alert.alertType} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(alert.alertType)}</strong> : {alert.msg}
</div>
  )
}

export default Alert