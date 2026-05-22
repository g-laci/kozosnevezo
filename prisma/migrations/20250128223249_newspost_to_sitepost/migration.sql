/*
  Warnings:

  - You are about to drop the `NewsPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "NewsPost";

-- CreateTable
CREATE TABLE "SitePost" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SitePost_pkey" PRIMARY KEY ("id")
);
