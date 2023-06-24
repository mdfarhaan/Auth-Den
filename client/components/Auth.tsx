import React from 'react';
import Button from './Button';
import { API } from '../shared/constants';

const Auth = () => {
  return (
    <>
      <Button title={'Google'} link={API.auth.google} />
      <Button title={'Github'} link={API.auth.github} />
      <Button title={'Twitter'} link={API.auth.twitter} />
    </>
  );
};

export default Auth;
