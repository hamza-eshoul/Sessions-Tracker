import { useFetch } from "./hooks/useFetch";
import { useSelector } from "react-redux";

// components
import Session from "./components/Session";

const App = () => {
  const morningSessions = useSelector((state) => state.session.morningSessions);
  const lunchSession = useSelector((state) => state.session.lunchSession);
  const afterNoonSessions = useSelector(
    (state) => state.session.afterNoonSessions
  );

  useFetch();

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

          {morningSessions.length !== 0 &&
            morningSessions.map((session) => (
              <Session
                id={session.id}
                sessionCol="morningSessions"
                sessionNbr={session.sessionNbr}
                sessionTime={session.sessionTime}
                isSessionCompleted={session.isSessionCompleted}
                isPauseAfterSession={session.isPauseAfterSession}
                isSmall={session.sessionNbr == 100}
              />
            ))}
        </div>

        <div>
          <h2 className="text-white bg-gradient-to-l rounded-lg from-[#00022C] to-[#020860] font-semibold text-2xl text-center py-3 shadow-lg ">
            Lunch - Break - Session
          </h2>

          {lunchSession.length !== 0 &&
            lunchSession.map((session) => (
              <Session
                id={session.id}
                sessionCol="lunchSession"
                sessionTime={session.sessionTime}
                isSmall={true}
                isSessionCompleted={session.isSessionCompleted}
              />
            ))}
        </div>

        <div>
          <h2 className="text-white bg-gradient-to-l rounded-lg from-[#00022C] to-[#020860] font-semibold text-2xl text-center py-3 shadow-lg ">
            Afternoon - Sessions
          </h2>

          {afterNoonSessions.length !== 0 &&
            afterNoonSessions.map((session) => (
              <Session
                id={session.id}
                sessionCol="afterNoonSessions"
                sessionNbr={session.sessionNbr}
                sessionTime={session.sessionTime}
                isSessionCompleted={session.isSessionCompleted}
                isPauseAfterSession={session.isPauseAfterSession}
                isSmall={session.sessionNbr == 100}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default App;
