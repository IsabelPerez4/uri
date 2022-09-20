import Fotos from './Fotos';
import Uri from './Uri';
import Videos from './Videos';

const Homepage = () => {
  return (
    <div className="container">
      <div>
        <Uri />
      </div>
      <div>
        <Fotos />

        <div>
          <Videos />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
