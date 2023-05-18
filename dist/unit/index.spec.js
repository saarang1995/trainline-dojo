"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("./../index");
describe('JourneyCalculator', () => {
    const journeyCalculator = new index_1.JourneyCalculator();
    describe('getNextTrainTime', () => {
        it('should return the next departure for destination', () => {
            const time = journeyCalculator.getNextTrainTime('London', 'Manchester');
            (0, chai_1.expect)(time).eql('10:00');
        });
    });
});
