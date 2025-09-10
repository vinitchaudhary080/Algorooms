// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Har route change par window ko top par le aata hai.
 * Hash (#id) present ho to usko respect karta hai (anchor ko chalne deta hai).
 */
export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Agar hash hai (#section), to anchor ko handle karne do
    if (hash) return;
    // Route change par top pe le jao
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);

  return null;
}
