import React, { useState } from 'react';
import EnterName from './components/EnterName';
import Activities from './components/Activities';
import Summary from './components/Summary';
import Calendar from './components/Calendar';
import './App.css';

function App() {

  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [activity, setActivity] = useState('');

  const handleName = (name : string) => {
    setName(name)
    setCurrentStep(2);
  };

  const handleActivity = (activity : string) => {
    setActivity(activity);
    setCurrentStep(3);
  };

  const handleData = () => {
    setCurrentStep(4);
  };

  const handleSubmit = () => {
    setCurrentStep(1);
  };

  return (
    <div className="App flex flex-row h-screen w-screen items-center justify-center">
      <div className="h-1/2 w-1/2 flex items-center justify-center">
        <div>person goes here</div>
      </div>
      <div className="h-1/2 w-1/2 flex items-center justify-center">
        {currentStep === 1 && (
          <EnterName handleName={handleName} />
        )}
        {currentStep === 2 && (
          <div>
            <div>hello, {name}</div>
            <Activities handleActivity={handleActivity} />
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <div>{activity}</div>
            <Calendar nextStep={handleData} />
          </div>
        )}
        {currentStep === 4 && (
          <Summary nextStep={handleSubmit} />
        )}
      </div>
    </div>
  );
        }  

export default App;
