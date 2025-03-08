import React from 'react';
import FunctionalInput from './components/FunctionalInput';
import ClassInput from './components/ClassInput';
import Count from './components/Count';
import './style.css';

export default function App() {
  return (
    <>
      <div className="divider" />
      <ClassInput name="Class based component!" />
    </>
  );
}
