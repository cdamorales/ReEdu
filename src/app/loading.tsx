"use client";

export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
      }}
    >
      <div
        style={{
          border: "16px solid #f3f3f3",
          borderTop: "16px solid #3498db",
          borderRadius: "50%",
          width: "120px",
          height: "120px",
          animation: "spin 0.5s linear infinite",
        }}
      ></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
