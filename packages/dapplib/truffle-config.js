require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note snow pulp harvest bread slot gentle'; 
let testAccounts = [
"0xa042857974a96f6dcc3ac27a9e902c5f730e51a093687b74afda57a225d67898",
"0x11409b8f694a4be2d05d4401f35449500d94402b743eb27f1268d0366a09be4c",
"0xf6e2d2f5e232132d468e21c09c68d18908a49b9403ddd6a801d456eeeb26a00f",
"0x7c4af52b2005ae264472e82a5bf6840d8eea6386abb44d1c3f8ed8d1dda4bffd",
"0x4de287c565bb33944894baa3e364b7861a9f132fe5b75ec08fb700250860d6f7",
"0x718c6b9d816fdcee629c1df475009eadb45244cd55c681f7f91357b6363bcaa5",
"0x201b4ed8b05fbb713367971860841fbf430f36ee9a6628dde3572bc3993619ff",
"0xf00cca076db2e00d360099faf4186c7e9434f29d2f65d2ca09fce0de3ee26e59",
"0xe787ac41388d0bb22339780fa132faaa96c96826c2963fb06286b45cc9634b72",
"0x88a29654c33fc6e0405ebc5b14a5c0820dae6d6c86da73bea57b66f104891b35"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

