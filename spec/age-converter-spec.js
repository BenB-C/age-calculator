import { AgeConverter } from './../src/AgeConverter.js';

const eps = 0.001;
const ageConverter = new AgeConverter(38);

describe('AgeConverter', function() {
  it('should store age in earth years in earthAge property', function() {
    expect(ageConverter.earthAge).toEqual(38);
  });
});

describe('getAge("mercury")', function() {
  it('should return earth age in Mercury years', function() {
    expect(ageConverter.getAge("mercury")).toBeCloseTo(158.33, eps);
  });
});

describe('getAge("venus")', function() {
  it('should return earth age in Venus years', function() {
    expect(ageConverter.getAge("venus")).toBeCloseTo(61.29, eps);
  });
});

describe('getAge("mars")', function() {
  it('should return earth age in Mars years', function() {
    expect(ageConverter.getAge("mars")).toBeCloseTo(20.21, eps);
  });
});

describe('getAge("Jupiter")', function() {
  it('should return earth age in Jupiter years', function() {
    expect(ageConverter.getAge("jupiter")).toBeCloseTo(3.20, eps);
  });
});
