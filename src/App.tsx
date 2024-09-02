import React, { useState, useEffect, useMemo } from 'react';
import EnterName from './components/EnterName';
import Activities from './components/Activities';
import Summary from './components/Summary';
import Calendar from './components/Calendar';
import person0 from './img/person0.jpg';
import person1 from './img/person1.jpg';
import person2 from './img/person2.jpg';
import person3 from './img/person3.jpg';
import person4 from './img/person4.jpg';
import person5 from './img/person5.jpg';
import person6 from './img/person6.jpg';
import person7 from './img/person7.jpg';
import person8 from './img/person8.jpg';
import person9 from './img/person9.jpg';
import person10 from './img/person10.jpg';

import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [activity, setActivity] = useState<string>('');
  const [calendar, setCalendar] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<string>(person0);

  const stageImages = useMemo(() => [
    [{ image: person0, timeout: 500 }, { image: person1, timeout: 1500 }, { image: person2, timeout: 1500 }, { image: person3, timeout: 1500 }], // Stage 0
    [{ image: person4, timeout: 0 }], // Stage 1
    [{ image: person5, timeout: 1500 }, { image: person6, timeout: 0 }], // Stage 2
    [{ image: person7, timeout: 1500 }, { image: person8, timeout: 0 }], // Stage 3
    [{ image: person9, timeout: 1500 }], // Stage 4
    [{ image: person10, timeout: 0 }] // Stage 5
  ], []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleImageChange = (images: { image: string; timeout: number }[]) => {
      let index = 0;
      const changeImage = () => {
        if (index < images.length) {
          setCurrentImage(images[index].image);
          setCurrentImageIndex(index);
          timeoutId = setTimeout(() => {
            index++;
            changeImage();
          }, images[index].timeout);
        } else {
          if (currentStep === 0) {
            // Automatically move to next stage after timeouts for Stage 0
            setCurrentStep(1);
          }
        }
      };
      changeImage();
    };

    handleImageChange(stageImages[currentStep]);

    // Cleanup timeout on component unmount or step change
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentStep, stageImages]);

  const handleName = (name: string) => {
    setName(name);
    setCurrentImageIndex(0);
    setCurrentStep(2);
  };

  const handleActivity = (activity: string) => {
    setActivity(activity);
    setCurrentImageIndex(0);
    setCurrentStep(3);
  };

  const handleCalendar = (calendar : string) => {
    setCalendar(calendar);
    setCurrentImageIndex(0);
    setCurrentStep(4);
  };

  const handleSubmit = () => {
    setCurrentImageIndex(0);
    setCurrentStep(5);
  };

  const isLastImage = () => {
    const images = stageImages[currentStep];
    return currentImageIndex === images.length - 1;
  };

  return (
    <div className="App flex flex-col-reverse md:flex-row h-screen w-screen items-center justify-center">
      <div className=" h-1/2 md:w-[30vw] flex items-center justify-center">
        <img src={currentImage} alt="person" className="h-full" />
      </div>
        <div className="h-1/3 md:w-[30vw] flex items-end md:items-center justify-center">
        {isLastImage() && (
          <>
          {currentStep === 1 && <EnterName handleName={handleName} />}
          {currentStep === 2 && (
            <div>
              <Activities handleActivity={handleActivity} />
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <Calendar handleCalendar={handleCalendar} />
            </div>
          )}
          {currentStep === 4 && <Summary name={name} activity={activity} calendar={calendar} handleSubmit={handleSubmit} />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
