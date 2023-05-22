function demarre() {
    // window.location.href = "tel:96162801";
    window.location.href = "mailto:"
}


function ajouterNouveauContact() {
    if ('contacts' in navigator && 'ContactsManager' in window) {
        var contact = {
            name: 'John Doe',
            email: [
                { type: 'home', value: 'johndoe@example.com' }
            ],
            tel: [
                { type: 'home', value: '0123456789' }
            ]
        };

        navigator.contacts.select(['name', 'email', 'tel'])
            .then(function (contacts) {
                var contactsManager = new ContactsManager();
                return contactsManager.save(contacts[0]);
            })
            .then(function () {
                alert('Contact ajouté avec succès');
            })
            .catch(function (error) {
                alert('Une erreur s\'est produite lors de l\'ajout du contact :', error);
            });
    } else {
        alert('L\'API Web Contacts n\'est pas prise en charge par ce navigateur');
    }
}

function envoyerWhatsApp() {
    var numeroEncode = 22966399502;
    var lienWhatsApp = "https://wa.me/" + numeroEncode;
    window.open(lienWhatsApp);
}

function envoyerInstagramme() {
    var lienInstagramme = "https://www.instagram.com/";
    window.open(lienInstagramme);
}

function envoyerFacebook() {
    var lienFacebook = "https://facebook.com/";
    window.open(lienFacebook);
}

function envoyerSiteweb() {
    var numeroEncode = ""
    var lienWhatsApp = "https://wa.me/" + numeroEncode;
    window.open(lienWhatsApp);
}

function envoyerYoutube() {
    var lienyoutube = "https://youtube.com/";
    window.open(lienyoutube);
}

function envoyermail() {
    var email = "dovenonjeffrey@gmail.com";
    var lienmail = "mailto:" + email;
    window.open(lienmail);
}

function envoyerTelephone() {
    var numeroEncode = 22966399502;
    var lienTelepone = "tel:" + numeroEncode;
    window.open(lienTelepone);
}

function envoyertwitter() {
    var lienTwitter = "https://twitter.com/";
    window.open(lienTwitter);
}