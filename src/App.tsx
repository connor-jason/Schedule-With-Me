import React, { useState } from 'react';
import EnterName from './components/EnterName';
import Events from './components/Events';
import Summary from './components/Summary';
import Calendar from './components/Calendar';
import './App.css';

function App() {

  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');

  const handleName = (name : string) => {
    setCurrentStep(2);
    setName(name)
  };

  const handleEvent = () => {
    setCurrentStep(3);
  };

  const handleData = () => {
    setCurrentStep(4);
  };

  const handleSubmit = () => {
    setCurrentStep(1);
  };

  return (
    <div className="App flex flex-row w-1/2">
      <div className="">
          <div>person goes here</div>
      </div>
      <div>
        {currentStep === 1 && (
          <EnterName handleName={handleName} />
          )}
        {currentStep === 2 && (
          <div>
            <Events nextStep={handleEvent} />
            <div>{name}</div>
          </div>
          )}
        {currentStep === 3 && (
          <Calendar nextStep={handleData} />
          )}
        {currentStep === 4 && (
          <Summary nextStep={handleSubmit} />
          )}
      </div>
    </div>
  );
}

export default App;
