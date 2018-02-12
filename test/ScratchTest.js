import mlog from 'mocha-logger';
const util = require('util');

const BigNumber = web3.BigNumber;

require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

const Zydecoin = artifacts.require('Zydecoin');
const Scratch = artifacts.require('Scratch');

contract('Scratch', function ([owner, actor]) {
    const amount = 10000;

    before(async function () {
        this.token = await Zydecoin.new({from: owner});
        await this.token.mint(actor, amount, {owner});
    });

    describe('Let us do this thing', function () {

        it('verify that the actor has Zydecoins', async function () {
            const balance = await this.token.balanceOf(actor);
            assert.equal(balance, amount);
        });
    });
});
