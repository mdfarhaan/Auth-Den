import React from 'react';
import { API } from '../shared/constants';

const Button = ({ title, link }) => {
  return (
    <div className="m-5">
      <a
        href={`${API.API_URL}${API.prefix}${link}`}
        className="text-xl border p-2 rounded-xl"
      >
        Login with {title}
      </a>
    </div>
  );
};

export default Button;
