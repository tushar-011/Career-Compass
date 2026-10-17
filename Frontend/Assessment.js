document.getElementById("assessmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    Swal.fire({
        title: "Submitting Assessment...",
        text: "Connecting to Career Compass AI...",
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
            Swal.showLoading();
        }
    });

    const fieldMap = {
        "First Name": "first_name",
        "Middle Name": "middle_name",
        "Last Name": "last_name",
        "Phone Number": "phone",
        "Email ID": "email",
        "Current Qualification (e.g. 12th, B.Tech)": "qualification",
        "Stream (Science / Commerce / Arts)": "stream",
        "Percentage / CGPA": "percentage",
        "What subjects or fields excite you the most?": "interests",
        "What do you want to become in future?": "career_goal",
        "List your current skills (coding, communication, etc.)": "skills",
        "Select Gender": "gender",
        "Preferred Work Style": "work_style",
        "Work Preference": "work_preference",
        "Goal Type": "goal_type",
        "Preferred Industry": "industry"
    };

    const formData = {};

    document.querySelectorAll("#assessmentForm input, #assessmentForm textarea, #assessmentForm select").forEach((field) => {
        let key = "";

        if (field.tagName === "SELECT") {
            const firstOption = field.options[0]?.text.trim();
            key = fieldMap[firstOption] || firstOption;
        } else {
            const placeholder = field.placeholder?.trim();
            key = fieldMap[placeholder] || placeholder;
        }

        if (key) {
            formData[key] = field.value.trim();
        }
    });

    console.log("SENDING DATA:", formData);

    const webhookUrl = "https://hook.eu1.make.com/5fpieox3mfi6uhdqnroeifw1a0i965dp";

    fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
        .then((response) => {
    if (!response.ok) throw new Error("Webhook Error");
    return response.text();
})
        .then((raw) => {
            console.log("RAW RESPONSE:", raw);

            let data;
            try {
                data = JSON.parse(raw);
            } catch (e) {
                console.error("JSON parse error:", e);
                throw new Error("Invalid JSON from webhook");
            }

            console.log("FULL RESPONSE:", data);

            if (data.roadmap) {
                console.log("ROADMAP:", data.roadmap);
                localStorage.setItem("aiRoadmap", data.roadmap);
                console.log("CHECK STORAGE:", localStorage.getItem("aiRoadmap"));
            }

            if (formData.first_name) {
                localStorage.setItem("userName", formData.first_name);
            }
            if (formData.email) {
                localStorage.setItem("userEmail", formData.email);
            }

            Swal.fire({
                icon: "success",
                title: "Assessment Submitted",
                text: "Redirecting to your dashboard...",
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                setTimeout(() => {
                    window.location.href = "Student.html";
                }, 1000);
            });
        })
        .catch((error) => {
            console.error("Error:", error);

            Swal.fire({
                icon: "info",
                title: "Data Saved",
                text: "Your assessment was sent. Redirecting to dashboard while AI processes...",
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                window.location.href = "Student.html";
            });
        });
});