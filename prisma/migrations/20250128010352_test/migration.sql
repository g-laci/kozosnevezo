/*
  Warnings:

  - Made the column `date` on table `NewsPost` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "NewsPost" ALTER COLUMN "date" SET NOT NULL;
