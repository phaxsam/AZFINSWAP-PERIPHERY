const Router = artifacts.require("UniswapV2Router02.sol");
const Weth = artifacts.require("Weth.sol");

module.exports = async function (deployer, network) {
    let weth;
    const FACTORY_ADDRESS = "0x3aB76E035B0B614FFBB23305075bb5c119aD316e";
   
    if(network === 'mainnet') {
        weth = await Weth.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'); 
    } else {
        await deployer.deploy(Weth);
        weth = await Weth.deployed();
    }
   
   await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};