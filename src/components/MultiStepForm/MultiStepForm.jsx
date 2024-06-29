import CredentialForm from "./CredentialForm";
// import PersonalInfoForm from "./PersonInfoForm";

const MultiStepForm = () => {
  return (
    <div>
      <div>
        <p>Form Navigation</p>
      </div>
      <div>
        <CredentialForm />
        {/* <PersonalInfoForm /> */}
      </div>
    </div>
  );
};

export default MultiStepForm;
