import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap, Elastic, Linear } from "gsap";

const SvgContainer = styled.svg`
  width: 100%;
  height: 100%;
  visibility: hidden;
`;

const HeartLoading = () => {
  const wholeHeartRef = useRef<SVGGElement | null>(null);
  const love1Ref = useRef<SVGCircleElement | null>(null);
  const love2Ref = useRef<SVGCircleElement | null>(null);
  const love1ShineRef = useRef<SVGCircleElement | null>(null);
  const love2ShineRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    gsap.set("svg", {
      visibility: "visible",
    });

    gsap.set([wholeHeartRef.current], {
      svgOrigin: "400 300",
    });

    gsap.set(love2Ref.current, {
      transformOrigin: "50% 50%",
    });

    gsap.defaults({
      ease: Elastic.easeOut.config(0.5, 0.7),
    });

    const tl = gsap.timeline({ paused: false });
    tl.to(love1Ref.current, 1, {
      y: 80,
      repeat: -1,
      yoyoEase: Elastic.easeOut.config(0.5, 0.7),
      repeatDelay: 0,
    })
      .to(
        love2Ref.current,
        1,
        {
          x: 80,
          repeat: -1,
          yoyoEase: Elastic.easeOut.config(0.5, 0.7),
          repeatDelay: 0,
        },
        0.5,
      )
      .to(
        love2ShineRef.current,
        1,
        {
          x: 80,
          strokeDashoffset: 140,
          repeat: -1,
          svgOrigin: "360 300",
          yoyoEase: Elastic.easeOut.config(0.5, 0.7),
          repeatDelay: 0,
        },
        0.5,
      )
      .to(
        love1ShineRef.current,
        1,
        {
          y: 80,
          strokeDashoffset: 70,
          repeat: -1,
          transformOrigin: "50% 50%",
          svgOrigin: "400 260",
          yoyoEase: Elastic.easeOut.config(0.5, 0.7),
          repeatDelay: 0,
        },
        0,
      );

    gsap.to(wholeHeartRef.current, 3, {
      rotation: 360,
      repeat: -1,
      ease: Linear.easeNone,
    });
  }, []);

  return (
    <SvgContainer viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <g className="wholeHeart" ref={wholeHeartRef}>
        <g className="inner">
          <rect
            width="80"
            height="80"
            x="360"
            y="260"
            fill="#DA0018"
            rx="0"
            ry="0"
          />
          <circle
            className="love1"
            cx="400"
            cy="260"
            r="40"
            fill="#DA0018"
            ref={love1Ref}
          />
          <circle
            className="love2"
            cx="360"
            cy="300"
            r="40"
            fill="#DA0018"
            ref={love2Ref}
          />
          <circle
            className="love2Shine"
            cx="360"
            cy="300"
            r="28"
            fill="none"
            stroke="#FFD5DB"
            strokeDasharray="20 150"
            stroke-width="4"
            opacity="1"
            stroke-dashoffset="100"
            stroke-linecap="round"
            ref={love2ShineRef}
          />
          <circle
            className="love1Shine"
            cx="400"
            cy="260"
            r="28"
            fill="none"
            stroke="#FFD5DB"
            strokeDasharray="20 110"
            stroke-width="4"
            opacity="1"
            stroke-dashoffset="40"
            stroke-linecap="round"
            ref={love1ShineRef}
          />
        </g>
      </g>
    </SvgContainer>
  );
};

export default HeartLoading;
