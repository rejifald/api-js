
import 'jest';
import webpack from 'webpack';
import configCallback from '../webpack.config';

describe('webpack bundle result', () => {
  test('should generate rest-js.js and rest-js.d.ts in development mode', (done) => {
    // Run webpack
    webpack(configCallback({}, { mode: 'development' }), (err, stats) => {
      // Fail test if error
      if (err) {
        throw new Error('webpack failed to run given configuration');
        done();
      }

      // Map assets to fileNames
      const fileNames: string = stats.toJson().assets.map((asset: any) => asset.name);
      expect(fileNames).toEqual(expect.arrayContaining(['rest-js.js', 'rest-js.d.ts']));
      done();
    });
  });

  test('should generate rest-js.min.js and rest-js.d.ts in production mode', (done) => {
    // Run webpack
    webpack(configCallback({}, { mode: 'production' }), (err, stats) => {
      // Fail test if error
      if (err) {
        throw new Error('webpack failed to run given configuration');
        done();
      }

      // Map assets to fileNames
      const fileNames: string = stats.toJson().assets.map((asset: any) => asset.name);
      expect(fileNames).toEqual(expect.arrayContaining(['rest-js.min.js', 'rest-js.d.ts']));
      done();
    });
  });
});
