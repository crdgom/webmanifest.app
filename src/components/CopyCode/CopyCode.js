export function CopyCode() {
    const code = document.getElementById("output").innerText;
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
}
