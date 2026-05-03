export default function Head() {
  return (
    <>
      {/* Preconnect to Spline CDN for faster loading */}
      <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://prod.spline.design" />
      {/* Preload the 3D scene file */}
      <link
        rel="preload"
        href="https://prod.spline.design/9xuF1oRA5poA131s/scene.splinecode"
        as="fetch"
        crossOrigin="anonymous"
      />
    </>
  );
}
