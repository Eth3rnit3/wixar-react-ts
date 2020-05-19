import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setLocale } from '../../features/counter/appSlice';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Homepage</h1>
      <button
        onClick={() => dispatch(setLocale('en'))}
      >Update locale</button>
    </div>
  );
};

export default Home;
