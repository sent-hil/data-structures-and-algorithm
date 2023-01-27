function printInventory(cows, chickens) {
  let pad = (count) => {
    if (count < 10) return `00${count}`;
    else if (count < 100) return `0${count}`;
    else return `${count}`;
  };

  console.log(`${pad(cows)} cows`);
  console.log(`${pad(chickens)} chickens`);
}

printInventory(11, 110);
