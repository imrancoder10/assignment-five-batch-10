// connect to blog large screen btn
document.getElementById('blog-lg-btn').addEventListener('click', function(event){
    window.location.href= './blog.html';
});
// connect to blog mobile screen btn
document.getElementById('blog-mobile-btn').addEventListener('click', function(){
    window.location.href= './blog.html';
});


// donation btn and hitory btn
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donationSeciton = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');

// donation secciton starts here......................
donationBtn.addEventListener('click', function () {
    addClass(donationBtn, 'bg-primary');
    addClass(historySection, 'hidden');
    addClass(historyBtn, 'btn');
    removeClass(donationBtn, 'btn');
    removeClass(historyBtn, 'bg-primary');
    removeClass(donationSeciton, 'hidden')
});
// Donation secciton ends here......................



// History secciton starts here......................
historyBtn.addEventListener('click', function (event) {
    addClass(historyBtn, 'bg-primary');
    addClass(donationSeciton, 'hidden');
    addClass(donationBtn, 'btn');
    removeClass(historyBtn, 'btn');
    removeClass(donationBtn, 'bg-primary');
    removeClass(historySection, 'hidden');
});
// History secciton ends here......................




// noakhali calculator starts here......................
document.getElementById('noakhali-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // ====================================================
        // section(feniInputFieldId, feniBlanceId, topBlanceId, history-section, place);
        section('input-noakhali-donation', 'noakhali-blance', 'top-blance', 'history-section', 'Noakhali');
         
    });

// noakhali calculator ends here......................

// Feni calculator starts here......................
document.getElementById('feni-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // ====================================================
        // section(feniInputFieldId, feniBlanceId, topBlanceId, history-section, place);
        section('input-feni-donation', 'feni-blance', 'top-blance', 'history-section', 'Feni');
         
    });

// feni calculator ends here......................

// Quota calculator starts here......................
document.getElementById('quota-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // ====================================================
        // section(feniInputFieldId, feniBlanceId, topBlanceId, history-section, place);
        section('input-quota-donation', 'quota-blance', 'top-blance', 'history-section', 'Quota');
         
    });

// Quota calculator ends here......................


