const Sequelize = require("sequelize");
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/jpfpu"
);
const { STRING, TEXT, DECIMAL } = conn.Sequelize;

const Campus = conn.define("campus", {
  name: {
    type: STRING,
    allowNull: false,
  },
  imageURL: {
    type: STRING,
    defaultValue:
      "https://www.clipartmax.com/png/middle/440-4405914_queens-degree-icon-university-icon-png-transparent-background.png",
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
    allowNull: false,
  },
  lastName: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    imageUrl: {
      type: STRING,
      defaultValue: "https://emblemsbf.com/img/77111.webp",
    },
    gpa: {
      type: DECIMAL,
    },
  },
});
Student.belongsTo(Campus);
Campus.hasMany(Student);

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  await Promise.all([
    Campus.create({
      name: "Syracuse",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2R_ae_CqD2EKOTo6r6JkrkhtctHLcVKSUEnQQOxRHTyyrDe_H71S4SItPb-DtuDDO84YodONJ&usqp=CAc",
      address: "900 South Crouse Ave Syracuse, NY 13244",
      description:
        "In a world undergoing extraordinary transformation, leadership and innovation are more critical than ever. Our students work alongside leading scholars and have access to hands-on research and learning opportunities—all of which prepare them to shape their communities and become the change-makers of tomorrow. From a rich array of degree programs and extracurricular activities that ignite their passions to integrated health and wellness offerings that empower them to embrace the college experience with a sense of well-being―Syracuse University goes beyond the classroom to fuel discovery and positive impact. With 13 schools and colleges, 200 customizable majors and 100 minors, and online degrees and certificates, Syracuse University provides limitless educational pathways. New interdisciplinary areas ranging from social justice and artificial intelligence to energy and environment provide hands-on research experiences that broaden perspectives and prepare students for the careers of tomorrow. Syracuse University has five award-winning study abroad centers and international programs in 60 countries to choose from where our students gain global perspectives that last a lifetime. There are nearly 22,000 students from all over the world taking part in clubs, athletics and gatherings of all kinds. With over 300 student organizations, you'll have plenty of opportunities to explore interests, pursue passions and engage with the Syracuse University community. Being Orange is about more than just a color, a place or a degree. It embodies a lifelong connection to a global network of innovators, thinkers and creative solution finders. Syracuse University students and alumni celebrate tradition, connections and being part of something bigger. You'll be part of a network that helps you discover new paths forward and stays with you, wherever your path takes you.",
    }),
    Campus.create({
      name: "University of Illinois",
      imageURL:
        "https://media.tegna-media.com/assets/WQAD/images/298d3a4a-c602-4daf-b8e1-4a3496883f48/298d3a4a-c602-4daf-b8e1-4a3496883f48_750x422.jpg",
      address: "901 West Illinois Street Urbana, IL 61801",
      description:
        "Illinois students, scholars, and alumni are a community with the power to change the world. With our land-grant heritage as a foundation, we pioneer innovative research that tackles global problems and expands the human experience. Our transformative learning experiences, in and out of the classroom, are designed to produce alumni who desire to make a significant, societal impact.",
    }),
    Campus.create({
      name: "University of Massachusetts - Amherst",
      imageURL:
        "https://www.umass.edu/events/sites/default/files/styles/large/public/UMass%20Logo_2.png?itok=5nFJuXBj",
      address: "300 Massachusetts Ave Amherst, Ma 01003",
      description:
        "UMass Amherst is one of the major public research universities in America. Nestled in idyllic Amherst, Massachusetts, the campus is consistently ranked among the top public research universities in the nation, and offers a rich cultural environment in a rural setting close to major urban centers.",
    }),
    Campus.create({
      name: "New York University",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTAj--dLTT37IoOr36JgY8gsxkt7P__TQLQ&usqp=CAU",
      address: "70 Washington Square South",
      description:
        "Since its founding in 1831, NYU has been an innovator in higher education, reaching out to an emerging middle class, embracing an urban identity and professional focus, and promoting a global vision that informs its 19 schools and colleges. Today, that trailblazing spirit makes NYU one of the most prominent and respected research universities in the world, featuring top-ranked academic programs and accepting fewer than one-in-five undergraduates. Anchored in New York City and with degree-granting campuses in Abu Dhabi and Shanghai as well as 11 study away sites throughout the world, NYU is a leader in global education, with more international students and more students studying abroad than any other US university. NYU students come from nearly every state and 133 countries, and the university draws upon the diverse backgrounds of our faculty, staff, and students, ensuring its scholarship and teaching benefit from a wide range of perspectives. NYU takes seriously its role as an engine of social mobility, and stands out among the top US universities in its representation of low-income and first-generation students within its community. Now among the largest private universities in the US, NYU provides a rigorous, demanding education to more than 50,000 students and undertakes nearly $1 billion in research annually. It counts among its faculty recipients of the highest scholarly honors and is a top producer of patents and revenue from licensing among US universities. NYU has a vast network of alumni who have gone on to succeed across professions, from the sciences to the arts and government, throughout the world.",
    }),
    Campus.create({
      name: "Merrimack College",
      imageURL:
        "https://www.merrimack.edu/live/files/3106-14013mccenteredcmykjpg",
      address: "315 Turnpike Street North Andover, MA 01845",
      description:
        "One of the fastest-growing educational institutions in the country, Merrimack College is a selective, private college in a beautiful, residential setting — just minutes from Boston, Massachusetts",
    }),
  ]);
  await Promise.all([
    Student.create({
      firstName: "Michelle",
      lastName: "Martin",
      email: "mmmart04@syr.edu",
      gpa: 2.0,
    }),
    Student.create({
      firstName: "Carol",
      lastName: "Anne",
      email: "cams@gmail.com",
      gpa: 4.0,
    }),
    Student.create({
      firstName: "David",
      lastName: "Philip",
      email: "dadjokes@yahoo.com",
      gpa: 3.6,
    }),
    Student.create({
      firstName: "Chris",
      lastName: "Martin",
      email: "topher2626@yahoo.com",
      gpa: 2.5,
    }),
    Student.create({
      firstName: "Nick",
      lastName: "Richard",
      email: "nickyricky@aol.com",
      gpa: 3.0,
    }),
  ]);
};

module.exports = {
  models: {
    Campus,
    Student,
  },
  conn,
  syncAndSeed,
};
