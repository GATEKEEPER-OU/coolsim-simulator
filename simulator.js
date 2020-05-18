import Agents from "../Agent/index.js";
import Store from "../Store/index.js";
import uniqid from "uniqid";


// todo import locations
import Events from "../Locations/Events/index.js";




export default class{

    constructor(params = {}){
        let {
            speed = "hour",
            id = uniqid("sim-"),
            save = false,
            sync = true
        } = params;


        this.id = id;

        this.agents = new Agents({
            simulation:this.id,
            speed,
            save,
            sync
        });

        this.params = {
            _id:this.id,
            simulation:this.id,
            speed,
            save,
            sync,
            agents: 0
        };

        if(this.params.save){
            try {
                this.store = new Store({type: "simulations"});
            }catch (err){
                console.error("store error",err)
            }
        }

        this.eventsHelper = new Events();

    }

    async init(agents){
        console.time("user generation");
        await this.agents.init(agents);
        console.timeEnd("user generation");
        this.params.agents = agents;
        await this._record();
    }

    async run(days){
        try {
            // generate events
            let events = this.eventsHelper.today();
            console.time("simulation");
            for(let day= 0; day < days; day++){
                console.time(`Day ${day+1}`);
                let summary = await this.agents.run(events);
                console.timeEnd(`Day ${day+1}`);
            }
            console.timeEnd("simulation");
        }catch (err){
            console.error(err);
        }

    }
    async closeUp(){
        console.time("clean-up");
        await this.agents.closeUp();
        console.timeEnd("clean-up");
    }


    async _record(){
        if(!this.store){return Promise.resolve("I'm not keeping this in the diary...")}
        let r = await this.store.save(this.params);
        // console.log("saved?",r);
    }

}