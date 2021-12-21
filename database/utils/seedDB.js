const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address: "68th st and Lexington, New York",
		imageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fed.stanford.edu%2Fnews%2Fcollege-students-struggle-make-sense-evidence-past-stanford-researchers-find&psig=AOvVaw05K3locZcjRCkgh-U-S8i8&ust=1640142742730000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiApIL28_QCFQAAAAAdAAAAABAD"
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address: "Massachusetts Hall Cambridge, MA 02138",
		imageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fed.stanford.edu%2Fnews%2Fcollege-students-struggle-make-sense-evidence-past-stanford-researchers-find&psig=AOvVaw05K3locZcjRCkgh-U-S8i8&ust=1640142742730000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiApIL28_QCFQAAAAAdAAAAABAD"
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
	  email: "jshmo111@myhunter.cuny.com",
			gpa: 3.0,
			imageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fed.stanford.edu%2Fnews%2Fcollege-students-struggle-make-sense-evidence-past-stanford-researchers-find&psig=AOvVaw05K3locZcjRCkgh-U-S8i8&ust=1640142742730000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiApIL28_QCFQAAAAAdAAAAABAD"
		});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;