import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="w-full h-full">
        <Spline
          scene="https://prod.spline.design/q7FgWm8cGQOv0fN3/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </main>
  );
}