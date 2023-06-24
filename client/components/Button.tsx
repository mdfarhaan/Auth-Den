import React from 'react';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { FaGoogle, FaDiscord, FaSpotify } from 'react-icons/fa';
import { BsMicrosoft } from 'react-icons/bs';
import { API } from '../shared/constants';

const Button = ({ title, link }) => {
  const style =
    'text-xl border p-2 rounded-xl flex items-center justify-center';

  const renderButton = () => {
    switch (title) {
      case 'Google':
        return (
          <a
            href={`${API.API_URL}${API.prefix}${link}`}
            className={`${style} bg-slate-50`}
          >
            Login with {title}
            <FaGoogle size={22} className="ml-2" />
          </a>
        );
      case 'Github':
        return (
          <a
            href={`${API.API_URL}${API.prefix}${link}`}
            className={`${style} bg-slate-50`}
          >
            Login with {title}
            <FiGithub size={22} className="ml-2" />
          </a>
        );
      case 'Microsoft':
        return (
          <a
            href={`${API.API_URL}${API.prefix}${link}`}
            className={`${style} bg-slate-50`}
          >
            Login with {title}
            <BsMicrosoft size={22} className="ml-2" />
          </a>
        );
      case 'Twitter':
        return (
          <a
            href={`${API.API_URL}${API.prefix}${link}`}
            className={`${style} bg-slate-50`}
          >
            Login with {title}
            <FiTwitter size={22} className="ml-2" />
          </a>
        );
      case 'Discord':
        return (
          <a
            href={`${API.API_URL}${API.prefix}${link}`}
            className={`${style} bg-slate-50`}
          >
            Login with {title}
            <FaDiscord size={22} className="ml-2" />
          </a>
        );
      case 'Spotify':
        return (
          <a
            href={`${API.API_URL}${API.prefix}${link}`}
            className={`${style} bg-slate-50`}
          >
            Login with {title}
            <FaSpotify size={22} className="ml-2" />
          </a>
        );
    }
  };

  return <div className="m-5">{renderButton()}</div>;
};

export default Button;
