// const blogBtn = document.getElementsByClassName('blog-btn');
// blogBtn.addEventListener('click', function() {
//     alert('Button was clicked!');
// });


document.getElementById('donate-btn')
        .addEventListener('click', function (event) {
            event.preventDefault();
            const noakhaliDonation = inputFieldValue('input-noakhali-donation');
            if(!isNaN(noakhaliDonation) && noakhaliDonation > 0 ){
                const noakhaliBalace = textValue('noakhali-blance');
                const topDecreaseBlance = textValue('top-blance');
                const decreaseTotalBlance = topDecreaseBlance - noakhaliDonation;
                const addBlanceToNoakhali = noakhaliBalace + noakhaliDonation;
                injectBlance('top-blance', decreaseTotalBlance);
                injectBlance('noakhali-blance', addBlanceToNoakhali);
            }
            else{
                alert('Wrong Input!');
                return;
            }
        });
