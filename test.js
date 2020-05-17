import Simulator from "./simulator.js";



let s = new Simulator({id:"sim-123",save:true,speed:"second",sync:false});

test(1000,365);

async function test(agents,days) {
    await s.init(agents);

    await s.run(days);

    await s.closeUp();
}