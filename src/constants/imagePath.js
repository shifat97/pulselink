const getImageSrc = (imgPath) => {
  if (!imgPath) return "";

  if (imgPath.startsWith("./src/assets")) {
    imgPath = imgPath.replace("./src/assets", "/assets");
    return imgPath;
  }

  return imgPath;
};

export { getImageSrc };
