import React from 'react';
import { Rings } from 'react-loader-spinner';

export const Loading = () => (
  <div className="flex justify-center items-center">
    {/* <Loader type="Puff" color="#00BFFF" height={550} width={80} /> */}
    <Rings color="#00BFFF" height={80} width={80} />
  </div>
);