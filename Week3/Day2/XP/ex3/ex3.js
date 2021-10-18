let volForm = document.forms['MyForm']

volForm.addEventListener("submit",getVolume)

function getVolume(event) {
    event.preventDefault();
    const radius = event.target.elements.radius.value;
    const volEle = event.target.elements.volume;
    volEle.value = ((4/3)*Math.PI*Math.pow(radius,3)).toFixed(2);
}