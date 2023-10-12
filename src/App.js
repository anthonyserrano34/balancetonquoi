import React, { useState } from 'react';
import "./App.css";


const scenarios = [
  {
    "scenarioId": 1,
    "url": "1A_AzCsEqAk",
    "description": "Votre patron fait des avances sexuelles à votre collègue de travail. Celle-ci semble gênée par la situation. Que faites-vous ?"
  },
  {
    "scenarioId": 2,
    "url": "2B_BzDsFqBl",
    "description": "Vous êtes témoin d'un accident de la route. Les conducteurs sont blessés, mais vous êtes en retard pour une réunion importante. Que faites-vous ?"
  },
  {
    "scenarioId": 3,
    "url": "3C_CzEsGrHqDm",
    "description": "Vous trouvez un portefeuille contenant de l'argent et des cartes d'identité. Il n'y a pas de coordonnées pour le propriétaire. Que faites-vous ?"
  }
];

function App() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [responseGiven, setResponseGiven] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const scenario = scenarios[currentScenarioIndex];

  const handleNextScenario = () => {
    if (responseGiven) {
      if (currentScenarioIndex < scenarios.length){
        setCurrentScenarioIndex(currentScenarioIndex + 1);
        setResponseGiven(false);
      }
    }
  };

  const handleResponse = () => {
    setResponseGiven(true);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  if (!gameStarted) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-5xl font-squash m-5">#BalanceTonQuoi</h1>
          <h2>Vous allez être confronté à des potentiels scénarios d'harcèlement sexuel dans le monde du travail, 3 choix vous seront proposés : "J'interviens", "J'ai peur d'intervenir" ou "Tout est normal". </h2>
          <h2>Répondez honnêtement les choix sont anonymes et nous collectons les statistiques pour évaluer la prise des risques des gens afin de les sensibiliser.</h2>
          <h2>Lorsque vous aurez soumis votre réponse les statistiques des autres joueurs seront affichés.</h2>
          <button className="box-border border-2 border-black m-5 rounded cursor-pointer font-squash bg-white text-black text-3xl px-6 py-4 hover:bg-black hover:text-white m-3" onClick={startGame}>
            Suivant
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App game-page">
      <div class="text-black text-center box-border mt-2 font-squash text-5xl">
        #BalanceTonQuoi
      </div>
      
      <div class="text-center box-border m-0 font-composition text-lg">
        Scénario {scenario.scenarioId}
      </div>

      <div className="flex justify-center items-center m-10">
        <iframe
          width="800"
          height="500"
          src={`https://www.youtube.com/embed/${scenario.url}`}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div className="max-w-screen-lg mx-auto text-black text-center box-border m-0 font-squash text-4xl">
        {scenario.description}
      </div>

      {responseGiven ? (
        <div>
          <div class="text-base text-black box-border m-0 flex justify-center mt-6">
          </div>
          <div class="absolute inset-x-0 bottom-0 text-black justify-center items-center [background:rgb(255,255,255)] animate-[0.5s_ease-in-out_1.5s_1_normal_forwards_running_goUp-bc056712] shadow-[rgb(255,255,255)_0px_-10px_25px_5px] [font-family:JustSquash] p-5 border-t-[3px] border-t-black border-solid ">
            <div className="flex justify-between items-center">
              <div class="cursor-pointer text-black box-border font-composition text-xl">
              </div>
              <div class="cursor-pointer text-black box-border font-composition text-2xl">
                66% des gens seraient intervenus, 23% auraient eu peur d'intervenir et 11% pensent que la situation est normale (13 votes)
              </div>
              <button onClick={handleNextScenario} className="cursor-pointer bg-black text-2xl text-white font-composition px-6 py-4 rounded hover:bg-white hover:text-black border border-black">Suivant</button>
            </div>
          </div>
        </div>
      ) : (
        <div class="text-base text-black box-border m-0 flex justify-center mt-6">
          <div class="box-border border-2 border-black m-3 block rounded cursor-pointer font-squash text-black p-3 text-3xl hover:bg-black hover:text-white" onClick={handleResponse}>
            J'interviens
          </div>
          <div class="box-border border-2 border-black m-3 block rounded cursor-pointer font-squash text-black p-3 text-3xl hover:bg-black hover:text-white" onClick={handleResponse}>
            Je n'oserais pas intervenir
          </div>
          <div class="box-border border-2 border-black m-3 block rounded cursor-pointer font-squash text-black p-3 text-3xl hover:bg-black hover:text-white" onClick={handleResponse}>
            Tout est normal
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
