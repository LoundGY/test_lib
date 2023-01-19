const { compilerOptions: { paths } } = require('../../tsconfig.json');

const moduleNameMapper = Object.fromEntries(
  Object.entries(paths).map(([key, value]) => {
    return [
      key.replace(/\*$/, '(.*)'), 
      `<rootDir>/${value[0].replace(/\*$/, '$1')}`
    ];
  })
);

globalThis.ngJest = {
	skipNgcc: true,
	tsconfig: 'tsconfig.spec.json',
};

module.exports = {
  moduleNameMapper,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  // these are the defaults reporters. 'text' is replaced with 'text-summary' to not pollute the console
  coverageReporters: ['json', 'lcov', 'clover', 'text-summary'],
};
