import { useEffect, RefObject } from "react"
import { srConfig } from "../data"

const useAnimateScroll = (reference: RefObject<any>) => {
  const animate = async () => {
    const sr = (await import("scrollreveal")).default

    if (reference.current instanceof Object) {
      sr().reveal(reference.current, srConfig())
    }

    if (reference.current instanceof Array) {
      reference.current.forEach((el: any, index: number) =>
        sr().reveal(el, srConfig(index * 100))
      )
    }
  }

  return animate
}

export default useAnimateScroll
