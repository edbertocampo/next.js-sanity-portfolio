'use client';

import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.span<{ $nowrap?: boolean }>`
  position: relative;
  display: inline-block;
  max-width: 100%;
  line-height: inherit;
  font-family: inherit;
  font-size: inherit;
  white-space: ${(p) => (p.$nowrap ? 'nowrap' : 'normal')};
  word-break: ${(p) => (p.$nowrap ? 'normal' : 'break-word')};
  overflow-wrap: ${(p) => (p.$nowrap ? 'normal' : 'break-word')};
`;

const Reserve = styled.span<{ $nowrap?: boolean }>`
  visibility: hidden;
  display: block;
  white-space: ${(p) => (p.$nowrap ? 'nowrap' : 'pre-wrap')};
`;

const Overlay = styled.span<{ $nowrap?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: block;
  pointer-events: none;
  white-space: ${(p) => (p.$nowrap ? 'nowrap' : 'pre-wrap')};
`;

const BinarySpan = styled.span<{ $isRevealed: boolean }>`
  display: inline;
  color: ${(props) => (props.$isRevealed ? "inherit" : "var(--green, #64ffda)")};
  opacity: ${(props) => (props.$isRevealed ? 1 : 0.15)};
  transition: all 0.2s ease;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  white-space: pre;
`;

type CharState = {
  current: string;
  isRevealed: boolean;
};

export default function BytesToText({ text, delay = 0, speed = 20, nowrap = false, asString = false }: { text: string; delay?: number; speed?: number; nowrap?: boolean; asString?: boolean }) {
  const [characters, setCharacters] = useState<CharState[]>([]);
  const currentString = characters.map((c) => c.current).join("");

  const updateBinary = useCallback(() => {
    setCharacters((prev) =>
      prev.map((char) => (char.isRevealed ? char : { ...char, current: Math.random() < 0.5 ? "0" : "1" }))
    );
  }, []);

  useEffect(() => {
    setCharacters(Array.from(text).map(() => ({ current: "0", isRevealed: false })));

    let timeoutIds: Array<ReturnType<typeof setTimeout>> = [];
    let binaryInterval: ReturnType<typeof setInterval> | undefined;

    const startAnimation = () => {
      binaryInterval = setInterval(updateBinary, 50);

      Array.from(text).forEach((char, index) => {
        timeoutIds.push(
          setTimeout(() => {
            setCharacters((prev) => prev.map((c, i) => (i === index ? { current: char, isRevealed: true } : c)));

            if (index === text.length - 1 && binaryInterval) clearInterval(binaryInterval);
          }, delay + index * speed)
        );
      });
    };

    const initialDelay = setTimeout(startAnimation, 10);
    timeoutIds.push(initialDelay);

    return () => {
      if (binaryInterval) clearInterval(binaryInterval);
      timeoutIds.forEach(clearTimeout);
    };
  }, [text, delay, speed, updateBinary]);

  return (
    <Container $nowrap={nowrap}>
      {/* Reserve final layout to avoid shifts */}
      <Reserve $nowrap={nowrap}>{text}</Reserve>
      {/* Animated overlay */}
      <Overlay $nowrap={nowrap}>
        {asString ? (
          <span>{currentString}</span>
        ) : (
          characters.map((char, index) => (
            <BinarySpan key={index} $isRevealed={char.isRevealed}>
              {char.current}
            </BinarySpan>
          ))
        )}
      </Overlay>
    </Container>
  );
}


