import React from 'react';
import Button from './Button';
import { API } from '../shared/constants';

const Auth = () => {
  return (
    <div className="grid place-items-center">
      <Button title={'Google'} link={API.auth.google} />
      <Button title={'Github'} link={API.auth.github} />
      <Button title={'Microsoft'} link={API.auth.microsoft} />
      <Button title={'Twitter'} link={API.auth.twitter} />
    </div>
  );
};

export default Auth;
