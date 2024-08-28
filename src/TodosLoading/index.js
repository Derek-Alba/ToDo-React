import React from "react";
import './TodosLoading.css'

function TodosLoading() {
  return (
    <>

      <div className="loader">
        <div className="loader-text">Loading...</div>
        <div className="loader-bar"></div>
      </div>

    </>

  )
}

export { TodosLoading };