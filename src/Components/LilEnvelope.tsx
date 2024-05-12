type Props = {
  translateX : number,
  rotate: number
}

const LilEnvelope = (props : Props) => {
  return (
    <img
      style={{
        transform: `translateX(${props.translateX}vw) rotate(${props.rotate}deg)`,
        imageRendering: '-webkit-optimize-contrast',
        background: "black"
      }}
      src="./src/assets/envelope.png" alt=""
    />
  )
}

export default LilEnvelope