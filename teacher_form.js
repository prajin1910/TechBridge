const firebaseConfig = {
    apiKey: "AIzaSyDiGCvDav1T86EdEa8uAtoPSFRqM7hPRUc",
    authDomain: "techbridge-innovations.firebaseapp.com",
    databaseURL: "https://techbridge-innovations-default-rtdb.firebaseio.com",
    projectId: "techbridge-innovations",
    storageBucket: "techbridge-innovations.firebasestorage.app",
    messagingSenderId: "477208358412",
    appId: "1:477208358412:web:308618c04c3ec861868829"
};
firebase.initializeApp(firebaseConfig);
var teacherFormDB = firebase.database().ref('teacherform');
document.getElementById('registerForm').addEventListener('submit', submitForm);
function techForm(name, email, number, institution,course, duration, address, referral, qualification, about){
    const templateParams = {
        name : name,
        email : email,
        pn : number,
        soc : institution,
        course : course,
        duration : duration,
        add : address,
        about : about,
        tellme : referral,
        quali : qualification,
    };
    emailjs.init("UNZ6kkYdQUCyfbvXg");
    emailjs.send("service_po2j8zp", "template_ip6l54q", templateParams);
}
function userForm(name, course, email){
    const tp = {
        name : name,
        course : course,
        email : email,
    };
    emailjs.init("lfUAsR-P8uE-tpxDB");
    emailjs.send("service_zhidgsi", "template_avuz7ac", tp);
}
function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var number = getElementVal('number');
    var institution = getElementVal('institution');
    var course = getElementVal('course');
    var duration = getElementVal('duration');
    var address = getElementVal('address');
    var about = getElementVal('about');
    var qualification = getElementVal('Qualification');
    var referral = getElementVal('referral');

    techForm(name, email, number, institution, course, duration, address, referral, qualification, about);
    userForm(name, course, email);

    saveMessages(name, email, number, address, institution, about, qualification, course, duration, referral);
}
const saveMessages = (name, email, number, address, institution, about, qualification, course, duration, referral) => {
    var newTeacherForm = teacherFormDB.push();

    newTeacherForm.set({
        name : name,
        email : email,
        number : number,
        address : address,
        institution : institution,
        about : about,
        qualification : qualification,
        course : course,
        duration : duration,
        referral : referral,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};