function closePopup() {
    document.getElementById("popup").style.display = "none";
}


function showUni() {
    let uni = document.getElementById("uniSelect").value;
    let result = document.getElementById("uniResult");

    if (uni === "ulster") {
        result.innerHTML = "<b>Ulster University</b><br>Courses: CS, Business<br>Location: UK";
    } else if (uni === "london") {
        result.innerHTML = "<b>University of London</b><br>Courses: Law, IT<br>Location: London";
    } else if (uni === "oxford") {
        result.innerHTML = "<b>Oxford University</b><br>Courses: Medicine, Science<br>Location: Oxford";
    } else {
        result.innerHTML = "";
    }
}


function showHousing() {
    document.getElementById("housingResult").innerHTML =
    "Private Rent | Student Housing | Shared Accommodation";
}


function showJobs() {
    document.getElementById("jobResult").innerHTML =
    "Indeed, LinkedIn, Reed | Apply with CV";
}


function showService(type) {
    let content = document.getElementById("serviceContent");

    content.classList.remove("fade");
    void content.offsetWidth;
    content.classList.add("fade");

    if (type === "career") {
        content.innerHTML = "Career Guidance: Free courses, CV help, internships.";
    }
    else if (type === "study") {
        content.innerHTML = "Study Tips: Google Scholar, study plans, group learning.";
    }
    else if (type === "housing") {
        content.innerHTML = "Accommodation: Zoopla, Rightmove, shared housing.";
    }
    else if (type === "jobs") {
        content.innerHTML = "Jobs: Indeed, LinkedIn, improve skills.";
    }
}


function capitalizeName() {
    let name = document.getElementById("name");
    let words = name.value.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i]) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    name.value = words.join(" ");
}


function fixEmail() {
    let email = document.getElementById("email");
    email.value = email.value.replace(/\s/g, "");
    if (!email.value.includes("@")) {
        email.value += "@gmail.com";
    }
}


function onlyNumbers() {
    let phone = document.getElementById("phone");
    phone.value = phone.value.replace(/[^0-9]/g, "");
    if (!phone.value.startsWith("44")) {
        phone.value = "44" + phone.value;
    }
    phone.value = "+" + phone.value;
}


function validateForm() {
    alert("Submitted Successfully!");
    document.querySelector("form").reset();
    return false;
}