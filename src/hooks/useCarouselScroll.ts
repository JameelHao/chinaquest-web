import { useRef, useState, useEffect, useCallback } from "react";

export function useCarouselScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalVisible, setTotalVisible] = useState(1);

  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Can scroll left/right based on scroll position
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate current card index
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    if (!cards.length) return;
    setTotalVisible(cards.length);

    const containerLeft = el.getBoundingClientRect().left;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.getBoundingClientRect().left - containerLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setCurrentIndex(closest + 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    // Initial check
    updateState();
    // Also check on resize
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scroll = useCallback((dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector("[data-card]") as HTMLElement;
    const cardWidth = card?.offsetWidth || 300;
    const gap = 24;
    scrollRef.current.scrollBy({
      left: dir === "right" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  }, []);

  return {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    currentIndex,
    totalVisible,
    scroll,
  };
}
