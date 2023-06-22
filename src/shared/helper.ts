export const googleFormatter = (profile) => {
  return {
    provider: profile.provider,
    name: profile.displayName,
    email: profile.email,
    picture: profile.picture,
  };
};

export const githubFormatter = (profile) => {
  return {
    provider: profile.provider,
    name: profile._json.name,
    email: profile._json.email,
    picture: profile._json.avatar_url,
  };
};
