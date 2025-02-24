const questionElement = document.getElementById("question");
const bouton1 = document.getElementById("bouton1");
const bouton2 = document.getElementById("bouton2");
const bouton3 = document.getElementById("bouton3");
const boutonChance = document.getElementById("boutonChance");
const questionContainer = document.getElementById("question-container");

let questions = [];

// Fonction pour charger les questions depuis le fichier CSV
function chargerQuestions() {
  Papa.parse("questions.csv", { 
    download: true, 
    header: true, 
    dynamicTyping: true, 
    complete: function(results) { 
      questions = results.data;
    },
    error: function(error) {
      console.error("Erreur lors du chargement des questions:", error);
    }
  });
}

function afficherQuestionAleatoire(categorie) {
  questionContainer.style.display = "block";
  const questionsFiltrees = questions.filter(question => question.Catégorie === categorie && question.Afficher); // Filtre les questions par catégorie et par statut "Afficher"

  if (questionsFiltrees.length > 0) {
    const randomIndex = Math.floor(Math.random() * questionsFiltrees.length);
    questionElement.textContent = questionsFiltrees[randomIndex].Question;
  } else {
    questionElement.textContent = "Aucune question disponible pour cette catégorie.";
  }
}

function afficherQuestionAleatoireToutesCategories() {
  questionContainer.style.display = "block";
  const questionsAffichees = questions.filter(question => question.Afficher); // Filtre uniquement les questions avec "Afficher": true

  if (questionsAffichees.length > 0) {
    const randomIndex = Math.floor(Math.random() * questionsAffichees.length);
    questionElement.textContent = questionsAffichees[randomIndex].Question;
  } else {
    questionElement.textContent = "Aucune question disponible.";
  }
}

// Chargement des questions au chargement de la page
chargerQuestions();

// Écouteurs d'événements pour les boutons
bouton1.addEventListener("click", () => afficherQuestionAleatoire("Carrière"));
bouton2.addEventListener("click", () => afficherQuestionAleatoire("Équilibre pro/perso"));
bouton3.addEventListener("click", () => afficherQuestionAleatoire("Ton manager"));
boutonChance.addEventListener("click", afficherQuestionAleatoireToutesCategories);