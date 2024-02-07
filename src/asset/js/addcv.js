// Tableaux d'options

const tabPermis= [
    "A1",
    "A2",
    "A",
    "B",
    "BE",
    "C1",
    "C1E",
    "C",
    "CE",
    "D1",
    "D1E",
    "D",
    "DE",
    "PPL",
    "CPL",
    "ATPL",
    "ULM"
];

const tabSoftskills= [
    "Communication",
    "Collaboration",
    "Esprit d'équipe",
    "Adaptabilité",
    "Résolution de problèmes",
    "Créativité",
    "Gestion du temps",
    "Leadership",
    "Empathie",
    "Pensée critique",
    "Résilience",
    "Gestion du stress",
    "Proactif"
];

const tabHardSkills= [
    "HTML/CSS",
    "C",
    "C#",
    "C++",
    "Cobol",
    "Go",
    "Java",
    "JavaScript",
    "Kotlin",
    "MATLAB",
    "Objective-C",
    "Perl",
    "PHP",
    "Python",
    "R",
    "Ruby",
    "Rust",
    "Scala",
    "Shell scripting",
    "SQL",
    "Swift",
    "TypeScript",
    "VB.NET"
];

const tabReseauxSociaux = [
    "LinkedIn",
    "Facebook",
    "Twitter",
    "Instagram",
    "YouTube",
    "Pinterest",
    "Snapchat",
    "TikTok",
    "WhatsApp",
    "Telegram",
    "Reddit",
    "Tumblr",
    "Flickr",
    "Vimeo",
    "Quora",
    "Medium",
    "Behance",
    "Dribbble",
    "GitHub"
];

const tabLangues = [
    "Anglais",
    "Français",
    "Espagnol",
    "Allemand",
    "Chinois",
    "Arabe",
    "Russe",
    "Portugais",
    "Japonais",
    "Italien",
    "Hindi",
    "Néerlandais",
    "Coréen",
    "Turc",
    "Suédois",
    "Polonais",
    "Danois",
    "Norvégien",
    "Finnois"
];


const btn_add_formation = document.querySelector('#btn_add_formation');
const response_formation = document.querySelector('#response_formation');
const span_diplomes = document.querySelector('#span_diplomes');
const span = document.querySelector('.span');

const btn_add_experience = document.querySelector('#btn_add_experience');
const response_experience = document.querySelector('#response_experience');
const span_experiences = document.querySelector('#span_experiences');

const btn_add_permis = document.querySelector('#btn_add_permis');
const response_permis = document.querySelector('#response_permis');
const select_permis = document.querySelector('#permis');
const span_permis = document.querySelector('#span_permis');


const btn_add_softskills = document.querySelector('#btn_add_softskills');
const response_softskills = document.querySelector('#response_softskills');
const select_softskills = document.querySelector('#softskills');
const span_softskills = document.querySelector('#span_softskills');

const btn_add_hardskills = document.querySelector('#btn_add_hardskills');
const response_hardskills = document.querySelector('#response_hardskills');
const select_hardskills = document.querySelector('#hardskills');
const span_hardskills = document.querySelector('#span_hardskills');

const btn_add_reseaux = document.querySelector('#btn_add_reseaux');
const response_reseaux = document.querySelector('#response_reseaux');
const select_reseaux = document.querySelector('#reseaux');
const span_reseaux = document.querySelector('#span_reseaux');

const btn_add_language = document.querySelector('#btn_add_language');
const response_language = document.querySelector('#response_language');
const select_language = document.querySelector('#language');
const span_languages = document.querySelector('#span_languages');

const btn_add_hobbies = document.querySelector('#btn_add_hobbies');
const response_hobbies = document.querySelector('#response_hobbies');
const span_hobbies = document.querySelector('#span_hobbies');

const span_autre = document.querySelector('#span_autre');

if (btn_add_formation !== null) {
    btn_add_formation.addEventListener('click', function (e) {
        e.preventDefault();
        const div = document.createElement('div');
        const input1 = document.createElement('input');
        input1.type = 'text';
        input1.name = 'school[]'
        input1.placeholder = 'school'
        const input2 = document.createElement('input');
        input2.type = 'text';
        input2.name = 'dip_location[]'
        input2.placeholder = 'dip_location'
        const input3 = document.createElement('input');
        input3.type = 'text';
        input3.name = 'diplome[]'
        input3.placeholder = 'diplome'
        const input4 = document.createElement('input');
        input4.type = 'text';
        input4.name = 'status[]'
        input4.placeholder = 'status'
        const input5 = document.createElement('input');
        input5.type = 'date';
        input5.name = 'dip_start[]'
        input5.placeholder = 'dip_start'
        const input6 = document.createElement('input');
        input6.type = 'date';
        input6.name = 'dip_end[]'
        input6.placeholder = 'dip_end'

        div.appendChild(input1);
        div.appendChild(input2);
        div.appendChild(input3);
        div.appendChild(input4);
        div.appendChild(input5);
        div.appendChild(input6);
        response_formation.append(div);
    });

}

