const Course = require ('../models/Courses');

class SiteControllers{
    // [GET] /
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            next(err);
        }
    }

    //[GET] /search
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteControllers;