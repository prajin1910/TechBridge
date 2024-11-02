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
function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var number = getElementVal('number');
    var address = getElementVal('address');
    var annual = getElementVal('annual');
    var reason = getElementVal('reason');
    var course = getElementVal('course');
    var duration = getElementVal('duration');
    var referral = getElementVal('referral');

    saveMessages(name, email, number, address, annual, reason, course, duration, referral);
}
const saveMessages = (name, email, number, address, annual, reason, course, duration, referral) => {
    var newFinancialForm = financialFormDB.push();

    newFinancialForm.set({
        name : name,
        email : email,
        number : number,
        address : address,
        annual : annual,
        reason : reason,
        course : course,
        duration : duration,
        referral : referral,

    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};