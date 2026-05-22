/*
  Warnings:

  - Made the column `url` on table `Url` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "NewsPost" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Url" ALTER COLUMN "url" SET NOT NULL,
ALTER COLUMN "date" DROP NOT NULL;
