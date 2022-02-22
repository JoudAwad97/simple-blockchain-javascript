const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();
console.log(bitcoin);
/*
const previousBlockHash = "ASDJALKSDJKLASDJKLASJDKLJS";
const currentBlockData = [
  {
    amount: 10,
    sender: "asdadasdasad",
    recipient: "ASDADASDASDA",
  },
  {
    amount: 30,
    sender: "asdadasdasad",
    recipient: "ASDADASDASDA",
  },
  {
    amount: 200,
    sender: "asdadasdasad",
    recipient: "ASDADASDASDA",
  },
  {
    amount: 200,
    sender: "asdadasdasad",
    recipient: "ASDADASDASDA",
  },
];

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 97019));
*/
// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
