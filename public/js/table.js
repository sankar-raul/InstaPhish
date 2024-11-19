const trs = document.querySelectorAll('tr')
const click = (inp, ok, tr) => {
    inp.checked = !inp.checked
    if (inp.checked){
        tr.id = 'selected'
} else {
        tr.id = 'notSelected'
}
}

const val = (e, inp, tr) => {
    e.stopPropagation()
    inp.checked = !inp.checked
    if (inp.checked){
        tr.id = 'selected'
} else {
        tr.id = 'notSelected'
}
}
let sankar = true
for (let tr of trs) {
    if (sankar) {
        sankar = !sankar
        continue
    }
    const inp = document.createElement('input')
    inp.type = 'checkbox'
    inp.id = "check"
    inp.onchange = (e) => val(e, inp, tr)
    tr.appendChild(inp)
    tr.onclick =  (e) => click(inp, e, tr)
}