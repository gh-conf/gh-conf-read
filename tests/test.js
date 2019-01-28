const expect = require('chai').expect;

const { readConf } = require('../index');


describe('Should validate all github read config tests', () => {
  it('should throw an error of no path', async () => {
    readConf().catch((err) => {
      expect(err.status).to.equal('err');
      expect(err.message).to.equal('No path input');
      expect(err.data).to.deep.equal({});
    });
  });
  it('should throw an error of not including git/config in path', () => {
    readConf('../.git/config').catch((err) => {
      expect(err.status).to.equal('err');
      expect(err.message).to.equal(`Pass only repository path, do not include '.git/config'`);
      expect(err.data).to.deep.equal({});
    });
  });
  it('should throw file not found error', () => {
    readConf('../').catch((err) => {
      expect(err.status).to.equal('err');
      expect(err.message).to.equal(`../.git/config not found`);
      expect(typeof err.data).to.equal('object');
    });
  });
  it('should return git/config file content', async () => {
    const data = await readConf('./');
    expect(data.length).to.greaterThan(0);
  });
});