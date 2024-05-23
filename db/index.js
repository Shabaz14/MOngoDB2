const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/course_selling_app2');

// Define schemas
const AdminSchema = new mongoose.Schema({
   username : String,
   password : String
});

const UserSchema = new mongoose.Schema({
    username : String,
   password : String,
   purchasedcourses: [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Course'
   }]
});

const CourseSchema = new mongoose.Schema({
     title : String,
     description : String,
     image : String,
     price : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}