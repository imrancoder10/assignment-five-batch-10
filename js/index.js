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