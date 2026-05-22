/*
  Warnings:

  - You are about to drop the column `authorId` on the `SitePost` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SitePost" DROP CONSTRAINT "SitePost_authorId_fkey";

-- AlterTable
ALTER TABLE "SitePost" DROP COLUMN "authorId",
ADD COLUMN     "image" TEXT;
