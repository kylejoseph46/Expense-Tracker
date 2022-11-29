let input_name = document.getElementById('input1')
let input_date = document.getElementById('input2')
let input_amount = document.getElementById('input3')
let actual_button = document.getElementById('button')
let to_insert = document.getElementById('to_insert')

actual_button.addEventListener("click", () => {
    let new_tr = document.createElement('tr')
    to_insert.appendChild(new_tr)

    let new_name = document.createElement('td')
    new_name.innerHTML = input_name.value
    new_tr.appendChild(new_name)
    
    let new_date = document.createElement('td')
    new_date.innerHTML = input_date.value
    new_tr.appendChild(new_date)

    let new_amount = document.createElement('td')
    new_amount.innerHTML = input_amount.value
    new_tr.appendChild(new_amount)
})


