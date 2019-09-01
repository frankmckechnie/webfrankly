/**
 * Webfrankly js 
 * 
 * @author Frank Mckechnie
 */

var webfrankly = (function () {


        $(document).ready(function () {


                var d = new Date();
                document.getElementById("ndate").innerHTML =
                        "Copyright C " + d.getFullYear() + ", Frank Mckechnie";
                $(".submit").hide();

                mnav = $("#mnav");

                image = $("#activate");

                image.click(function () {
                        mnav.slideToggle(500);
                });

                $(".uiButton").click(function () {
                        $(this).toggleClass("uiButtonActive");
                        toogle = $(this);
                });
        });

        $(window).resize(function () {
                var winW = $(window).width();

                if (winW > 751) {
                        mnav.hide();
                        toogle.removeClass("uiButtonActive");
                } else {}
        });

        roll = new Array();
        for (var r = 0; r < 8; r = r + 1) {
                roll[r] = new Image();
        }
        roll[0].src = "images/rawfacebook.png";
        roll[1].src = "images/facebook.png";
        roll[2].src = "images/rawlink.png";
        roll[3].src = "images/link.png";
        roll[4].src = "images/rawgoogle.png";
        roll[5].src = "images/gplus.png";
        roll[6].src = "images/rawtwitter.png";
        roll[7].src = "images/twitter.png";

        function swap(myvar) {
                document.getElementById("face").src = roll[myvar].src;
        }

        function swapTwo(myvar) {
                document.getElementById("link").src = roll[myvar].src;
        }

        function swapThree(myvar) {
                document.getElementById("gplus").src = roll[myvar].src;
        }

        function swapFour(myvar) {
                document.getElementById("twit").src = roll[myvar].src;
        }

        $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                        $(".uparrow").fadeIn();
                } else {
                        $(".uparrow").fadeOut();
                }
        });

        function formcheck() {
                if (document.theform.name.value == "") {
                        alert("Please enter your name.");
                        document.theform.name.focus();
                        return false;
                }

                if (
                        document.theform.email.value.indexOf("@") == -1 ||
                        document.theform.email.value == ""
                ) {
                        alert("Please enter a proper email address.");
                        document.theform.email.focus();
                        document.theform.email.value = "";
                        return false;
                }

                if (document.theform.surname.value == "") {
                        alert("Please enter your surname.");
                        document.theform.surname.focus();
                        return false;
                }

                if (document.theform.subject.value == "") {
                        alert("Please enter the subject.");
                        document.theform.telephone.focus();
                        return false;
                }
                if (document.theform.message.value == "") {
                        alert("Please enter the message.");
                        document.theform.reason.focus();
                        return false;
                }
        }

        // ServiceWorker is a progressive technology. Ignore unsupported browsers
        if ('serviceWorker' in navigator) {
                console.log('CLIENT: service worker registration in progress.');
                navigator.serviceWorker.register('service-worker.js').then(function () {
                        console.log('CLIENT: service worker registration complete.');
                }, function () {
                        console.log('CLIENT: service worker registration failure.');
                });
        } else {
                console.log('CLIENT: service worker is not supported.');
        }


})();