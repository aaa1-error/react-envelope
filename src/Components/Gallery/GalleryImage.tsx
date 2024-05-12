import { animated, useInView } from "@react-spring/web"

export type GalleryImageProps = {
  image: string
}

const GalleryImage = (props: GalleryImageProps) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
    }),
    {
      once: true,
      rootMargin: '-1% 0%',
    }
  )

  return (
    <animated.img ref={ref} style={springs} src={props.image} className='w-full lg:w-1/2 xl:w-1/3 object-cover'/>
  )
}

export default GalleryImage