from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

patients = []
doctors = []
appointments = []
payments = []


@app.route("/")
def home():

    return render_template("index.html")


@app.route("/save_patient", methods=["POST"])
def save_patient():

    data = request.json

    patient = {

        "id": data["id"],

        "name": data["name"],

        "contact": data["contact"],

        "age": data["age"],

        "gender": data["gender"],

        "address": data["address"],

        "history": "No patient history available."

    }

    patients.append(patient)

    return jsonify({
        "message": "Patient saved successfully!"
    })


@app.route("/search_patient", methods=["POST"])
def search_patient():

    data = request.json

    search_value = data["search"].lower()

    for patient in patients:

        if (
            patient["id"].lower() == search_value
            or
            patient["name"].lower() == search_value
        ):

            return jsonify(patient)

    return jsonify({
        "error": "Patient not found"
    })


@app.route("/save_doctor", methods=["POST"])
def save_doctor():

    data = request.json

    doctor = {

        "id": data["id"],

        "name": data["name"],

        "contact": data["contact"],

        "email": data["email"],

        "specialization": data["specialization"],

        "department": data["department"]

    }

    doctors.append(doctor)

    return jsonify({
        "message": "Doctor saved successfully!"
    })


@app.route("/search_doctor", methods=["POST"])
def search_doctor():

    data = request.json

    search_value = data["search"].lower()

    for doctor in doctors:

        if (
            doctor["id"].lower() == search_value
            or
            doctor["name"].lower() == search_value
        ):

            return jsonify(doctor)

    return jsonify({
        "error": "Doctor not found"
    })


@app.route("/book_appointment", methods=["POST"])
def book_appointment():

    data = request.json

    appointment = {

        "patient": data["patient"],

        "doctor": data["doctor"],

        "date": data["date"],

        "time": data["time"],

        "reason": data["reason"]

    }

    appointments.append(appointment)

    return jsonify({
        "message": "Appointment booked successfully!"
    })


@app.route("/make_payment", methods=["POST"])
def make_payment():

    data = request.json

    payment = {

        "patient": data["patient"],

        "patient_id": data["patient_id"],

        "doctor_charges": data["doctor_charges"],

        "medicine_charges": data["medicine_charges"],

        "other_charges": data["other_charges"],

        "total": data["total"]

    }

    payments.append(payment)

    return jsonify({
        "message": "Payment completed successfully!"
    })


if __name__ == "__main__":

    app.run(debug=True)
