import Simulator from "./simulator.js";





async function test(s, agents,days) {
    await s.init(agents);

    try {
        await s.run(days);
    }catch (err){
        console.error("Error",err);
    }
    // await s.closeUp();
}


async function generateSims(num,total) {

    if(num>= total) return;

    console.log("new simulation");
    let s = new Simulator({save:true,speed:"day",sync:false});

    await test(s, Math.floor(100*Math.random()), Math.floor(100*Math.random()) );

    // await s.closeUp();


    generateSims(num+1,total);
}

generateSims(0,1);