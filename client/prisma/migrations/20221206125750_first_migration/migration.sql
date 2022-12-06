-- CreateTable
CREATE TABLE "Users" (
    "accountNo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "city" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BankAccount" (
    "idBankAccount" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "balance" REAL NOT NULL,
    "userAccountNo" INTEGER NOT NULL,
    CONSTRAINT "BankAccount_userAccountNo_fkey" FOREIGN KEY ("userAccountNo") REFERENCES "Users" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);
