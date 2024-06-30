import CredentialForm from "./CredentialForm";
import PersonalInfoForm from "./PersonInfoForm";
import { useCallback, useContext, useMemo } from "react";
import FormTabNavigation from "../FormTabNavigation/FormTabNavigation";
import AdditionalInfoForm from "./AdditionalInfoForm";
import useFormTab from "../../hooks/useFormTab";
import MultiFormContext from "../../contexts/MultiFormContext";
import { toast } from "sonner";

const MultiStepForm = () => {
  const { saveFormData } = useContext(MultiFormContext);
  const { currentTab, activeTabs, goToNextTab, goToPreviousTab, jumpToTab, makeCurrentTabActive } =
    useFormTab();
  const handleSave = useCallback(
    (data, showToast = true) => {
      makeCurrentTabActive();
      saveFormData(data);
      showToast && toast.success("Data Saved Successfully");
    },
    [makeCurrentTabActive, saveFormData],
  );
  const handleSubmit = useCallback(() => {
    toast.success("Data Submitted Successfully");
  }, []);
  const handleSaveAndSubmit = useCallback(
    (data) => {
      handleSave(data, false);
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
