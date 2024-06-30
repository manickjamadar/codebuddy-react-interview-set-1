import CredentialForm from "./CredentialForm";
import PersonalInfoForm from "./PersonInfoForm";
import { useCallback, useContext, useMemo } from "react";
import FormTabNavigation from "../FormTabNavigation/FormTabNavigation";
import AdditionalInfoForm from "./AdditionalInfoForm";
import useFormTab from "../../hooks/useFormTab";
import MultiFormContext from "../../contexts/MultiFormContext";
import { toast } from "sonner";
import { useMutation } from "react-query";
import { postService } from "../../services";

const MultiStepForm = () => {
  const { mutate: submitPostMutate } = useMutation((payload) => postService.submitPost(payload));
  const { formData, saveFormData } = useContext(MultiFormContext);
  const { currentTab, activeTabs, goToNextTab, goToPreviousTab, jumpToTab, makeCurrentTabActive } =
    useFormTab();
  const handleSave = useCallback(
    (data) => {
      makeCurrentTabActive();
      saveFormData(data);
      toast.success("Data Saved Successfully");
    },
    [makeCurrentTabActive, saveFormData],
  );
  const handleSubmit = useCallback(
    (data) => {
      const rawData = { ...formData, ...data };
      const payload = {
        emailId: rawData.emailId,
        password: rawData.password,
        firstName: rawData.firstName,
        lastName: rawData.lastName,
        address: rawData.address,
        countryCode: rawData.countryCode,
        phoneNumber: rawData.phoneNumber,
      };
      submitPostMutate(payload, {
        onSuccess: (resData) => {
          console.log("resData: ", resData);
          toast.success("Data Submitted Successfully");
        },
      });
    },
    [submitPostMutate, formData],
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
      <AdditionalInfoForm key="additional-form" onBack={goToPreviousTab} onSave={handleSubmit} />,
    ];
  }, [goToNextTab, goToPreviousTab, handleSubmit, handleSave]);
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
