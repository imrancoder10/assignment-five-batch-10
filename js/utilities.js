
// add Class

function addClass(id, value) {
    id.classList.add(value);
}

//remove class
function removeClass(id, value) {
    id.classList.remove(value);
}



// For All section starts here................
function section(donateId, blanceId, topBlanceId, historySectionId, place) {
    const donate = document.getElementById(donateId).value;
    // ==============================
    if(typeof donate === 'string'){
        const array = donate.split('');
        const stringBox = [];
        for(const letter of array){
           if(letter != parseInt(letter)){
            stringBox.push(letter);
           }
        }
        if(stringBox.length === 0){
            function donateValue(){
                return donate;
            }
        }else{
            alert('Wrong Input.');
            return;
        }
    } 
    const donateNumber = parseFloat(donateValue());
    // ==============================
    if (!isNaN(donateNumber) && donateNumber > 0 ) {
        const blance = document.getElementById(blanceId).innerText;
        const blanceNumber = parseFloat(blance);
        const topBlance = document.getElementById(topBlanceId).innerText;
        const topBlanceNumber = parseFloat(topBlance);

        if(donateNumber <= topBlanceNumber){
        const decreaseTotalBlance = topBlanceNumber - donateNumber;
        const addBlance = blanceNumber + donateNumber;
        // inject
        document.getElementById(topBlanceId).innerText = decreaseTotalBlance;
        document.getElementById(blanceId).innerText = addBlance;
        document.getElementById(donateId).value = '';

        }
        else{
            alert('Insufficient Blance');
            return;
        }
        
        // history section strats here...............
        const time = new Date();
        const div = document.createElement('div');
       if(place === 'Quota'){
        div.innerHTML = `
        <div class="p-4 border rounded space-y-3">
        <p>${donateNumber} Taka is Aid for Injured in the Quota Movement,Bangladesh</p>
        <p>Date: ${time} </p>
        </div>
        <br>
    
    `;
       }
       else{
        div.innerHTML = `
        <div class="p-4 border rounded space-y-3">
        <p>${donateNumber} Taka is Donate for Flood Relief in ${place},Bangladesh</p>
        <p>Date: ${time} </p>
        </div>
        <br>
    
    `;
       }
        const historySection = document.getElementById(historySectionId);
        historySection.appendChild(div);
        // history section ends here...............

        // ================modal starts here....
        const modal = document.getElementById('my_modal_5');
        modal.showModal();
        // =====================modal ends here....
       
    } else {
        alert('Wrong Input!');
        return;
    }
}

// For All section ends here................