import React from 'react';
import './App.css';
import Oppmuntring from "./componenst/Oppmuntring";
import Bird from "./componenst/Bird";
import Gud from "./componenst/Gud";


const App = () => {

  const birds = ["seagull", "hummingbird", "blackbird", "parakeet"]

  const guder = [
    {navn: "Balder", besk: "Ås, gud for lys, skjønnhet, kjærlighet og lykke"},
    {navn: "Brage", besk: "Ås, gud for diktning, veltalenhet og skaldekunst"},
    {navn: "Eir", besk: "Gudinne for legekunsten, en av Menglads Frøyas?) ni møyer"},
    {navn: "Frøya", besk: "Vane, fruktbarhetsgudinne"}
  ]
  
  return(
    <main>
      <div className="App">    
        <Oppmuntring navn="Rick Astley" emne="Kunsten å synge rent" />
      </div>
      //oppgave_3
       <h1>Bird's list:</h1>
       <ul>
           {birds.map((bird, index)=> <li key={index}>{bird}</li>)}
       </ul>
       //oppgave_4
       <h1>Birds list:</h1>
       <ul>
           {birds.map((bird, index)=> <Bird name={bird}  key={index}/>)}
    
       </ul>
       //oppgave_5
       {guder.map( (gud, index) => <Gud name={gud.navn} beskrivelse={gud.besk} key={index}/>)}
    </main>     
  )
}


export default App;
