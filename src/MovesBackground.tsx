const WaveBackground = () => (
  <>
    {/* Bottom wave */}
    <div className="waveContainer bottom">
      <div className="wave"></div>
      <div className="wave"></div>
    </div>

    {/* Top wave */}
    <div className="waveContainer top">
      <div className="wave flipped"></div>
      <div className="wave flipped"></div>
    </div>
  </>
);

export default WaveBackground;
