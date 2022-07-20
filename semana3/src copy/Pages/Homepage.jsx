import Fotos from './Fotos';
import Uri from './Uri';
import Videos from './Videos';

const Homepage = () => {
  return (
    <>
      <div className="Uri container">
        <Uri />
      </div>
      <div className="Uri container">
        <Fotos />
      </div>
      <div className="Uri container">
        <Videos />
      </div>
    </>
  );
};
export default Homepage;
