const factomd = require('../../factomdjs'),
    walletd = require('../../factom-walletdjs');

const add = require('./add'),
    get = require('./get'),
    ack = require('./ack');

class FactomCli {
    constructor(opt) {
        factomd.setFactomNode(`http://${opt.host}:${opt.port}/v2`)
        this.factomd = factomd;
        this.walletd = walletd;
    }

    // Add

    addChain(chain, ecAddress) {
        return add.addChain(this.factomd, chain, ecAddress);
    }

    addEntry(entry, ecAddress) {
        return add.addEntry(this.factomd, entry, ecAddress);
    }

    addEntries(entries, ecAddress) {
        return add.addEntries(this.factomd, entries, ecAddress);
    }

    // Get

    getAllEntriesOfChain(chainId) {
        return get.getAllEntriesOfChain(this.factomd, chainId);
    }

    getChainHead(chainId) {
        return get.getChainHead(this.factomd, chainId);
    }

    getAllEntriesOfEntryBlock(keymr) {
        return get.getAllEntriesOfEntryBlock(this.factomd, keymr);
    }

    getFirstEntry(chainId) {
        return get.getFirstEntry(this.factomd, chainId);
    }

    getBalance(address) {
        return get.getBalance(this.factomd, address);
    }

    getProperties() {
        return get.getProperties(this.factomd);
    }

    // Ack
    waitOnCommitAck(txid, timeout) {
        return ack.waitOnCommitAck(this.factomd, txid, timeout);
    }

    waitOnRevealAck(hash, chainId, timeout) {
        return ack.waitOnRevealAck(factomd, hash, chainId, timeout);
    }
}

module.exports = {
    FactomCli
};