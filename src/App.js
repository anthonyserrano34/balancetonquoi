import React, { useState } from 'react';
import "./App.css";


const scenarios = [
  {
    "scenarioId": 1,
    "url": "ANRz0_oOzK8",
    "description": "Paul touche la joue à Sandrine et semble s'inquiéter de son aspect physique qui semble anormal. Que faites-vous ?",
    "yes": 3,
    "scared": 2,
    "no": 20,
  },
  {
    "scenarioId": 2,
    "url": "fMk9IpX_Fcs",
    "description": "Votre patron fait du chantage à connotation sexuelle à sa secrétaire en échange d'une augmentation. Que faites-vous ?",
    "yes": 15,
    "scared": 10,
    "no": 0,
  },
  {
    "scenarioId": 3,
    "url": "sMuuqmMMjwk",
    "description": "Paul complimente le haut de Mélanie et lui recommande de le porter plus souvent. Que faites-vous ?"
    ,"yes": 8,
    "scared": 2,
    "no": 15,
  },
  {
    "scenarioId": 4,
    "url": "HqJH3ewNEvw",
    "description": "Jean regarde de manière intéressée les fesses de Nathalie lorsque celle-ci passe devant lui. Que faites-vous ?"
    ,"yes": 4,
    "scared": 3,
    "no": 17,
  },
  {
    "scenarioId": 5,
    "url": "hqc9k5ATcKE",
    "description": "Lucie complimente les cheveux de Steve tout en les touchant. Que faites-vous ?"
    ,"yes": 2,
    "scared": 0,
    "no": 23,
  },
  {
    "scenarioId": 6,
    "url": "qa9JfzCKc_4",
    "description": "Jean parle à la nouvelle stagiaire tout en la prenant par la taille. Que faites-vous ?"
    ,"yes": 17,
    "scared": 6,
    "no": 2,
  }
];

function App() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [responseGiven, setResponseGiven] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const scenario = scenarios[currentScenarioIndex];
  const yesPercentage = (scenario.yes / (scenario.yes + scenario.scared + scenario.no)) * 100;
  const scaredPercentage = (scenario.scared / (scenario.yes + scenario.scared + scenario.no)) * 100;
  const noPercentage = (scenario.no / (scenario.yes + scenario.scared + scenario.no)) * 100;
  const totalVotes = scenario.yes + scenario.scared + scenario.no;


  const handleNextScenario = () => {
    if (responseGiven) {
      if (currentScenarioIndex+1 < scenarios.length){
        console.log("next scenario")
        setCurrentScenarioIndex(currentScenarioIndex + 1);
        return setResponseGiven(false);
      }
      console.log("end of game")
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
          <h2>Répondez honnêtement les choix sont anonymes et nous collectons les statistiques pour évaluer la prise de risques des gens afin de les sensibiliser.</h2>
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
              {yesPercentage.toFixed(0)}% des gens seraient intervenus, {scaredPercentage.toFixed(0)}% auraient eu peur d'intervenir et {noPercentage.toFixed(0)}% pensent que la situation est normale ({totalVotes} votes)
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
