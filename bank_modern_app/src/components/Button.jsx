import React from "react"
// import button form the reeat app 


const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 
    bg-blue-gradient font-proppins font-medium
    text-[18px] text-primary outlone-none rounded-xl 
    ${styles} rounded-[10px] `}>
        Get Started
      </button>

  )
}

export default Button