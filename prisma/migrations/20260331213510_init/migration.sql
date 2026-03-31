-- CreateTable
CREATE TABLE "Progress" (
    "userId" TEXT NOT NULL,
    "checks" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Progress_pkey" PRIMARY KEY ("userId")
);
