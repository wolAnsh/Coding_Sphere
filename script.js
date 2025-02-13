async function compareCodes() {
    const API_URL = "http://localhost:5000/run";  

    const code1 = document.getElementById("code1").value;
    const code2 = document.getElementById("code2").value;
    const testCases = document.getElementById("testCases").value;
    const rangeMin = document.getElementById("rangeMin").value;
    const rangeMax = document.getElementById("rangeMax").value;

    if (!code1 || !code2 || !testCases || !rangeMin || !rangeMax) {
        alert("⚠️ Please fill all fields!");
        return;
    }

    const requestData = { code1, code2, testCases, rangeMin, rangeMax };
    console.log("🔵 Sending Request:", requestData);

    try {
        const response = await fetch(API_URL, {
            method: "POST",  
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) throw new Error("⚠️ Server error!");

        const result = await response.json();
        console.log("🟢 Server Response:", result);
        document.getElementById("output").innerText = result.output;
    } catch (error) {
        console.error("❌ Error:", error);
        alert("⚠️ Error connecting to server. Check console for details.");
    }
}
