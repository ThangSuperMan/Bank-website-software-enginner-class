/*
  Warnings:

  - You are about to alter the column `canWithdraw` on the `SavingsBook` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SavingsBook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeSavings" TEXT NOT NULL,
    "timeSavings" TEXT NOT NULL,
    "canWithdraw" BOOLEAN NOT NULL,
    "userAccountNo" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SavingsBook_userAccountNo_fkey" FOREIGN KEY ("userAccountNo") REFERENCES "Users" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SavingsBook" ("canWithdraw", "id", "timeSavings", "typeSavings", "userAccountNo") SELECT "canWithdraw", "id", "timeSavings", "typeSavings", "userAccountNo" FROM "SavingsBook";
DROP TABLE "SavingsBook";
ALTER TABLE "new_SavingsBook" RENAME TO "SavingsBook";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
