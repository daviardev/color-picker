import { $ } from './utils/dom'

import './style.css'

const colorPicker = $('#color__picker')
const pickedColors = []

const activateEyeDropper = async () => {
    try {
        // Creamos la propiedad EyeDropper para que se nos abra la herramienta de selección
        const eyeDropper = new EyeDropper()

        // Guarda El hexadecimal del color seleccionado
        const { sRGBHex } = await eyeDropper.open()

        // Se pasa el valor hexadecimal al portapapeles
        navigator.clipboard.writeText(sRGBHex)

        // Agrega el valor hexadecimal a los colores que fueron seleccionados dentro de un array
        pickedColors.push(sRGBHex)

        console.log(pickedColors)
    } catch(err) {
        console.error(err)
    }
}

colorPicker.addEventListener("click", activateEyeDropper)

$('#app')