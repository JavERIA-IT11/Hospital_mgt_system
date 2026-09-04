let patientbutton = document.getElementById("patientbutton");

let doctorbutton = document.getElementById("doctorbutton");

let appointmentbutton = document.getElementById("appointmentbutton");

let billingbutton = document.getElementById("billingbutton");


let patientsection = document.getElementById("patientsection");

let doctorsection = document.getElementById("doctorsection");

let appointmentsection = document.getElementById("appointmentsection");

let billingsection = document.getElementById("billingsection");


patientbutton.onclick = function() {

    patientsection.style.display = "block";

    doctorsection.style.display = "none";

    appointmentsection.style.display = "none";

    billingsection.style.display = "none";

};


doctorbutton.onclick = function() {

    doctorsection.style.display = "block";

    patientsection.style.display = "none";

    appointmentsection.style.display = "none";

    billingsection.style.display = "none";

};


appointmentbutton.onclick = function() {

    appointmentsection.style.display = "block";

    patientsection.style.display = "none";

    doctorsection.style.display = "none";

    billingsection.style.display = "none";

};


billingbutton.onclick = function() {

    billingsection.style.display = "block";

    patientsection.style.display = "none";

    doctorsection.style.display = "none";

    appointmentsection.style.display = "none";

};



let registerpatient =
    document.getElementById("registerpatient");

let searchpatient =
    document.getElementById("searchpatient");

let patientregistersection =
    document.getElementById("patientregistersection");

let patientsearchsection =
    document.getElementById("patientsearchsection");


registerpatient.onclick = function() {

    patientregistersection.style.display = "block";

    patientsearchsection.style.display = "none";

};


searchpatient.onclick = function() {

    patientsearchsection.style.display = "block";

    patientregistersection.style.display = "none";

};



let registerdoctor =
    document.getElementById("registerdoctor");

let searchdoctor =
    document.getElementById("searchdoctor");

let doctorregistersection =
    document.getElementById("doctorregistersection");

let doctorsearchsection =
    document.getElementById("doctorsearchsection");


registerdoctor.onclick = function() {

    doctorregistersection.style.display = "block";

    doctorsearchsection.style.display = "none";

};


searchdoctor.onclick = function() {

    doctorsearchsection.style.display = "block";

    doctorregistersection.style.display = "none";

};



let savepatient =
    document.getElementById("savepatient");


savepatient.onclick = function() {

    let inputs =
        patientregistersection.querySelectorAll("input");


    let patient = {

        id: inputs[0].value,

        name: inputs[1].value,

        contact: inputs[2].value,

        age: inputs[3].value,

        gender: inputs[4].value,

        address: inputs[5].value

    };


    if (
        patient.id === "" ||
        patient.name === "" ||
        patient.contact === "" ||
        patient.age === "" ||
        patient.gender === "" ||
        patient.address === ""
    ) {

        alert("Please fill all patient fields.");

        return;

    }


    fetch("/save_patient", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(patient)

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message);

    });

};



let searchpatientbutton =
    document.getElementById("searchpatientbutton");

let patientsearchinput =
    document.getElementById("patientsearchinput");

let patientresult =
    document.getElementById("patientresult");


searchpatientbutton.onclick = function() {

    let searchvalue =
        patientsearchinput.value.trim();


    if (searchvalue === "") {

        alert("Please enter Patient ID or Name");

        patientsearchinput.focus();

        return;

    }


    fetch("/search_patient", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            search: searchvalue
        })

    })

    .then(response => response.json())

    .then(data => {

        if (data.error) {

            alert(data.error);

            patientresult.style.display = "none";

            return;

        }


        document.getElementById("resultpatientid").textContent =
            data.id;

        document.getElementById("resultpatientname").textContent =
            data.name;

        document.getElementById("resultpatientcontact").textContent =
            data.contact;

        document.getElementById("resultpatientage").textContent =
            data.age;

        document.getElementById("resultpatientgender").textContent =
            data.gender;

        document.getElementById("resultpatientaddress").textContent =
            data.address;

        document.getElementById("patienthistory").textContent =
            data.history;

        patientresult.style.display = "block";

    })

    .catch(error => {

        alert("Something went wrong while searching.");

        console.log(error);

    });

};



