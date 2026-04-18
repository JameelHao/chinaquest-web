import { useRef, useState, useEffect, useCallback } from "react";

export function useCarouselScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getStepSize = useCallback(() => {
    if (!scrollRef.current) return 300;
    const card = scrollRef.current.querySelector("[data-card]") as HTMLElement;
    return (card?.offsetWidth || 300) + 24; // card width + gap
  }, []);

  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const step = getStepSize();
    const maxScroll = el.scrollWidth - el.clientWidth;

    // How many clicks to reach the end
    const pages = Math.max(1, Math.ceil(maxScroll / step) + 1);
    setTotalPages(pages);

    // Current page based on scroll position
    const page = Math.round(el.scrollLeft / step) + 1;
    setCurrentPage(Math.min(page, pages));

    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < maxScroll - 10);
  }, [getStepSize]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    updateState();
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scroll = useCallback((dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const step = getStepSize();
    scrollRef.current.scrollBy({
      left: dir === "right" ? step : -step,
      behavior: "smooth",
    });
  }, [getStepSize]);

  return {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    currentPage,
    totalPages,
    scroll,
  };
}
