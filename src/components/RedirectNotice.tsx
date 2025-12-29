import { useEffect, useState } from "react";

const REDIRECT_URL = "https://portfoliov3-gamma.vercel.app/#";
const REDIRECT_DELAY = 5000; // 5 segundos

export default function RedirectNotice() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) return 100;
        return old + 100 / (REDIRECT_DELAY / 100);
      });
    }, 100);
    const timeout = setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, REDIRECT_DELAY);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.85)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <h2>Este portfólio foi movido!</h2>
      <p>Você será redirecionado para a nova versão em instantes.</p>
      <div
        style={{
          width: 300,
          height: 10,
          background: "#333",
          borderRadius: 5,
          marginTop: 24,
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#00d8ff",
            borderRadius: 5,
            transition: "width 0.1s",
          }}
        />
      </div>
      <p style={{ marginTop: 16, fontSize: 12 }}>
        Se não for redirecionado,{" "}
        <a href={REDIRECT_URL} style={{ color: "#00d8ff" }}>
          clique aqui
        </a>
        .
      </p>
    </div>
  );
}
