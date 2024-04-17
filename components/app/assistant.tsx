"use client";

import { useVapi } from "../../hooks/useVapi";
import { AssistantButton } from "./assistantButton";
import { Display } from "./display";

function Assistant() {
  const {
    toggleCall,
    callStatus,
    audioLevel,
    setGrade,
    setName,
    name,
    grade,
    prompt,
    setPrompt,
  } = useVapi();
  return (
    <>
      <div>
        <label className="block" htmlFor="name">
          Enter your name
        </label>
        <input
          className="border-2"
          id="name"
          name="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label htmlFor="grade" className="block">
          Enter your grade
        </label>
        <input
          id="grade"
          name="grade"
          type="number"
          className="border-2 w-full"
          placeholder="Grade (1-12)"
          value={grade}
          min={1}
          max={12}
          onChange={(e) => setGrade(e.target.value)}
          onBlur={(e) =>
            setGrade(Number(e.target.value) > 12 ? "12" : e.target.value)
          }
        />
        <br />
        <br />
        <br />
        <label htmlFor="prompt" className="block">
          Enter prompt
        </label>
        <textarea
          id="prompt"
          className="border-2 w-full"
          name="prompt"
          placeholder="Prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <div></div>
      <div className="chat-history">
        <Display />
      </div>
      <div className="user-input">
        <AssistantButton
          audioLevel={audioLevel}
          callStatus={callStatus}
          toggleCall={toggleCall}
        ></AssistantButton>
      </div>
    </>
  );
}

export { Assistant };
