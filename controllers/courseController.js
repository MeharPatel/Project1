const CourseModal = require('../models/Course')


class  courseController{
    
    static courseinsert = async(req, res)=>{
        try{
            const {name, image, _id} = req.user
            const data = new CourseModal({
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                tenth : req.body.tenth,
                twelveth : req.body.twelveth,
                course : req.body.course,
                userid: _id,
            })
            await data.save()
            res.redirect('/coursedisplay')
            
        }catch(error){
            console.log(error)
        }
    }

    static display = async(req, res)=>{
        try{
            const {name, image, _id} = req.user
            const data = await CourseModal.find()
            // console.log(data)
            res.render('courses/display', {d: data, n:name, i:image})
        }catch(error){
            console.log(error)
        }
    }

    static view = async(req, res)=>{
        try{
            const {name, image, _id} = req.user
            const data = await CourseModal.findById(req.params.id)
            res.render('courses/view', {view: data, n:name, i:image})
        }catch(error){
            console.log(error)
        }
    }

    static edit = async(req, res)=>{
        try{
            const {name, image, _id} = req.user
            const data = await CourseModal.findById(req.params.id)
            res.render('courses/edit', {edit: data, n:name, i:image})
        }catch(error){
            console.log(error)
        }
    }

    static courseupdate = async(req, res)=>{
        try{
            const {name, image, _id} = req.user
            const data = await CourseModal.findByIdAndUpdate(req.params.id,{
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                tenth : req.body.tenth,
                twelveth : req.body.twelveth,
                course : req.body.course,
            })
            res.redirect('/coursedisplay', {n:name, i:image})
        }catch(error){
            console.log(error)
        }
    }

    static coursedelete = async(req, res)=>{
        try{
            const data = await CourseModal.findByIdAndDelete(req.params.id)
            res.redirect('/coursedisplay')
        }catch(error){
            console.log(error)
        }
    }

    
}
module.exports = courseController