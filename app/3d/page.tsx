import SceneWrapper from "../3DScene";

export default function ThreeDViewer() {
  const handleObjectClick = (name: string) => {
    alert(`You clicked on ${name}`);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <SceneWrapper setActiveObject={handleObjectClick} />
    </div>
  );
}
