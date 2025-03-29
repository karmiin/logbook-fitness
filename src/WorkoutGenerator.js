import React, { useState } from "react";

function WorkoutGenerator() {
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [trainingDays, setTrainingDays] = useState("");
    const [level, setLevel] = useState("");
    const [plan, setPlan] = useState("");

    const handleGenerate = async () => {
        const payload = {
            age: parseInt(age),
            height: parseFloat(height),
            weight: parseFloat(weight),
            trainingDays: parseInt(trainingDays),
            level: level,
        };
        try {
            const response = await fetch("http://localhost:8080/api/workout/generateWorkout", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }
            const data = await response.json();
            setPlan(data.plan);
        } catch (error) {
            setPlan("Error: " + error.message);
        }
    };
    return(
        <div style={{ padding: "20px" }}>
            <h2>Generatore di Schede di Allenamento</h2>
            <input
                type="number"
                placeholder="Età"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            /><br /><br />
            <input
                type="number"
                placeholder="Altezza (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            /><br /><br />
            <input
                type="number"
                placeholder="Peso (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            /><br /><br />
            <input
                type="number"
                placeholder="Giorni di allenamento"
                value={trainingDays}
                onChange={(e) => setTrainingDays(e.target.value)}
            /><br /><br />
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="newbie">Newbie</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select><br /><br />
            <button onClick={handleGenerate}>Genera Scheda</button>
            <div style={{ marginTop: "20px" }}>
                <h3>Scheda di Allenamento</h3>
                <pre>{plan}</pre>
            </div>
        </div>
    );

}
export default WorkoutGenerator;