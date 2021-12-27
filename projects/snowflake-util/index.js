
/**
 * @type {HTMLInputElement}
 */
const IDthing = document.getElementById('id');

IDthing.onchange = () => { change(); };
document.getElementById('epoch').onchange = () => { change(); };

function change() {
    const id = IDthing.value;

    const binary = idToBinary(id).toString(2).padStart(64, '0');

    const res = {
        timestamp: parseInt(binary.substring(0, 42), 2) + parseInt(document.getElementById('epoch').value),
        workerID: parseInt(binary.substring(42, 47), 2),
        processID: parseInt(binary.substring(47, 52), 2),
        increment: parseInt(binary.substring(52, 64), 2),
        binary: binary,
    };
    
    document.getElementById('modify').innerHTML = `
        Timestamp : ${res.timestamp} (${new Date(res.timestamp).toLocaleString('en-US', { timeZone: 'America/New_York' })} [in New York timezone])<br>
        Worker ID : ${res.workerID}<br>
        Process ID : ${res.processID}<br>
        Increment : ${res.increment}<br>
        Binary : ${binary}
    `;
}

function idToBinary(num) {
    let bin = '';
    let high = parseInt(num.slice(0, -10)) || 0;
    let low = parseInt(num.slice(-10));
    while (low > 0 || high > 0) {
        bin = String(low & 1) + bin;
        low = Math.floor(low / 2);
        if (high > 0) {
            low += 5000000000 * (high % 2);
            high = Math.floor(high / 2);
        }
    }
    return bin;
}