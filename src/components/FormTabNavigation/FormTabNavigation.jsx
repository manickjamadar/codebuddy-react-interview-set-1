import PropTypes from "prop-types";
import { useMemo } from "react";
import { cn } from "../../utils/cn";
//button state => in-progress, active, disabled, selected
//line state=> in-progress, active, disabled
//tab structure
//{num:number,hasLine:boolean,disabled:boolean,selected:boolean,active:boolean}
const FormTabNavigation = (props) => {
  const { totalTabs, currentTab, activeTabs = [], onTabClick } = props;
  const activeTabsSet = useMemo(() => new Set(activeTabs), [activeTabs]);
  const tabs = useMemo(() => {
    return Array.from({ length: totalTabs }, (_, index) => {
      const tabNum = index + 1;
      const isSelected = currentTab === tabNum;
      return {
        num: tabNum,
        hasLine: index !== 0,
        disabled: !activeTabsSet.has(tabNum) && !isSelected,
        selected: isSelected,
        active: activeTabsSet.has(tabNum),
      };
    });
  }, [totalTabs, activeTabsSet, currentTab]);
  return (
    <div className="card flex">
      {tabs.map((tab) => {
        return (
          <div key={tab.num} className={cn("flex items-center", tab.hasLine ? "flex-1" : "")}>
            {tab.hasLine && (
              <div
                className="tab-line flex-1"
                aria-disabled={tab.disabled}
                data-active={tab.active}
              ></div>
            )}
            <button
              className="tab-button"
              disabled={tab.disabled}
              data-selected={tab.selected}
              data-active={tab.active}
              onClick={() => onTabClick && onTabClick(tab.num)}
            >
              {tab.num}
            </button>
          </div>
        );
      })}
    </div>
  );
};
FormTabNavigation.propTypes = {
  totalTabs: PropTypes.number.isRequired,
  currentTab: PropTypes.number.isRequired,
  activeTabs: PropTypes.arrayOf(PropTypes.number),
  onTabClick: PropTypes.func,
};
export default FormTabNavigation;
