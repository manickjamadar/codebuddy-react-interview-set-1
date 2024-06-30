import { useMemo, useState } from "react";
import SeatRowForm from "../components/TotalCostViewer/SeatRowForm/SeatRowForm";
import TotalCostViewer from "../components/TotalCostViewer/TotalCostViewer";
import { useQuery } from "react-query";
import { seatService } from "../services";
import SeatsRenderer from "../components/SeatsRenderer/SeatsRenderer";
import useSeatIds from "../hooks/useSeatIds";
import { toast } from "sonner";
import useSeatCost from "../hooks/useSeatCost";
import { MAXIMUM_SEAT_BOOKING_ALLOWED } from "../config/constant";

const Home = () => {
  const [totalRow, setTotalRow] = useState(undefined);
  const {
    selectedSeatIdList,
    isSeatSelected,
    toggleSeatSelection,
    totalSelectedSeats,
    resetSelectedSeats,
  } = useSeatIds();
  const { initializeSeatCost, getTotalCost } = useSeatCost();
  const { data: seatsList, isLoading } = useQuery({
    queryKey: ["seatsList", totalRow],
    queryFn: () => (totalRow ? seatService.getAllSeatsByRow(totalRow) : []),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    initialData: [],
    onSuccess: (rowSeatsList) => {
      resetSelectedSeats();
      initializeSeatCost(rowSeatsList);
    },
  });
  const handlSeatClick = (seatId) => {
    if (totalSelectedSeats === MAXIMUM_SEAT_BOOKING_ALLOWED && !isSeatSelected(seatId)) {
      toast.error("Maximum seat limit per booking reached");
    } else {
      toggleSeatSelection(seatId);
    }
  };
  const handleTotalRowSubmit = (newTotalRow) => {
    setTotalRow(newTotalRow);
  };
  const totalCost = useMemo(
    () => getTotalCost(selectedSeatIdList),
    [selectedSeatIdList, getTotalCost],
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SeatRowForm onSubmit={handleTotalRowSubmit} />
      <div className="mb-4"></div>
      <SeatsRenderer
        isSeatSelected={isSeatSelected}
        rowSeatsList={seatsList}
        onSeatClick={handlSeatClick}
      />
      <div className="fixed bottom-0 left-1/2 flex w-1/3 -translate-x-1/2 flex-col items-center justify-center gap-2 rounded-t-lg bg-white px-2 py-3 pt-6 shadow-lg">
        <button className="base-button" disabled={totalSelectedSeats === 0}>
          Book Now
        </button>
        <TotalCostViewer cost={totalCost} />
      </div>
    </div>
  );
};

export default Home;
