import React from 'react';
import Button from './Button';
import { API } from '../shared/constants';

const Home = () => {
  return (
    <>
      <Button title={'Google'} link={API.auth.google} />
      <Button title={'Github'} link={API.auth.github} />
    </>
  );
};

export default Home;
