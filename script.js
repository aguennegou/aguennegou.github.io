const questions = {
    categorie1: [
        "Question 1 de la catégorie 1",
        "Question 2 de la catégorie 1",
        // ...
    ],
    categorie2: [
        "Question 1 de la catégorie 2",
        "Question 2 de la catégorie 2",
        // ...
    ],
    categorie3: [
        "Question 1 de la catégorie 3",
        "Question 2 de la catégorie 3",
        // ...
    ],
};

const questionContainer = document.getElementById("question-container"); // Récupérer le conteneur de question

function afficherQuestionAleatoire(categorie) {
    questionContainer.style.display = "block"; // Afficher le conteneur

    if (questions[categorie] && questions[categorie].length > 0) {
        const randomIndex = Math.floor(Math.random() * questions[categorie].length);
        questionElement.textContent = questions[categorie][randomIndex];
    } else {
        questionElement.textContent = "Aucune question disponible pour cette catégorie.";
    }
}

function afficherQuestionAleatoireToutesCategories() { // Nouvelle fonction
    const toutesLesQuestions = [];
    for (const categorie in questions) {
        toutesLesQuestions.push(...questions[categorie]);
    }

    if (toutesLesQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * toutesLesQuestions.length);
        questionElement.textContent = toutesLesQuestions[randomIndex];
    } else {
        questionElement.textContent = "Aucune question disponible.";
    }
}

bouton1.addEventListener("click", () => afficherQuestionAleatoire("categorie1"));
bouton2.addEventListener("click", () => afficherQuestionAleatoire("categorie2"));
bouton3.addEventListener("click", () => afficherQuestionAleatoire("categorie3"));
boutonChance.addEventListener("click", afficherQuestionAleatoireToutesCategories); // Écouteur d'événements pour le bouton "J'ai de la chance"
