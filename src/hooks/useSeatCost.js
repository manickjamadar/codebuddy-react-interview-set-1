import { useCallback, useState } from "react";
const calculateSeatCost = (rowNumber) => rowNumber * 10;
const ticketCost = 20;
const useSeatCost = () => {
  const [seatCostMap, setSeatCostMap] = useState(new Map());
  const initializeSeatCost = (rowSeatsList) => {
    const newSeatCostMap = new Map();
    rowSeatsList.forEach((row) => {
      row.seats.forEach((seat) => {
        newSeatCostMap.set(seat.id, calculateSeatCost(seat.row + 1));
      });
    });
    setSeatCostMap(newSeatCostMap);
  };
  const getTotalCost = useCallback(
    (seatIdList) => {
      if (seatIdList.length === 0) {
        return 0;
      }
      const totalSeatCost = seatIdList.reduce(
        (total, seatId) => seatCostMap.get(seatId) + total,
        0,
      );
      return totalSeatCost + ticketCost;
    },
    [seatCostMap],
  );
  return {
    initializeSeatCost,
    getTotalCost,
  };
};

export default useSeatCost;
