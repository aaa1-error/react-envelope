import { useNavigate } from 'react-router-dom'
import { animated } from '@react-spring/web';
import AscendingAnimation from '../Components/AscendingAnimation';

const NotFound = () => {
  const nav = useNavigate()

  const back = () => nav("");
  
  // const envelopes = useEnvelopes({
  //   count: 32,
  //   offset: [0, 100],
  //   speed: [0, 0],
  //   translateX: [0, 100],
  //   rotate: [-32, 32]
  // })

  return (
    <div className='h-screen flex items-center justify-center bg-lines90'>
      <div className='flex flex-col gap-2'>
        <AscendingAnimation>
          <animated.div className='overflow-hidden text-5xl md:text-8xl oswald'>NOT FOUND</animated.div>
        </AscendingAnimation>
        <animated.div className='w-full px-4 py-2 border text-center transition cursor-pointer active:bg-white' onClick={back}>BACK</animated.div>
      </div>
    </div>
  )
}

export default NotFound