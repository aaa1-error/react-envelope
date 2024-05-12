import { animated, config, useInView } from "@react-spring/web"

type Props = {
  image: string
}

const Jpeg = (props : Props) => {
  const [ref, styles] = useInView(
    () => ({
      from: {
        //filter: `blur(${64}px)`,
        opacity: 0
      },
      to: {
        //filter: `blur(${0}px)`,
        opacity: 1
      },
      config: config.gentle
    }),
    {
      once: true,
      rootMargin: '-20% 9999%',
    }
  )
  
  return (
    <animated.img ref={ref} style={styles} className="origin-top px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-h-[90vh] object-cover" src={props.image} alt={props.image}/>
  )
}

export default Jpeg