const mongoose = require ('mongoose');
const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    },
    title: {
        type: String,
        required: true,
        default: 'Untitled Resume',
    },
    personalInfo: {
        fullName: {type: String, default: ''},
        email: {type: String, default: ''},
        phone: {type: String, default: ''},
        location: {type: String, default: ''},
        linkedin: {type: String, default: ''},
        github: {Type: String, default: ''},
        portfolio: {Type: String, default: ''},
    },
    summary: {
        type: String,
        default: '',
    },
    experience: [{
        company: {type: String, required: true},
        role: {type: String, required: true},
        startDate: {type: String},
        endDate: {type: String},
        grade: {type: String},

    },
        
    ],
    skills: [{type: String}],
    Projects: [{
        title: {type: String, required: true},
        techStack: [{type: String}],
        description: {type: String},
        link: {type: String},
    },
],
},
  {
        timestamps: true,
  }
   
);
module.exports = mongoose.model('Resume', resumeSchema);