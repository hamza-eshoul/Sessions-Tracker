// components
import Pause from "./components/Pause";
import Session from "./components/Session";

const App = () => {
  return (
    <main className="min-h-screen pt-12 bg-gradient-to-b from-[#00022C] to-[#020860]">
      <h1 className="text-center text-3xl max-w-lg mx-auto text-white font-semibold bg-[#02123A] p-3 rounded-lg shadow-lg">
        Work - Sessions - Tracker
      </h1>

      <section className="flex justify-between max-w-7xl mx-auto pt-10">
        <div>
          <h2 className="text-white bg-gradient-to-l rounded-lg from-[#00022C] to-[#020860] font-semibold text-2xl text-center py-3 shadow-lg">
            Morning - Sessions
          </h2>

          <Session sessionNbr={1} sessionTime={"9H ~ 9H50"} />
          <Session sessionNbr={2} sessionTime={"9H50 ~ 10H40"} />
          <Session sessionNbr={3} sessionTime={"10H40 ~ 11H30"} />

          <Pause />

          <Session sessionNbr={4} sessionTime={"11H35 ~ 12H25"} />

          <Session sessionTime={"12H25 ~ 13H00"} isSmall={true} />
        </div>

        <div>
          <h2 className="text-white bg-gradient-to-l rounded-lg from-[#00022C] to-[#020860] font-semibold text-2xl text-center py-3 shadow-lg ">
            Lunch - Break - Session
          </h2>

          <Pause minutes={30} />

          <Session
            sessionNbr={2}
            sessionTime={"13H30 ~ 14H00"}
            isSmall={true}
          />
        </div>

        <div>
          <h2 className="text-white bg-gradient-to-l rounded-lg from-[#00022C] to-[#020860] font-semibold text-2xl text-center py-3 shadow-lg ">
            Afternoon - Sessions
          </h2>
          <Session sessionNbr={5} sessionTime={"14H ~ 14H50"} />
          <Session sessionNbr={6} sessionTime={"14H50 ~ 15H40"} />
          <Pause />
          <Session sessionNbr={7} sessionTime={"15H45 ~ 16H35"} />
          <Session sessionNbr={8} sessionTime={"16H35 ~ 17H25"} />

          <Session sessionTime={"17H25 ~ 18H00"} isSmall={true} />
        </div>
      </section>
    </main>
  );
};

export default App;
