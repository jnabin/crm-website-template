

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

const r = document.querySelector(':root');
let primary = '#5E81F4';
const primaryTemp = sessionStorage.getItem('primary');
if(primaryTemp)
    primary = primaryTemp;


const rgb = hexToRgb(primary);
const primary_opacity = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`
const primary_rgb = `${rgb.r}, ${rgb.g}, ${rgb.b}`
//Add the organization's main color
const colors = new Map([
    ['primary', primary],
    ['primary_opacity', primary_opacity],
    ['primary_rgb', primary_rgb]
    ])
Array.from(colors.entries()).forEach(([name, value]) => {
    r.style.setProperty('--' + name, value)
})