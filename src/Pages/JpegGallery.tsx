import { cold_faces, crossfire, doublecross, rapidcore, stalkx } from "../data"
import Jpeg from "../Components/Jpeg"
import AscendingAnimation from "../Components/AscendingAnimation"

const jpegs = [...crossfire, ...doublecross, ...rapidcore, ...stalkx, ...cold_faces]

const JpegGallery = () => {

  return (
    <div className="flex flex-col bg-lines scroll-smooth pb-16 overflow-x-hidden">
      <div className="h-dvh flex items-center justify-center">
        <AscendingAnimation>
          <header className="overflow-hidden text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight">HALF-LIFE.JPEG</header >
        </AscendingAnimation>
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        {jpegs.map((item, index) => (
          <Jpeg image={item} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default JpegGallery