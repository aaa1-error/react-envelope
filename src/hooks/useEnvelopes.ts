export type Envelope = {
  offset: number,
  speed: number,
  translateX: number,
  rotate: number
}

type UseEnvelopeConfig = {
  count: number,
  offset: [number, number],
  speed: [number, number],
  translateX: [number, number],
  rotate: [number, number]
}

export const useEnvelopes = (config : UseEnvelopeConfig
  ) => {
  const envelopes: Envelope[] = []
  const rand = (min: number, max: number) => Math.random() * (max - min) + min;

  for (let i = 0; i < config.count; i++) {
    envelopes.push({
      offset: rand(config.offset[0], config.offset[1]),
      speed: rand(config.speed[0], config.offset[1]),
      translateX: rand(config.translateX[0], config.translateX[1]),
      rotate: rand(config.rotate[0], config.rotate[1])
    })
  }

  console.log("envelopes!")

  return envelopes
}