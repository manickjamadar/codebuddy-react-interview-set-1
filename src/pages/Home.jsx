import { useState } from "react";
import SeatRowForm from "../components/TotalCostViewer/SeatRowForm/SeatRowForm";
import TotalCostViewer from "../components/TotalCostViewer/TotalCostViewer";
import { useQuery } from "react-query";
import { seatService } from "../services";

const Home = () => {
  const [totalRow, setTotalRow] = useState(undefined);
  const { data: seatsList, isLoading } = useQuery({
    queryKey: "seatsList",
    queryFn: () => totalRow && seatService.getAllSeatsByRow(totalRow),
    enabled: !!totalRow,
    keepPreviousData: true,
    initialData: [],
  });
  // const reset = ()=>{
  //   setTotalRow(undefined);
  // }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("seatsList: ", seatsList);
  return (
    <div>
      <SeatRowForm onSubmit={setTotalRow} />
      <div className="fixed bottom-0 left-1/2 flex w-1/3 -translate-x-1/2 flex-col items-center justify-center gap-2 rounded-t-lg bg-white px-2 py-3 pt-6 shadow-lg">
        <button className="base-button">Book Seat</button>
        <TotalCostViewer cost={300} />
      </div>
    </div>
  );
};

export default Home;
