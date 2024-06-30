import SeatRowForm from "../components/TotalCostViewer/SeatRowForm/SeatRowForm";

const Home = () => {
  return (
    <div>
      <SeatRowForm onSubmit={(totalRow) => console.log("submitted row: ", totalRow)} />
      <div>
        <div>
          <p className="text-center">No Seats Available</p>
        </div>
        <div className="fixed bottom-0 left-1/2 flex w-1/3 -translate-x-1/2 flex-col items-center justify-center gap-2 rounded-t-lg bg-white px-2 py-3 pt-6 shadow-lg">
          <button className="base-button">Book Seat</button>
          <p className="text-sm font-medium italic">
            Total Cost: <span className="text-green-700">$0</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
