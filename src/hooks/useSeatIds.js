import { useMemo, useState } from "react";

const useSeatIds = () => {
  const [selectedSeatIds, setSelectedSeatIds] = useState(new Set());
  const isSeatSelected = (seatId) => {
    return selectedSeatIds.has(seatId);
  };
  const toggleSeatSelection = (seatId) => {
    setSelectedSeatIds((prevIds) => {
      const newIds = new Set(prevIds);
      if (newIds.has(seatId)) {
        newIds.delete(seatId);
      } else {
        newIds.add(seatId);
      }
      return newIds;
    });
  };
  const resetSelectedSeats = () => {
    setSelectedSeatIds(new Set());
  };
  const selectedSeatIdList = useMemo(() => Array.from(selectedSeatIds), [selectedSeatIds]);
  return {
    isSeatSelected,
    totalSelectedSeats: selectedSeatIds.size,
    toggleSeatSelection,
    resetSelectedSeats,
    selectedSeatIdList,
  };
};
export default useSeatIds;
