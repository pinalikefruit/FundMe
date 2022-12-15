import { ethers, getNamedAccounts } from "hardhat"

async function main() {
  const { deployer } = await getNamedAccounts()
  const fundMe = await ethers.getContract("FundMe", deployer)
  console.log(`Got contract FundMe at ${fundMe.address}`)
  console.log("Funding contract...")
  const transactionResponse = await fundMe.fund({
    value: ethers.utils.parseEther("0.05")
  })
  await transactionResponse.wait()
  console.log("Funded!")

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })