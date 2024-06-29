// import CredentialForm from "./CredentialForm";
// import PersonalInfoForm from "./PersonInfoForm";
import AdditionalInfoForm from "./AdditionalInfoForm";

const MultiStepForm = () => {
  return (
    <div>
      <div>
        <p>Form Navigation</p>
      </div>
      <div>
        {/* <CredentialForm
          onSave={(data) => console.log("cred:save ", data)}
          onNext={() => console.log("cred:next")}
        /> */}
        {/* <PersonalInfoForm
          onBack={() => console.log("pers:back")}
          onSave={(data) => console.log("pers:save ", data)}
          onNext={() => console.log("pers:next")}
        /> */}
        <AdditionalInfoForm
          onBack={() => console.log("addi:back")}
          onSave={(data) => console.log("addi:save ", data)}
        />
      </div>
    </div>
  );
};

export default MultiStepForm;
