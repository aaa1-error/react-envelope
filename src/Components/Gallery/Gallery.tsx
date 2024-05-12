import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { stalkx } from "../../data"

type Props = {
  data: string[]
}


const Gallery = () => {
  return (
    <Parallax pages={6} className="bg-lines">
      <ParallaxLayer offset={0}>
        <header>Джипеги!</header>
      </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 1, end: 3.5 }} className="flex">
        <div className="w-[50vw] h-[50vh] flex-1 flex items-center justify-center bg-red-300">
          <div className="py-64">
            <div className="text-5xl font-bold">STALKX</div>
            <div className="text-sm text-center font-extralight">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
        <div className="flex-1">

        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} className="flex flex-col md:flex-row">
        <div className="flex-1 flex items-center justify-center aspect-square py-16 lg:py-8">
          <div>
            <div className="text-5xl font-bold">STALKX</div>
            <div className="text-sm text-center font-extralight">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
        <div className="flex-1">
          {stalkx.map((item, index) => (
            <img key={index} src={item} alt={item} />
          ))}
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2}>

      </ParallaxLayer>

      <ParallaxLayer offset={3}>

      </ParallaxLayer>

      <ParallaxLayer offset={4}>

      </ParallaxLayer>

      <ParallaxLayer offset={5}>

      </ParallaxLayer>
    </Parallax>
  )
}

export default Gallery