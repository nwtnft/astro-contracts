const hre = require('hardhat')

async function main() {
  const baseURI = ''

  const Nft = await hre.ethers.getContractFactory('AstroSeries')
  const nft = await Nft.deploy(devAddress, baseURI)

  await nft.deployed()

  console.log('nft deployed to:', nft.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
