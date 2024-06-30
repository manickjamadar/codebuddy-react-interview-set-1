import CredentialForm from "./CredentialForm";
import PersonalInfoForm from "./PersonInfoForm";
import { useCallback, useMemo } from "react";
import FormTabNavigation from "../FormTabNavigation/FormTabNavigation";
import AdditionalInfoForm from "./AdditionalInfoForm";
import useFormTab from "../../hooks/useFormTab";

const MultiStepForm = () => {
  const { currentTab, activeTabs, goToNextTab, goToPreviousTab, jumpToTab, makeCurrentTabActive } =
    useFormTab();
  const handleSave = useCallback(
    (data) => {
      makeCurrentTabActive();
      console.log("saving: ", data);
    },
    [makeCurrentTabActive],
  );
  const handleSubmit = useCallback(() => {
    console.log("submitting");
  }, []);
  const handleSaveAndSubmit = useCallback(
    (data) => {
      handleSave(data);
      handleSubmit();
    },
    [handleSave, handleSubmit],
  );
  const formList = useMemo(() => {
    return [
      <CredentialForm key="cred-form" onSave={handleSave} onNext={goToNextTab} />,
      <PersonalInfoForm
        key="personal-form"
        onBack={goToPreviousTab}
        onSave={handleSave}
        onNext={goToNextTab}
      />,
      <AdditionalInfoForm
        key="additional-form"
        onBack={goToPreviousTab}
        onSave={handleSaveAndSubmit}
      />,
    ];
  }, [goToNextTab, goToPreviousTab, handleSaveAndSubmit, handleSave]);
  return (
    <div className="flex flex-col gap-4">
      <FormTabNavigation
        totalTabs={formList.length}
        currentTab={currentTab}
        activeTabs={activeTabs}
        onTabClick={jumpToTab}
      />
      <div>{formList[currentTab - 1]}</div>
    </div>
  );
};

export default MultiStepForm;
