import React from "react"
import { checkToken } from "../../utilities/users-service"
export default function OrderHistoryPage() {

  async function handleCheckToken(e) {
    const expDate = await checkToken()
    console.log(expDate)
  }

  return (

    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Click to see login expiration! </button >
    </div >
  )
}

