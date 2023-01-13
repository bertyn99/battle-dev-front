import React from "react";
import BaseButton from "../components/common/BaseButton";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className=" max-w-3xl h-screen mx-auto px-4 flex flex-col items-center justify-center gap-6 ">
      <nav className="flex w-1/2  gap-2">
        <Link to={"/signin"} className="w-full">
          <BaseButton variant="secondary">Login</BaseButton>
        </Link>
        <Link to={"/signup"} className="w-full">
          <BaseButton variant="secondary">Register</BaseButton>
        </Link>
      </nav>
      <div>
        <img src="world_map.png" className="h-18 w-18 mx-auto" alt="" />
        <h1 className="font-bold text-3xl text-center mb-5">BattleQuizz</h1>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="font-bold text-xl text-center mb-5">
            Are you a trivia master? Do you love competition?
          </h2>
          <p>
            We are excited to introduce to you, BattleQuizz, the ultimate trivia
            app for game enthusiasts. If you're a trivia master who loves
            competition, then BattleQuizz is the perfect app for you.
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-40 w-40 text-indigo-500 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <div className="inline-flex items-center">
          <svg
            version="1.1"
            id="Uploaded to svgrepo.com"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            className="h-40 w-40 text-indigo-500 mx-auto my-auto"
          >
            <path
              fill="currentColor"
              d="M28.414,24l-3-3l2.293-2.293l-1.414-1.414l-2.236,2.236l-3.588-4.186L25,11.46V6h-5.46L16,10.13
	L12.46,6H7v5.46l4.531,3.884l-3.588,4.186l-2.236-2.236l-1.414,1.414L6.586,21l-3,3L7,27.414l3-3l2.293,2.293l1.414-1.414
	l-2.237-2.237L16,19.174l4.53,3.882l-2.237,2.237l1.414,1.414L22,24.414l3,3L28.414,24z M6.414,24L8,22.414L8.586,23L7,24.586
	L6.414,24z M9,10.54V8h2.54l3.143,3.667l-1.85,2.159L9,10.54z M20.46,8H23v2.54L10.053,21.638l-0.69-0.69L20.46,8z M18.95,16.645
	l3.688,4.302l-0.69,0.69l-4.411-3.781L18.95,16.645z M25,24.586L23.414,23L24,22.414L25.586,24L25,24.586z"
            />
          </svg>
        </div>
        <div>
          <h2 className="font-bold text-xl text-center mb-5">
            Can create or join a "battle" with solo, friends or strangers
          </h2>
          <p>
            BattleQuizz allows users to create or join a "battle" with friends
            or strangers. Battles consist of a series of multiple-choice
            questions in a specific category. Players have a limited amount of
            time to answer each question, and the player with the most correct
            answers at the end of the battle wins.
          </p>
        </div>
      </div>
      <Link to={"/home"} className="w-full">
        <BaseButton>Get Started</BaseButton>
      </Link>
    </div>
  );
}

export default LandingPage;
