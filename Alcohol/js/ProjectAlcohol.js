iFrameResize({
    heightCalculationMethod: 'taggedElement'
});


if (window.location.hash === '#clk_intro') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_intro");
        }
    }
}
else if (window.location.hash === '#clk_mental') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_mental");
        }
    }
}
else if (window.location.hash === '#clk_physical') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_physical");
        }
    }
}
else if (window.location.hash === '#clk_other') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_other");
        }
    }
}
else if (window.location.hash === '#clk_conclusion') {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            showSection("clk_conclusion");
        }
    }
}



function showSection(id) {
    if (id == "clk_intro") {

        document.getElementById('intro').style.display = 'inline';
        document.getElementById('mental').style.display = 'none';
        document.getElementById('physical').style.display = 'none';
        document.getElementById('other').style.display = 'none';
        document.getElementById('conclusion').style.display = 'none';

        document.getElementById('clk_intro').parentNode.classList.add('active');
        document.getElementById('clk_mental').parentNode.classList.remove('active');
        document.getElementById('clk_physical').parentNode.classList.remove('active');
        document.getElementById('clk_other').parentNode.classList.remove('active');
        document.getElementById('clk_conclusion').parentNode.classList.remove('active');

    }
    else if (id == "clk_mental") {

        document.getElementById('intro').style.display = 'none';
        document.getElementById('mental').style.display = 'inline';
        document.getElementById('physical').style.display = 'none';
        document.getElementById('other').style.display = 'none';
        document.getElementById('conclusion').style.display = 'none';

        document.getElementById('clk_intro').parentNode.classList.remove('active');
        document.getElementById('clk_mental').parentNode.classList.add('active');
        document.getElementById('clk_physical').parentNode.classList.remove('active');
        document.getElementById('clk_other').parentNode.classList.remove('active');
        document.getElementById('clk_conclusion').parentNode.classList.remove('active');


    }
    else if (id == "clk_physical") {

        document.getElementById('intro').style.display = 'none';
        document.getElementById('mental').style.display = 'none';
        document.getElementById('physical').style.display = 'inline';
        document.getElementById('other').style.display = 'none';
        document.getElementById('conclusion').style.display = 'none';

        document.getElementById('clk_intro').parentNode.classList.remove('active');
        document.getElementById('clk_mental').parentNode.classList.remove('active');
        document.getElementById('clk_physical').parentNode.classList.add('active');
        document.getElementById('clk_other').parentNode.classList.remove('active');
        document.getElementById('clk_conclusion').parentNode.classList.remove('active');

    }
    else if (id == "clk_other") {

        document.getElementById('intro').style.display = 'none';
        document.getElementById('mental').style.display = 'none';
        document.getElementById('physical').style.display = 'none';
        document.getElementById('other').style.display = 'inline';
        document.getElementById('conclusion').style.display = 'none';


        document.getElementById('clk_intro').parentNode.classList.remove('active');
        document.getElementById('clk_mental').parentNode.classList.remove('active');
        document.getElementById('clk_physical').parentNode.classList.remove('active');
        document.getElementById('clk_other').parentNode.classList.add('active');
        document.getElementById('clk_conclusion').parentNode.classList.remove('active');


    }
    else if (id == "clk_conclusion") {

        document.getElementById('intro').style.display = 'none';
        document.getElementById('mental').style.display = 'none';
        document.getElementById('physical').style.display = 'none';
        document.getElementById('other').style.display = 'none';
        document.getElementById('conclusion').style.display = 'inline';


        document.getElementById('clk_intro').parentNode.classList.remove('active');
        document.getElementById('clk_mental').parentNode.classList.remove('active');
        document.getElementById('clk_physical').parentNode.classList.remove('active');
        document.getElementById('clk_other').parentNode.classList.remove('active');
        document.getElementById('clk_conclusion').parentNode.classList.add('active');

    }
}