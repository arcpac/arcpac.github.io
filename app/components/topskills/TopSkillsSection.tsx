'use client'
import React from 'react'
import TopSkills from './TopSkills'
import LightRays from './Aurora'


const TopSkillsSection = () => {
    return (
        <div
            id="test"
            className="flex relative w-full relative flex-col items-center justify-center gap-4 p-2 pt-2 md:pt-1 md:min-h-screen"
        >
            <div className="absolute inset-0 pointer-events-none">
                <LightRays
                    raysOrigin="bottom-center"
                    raysColor="#5dddfc"
                    raysSpeed={1}
                    lightSpread={0.5}
                    rayLength={1}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    className="custom-rays"
                    pulsating={false}
                    fadeDistance={0}
                    saturation={4}
                />
            </div>
            <TopSkills />
        </div>
    )
}

export default TopSkillsSection
