import { useCallback, useMemo, useState } from "react";
const useFormTab = (defaultCurrentTab = 1) => {
  const [currentTab, setCurrentTab] = useState(defaultCurrentTab);
  const [activeTabs, setActiveTabs] = useState(new Set());
  const makeCurrentTabActive = useCallback(() => {
    setActiveTabs((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.add(currentTab);
      return newSet;
    });
  }, [currentTab]);
  const goToNextTab = () => {
    setCurrentTab((prev) => prev + 1);
  };
  const goToPreviousTab = () => {
    setCurrentTab((prev) => prev - 1);
  };
  const jumpToTab = (tab) => {
    setCurrentTab(tab);
  };
  const activeTabsList = useMemo(() => Array.from(activeTabs), [activeTabs]);
  return {
    goToNextTab,
    goToPreviousTab,
    jumpToTab,
    currentTab,
    activeTabs: activeTabsList,
    makeCurrentTabActive,
  };
};

export default useFormTab;
