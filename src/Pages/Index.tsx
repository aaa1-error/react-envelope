import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link } from 'react-router-dom'
import { useEnvelopes } from '../hooks/useEnvelopes'

const Index = () => {
  /* const [envelopes, set] = useState<Envelope[]>([])

  useEffect(() => {
    const rofls: Envelope[] = []

    for (let i = 0; i <= 32; i++) {
      rofls.push({
        offset: Math.random() - 0.2,
        speed: Math.random() * 1,
        translateX: Math.random() * 100,
        rotate: Math.random() * 64 - 32
      })
    }

    set(rofls)
  }, []) */


  //32, [0.2, 1], [0, 1], [0, 100], [-32, 32]
  const enve = useEnvelopes({
    count: 32,
    offset: [0.2, 1],
    speed: [0, 1],
    translateX: [0, 100],
    rotate: [-32, 32]
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
        <img className='w-full min-h-screen object-contain object-bottom' src="./src/assets/angulope.png" alt="envelope" />
        <img className='w-full h-[200dvh] bg-red-300' src="./src/assets/envelines.png" />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0}>
        {JpegGallery()}
      </ParallaxLayer>

      <ParallaxLayer offset={1.9} speed={0}>

      </ParallaxLayer>

      {enve.map((item, index) => (
        <ParallaxLayer offset={item.offset} speed={item.speed} key={index} className='pointer-events-none'>
          <img
            style={{
              transform: `translateX(${item.translateX}vw) rotate(${item.rotate}deg)`,
              imageRendering: '-webkit-optimize-contrast',
              background: "black"
            }}
            src="./src/assets/envelope.png" alt=""
          />
        </ParallaxLayer>
      ))}
    </Parallax>
  )
}

export default Index