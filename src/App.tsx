import Complited from "@/components/complited/complited";
import Girls from "@/components/girls/girls";
import Loading from "@/components/loading/loading";
import Politic from "@/components/politic/politic";
import Prew from "@/components/prew/prew";
import Quiz from "@/components/quiz/quiz";
import Warn from "@/components/warn/warn";
import React from "react";

const App = () => {
  const [index, setIndex] = React.useState(0);
  console.log(index);
  

  return (
    <div className="app">
      <Girls index={index} />
      <div className="main">
        <div className="logo">
          <img src="/public/assets/logo_inq.png" alt="logo" />
        </div>
        <div className="content">
          {index === 0 && <Prew setIndex={setIndex} />}
          {index === 1 && <Warn setIndex={setIndex} />}
          {index >= 2 && index < 5 && (
            <Quiz index={index} setIndex={setIndex} />
          )}
          {index === 5 && <Loading setIndex={setIndex} />}
          {index === 6 && <Complited setIndex={setIndex} />}
        </div>
        <Politic />
      </div>
    </div>
  );
};

export default App;
