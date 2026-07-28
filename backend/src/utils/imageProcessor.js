import sharp from "sharp";
import path from "path";
import fs from "fs/promises";

export const processImageToWebP = async (filePath, outputFolder) => {
  if (!filePath) return null;

  try {
    const filename = path.parse(path.basename(filePath)).name;
    const webpFilename = `${filename}-${Date.now()}.webp`;
    const outputPath = path.join(outputFolder, webpFilename);

    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    // Delete original file after conversion
    await fs.unlink(filePath).catch(() => {});

    // Return relative storage path
    const relativePath = path.relative(path.join(process.cwd(), "public"), outputPath).replace(/\\/g, "/");
    return `/${relativePath}`;
  } catch (error) {
    console.error("Error processing image with Sharp:", error);
    // If sharp processing fails, return original file path
    const relativeOriginal = path.relative(path.join(process.cwd(), "public"), filePath).replace(/\\/g, "/");
    return `/${relativeOriginal}`;
  }
};
