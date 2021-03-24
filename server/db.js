const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/jpfpu')
const {STRING, TEXT, DECIMAL} = conn.Sequelize

const Campus = conn.define("campus", {
  name: {
    type: STRING,
    allowNull: false,
  },
  imageURL: {
    type: STRING,
    defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2R_ae_CqD2EKOTo6r6JkrkhtctHLcVKSUEnQQOxRHTyyrDe_H71S4SItPb-DtuDDO84YodONJ&usqp=CAc",
  },
  address: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: TEXT("long"),
  },
});

const Student = conn.define("student", {
    firstName: {
        type: STRING, 
        allowNull: false
    }, 
    lastName: {
        type: STRING, 
        allowNull: false
    }, 
    email: {
        type: STRING, 
        allowNull: false, 
        validate:{
            isEmail: true
        }, 
        imageUrl: {
            type: STRING,
            defaultValue: 'https://emblemsbf.com/img/77111.webp'

        }, 
        gpa: {
            type: DECIMAL
        }
    }
})

const syncAndSeed = async()=> {
await conn.sync({force: true})
await Promise.all([
    Campus.create({name: 'Syracuse', address: '900 South Crouse Ave Syracuse, NY 13244', description: 'In a world undergoing extraordinary transformation, leadership and innovation are more critical than ever. Our students work alongside leading scholars and have access to hands-on research and learning opportunities—all of which prepare them to shape their communities and become the change-makers of tomorrow. From a rich array of degree programs and extracurricular activities that ignite their passions to integrated health and wellness offerings that empower them to embrace the college experience with a sense of well-being―Syracuse University goes beyond the classroom to fuel discovery and positive impact. With 13 schools and colleges, 200 customizable majors and 100 minors, and online degrees and certificates, Syracuse University provides limitless educational pathways. New interdisciplinary areas ranging from social justice and artificial intelligence to energy and environment provide hands-on research experiences that broaden perspectives and prepare students for the careers of tomorrow. Syracuse University has five award-winning study abroad centers and international programs in 60 countries to choose from where our students gain global perspectives that last a lifetime. There are nearly 22,000 students from all over the world taking part in clubs, athletics and gatherings of all kinds. With over 300 student organizations, you\'ll have plenty of opportunities to explore interests, pursue passions and engage with the Syracuse University community. Being Orange is about more than just a color, a place or a degree. It embodies a lifelong connection to a global network of innovators, thinkers and creative solution finders. Syracuse University students and alumni celebrate tradition, connections and being part of something bigger. You\'ll be part of a network that helps you discover new paths forward and stays with you, wherever your path takes you.' })
])
await Promise.all([
    Student.create({firstName: 'Michelle', lastName: 'Martin', email: 'mmmart04@syr.edu', gpa: 3.3  })
    ])
}

Student.belongsTo(Campus)
Campus.hasMany(Student)

module.exports={
    models:{
        Campus, 
        Student
    }, 
    conn,
    syncAndSeed

}