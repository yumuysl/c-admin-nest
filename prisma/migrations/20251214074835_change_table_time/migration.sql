/*
  Warnings:

  - You are about to drop the column `createdTime` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Api" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "File" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Menu" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
