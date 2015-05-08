var bio = {
	"name" : "Elena Babenko",
	"role" : "Front-End Web Developer",
	"contacts" : {
		"mobile" : "781-704-5770",
		"email" : "ebabenko@constantcontact.com",
		"github" : "ElenaBabenko",
		"location" : "Shrewsbury, MA"
	},
	"bioPic" : "images/myAvatar.png",
	"welcomeMsg" : "Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor odio, mattis eu maximus at, vehicula ac nibh. Nulla tempor at sapien a sollicitudin. Maecenas ut justo id lorem porta mollis. Duis dignissim tristique quam, placerat eleifend ligula sodales sit amet. Donec nisl lectus, tincidunt non enim sed.",
	"skills": ["HTML", "CSS", "JavaScript", "LESS", "jQuery"]
};
var work = {
	"jobs" : [
		{
			"employer" : "e-Dialog",
			"title" : "HMTL/Flash Developer",
			"location" : "Lexington, MA",
			"dates" : "2004-2006",
			"description" : "Mauris non dignissim magna, id semper erat. Maecenas vitae felis sit amet erat posuere posuere. Proin pretium velit dictum tincidunt egestas. Etiam lacus est, elementum sit amet consequat eu, consequat vel enim. Nunc ultrices lacus et enim rutrum, nec pharetra nibh sodales. Curabitur pulvinar sollicitudin dictum. Phasellus eget nisi eget justo accumsan ultricies quis maximus sapien."
		},
		{
			"employer" : "Constant Contact",
			"title" : "Web Developer",
			"location" : "Waltham, MA",
			"dates" : "2006-current",
			"description" : "Duis eget nunc interdum, pulvinar est quis, pulvinar quam. Donec ullamcorper diam id iaculis varius. Curabitur non nulla felis. Maecenas tortor metus, molestie ut purus id, viverra blandit erat. Sed magna libero, convallis ut dignissim nec, dictum et eros. Vestibulum nec diam a elit maximus sodales eget vitae dui. "
		}
	]
};
var education = {
	"schools" : [
		{
			"name" : "Belarusian State Pedagogical University",
			"location" : "Minsk, Belarus",
			"degree" : "Masters",
			"majors" : ["Special Education", "Educational Psychology"],
			"dates" : "1994-1999"
		},
		{
			"name" : "Northeastern University",
			"location" : "Boston, MA",
			"degree" : "Certificate",
			"majors" : ["Computer Graphics"],
			"dates" : "2001-2002"
		}
	],
	"onlineCourse" : [
		{
			"title" : "Responsive Web Design Fundamentals ",
			"school" : "Udacity",
			"dates" : "2014",
			"url" : "https://www.udacity.com"
		},
		{
			"title" : "JavaScript Road Trip Parts 1-3",
			"school" : "Code School",
			"dates" : "2014",
			"url" : "https://www.codeschool.com/"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Project 1",
			"dates" : "2009-2010",
			"description" : "Phasellus eget nisi eget justo accumsan ultricies quis maximus sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor odio, mattis eu maximus at, vehicula ac nibh. Nulla tempor at sapien a sollicitudin. Maecenas ut justo id lorem porta mollis.",
			"images" : ["images/project1.png", "images/project2.png"]
		},
		{
			"title" : "Project 2",
			"dates" : "2011-2012",
			"description" : "Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor odio, mattis eu maximus at, vehicula ac nibh. Nulla tempor at sapien a sollicitudin. Maecenas ut justo id lorem porta mollis.",
			"images" : ["images/project3.png"]
		},
		{
			"title" : "Project 3",
			"dates" : "2013-2014",
			"description" : "Fusce vehicula enim sed ligula rhoncus, pellentesque fringilla leo blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor odio, mattis eu maximus at, vehicula ac nibh. Nulla tempor at sapien a sollicitudin. Maecenas ut justo id lorem porta mollis.",
			"images" : ["images/project4.png", "images/project5.png"]
		}
	]
};

bio.display = function() {

	var	formattedName = HTMLheaderName.replace("%data%", bio.name),
		formattedRole = HTMLheaderRole.replace("%data%", bio.role),
		formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
		formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
		formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
		formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
		formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic),
		formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

	$("#personalInfo").prepend(formattedRole);
	$("#personalInfo").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	$("#message").append(formattedBioPic);
	$("#message").append(formattedMsg);

	if (bio.skills.length > 0) {
		$("#skills").append(HTMLskillsStart);

		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills ul").append(formattedSkill);
		}
	}
}
bio.display();

/*
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").prepend(internationalizeButton);
*/
work.display = function() {

	for (var job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
			formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
			formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates),
			formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location),
			formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}
work.display();

education.display = function() {

	$("#education").append(HTMLschoolStart);

	for (var school in education.schools) {

		var	formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name),
			formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree),
			formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates),
			formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);

		if (education.schools[school].majors.length > 0) {
			for (var major in education.schools[school].majors) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedSchoolMajor);
			}
		}
	}

	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLonlineClasses);

	for (var course in education.onlineCourse) {

		var	formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title),
			formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school),
			formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates),
			formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);

		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}
education.display();

projects.display = function() {

	for (var project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
			formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates),
			formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}
projects.display();

$("#mapDiv").append(googleMap);

footerContacts.display = function() {

	var	formattedFooterMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
		formattedFooterEmail = HTMLemail.replace("%data%", bio.contacts.email),
		formattedFooterGithub = HTMLgithub.replace("%data%", bio.contacts.github);

	$("#footerContacts").append(formattedFooterMobile);
	$("#footerContacts").append(formattedFooterEmail);
	$("#footerContacts").append(formattedFooterGithub);
}
footerContacts.display();

