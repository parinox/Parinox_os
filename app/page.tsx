import GlobeScene from "./GlobeScene";

export default function Page() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        overflow: "hidden",
      }}
    >
      <GlobeScene />
    </main>
  );
}
