import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/uploads');
    },

    filename: (req, file, cb) => {
        const randomName = uuidv4();
        cb(null, `${randomName}-${file.originalname}`);
    }
}); 

const multerConfig = multer({storage});

export default multerConfig;