
class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.balance += amount;
        resolve(this.balance);
      }, 2000);
    });
  }

  withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.balance >= amount) {
          this.balance -= amount;
          resolve(this.balance);
        } else {
          reject("Saldo tidak mencukupi");
        }
      }, 1500);
    });
  }

  checkBalance() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.balance);
      }, 0);
    });
  }
}

(async () => {
  const myAccount = new BankAccount();

  try {
    const depositAmount = 1000;
    const withdrawalAmount = 500;

    const initialBalance = await myAccount.checkBalance();
    console.log(`Saldo awal: ${initialBalance}`);

    const afterDepositBalance = await myAccount.deposit(depositAmount);
    console.log(`Saldo setelah deposit: ${afterDepositBalance}`);

    const afterWithdrawalBalance = await myAccount.withdraw(withdrawalAmount);
    console.log(`Saldo setelah withdrawal: ${afterWithdrawalBalance}`);

    const currentBalance = await myAccount.checkBalance();
    console.log(`Saldo saat ini: ${currentBalance}`);
  } catch (error) {
    console.error(`Terjadi kesalahan: ${error}`);
  }
})();
