import { expect } from 'chai';
import { JourneyCalculator } from '../index';
import { Train } from './../interfaces/train.interface';
import { Values } from './../values';
const sinon = require('sinon');

describe('JourneyCalculator', () => {
  describe('getNextTrainTime', () => {
    it('should return no available trains when there are no trains', () => {
      const journeyCalculator = new JourneyCalculator([]);
      expect(journeyCalculator.getNextTrainTime('London', 'Manchester')).eql(
        Values.noTrainsMessage
      );
    });
    it('should return time for next departure for destination, when a train exists for the start location', () => {
      // sinon.stub(journeyCalculator, 'getCurrentTime').returns('10:00');
      const train: Train = {
        stops: [
          {
            location: 'London',
            time: '10:00',
          },
        ],
      };

      const journeyCalculator = new JourneyCalculator([train]);
      expect(journeyCalculator.getNextTrainTime('London', 'Manchester')).eql(
        '10:00'
      );
    });

    it('should return no available trains when there are no trains for the start location', () => {
      const train: Train = {
        stops: [
          {
            location: 'Manchester',
            time: '10:00',
          },
        ],
      };

      const journeyCalculator = new JourneyCalculator([train]);
      expect(journeyCalculator.getNextTrainTime('London', 'Manchester')).eql(
        Values.noTrainsMessage
      );
    });

    it('should return no available trains when there are no trains going to the destination', () => {
      const train: Train = {
        stops: [
          {
            location: 'London',
            time: '10:00',
          },
        ],
      };

      const journeyCalculator = new JourneyCalculator([train]);
      expect(journeyCalculator.getNextTrainTime('London', 'Manchester')).eql(
        Values.noTrainsMessage
      );
    });
  });
});
