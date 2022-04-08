
import MyCarousels from './cardCarousel';
import Roadmap from '../roadmap/roadmap-tab';
function Home() {

  return (<>
    <div style={{height: "100%"}}>
      <MyCarousels></MyCarousels>
    </div>
    
    <div style={{height: "100%", background:"#ccffcc"}}>
      <Roadmap></Roadmap>
    </div>
    
  </>
  );
}

export default Home;
