# Community-Planner-Simulation

## Setup of the model
Configuration module includes the definition of how the location and agents behave. The definition of the ``configuration`` parameters is included the module [readme](https://github.com/GATEKEEPER-OU/coolsim-configuration).

## Setup of the simulation
In a nutshell, the first step concerns the setup of the agent, community and storage parameters. 

The generation of data generation is triggered by running a community simulation on the simulator engine (simulator) 

Simulator is instantiated by providing a speed setting a speed defining how much time should pass in a real-time second, e.g., 1 hour (default), a day or an arbitrary number of seconds. Simulator can generate native data in the same format of the configuration settings but can be set to generate data in other formats defined as part of the store module (transformers), like FHIR, and where data should be pushed (e.g., live database or file system). 

## Running a simulation
The simulation run is instantiated by providing as input the number of agents and days. 

Check ``test.js`` to see how to instantiate the simulator and how to setup a simulation run.

Following an example of how to setup and run a simulation of **1000 agents** for **100 days**.
```
// instantiation of the simulation engine
Const SimulationEngine = 
new Simulator({save:true,speed:"day",sync:false});
Const days = 100;
Const agents = 1000; 
test(SimulationEngine, agents, days); 

async function test(SimulationEngine, agents,days) {
	// setup the run with the creation of the agent population
   await s.init(agents);
   try {
	// run simulation for a given number o days
      await s.run(days);
   } catch (err){
   	console.error("Error",err);
   }
}
```
