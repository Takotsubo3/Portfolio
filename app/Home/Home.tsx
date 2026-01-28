import MetaBalls from '../../components/Metaballs/Metaballs';

export default function Home() {
  return (
    <div className="home-container">
             <MetaBalls
      color="#000000"
      cursorBallColor="#000000"
      cursorBallSize={2}
      ballCount={30}
      animationSize={37}
      enableMouseInteraction
      enableTransparency={true}
      hoverSmoothness={0.121}
      clumpFactor={1.7}
      speed={0.2}
    >
      {/* <div className="home-page">
        <h1 className="main-title">Céléna L&apos;Entété</h1>
      </div> */}
    </MetaBalls>
    </div>
   
  );
}
