import { cities } from './utils';
import { userType } from './types';
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

export const generateRandomInfo = () => {
  const following = Math.floor(Math.random() * 500);
  const followers = Math.floor(Math.random() * 500);
  const posts = Math.floor(Math.random() * 500);
  const location = cities[Math.floor(Math.random() * cities.length)];
  return {
    following,
    followers,
    posts,
    location,
  };
};

export const calculateStats = (data) => {
  const len = data.length;

  let allFollowing = [];
  let allFollowers = [];
  let allPosts = [];
  let providers = {};
  let location = {};
  data.map((user: userType) => {
    allFollowers.push(user.followers);
    allFollowing.push(user.following);
    allPosts.push(user.posts);
    if (providers[user.provider]) {
      providers[user.provider] += 1;
    } else {
      providers[user.provider] = 1;
    }
    if (location[user.location]) {
      location[user.location] += 1;
    } else {
      location[user.location] = 1;
    }
  });
  const averageFollowing = allFollowing.reduce((a, b) => a + b, 0) / len;
  const averageFollowers = allFollowers.reduce((a, b) => a + b, 0) / len;
  const averagePosts = allPosts.reduce((a, b) => a + b, 0) / len;
  return {
    averageFollowing,
    averageFollowers,
    averagePosts,
    providers,
  };
};
