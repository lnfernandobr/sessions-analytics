import fs from 'fs';

export const handleUploads = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const fileContent = fs.readFileSync(req.file.path, 'utf-8');
    console.warn(fileContent, userId);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
