import React, { Suspense, lazy } from "react"
import Loading from "./Loading"

export function slowImport(value, ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms)
  })
}

const OtherComponent = lazy(() => slowImport(import("./OtherComponent"), 3000))
const AnOtherComponent = lazy(() => slowImport(import("./OtherComponent"), 5000))

function Mycomponent() {
  // const [isLoading] = useState(false)

  return (
    <div>
      <Suspense fallback={<Loading />}>
      <OtherComponent />

        <section>
          <AnOtherComponent />
        </section>
      </Suspense>
    </div>
  )
}

export default Mycomponent
