import { animated, config, useInView, useSpring } from '@react-spring/web'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const AscendingAnimation = (props : Props) => {
  const styles = useSpring({
    from: {
      height: 0
    },
    to: {
      height: 100
    },
    config: config.slow
  })

  const [ref, springs] = useInView(
    () => ({
      from: {
        height: 0
      },
      to: {
        height: 100
      },
      config: config.slow
    })
  )


  return (
    <animated.div ref={ref} style={springs} className="overflow-hidden">
      {props.children}
    </animated.div>
  )
}

export default AscendingAnimation