-- CreateTable
CREATE TABLE "SavingsBook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeSavings" TEXT NOT NULL,
    "timeSavings" TEXT NOT NULL,
    "canWithdraw" TEXT NOT NULL,
    "userAccountNo" INTEGER NOT NULL,
    CONSTRAINT "SavingsBook_userAccountNo_fkey" FOREIGN KEY ("userAccountNo") REFERENCES "Users" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);
