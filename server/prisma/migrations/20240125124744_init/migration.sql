-- CreateTable
CREATE TABLE "scene" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "scene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phrase" (
    "id" SERIAL NOT NULL,
    "sceneId" INTEGER NOT NULL,
    "phrase" TEXT NOT NULL,
    "japaneseTranslation" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "phrase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phrase_tags" (
    "phraseId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "phrase_tags_pkey" PRIMARY KEY ("phraseId","tagId")
);

-- CreateIndex
CREATE UNIQUE INDEX "scene_name_key" ON "scene"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tags_tag_key" ON "tags"("tag");

-- AddForeignKey
ALTER TABLE "phrase" ADD CONSTRAINT "phrase_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "scene"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phrase_tags" ADD CONSTRAINT "phrase_tags_phraseId_fkey" FOREIGN KEY ("phraseId") REFERENCES "phrase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phrase_tags" ADD CONSTRAINT "phrase_tags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
