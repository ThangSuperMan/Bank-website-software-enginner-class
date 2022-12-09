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

-- CreateTable
CREATE TABLE "RevenueSavingsAccount" (
    "year" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "janunary" TEXT NOT NULL,
    "february" TEXT NOT NULL,
    "march" TEXT NOT NULL,
    "april" TEXT NOT NULL,
    "may" TEXT NOT NULL,
    "june" TEXT NOT NULL,
    "july" TEXT NOT NULL,
    "august" TEXT NOT NULL,
    "september" TEXT NOT NULL,
    "october" TEXT NOT NULL,
    "november" TEXT NOT NULL,
    "december" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SavingsBook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeSavings" TEXT NOT NULL,
    "timeSavings" INTEGER NOT NULL,
    "canWithdraw" BOOLEAN NOT NULL,
    "userAccountNo" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SavingsBook_userAccountNo_fkey" FOREIGN KEY ("userAccountNo") REFERENCES "Users" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);
