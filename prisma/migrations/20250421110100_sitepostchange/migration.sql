-- AlterTable
ALTER TABLE "SitePost" ADD COLUMN     "authorId" INTEGER;

-- AddForeignKey
ALTER TABLE "SitePost" ADD CONSTRAINT "SitePost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
