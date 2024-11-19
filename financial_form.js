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
var financialFormDB = firebase.database().ref('financialform');
document.getElementById('registerForm').addEventListener('submit', submitForm);
function techForm(name, email, number, institution,annual,reason,course, duration, address, referral){
    const templateParams = {
        name : name,
        email : email,
        pn : number,
        soc : institution,
        annual : annual,
        reason : reason,
        course : course,
        duration : duration,
        add : address,
        tellme : referral,
    };
    emailjs.init("lfUAsR-P8uE-tpxDB");
    emailjs.send("service_l5t4foo", "template_xmxicha", templateParams);
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
    var address = getElementVal('address');
    var annual = getElementVal('annual');
    var institution = getElementVal('institution');
    var reason = getElementVal('reason');
    var course = getElementVal('course');
    var duration = getElementVal('duration');
    var referral = getElementVal('referral');

    techForm(name, email, number, institution,annual,reason,course, duration, address, referral);
    userForm(name, course, email);

    saveMessages(name, email, number, address, annual, reason, course, duration, referral, institution);
}
const saveMessages = (name, email, number, address, annual, reason, course, duration, referral, institution) => {
    var newFinancialForm = financialFormDB.push();

    newFinancialForm.set({
        name : name,
        email : email,
        number : number,
        address : address,
        annual : annual,
        reason : reason,
        course : course,
        institution : institution,
        duration : duration,
        referral : referral,

    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};