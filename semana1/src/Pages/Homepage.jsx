import Fotos from './Fotos';
import Uri from './Uri';
import Videos from './Videos';

const Homepage = () => {
  return (
    <>
      <div className="Uri_container">
        <Uri />
      </div>
      <div className="Uri_container">
        <Fotos />
      </div>
      <div className="Uri_container">
        <Videos />
      </div>
    </>
  );
};
export default Homepage;
