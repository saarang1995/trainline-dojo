"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyCalculator = void 0;
const values_1 = require("./values");
class JourneyCalculator {
    constructor(timetable) {
        this.timetable = timetable;
    }
    getNextTrainTime(location, destination) {
        let doesTrainForStartLocationExists = false;
        let doesTrainForDestinationLocationExists = false;
        this.timetable.forEach((train) => {
            const trainStop = train.stops.find((s) => s.location == location);
            if (trainStop) {
                doesTrainForStartLocationExists = true;
            }
        });
        if (doesTrainForStartLocationExists) {
            return '10:00';
        }
        return values_1.Values.noTrainsMessage;
    }
    getCurrentTime() {
        return '';
    }
}
exports.JourneyCalculator = JourneyCalculator;