if (btn_add_experience !== null) {
    btn_add_experience.addEventListener('click', function (e) {
        e.preventDefault();
        const div = document.createElement('div');
        const input1 = document.createElement('input');
        input1.type = 'text';
        input1.name = 'experience[]'
        input1.placeholder = 'experience'
        const input2 = document.createElement('input');
        input2.type = 'text';
        input2.name = 'exp_location[]'
        input2.placeholder = 'exp_location'
        const input3 = document.createElement('input');
        input3.type = 'text';
        input3.name = 'poste'
        input3.placeholder = 'poste'
        const input4 = document.createElement('input');
        input4.type = 'date';
        input4.name = 'exp_start[]'
        const input5 = document.createElement('input');
        input5.type = 'date';
        input5.name = 'exp_end[]'

        div.appendChild(input1);
        div.appendChild(input2);
        div.appendChild(input3);
        div.appendChild(input4);
        div.appendChild(input5);
        response_experience.append(div);
    });
}
if (btn_add_permis !== null) {
    btn_add_permis.addEventListener('click', function (e) {
        e.preventDefault();
        const div = document.createElement('div');
        const select = document.createElement('select');
        select.name = 'permis[]';

        tabPermis.forEach((permis) => {
            const option = document.createElement('option');
            option.textContent = permis;
            select.appendChild(option);
        });

        div.appendChild(select);
        response_permis.append(div);
    });
}
if (btn_add_softskills !== null) {

    btn_add_softskills.addEventListener('click', function (e) {
        e.preventDefault();
        const div = document.createElement('div');
        const select = document.createElement('select');
        select.name = 'softskills[]';

        tabSoftskills.forEach((sskills) => {
            const option = document.createElement('option');
            option.textContent = sskills;
            select.appendChild(option);
        });

        div.appendChild(select);
        response_softskills.append(div);
    });
}

if (btn_add_hardskills !== null) {

    btn_add_hardskills.addEventListener('click', function (e) {
        e.preventDefault();
        const div = document.createElement('div');
        const select = document.createElement('select');
        select.name = 'hardskills[]';

        tabHardSkills.forEach((hskills) => {
            const option = document.createElement('option');
            option.textContent = hskills;
            select.appendChild(option);
        });

        div.appendChild(select);
        response_hardskills.append(div);
    });
}
if (btn_add_reseaux !== null) {

    btn_add_reseaux.addEventListener('click', function (e) {
        e.preventDefault();
        const div = document.createElement('div');
        const select = document.createElement('select');
        select.name = 'reseaux[]';


        tabReseauxSociaux.forEach((reseau) => {
            const option = document.createElement('option');
            option.textContent = reseau;
            select.appendChild(option);
        });
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'url[]'
        input.placeholder = 'lien'


        div.appendChild(select);
        div.appendChild(input);
        response_reseaux.append(div);
    });

}

if (btn_add_language !== null) {
    btn_add_language.addEventListener('click', function (e) {
        e.preventDefault();
        const div = document.createElement('div');
        const select = document.createElement('select');
        select.name = 'language[]';

        tabLangues.forEach((langue) => {
            const option = document.createElement('option');
            option.textContent = langue;
            select.appendChild(option);
        });

        div.appendChild(select);
        response_language.append(div);
    });
}
if (btn_add_hobbies !== null) {
    btn_add_hobbies.addEventListener('click', function (e) {
        e.preventDefault();
        const div = document.createElement('div');
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'hobbies[]'
        input.placeholder = 'hobbies'

        div.appendChild(input);
        response_hobbies.append(div);
    });
}
// ok fin


let params = new FormData();
params.append('action', 'record_cv')
async function addCvGlobal() {
    try {
        let response = await fetch(MYSCRIPT.ajaxUrl, {
            method: 'post',
            body: params
        });
        let data = await response.json();
        console.log(data);

        if (data.success) {
            // Masquer le formulaire
            const sectionsuccess = document.querySelector('#suc');
            sectionsuccess.classList.add("test1");
            theformulaire.style.display = 'none';

            // Afficher un message de succès
            const successMessage = document.querySelector('.success');
            successMessage.innerHTML = "Votre formulaire a été soumis avec succès!";

            setTimeout(function() {
                window.location.href = "http://localhost:8888/nfs-2023-2024/projet-cv-tech/bedrock/web/user/";
            }, 2000);

        } else {
            span.innerHTML = '';

            if (data.errors.diplomes) {
                span_diplomes.innerHTML = data.errors.diplomes[0]
            }
            if (data.errors.experiences) {
                span_experiences.innerHTML = data.errors.experiences[0]
            }
            if (data.errors.softskills) {
                span_softskills.innerHTML = data.errors.softskills[0]
            }
            if (data.errors.hardskills) {
                span_hardskills.innerHTML = data.errors.hardskills[0]
            }
            if (data.errors.reseaux) {
                span_reseaux.innerHTML = data.errors.reseaux[0]
            }
            if (data.errors.hobbies) {
                span_hobbies.innerHTML = data.errors.hobbies[0]
            }
            if (data.errors.autre) {
                span_autre.innerHTML = data.errors.autre[0]
            }
        }
    } catch (error) {
        console.error('Erreur lors de la conversion de la réponse JSON :', error);
    }
}


const theformulaire = document.querySelector('#theformulaire');
if (theformulaire !== null) {
    theformulaire.addEventListener('submit', function (evt) {
        evt.preventDefault();

        params = new FormData(theformulaire);
        params.append('action', 'record_cv')

        addCvGlobal();
    });
}




