import { animated, useSpring } from '@react-spring/web'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const Main = () => {
  const location = useLocation()

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 1600
    }
  })

  useEffect(() => {
    console.log('effect')
  }, [location])

  return (
    <animated.div style={props}>
      <Outlet/>
    </animated.div>
  )
}

export default Main