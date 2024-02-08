
const detailOpenButtons = document.querySelectorAll('.js_modal_detail');


let params = new FormData();
params.append('action', 'get_detail')

const Container = document.querySelector('.main');

async function GetDetailUser() {
    try {

        Container.innerHTML = "";

        var loaderDetail = document.querySelector('.loader2');
            loaderDetail.classList.remove("loader-none");

        let response = await fetch(MYSCRIPT.ajaxUrl, {
            method: 'post',
            body: params
        });
        let data = await response.json();

        console.log(data);
        loaderDetail.classList.add("loader-none");


        const separator = document.createElement('div');
        separator.classList.add("separator");


        const titre1 = document.createElement('h3');
        titre1.innerHTML = "Info personnel: ";
        Container.appendChild(titre1);

        const prenom = document.createElement('p');
        prenom.innerHTML = "Prenom : " + data.user.firstName;
        Container.appendChild(prenom);

        const nom = document.createElement('p');
        nom.innerHTML = "Nom : " + data.user.lastName;
        Container.appendChild(nom);

        const location = document.createElement('p');
        location.innerHTML = "Adresse : " + data.user.location;
        Container.appendChild(location);

        const mail = document.createElement('p');
        mail.innerHTML = "email : " + data.user.email;
        Container.appendChild(mail);

        const tel = document.createElement('p');
        tel.innerHTML = "telephone : " + data.user.phoneNumber;
        Container.appendChild(tel);

    data.other.forEach(function (other) {
        const description = document.createElement('p');
        if (other.otherDetails.length > 0) {
            description.innerHTML = "Description :" + other.otherDetails;
            Container.appendChild(description);
        }

    });


        const titre2 = document.createElement('h3');
        titre2.innerHTML = "Diplômes : ";
        Container.appendChild(titre2);



        data.diplome.forEach(function(diplome) {
            const nom_diplome = document.createElement('p');
            nom_diplome.innerHTML = "Nom diplôme : " + diplome.diplomaName;
            Container.appendChild(nom_diplome);

            const school_diplome = document.createElement('p');
            school_diplome.innerHTML = "École : " + diplome.school;
            Container.appendChild(school_diplome);

            const status_diplome = document.createElement('p');
            status_diplome.innerHTML = "Statut : " + diplome.diplomastatus;
            Container.appendChild(status_diplome);



        });

        const titre3 = document.createElement('h3');
        titre3.innerHTML = "Experience : ";
        Container.appendChild(titre3);

        data.experience.forEach(function(experience) {
            const nom_experience = document.createElement('p');
            nom_experience.innerHTML = "Nom de l'entreprise : " + experience.peName;
            Container.appendChild(nom_experience);

            const post_experience = document.createElement('p');
            post_experience.innerHTML = "poste : " + experience.pePositionHeld;
             Container.appendChild(post_experience);



        });



        const titre4 = document.createElement('h3');
        titre4.innerHTML = "Hobbies : ";
        Container.appendChild(titre4);

        data.hobbies.forEach(function(hobbies) {
            const nom_hobbies = document.createElement('p');
            nom_hobbies.innerHTML =  hobbies.hobbieName;
            Container.appendChild(nom_hobbies);



        });

        const titre5 = document.createElement('h3');
        titre5.innerHTML = "Permis : ";
        Container.appendChild(titre5);

        data.driving.forEach(function(driving) {
            const nom_permis = document.createElement('p');
            nom_permis.innerHTML = "Permi : " + driving.dlName;
            Container.appendChild(nom_permis);


        });




        const titre6 = document.createElement('h3');
        titre6.innerHTML = "Soft Skills : ";
        Container.appendChild(titre6);

        data.soft.forEach(function(soft) {
            const nom_soft = document.createElement('p');
            nom_soft.innerHTML =  soft.ssName;
            Container.appendChild(nom_soft);


        });



        const titre7 = document.createElement('h3');
        titre7.innerHTML = "Hard Skills : ";
        Container.appendChild(titre7);

        data.hard.forEach(function(hard) {
            const nom_hard = document.createElement('p');
            nom_hard.innerHTML =  hard.hsName;
            Container.appendChild(nom_hard);


        });

   const titre8 = document.createElement('h3');
        titre8.innerHTML = "Language : ";
        Container.appendChild(titre8);

        data.language.forEach(function(language) {
            const nom_language = document.createElement('p');
            nom_language.innerHTML =  language.language;
            Container.appendChild(nom_language);


        });





    } catch (error) {
        console.error('Erreur lors de la conversion de la réponse JSON :', error);
    }
}

detailOpenButtons.forEach(function(button) {
    button.addEventListener('click', function(evt) {
        const postId = button.dataset.postId;
        // console.log(postId);
        evt.preventDefault();
        params.append('id', postId);
        MicroModal.show('modal-detail');
        GetDetailUser();
    });
});

