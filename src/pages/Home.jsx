import { Icon } from "@iconify/react";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";

const Home = () => {
  return (
    <div>
      <div className="mb-4 rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
        <h1 className="mb-4 flex items-center text-4xl font-bold">
          <Icon icon="mdi:home" className="mr-2" />
          Home
        </h1>
        <h2 className="mb-3 text-2xl">Welcome to the home page!</h2>
        <p className="mb-1">Please fill up the form</p>
      </div>
      <MultiStepForm />
    </div>
  );
};

export default Home;
