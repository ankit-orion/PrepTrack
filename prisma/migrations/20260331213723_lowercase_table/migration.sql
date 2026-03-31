/*
  Warnings:

  - You are about to drop the `Progress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Progress";

-- CreateTable
CREATE TABLE "progress" (
    "userId" TEXT NOT NULL,
    "checks" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "progress_pkey" PRIMARY KEY ("userId")
);
