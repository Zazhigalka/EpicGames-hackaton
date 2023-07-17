import React, { useState } from 'react';
import Search from '../components/search/Search';
import Auth from '../components/auth/Auth';

const AuthPage = () => {
  return (
    <div className="container__auth">
      <Auth />
    </div>
  );
};

export default AuthPage;
