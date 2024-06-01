import React from 'react';
import {useParams} from 'react-router';
import {User} from '../user/User';

const UserPage: React.FC = () => {
  const {id} = useParams();

  return <User id={id} />;
};

export {UserPage as default};
