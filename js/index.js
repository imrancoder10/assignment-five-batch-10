// donation btn and hitory btn
const donationBtn = document.getElementById('donatation-btn');
const historyBtn = document.getElementById('history-btn');
const donationSeciton = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');

// donation secciton starts here......................
donationBtn.addEventListener('click', function () {
    addClass(donationBtn, 'bg-primary');
    addClass(historySection, 'hidden');
    removeClass(historyBtn, 'bg-primary');
    removeClass(donationSeciton, 'hidden')
});
// Donation secciton ends here......................



// History secciton starts here......................
historyBtn.addEventListener('click', function (event) {
    addClass(historyBtn, 'bg-primary');
    addClass(donationSeciton, 'hidden');
    removeClass(donationBtn, 'bg-primary');
    removeClass(historySection, 'hidden');
});
// History secciton ends here......................







// noakhali calculator starts here......................
document.getElementById('donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const noakhaliDonation = inputFieldValue('input-noakhali-donation');
        if (!isNaN(noakhaliDonation) && noakhaliDonation > 0) {
            const noakhaliBalace = textValue('noakhali-blance');
            const topDecreaseBlance = textValue('top-blance');
            const decreaseTotalBlance = topDecreaseBlance - noakhaliDonation;
            const addBlanceToNoakhali = noakhaliBalace + noakhaliDonation;
            // history section strats here...............
            const time= new Date();
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="p-4 border rounded space-y-3">
                <p>${noakhaliDonation} Taka is Donated for Donate for Flood at Noakhali, Bangaldesh</p>
                <p>Date: ${time} </p>
                </div>
                <br>
            
            `;
            historySection.appendChild(div);
            // history section ends here...............
            injectBlance('top-blance', decreaseTotalBlance);
            injectBlance('noakhali-blance', addBlanceToNoakhali);
            // ===================================================
            const modal = document.getElementById('my_modal_5');
            modal.showModal();
            // ===================================================
        } else {
            alert('Wrong Input!');
            return;
        }
    });

// noakhali calculator ends here......................