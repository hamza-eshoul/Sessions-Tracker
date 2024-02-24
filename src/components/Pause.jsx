import React from "react";

const Pause = ({ minutes }) => {
  return (
    <p className="text-white italic my-6 font-medium max-w-md mx-auto text-center">
      Pause ~{" "}
      <>
        {minutes && <span> {minutes} Minutes </span>}

        {!minutes && <span> 5 Minutes </span>}
      </>
    </p>
  );
};

export default Pause;
