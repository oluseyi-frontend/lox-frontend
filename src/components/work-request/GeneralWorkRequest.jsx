import React, { useState } from "react";
import Navbar from "./../navbar/Navbar";
import styles from "./workRequest.module.css";
import { Typography } from "@material-ui/core";
import exclamation from "./imagess/exclamation-mark 1.svg";
import PromptComponent from "./Prompt";
import WorkRequest1 from "./WorkRequest1";
import WorkRequest2 from "./WorkRequest2";
import WorkRequest3 from "./WorkRequest3";
import Prompt2Component from "./Prompt2";
import Prompt3Component from './Prompt3';
import Ended from './Ended';
import Total from './Total1';
import Total2 from "./Total2";


const GeneralWorkRequest = () => {
  const [prompt, setPrompt] = useState(true);
  const [prompt2, setPrompt2] = useState(false);
  const [prompt3, setPrompt3] = useState(false);
  const [work1, setWork1] = useState(false);
  const [work2, setWork2] = useState(false);
  const [work3, setWork3] = useState(false);
  const [end, setEnd] = useState(false)
  const [total1, setTotal1] = useState(false)
  const [total2, setTotal2] = useState(false)
  

  const handleWorkRequest = () => {
    setPrompt(false);
    setWork1(true);
    setTimeout(() => {
      setWork2(true);
      setWork1(false);
      setTimeout(() => {
        setWork2(false);
        setPrompt2(true);
      }, 7000);
    }, 7000);
  };

  const handleWorkRequestEnd = () => {
    setPrompt2(false);
    setPrompt(false);
    setWork1(false);
    setWork2(false);
    setWork3(false);
    setEnd(true)
    setTimeout(() => {
      setTotal1(true)
      setEnd(false)
    }, 7000)
  };

  const handleWorkRequestContinue = () => {
    setPrompt2(false);
    setPrompt(false);
    setWork1(false);
    setWork2(true);
    setWork3(false);
    setTimeout(() => {
      setWork2(false);
      setWork3(true);
      setTimeout(() => {
        setWork2(false);
        setWork3(false);
        setPrompt3(true)
      }, 7000);
    }, 7000);
  };

  const handleWorkRequestEnd2 = () => {
    setPrompt3(false);
    setPrompt(false);
    setWork1(false);
    setWork2(false);
    setWork3(false);
    setEnd(true)
    setTimeout(() => {
      setTotal2(true)
      setEnd(false)
    }, 7000)
  };

  const handleWorkRequestContinue2 = () => {
 
    setPrompt2(false);
    setPrompt(false);
    setWork1(false);
    setWork2(false);
    setWork3(true);
  setPrompt3(false)
      setTimeout(() => {
        setWork2(false);
        setWork3(false);
        setPrompt3(true)
      }, 7000);
   
  };

  return (
    <>
      <Navbar />

      <div className={styles.prompt}>
        {prompt && <PromptComponent handleWorkRequest={handleWorkRequest} />}
        {work1 && <WorkRequest1 />}
        {prompt2 && (
          <Prompt2Component
            handleWorkRequestContinue={handleWorkRequestContinue}
            handleWorkRequestEnd={handleWorkRequestEnd}
          />
        )}
        {prompt3 && (
          <Prompt3Component
            handleWorkRequestContinue2={handleWorkRequestContinue2}
            handleWorkRequestEnd2={handleWorkRequestEnd2}
          />
        )}

        {work2 && <WorkRequest2 />}
        {work3 && <WorkRequest3 />}
        {end&& <Ended/> }
        {total1 && <Total />}
        {total2 && <Total2/>}
      </div>
      <div className={styles.prompt_rectangle}>
        <div></div>
      </div>
    </>
  );
};

export default GeneralWorkRequest;
