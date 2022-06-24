
import mongoose from 'mongoose';
import { ContentSchema } from '../models/content-model';


const Content = mongoose.model('Content', ContentSchema);


// add content
export const addContent = (req, res) => {
    let newContent = new Content(req.body);

    newContent.save((err, content) => {
        if (err) {
            res.send(err);
        }
        res.json(content);
    })
}






// get all contents 
export const getAllContent = (req, res) => {
    Content.find({}, (err, contents) => {
        if (err) {
            res.send(err);
        }
        res.json(contents);
    });
}

// get all content by their language 
export const getContentByLanguage = (req, res) => {
    Content.find({ 'language': req.params.language }, (err, contents) => {
        if (err) {
            res.send(err);
        }
        res.json(contents);
    });
}


// get content by id 
export const getContentById = (req, res) => {
    Content.findById(req.params.contentId, (err, content) => {
        if (err) {
            res.send(err);
        }
        res.json(content);
    })
}



// delete 
export const deleteContentById = (req, res) => {
    Content.findByIdAndDelete({ _id: req.params.contentId }, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: "content deleted successfully.", data });
    })
}





export const home = (req, res) => {
    res.json({ "message": "Welcome from Express" });
}