let savedoctor =
    document.getElementById("savedoctor");


savedoctor.onclick = function() {

    let inputs =
        doctorregistersection.querySelectorAll("input");


    let doctor = {

        id: inputs[0].value,

        name: inputs[1].value,

        contact: inputs[2].value,

        email: inputs[3].value,

        specialization: inputs[4].value,

        department: inputs[5].value

    };


    if (
        doctor.id === "" ||
        doctor.name === "" ||
        doctor.contact === "" ||
        doctor.email === "" ||
        doctor.specialization === "" ||
        doctor.department === ""
    ) {

        alert("Please fill all doctor fields.");

        return;

    }


    fetch("/save_doctor", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(doctor)

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message);

    });

};



let searchdoctorbutton =
    document.getElementById("searchdoctorbutton");

let doctorsearchinput =
    document.getElementById("doctorsearchinput");

let doctorresult =
    document.getElementById("doctorresult");


searchdoctorbutton.onclick = function() {

    let searchvalue =
        doctorsearchinput.value.trim();


    if (searchvalue === "") {

        alert("Please enter Doctor ID or Name");

        doctorsearchinput.focus();

        return;

    }


    fetch("/search_doctor", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            search: searchvalue
        })

    })

    .then(response => response.json())

    .then(data => {

        if (data.error) {

            alert(data.error);

            doctorresult.style.display = "none";

            return;

        }


        document.getElementById("resultdoctorid").textContent =
            data.id;

        document.getElementById("resultdoctorname").textContent =
            data.name;

        document.getElementById("resultdoctorcontact").textContent =
            data.contact;

        document.getElementById("resultdoctoremail").textContent =
            data.email;

        document.getElementById("resultdoctorspecialization").textContent =
            data.specialization;

        document.getElementById("resultdoctordepartment").textContent =
            data.department;


        doctorresult.style.display = "block";

    })

    .catch(error => {

        alert("Something went wrong while searching.");

        console.log(error);

    });

};



let bookappointment =
    document.getElementById("bookappointment");


bookappointment.onclick = function() {

    let inputs =
        appointmentsection.querySelectorAll("input");


    let appointment = {

        patient: inputs[0].value,

        doctor: inputs[1].value,

        date: inputs[2].value,

        time: inputs[3].value,

        reason: inputs[4].value

    };


    if (
        appointment.patient === "" ||
        appointment.doctor === "" ||
        appointment.date === "" ||
        appointment.time === "" ||
        appointment.reason === ""
    ) {

        alert("Please fill all appointment fields.");

        return;

    }


    fetch("/book_appointment", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(appointment)

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message);

    });

};



let makepayment =
    document.getElementById("makepayment");


makepayment.onclick = function() {

    let inputs =
        billingsection.querySelectorAll("input");


    let doctorcharges =
        Number(inputs[2].value);

    let medicinecharges =
        Number(inputs[3].value);

    let othercharges =
        Number(inputs[4].value);


    let total =
        doctorcharges +
        medicinecharges +
        othercharges;


    inputs[5].value = total;


    let payment = {

        patient: inputs[0].value,

        patient_id: inputs[1].value,

        doctor_charges: doctorcharges,

        medicine_charges: medicinecharges,

        other_charges: othercharges,

        total: total

    };


    if (
        payment.patient === "" ||
        payment.patient_id === ""
    ) {

        alert("Please enter patient information.");

        return;

    }


    fetch("/make_payment", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(payment)

    })

    .then(response => response.json())

    .then(data => {

        alert(
            data.message +
            "\nTotal Amount: " +
            total
        );

    });

};



patientsection.style.display = "none";

doctorsection.style.display = "none";

appointmentsection.style.display = "none";

billingsection.style.display = "none";

patientregistersection.style.display = "none";

patientsearchsection.style.display = "none";

doctorregistersection.style.display = "none";

doctorsearchsection.style.display = "none";

patientresult.style.display = "none";

doctorresult.style.display = "none";
