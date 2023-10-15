import React from 'react'
import ParticleAnimation from './ParticleAnimation'
export default function ParallaxEffect() {
  return (
    <Wrapper>
      <ParallaxBanner
        style={{
          height: '100vh',
        }}
        // className={ParticleAnimation}
        layers={[
          {
            image:
              'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg',
            speed: -20,
          },
        ]}
      />
    </Wrapper>
  );
}
