// this module helps the definition of a new emulation binding together
//
// simulation
//      id self generated
//      area {id, population, neighbours}
//          neighbours {area_id, connections} // list of close areas
//              - connections, rate of population moving daily to the neighbour area
//      params
//          - actions
//          - status
//          - conditions
//          - events
//      schedule
//          - speed: string or number (utility to convert), e.g. 3600 = 1h each second
//          - cycles: integer, 0: until death of all agents
//          - events: {event_id, day} schedule of events at given cycles
//          - population: {rate, max, min, initial}
//              rate: integer, 0: none, 1: for each death, 2: for each death. 0.5 one each two deaths..
//              initial, integer number of population at day 0
//              max, number of max population
//              min, number of min population

import Simulator from "./simulator.js";







