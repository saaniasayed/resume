var bio = {
	"name": "Saania Sayed",
	"role": "Software Developer",
	"contacts": {
		"email": "saaniasayed@gmail.com",
		"github": "saaniasayed",
		"twitter": "@saaniasayed",
		"location": "Bangalore, Karnataka, India"
	},
	"picture": "images/me.png",
	"welcomeMessage": "I'm currently undergoing Training as a Software Developer in Jamsons at Bangalore.",
	"skills": ["HTML", "CSS", "JavaScript", "C", "C++", ".NET Technologies", "Microsoft SQL"]
}

var work = {
	"jobs": [
		{
			"employer": "Jamsons",
			"title": "Trainee Software Developer",
			"location": "Bangalore, Karnataka, India",
			"datesWorked": "December 2016 till date",
			"description": "I am hired to work on project developed based on using the .NET framework. I am currently undergoing training for 6 months after which i will be put on live projects."
		},
		{
			"employer": "Remote Software Solutions Private Limited",
			"title": "Intern Software Developer",
			"location": "Porvorim, Goa, India",
			"datesWorked": "January 2016 - April 2016",
			"description": "The task assigned to me was to develop a Training Management System for the organization where the employees could register for the upcoming trainings which would help them to enhance their skills and talent."
		},
		{
			"employer": "Blits Goa",
			"title": "Intern PHP Developer",
			"location": "Nuvem, Goa, India",
			"datesWorked": "June 2014 - July 2015",
			"description": "I was assigned the task to create blogs for the current project which was Trip To Goa. I developed the module using PHP MVC."
		},
		{
			"employer": "Dubai Duty Free",
			"title": "Intern Software Developer",
			"location": "Dubai, United Arab Emirates",
			"datesWorked": "March 2013 - June 2013",
			"description": "This was my first experience in working in an Industry. Here, I worked with the Software team where they used to interact with Oracle E Business Suite for their needs and requirement. Later on, I worked under the Network Engineer where I was been explained how does CLoud Computing and Virtualization works."
		}
	]
}

var education = {
	"schools": [
		{ "name": "Assam Don Bosco University",
			"datesAttended": "2013 - 2016",
			"location": "Panjim, Goa, India",
			"degree": "Masters in Computer Application",
			"major": "Computer Application",
			"url": "www.dbuniversity.ac.in/"
		}		
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "December 2016",
			"url": "https://www.udacity.com/course/ud304"
		},
		{ "school": "Udacity",
			"title": "How To Use Git and GitHub",
			"completed": "December 2016",
			"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		},
		{ "school": "Solo Learn",
			"title": "HTML Fundamentals",
			"completed": "Febraury 2016",
			"url": "https://www.sololearn.com/"
		},
		{ "school": "Solo Learn",
			"title": "CSS Fundamentals",
			"completed": "Febraury 2016",
			"url": "https://www.sololearn.com/"
		},	
		{ "school": "Solo Learn",
			"title": "JavaScript Basics",
			"completed": "Febraury 2016",
			"url": "https://www.sololearn.com/"
		},
		{ "school": "Solo Learn",
			"title": "Java Tutorials",
			"completed": "Febraury 2016",
			"url": "https://www.sololearn.com/"
		},
		{ "school": "Solo Learn",
			"title": "SQL Fundamentals",
			"completed": "Febraury 2016",
			"url": "https://www.sololearn.com/"
		},	
		{ "school": "Solo Learn",
			"title": "C++ Tutorials",
			"completed": "Febraury 2016",
			"url": "https://www.sololearn.com/"
		},
		{ "school": "Solo Learn",
			"title": "Python Tutorials",
			"completed": "Febraury 2016",
			"url": "https://www.sololearn.com/"
		},	
		{ "school": "Solo Learn",
			"title": "PHP Tutorials",
			"completed": "Febraury 2016",
			"url": "https://www.sololearn.com/"
		}
	]
}

var projects = {
	"projects": [{
		"title": "Training Management System",
		"datesWorked": "January 2016 - April 2016",
		"description": "Created a Web Application Training Management System for employees to register for any upcoming training to enhance their skills.",
		"images": ["images/rsspl.png"],
		"url": "http://www.remotesoftwaresolutions.com/"
	}, {
		"title": "Trip To Goa",
		"datesWorked": "June 2014",
		"description": "Created a blog for Trip to Goa as part of the internship.",
		"images": ["images/goa.jpg"],
		"url": "http://www.triptogoa.com/"
	}]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}

displayWork();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

$("#mapDiv").append(googleMap);