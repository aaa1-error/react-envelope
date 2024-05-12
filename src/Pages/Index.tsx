import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link } from 'react-router-dom'
import { useEnvelopes } from '../hooks/useEnvelopes'
import { animated, useSpring } from '@react-spring/web'
import LilEnvelope from '../Components/LilEnvelope'

const Index = () => {
  const enve = useEnvelopes({
    count: 32,
    offset: [0.2, 1],
    speed: [0, 1],
    translateX: [0, 100],
    rotate: [-32, 32]
  })

  const styles = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: {
      duration: 2000
    }
  })

  const JpegGallery = () => {
    return (
      <div className='flex flex-col w-full h-[200vh] py-64'>
        <div className='flex flex-col justify-evenly w-full xs:flex-row self-center gap-2 p-4'>
          <div>
            <div className='oswald text-4xl'>Галерея джипегов</div>
            <div className='font-bold text-sm'>ENVELOPE.ANGULAR.MIDDLEWARE.LOG.JPEG</div>
            <div className='whitespace-pre-wrap text-sm'>Сборник jpeg'ов, которые я создал в Half-Life</div>
          </div>
          <div className='flex items-center'>
            <Link to={"hl"} className='border bg-black p-4 cursor-pointer active:bg-white transition active:shadow-white active:white-glow'>Мои JPEG'и</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <animated.div style={styles}>
      <Parallax pages={1.9}>
        <ParallaxLayer offset={0.2} speed={-2}>
          <div className='w-full text-center oswald text-7xl'>
            <div>ENVELOPE</div>
            <div>ENVELOPE</div>
            <div>ENVELOPE</div>
            <div>ENVELOPE</div>
            <div>ENVELOPE</div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} className=''>
          <img className='w-full min-h-screen object-contain object-bottom' src="/angulope.png" alt="envelope" />
          <img className='w-full h-[200dvh]' src="/envelines.png" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          {JpegGallery()}
        </ParallaxLayer>

        {enve.map((item, index) => (
          <ParallaxLayer offset={item.offset} speed={item.speed} key={index} className='pointer-events-none'>
            <LilEnvelope translateX={item.translateX} rotate={item.rotate}/>
          </ParallaxLayer>
        ))}
      </Parallax>
    </animated.div>
  )
}

export default Index