import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

function MilesToKmConverter() {
    const [miles, setMiles] = useState('');
    const [km, setKm] = useState('');

    const handleMilesChange = (event) => {
        const newMiles = event.target.value;
        setMiles(newMiles);

        if (newMiles === '') {
            setKm('');
        } else {
            const milesValue = parseFloat(newMiles);
            setKm((milesValue * 1.60934).toFixed(2));
        }
    };

    const handleKmChange = (event) => {
        const newKm = event.target.value;
        setKm(newKm);

        if (newKm === '') {
            setMiles('');
        } else {
            const kmValue = parseFloat(newKm);
            setMiles((kmValue / 1.60934).toFixed(2));
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Miles to Kilometers Converter</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="miles" className="form-label">Miles:</label>
                    <input
                        type="number"
                        name="miles"
                        id="miles"
                        min={0}
                        value={miles}
                        onChange={handleMilesChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="km" className="form-label">Kilometers:</label>
                    <input
                        type="number"
                        name="km"
                        id="km"
                        min={0}
                        value={km}
                        onChange={handleKmChange}
                        className="form-control"
                    />
                </div>
            </form>
        </div>
    );
}

export default MilesToKmConverter;
