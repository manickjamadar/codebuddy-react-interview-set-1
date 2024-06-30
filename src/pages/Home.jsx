import { useState } from "react";
import SeatRowForm from "../components/TotalCostViewer/SeatRowForm/SeatRowForm";
import TotalCostViewer from "../components/TotalCostViewer/TotalCostViewer";
import { useQuery } from "react-query";
import { seatService } from "../services";
import SeatsRenderer from "../components/SeatsRenderer/SeatsRenderer";
import useSeatIds from "../hooks/useSeatIds";
import { toast } from "sonner";

const Home = () => {
  const [totalRow, setTotalRow] = useState(undefined);
  const { isSeatSelected, toggleSeatSelection, totalSelectedSeats, resetSelectedSeats } =
    useSeatIds();
  const { data: seatsList, isLoading } = useQuery({
    queryKey: ["seatsList", totalRow],
    queryFn: () => totalRow && seatService.getAllSeatsByRow(totalRow),
    enabled: !!totalRow,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    initialData: [],
    onSuccess: () => {
      resetSelectedSeats();
    },
  });
  const handlSeatClick = (seatId) => {
    if (totalSelectedSeats === 5 && !isSeatSelected(seatId)) {
      toast.error("Maximum of 5 seats per booking is allowed");
    } else {
      toggleSeatSelection(seatId);
    }
  };
  const handleTotalRowSubmit = (newTotalRow) => {
    setTotalRow(newTotalRow);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // console.log("seatsList: ", seatsList);
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
        <TotalCostViewer cost={300} />
      </div>
    </div>
  );
};

export default Home;
