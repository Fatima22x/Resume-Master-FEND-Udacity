/*
This is empty on purpose! Your code to build the resume will go here.
*/
var data = '%data%';
var hash = "#";

function changeCSS() {
	$('#header').css('background-color', '#6d6d6d');

}

changeCSS();

//Bio object
var bio = {
	"name": "Fatima Falath",
	"role": "   Video Editor",
	"contacts": {
		"mobile": "-",
		"email": "ffalath22@gmail.com",
		"youtube": "FatimaF | عشوائية فاطمة",
		"github": "@Fatima22x",
		"twitter": "@Fatima22_x",
		"location": "Saudi Arabia"
	},
	"welcomeMessage": "Welcome to my page. ",
	"skills": ["Editing videos", "HTML/CSS", "Javascript", "Java", "Writing poetry", "Excessively sleeping"],
	"biopic": "images/profilepic.jpg"
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedRole = HTMLheaderRole.replace(data, bio.role);

	// var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
	var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
	var genericYoutube = HTMLcontactGeneric.replace("%contact%", "youtube");
	var formattedYoutube = genericYoutube.replace(data, bio.contacts.youtube);
	var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
	var insertBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);


	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	// $("#topContacts, #footerContacts").append(formattedMobile);
	$("#topContacts, #footerContacts").append(formattedEmail);
	$("#topContacts, #footerContacts").append(formattedGithub);
	$("#topContacts, #footerContacts").append(formattedYoutube);
	$("#topContacts, #footerContacts").append(formattedTwitter);
	$("#topContacts, #footerContacts").append(formattedLocation);

	$("#header").append(insertBioPic);
	$("#header").append(formattedWelcomeMessage);

	$("#header").append(HTMLskillsStart);
	for (var x = 0; x < bio.skills.length; x++) {
		var formattedSkills = HTMLskills.replace(data, bio.skills[x]);
		$("#skills").append(formattedSkills);
	}

};

bio.display();

//Work object
var work = {
	"jobs": [{
		"employer": "Youtube",
		"title": "Youtuber",
		"location": "Online",
		"dates": "2016 - in progress",
		"description": "A youtube channel for some of my videos.",
		"url": "https://www.youtube.com/channel/UC7shggF3LVgZckXCmFltB6Q"
	}, {
		"employer": "Wadi Makkah",
		"title": "Summer Intern",
		"location": "Wadi Makkah",
		"dates": "2018",
		"description": "Filmmaking track training which was a course that covered the basics of filmmaking from pre-production, production until post-production, and ended with the application of what we learned on a documentary and an advertisement.",
		"url": "wadimakkah.com"
	}]
};

work.display = function() {
	$("#workExperience").append(HTMLworkStart);
	for (var i = 0; i < work.jobs.length; i++) {
		var formattedWorkEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
		var formattedWorkEmployerLink = formattedWorkEmployer.replace(hash, work.jobs[i].url);
		var formattedWorkTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
		var formattedEmployerAndDate = formattedWorkEmployerLink + formattedWorkTitle;
		var formattedWorkDates = HTMLworkDates.replace(data, work.jobs[i].dates);
		var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
		var formattedWorkDescription = HTMLworkDescription.replace(data, work.jobs[i].description);

		$(".work-entry").append(formattedEmployerAndDate);
		$(".work-entry").append(formattedWorkDates);
		$(".work-entry").append(formattedWorkLocation);
		$(".work-entry").append(formattedWorkDescription);
	}

};

work.display();

//Projects object
var projects = {
	"projects": [{
			"title": "The Start of Summer || بداية الصيف ",
			"dates": "6 Sep 2016",
			"description": "A video I made at the end of summer 2016.",
			"images": ["images/Project3.png"],
			"url": "https://www.youtube.com/watch?v=znGze3eHB8s"
		},
		{
			"title": "Another year has passed...",
			"dates": "31 Dec 2016",
			"description": "End of 2016 video.",
			"images": ["images/Project1.png"],
			"url": "https://www.youtube.com/watch?v=X6q7lwH4fuU"
		},
		{
			"title": "Ramadan // وداعا رمضان",
			"dates": "25 July 2017",
			"description": "A video commemmerating the end of the holy month, Ramadan.",
			"images": ["images/Project2.png"],
			"url": "https://www.youtube.com/watch?v=LSbo3PZQgjY"
		}
	]
};

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (var x = 0; x < projects.projects.length; x++) {
		var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[x].title);
		var formattedProjectTitleLink = formattedProjectTitle.replace(hash, projects.projects[x].url);
		var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[x].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[x].description);
		$(".project-entry").append(formattedProjectTitleLink);
		$(".project-entry").append(formattedProjectDates);
		$(".project-entry").append(formattedProjectDescription);
		for (var image = 0; image < projects.projects[x].images.length; image++) {
			var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[x].images[image]);
			$(".project-entry").append(formattedProjectImage);
		}
	}


};

projects.display();

//Education object
var education = {
	"schools": [{
			"name": "King Abdulaziz University",
			"location": "Jeddah, Saudi Arabia",
			"degree": "BA",
			"majors": ["Computer Science"],
			"dates": "2016 - Ongoing",
			"url": "http://www.kau.edu.sa/Home.aspx"
		},
		{
			"name": "12th Secondary High School for Girls",
			"location": "Makkah, Saudi Arabia",
			"degree": "High school diploma",
			"majors": ["Science Track"],
			"dates": "2013 - 2016",
			"url": "https://ar-ar.facebook.com/Sec12School/"
		},
		{
			"name": "Carncot Independant School for Girls",
			"location": "Palmerston North, New Zealand",
			"degree": "Intermediate",
			"majors": ["-"],
			"dates": "2009 - 2011",
			"url": "https://carncot.school.nz/"
		}
	],
	"onlineCourses": [{
			"title": "HTML/CSS",
			"school": "Codacademy",
			"dates": "2014",
			"url": "https://www.codecademy.com/Fatima22_x"
		},
		{
			"title": "Front-end Web development Nanodegree",
			"school": "Udacity",
			"dates": "2017",
			"url": "https://sa.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

education.display = function() {
	$("#education").append(HTMLschoolStart);
	for (var x = 0; x < education.schools.length; x++) {
		var formattedSchoolName = HTMLschoolName.replace(data, education.schools[x].name);
		var formattedSchoolNameLink = formattedSchoolName.replace(hash, education.schools[x].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[x].degree);
		var formattedSchoolNameAndDegree = formattedSchoolNameLink + formattedSchoolDegree;
		var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[x].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[x].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[x].majors[0]);

		$(".education-entry").append(formattedSchoolNameAndDegree);
		$(".education-entry").append(formattedSchoolDates);
		$(".education-entry").append(formattedSchoolLocation);
		$(".education-entry").append(formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);
	$("#education").append("<div class='online-class'></div>");

	for (var y = 0; y < education.onlineCourses.length; y++) {
		var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[y].title);
		var formattedOnlineTitleLink = formattedOnlineTitle.replace(hash, education.onlineCourses[y].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[y].school);
		var formattedTitleAndSchool = formattedOnlineTitleLink + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[y].dates);
		var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[y].url);
		var formattedOnlineURLLink = formattedOnlineURL.replace(hash, education.onlineCourses[y].url);

		$(".online-class").append(formattedTitleAndSchool);
		$(".online-class").append(formattedOnlineDates);
		$(".online-class").append(formattedOnlineURLLink);
	}

};
education.display();

$("#mapDiv").append(googleMap);
