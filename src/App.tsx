import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import CardContainer from './components/CardContainer';
import cardImage1 from './assets/images/PM-Holiday-Image2.jpg';
import cardImage2 from './assets/images/PM-Holiday-Image3.jpg';
import './App.scss';
import MediaContainer from './components/MediaContainer';

function App() {
  return (
    <div className="App">
      <Hero />

      <p className="app__main-text">
        Enjoy the holidays with your family and friends with these festive
        recipes and gift ideas!
      </p>
      <CardContainer>
        <Card
          imgSrc={cardImage1}
          title="sweet berry pie"
          text="the sweetest and easiest berry pie perfect for the Holidays!"
          customTextClass="pie"
        />
        <Card
          imgSrc={cardImage2}
          title="10 meaningful gifts"
          text="worry no more with these gifts that your family will love"
          customTextClass="gifts"
        />
      </CardContainer>
      <MediaContainer />
      <Footer />
    </div>
  );
}

export default App;
