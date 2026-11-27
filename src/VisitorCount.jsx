import { useEffect, useState } from "react";

// Public visitor count. The portfolio has no backend, so the number lives in Paatra's database
// (one counter per site, nothing about the visitor). This browser counts itself once.
const API = "https://scholarship-finder-umber-phi.vercel.app/api/visits/portfolio";
const COUNTED_KEY = "portfolio.counted.v1";

function alreadyCounted() {
  try {
    return localStorage.getItem(COUNTED_KEY) === "1";
  } catch {
    return true; // No storage: only read, so a refresh never counts twice.
  }
}

export default function VisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let live = true;
    const counted = alreadyCounted();
    fetch(API, { method: counted ? "GET" : "POST" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!live || typeof data?.count !== "number") return;
        if (!counted) {
          try {
            localStorage.setItem(COUNTED_KEY, "1");
          } catch {}
        }
        setCount(data.count);
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  if (!count) return null;
  return <span>Visitors to date: {count.toLocaleString("en-IN")}</span>;
}
