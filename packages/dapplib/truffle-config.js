require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth soccer minor hockey lock sudden stable'; 
let testAccounts = [
"0x682ffc826b46a472486f0c156374653aae4e47927a41ce2e2b9b320e8fc806e6",
"0x3719671863daa2c17e1f7787004118bf3d44d01b37625a1eae7506e6aebcca22",
"0xb36cbcdfec2ccbd09c6e92bcfb170de7ac925efbb7b0fe7d7fbf04401877ca8a",
"0xc3af406e0c3ba52e30a432e132f85d1013d45fd8b4094dd3b50d0e6394b50f81",
"0xaecf10bbf29fb14bad664b1b4fe86cb5d7797a61014799be0fe6980d97d957e8",
"0x8c17dc0b73b61dbd5fc7beebe825a48c4be5fe07fd7b82fb0768595f45896702",
"0xc347bf2d9e4204151313c5dd350523b708d33d51e4f15cb75133acdeffc28eeb",
"0x2fccd9dd8c1372d6e55560605f101d391c9350ebb5e7213c944b9a12d8168d04",
"0xc5c6b91a88a67857be8a146eb0e51df64cfd63c741b6e8c81786bda5e9eb070b",
"0xcd1df32aef4f48ee6d44f4a0e6880b5172b4881de06c6c4e67a2241ea5527de8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


