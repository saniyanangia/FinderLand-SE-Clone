import React from 'react'
import {RevolvingDot} from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
        <RevolvingDot type="RevolvingDot" color="#B8B09B" height={550} weidth={80} />
    </div>
  )
}
