import { animated } from "@react-spring/web"

type Props = {
  image: string
}

const Jpeg = (props : Props) => {
  return (
    <animated.img loading={"lazy"} className="origin-top px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-h-[90vh] object-cover" src={props.image} alt={props.image}/>
  )
}

export default Jpeg