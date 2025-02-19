import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { FaCheckCircle } from "react-icons/fa";
import Wedding from "../Assets/Wedding.svg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16">
      <PageTitle title={"About"} />
      <section className="w-9/12 mx-auto pt-4">
        <h1 className="heading">We help you find the best life partner.</h1>
        <p className="paragraph">
          There is no doubt, matchmaking is the most challenging part of life.
          Especially if the person is not engaged with the current relationship
          paradigms. bdmarriage.com is not just another wedding or dating site.
          We came to serve genuine bangladeshi single brothers and sisters to
          find their perfect life partner. We build this digital matrimony
          platform to help you find the best life partner following your noble
          desire, attire, & dream followed by muslim sharia. We're people's
          trusted matrimony website in Bangladesh. Find your preferred life
          partner safely.
        </p>
        <div className="flex flex-col-reverse md:flex-row md:justify-center items-center my-8">
          <div>
            <h1 className="heading mb-4">
              Why choose <span className="text-violet-500">Matrimony</span>
            </h1>
            <ul className="paragraph text-left space-y-4">
              <li className="flex items-center gap-2">
                <span className="text-violet-500">
                  <FaCheckCircle />
                </span>{" "}
                <span>Register for Free!</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-500">
                  <FaCheckCircle />
                </span>{" "}
                <span>100% human verified profiles</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-500">
                  <FaCheckCircle />
                </span>{" "}
                <span>Designed with sharia values</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-500">
                  <FaCheckCircle />
                </span>{" "}
                <span>
                  Halal, safe and secured Matrimony site in Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-500">
                  <FaCheckCircle />
                </span>{" "}
                <span>
                  Private, personalized, and highly confidential service
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-500">
                  <FaCheckCircle />
                </span>{" "}
                <span>Trusted service for more than 16 years</span>
              </li>
              <li>
                <Link to={"/biodatas"} className="btn-primary">
                  Find Your Partnar
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-w-sm">
            <img className="w-full h-full" src={Wedding} alt="wedding" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
