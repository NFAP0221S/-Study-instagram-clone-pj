import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

const signin = ({ providers }) => {
  return (
    <div>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://9to5google.com/wp-content/uploads/sites/4/2018/07/how-to-instagram-question-sticker-6_framed.png"
          alt=""
        />
        <div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="w-32 object-cover"
                src="https://sssinstagram.com/images/ilogo.png"
                alt=""
              />
              <p className="text-sm italic my-10 text-center">
                This app is created for learning purposes
              </p>
              <button
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
                onClick={() => signIn(provider.id, { callbakUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default signin;

export const getServerSideProps = async (ctx) => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
