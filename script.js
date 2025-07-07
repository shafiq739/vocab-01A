const vocabulary = [
  { en: "Abattoir", bn: "কসাইখানা" },
  { en: "Abbreviate", bn: "সংক্ষিপ্ত করা" },
  { en: "Abbreviation", bn: "সংক্ষিপ্ত রূপ" },
  { en: "Aberrance", bn: "বিচ্যুতি" },
  { en: "Abhorrence", bn: "ঘৃণা" },
  { en: "Abundance", bn: "প্রাচুর্য" },
  { en: "Accommodate", bn: "জায়গা দেওয়া" },
  { en: "Accommodation", bn: "বাসস্থান" },
  { en: "Acceleration", bn: "গতি বৃদ্ধি" },
  { en: "Accelerate", bn: "গতি বাড়ানো" },
  { en: "Acceptance", bn: "গ্রহণ" },
  { en: "Accessory", bn: "অতিরিক্ত উপকরণ" },
  { en: "Accessories", bn: "যন্ত্রাংশ" },
  { en: "Accession", bn: "যোগদান" },
  { en: "Accomplish", bn: "সম্পন্ন করা" },
  { en: "Accomplishment", bn: "কৃতিত্ব" },
  { en: "Accuracy", bn: "নির্ভুলতা" },
  { en: "Accurate", bn: "নির্ভুল" },
  { en: "Accompany", bn: "সঙ্গে থাকা" },
  { en: "Accordance", bn: "সামঞ্জস্য" },
  { en: "Accrescence", bn: "বৃদ্ধি" },
  { en: "Accumulate", bn: "জড়ো করা" },
  { en: "Accumulation", bn: "সঞ্চয়" },
  { en: "Accustom", bn: "অভ্যস্ত করা" },
  { en: "Achievement", bn: "সাফল্য" },
  { en: "Acknowledgement", bn: "স্বীকৃতি" },
  { en: "Acquaintance", bn: "পরিচিত" },
  { en: "Acquiescence", bn: "সম্মতি" },
  { en: "Acquire", bn: "অর্জন করা" },
  { en: "Acquittal", bn: "অব্যাহতি" },
  { en: "Across", bn: "জুড়ে" },
  { en: "Allergy", bn: "অ্যালার্জি" },
  { en: "Allegation", bn: "অভিযোগ" },
  { en: "Allegiance", bn: "আনুগত্য" },
  { en: "Alleviation", bn: "উপশম" },
  { en: "Alliance", bn: "মিত্রতা" },
  { en: "Alliteration", bn: "ধ্বনি পুনরাবৃত্তি" },
  { en: "Allocation", bn: "বরাদ্দ" },
  { en: "Allottee", bn: "প্রাপক" },
  { en: "Allowance", bn: "ভাতা" },
  { en: "Alternation", bn: "পরিবর্তন" },
  { en: "Allurement", bn: "প্রলোভন" },
  { en: "Allusion", bn: "ইঙ্গিত" },
  { en: "Altogether", bn: "একেবারে" },
  { en: "Aluminium", bn: "অ্যালুমিনিয়াম" },
  { en: "Ambassador", bn: "রাষ্ট্রদূত" },
  { en: "Amelioration", bn: "উন্নয়ন" },
  { en: "Ancillary", bn: "সহায়ক" },
  { en: "Annihilate", bn: "ধ্বংস করা" },
  { en: "Annihilation", bn: "ধ্বংস" },
  { en: "Announcement", bn: "ঘোষণা" },
  { en: "Anonymous", bn: "নামহীন" },
  { en: "Antediluvian", bn: "অতিপ্রাচীন" },
  { en: "Anxiety", bn: "দুশ্চিন্তা" },
  { en: "Apparatus", bn: "যন্ত্রপাতি" },
  { en: "Apparent", bn: "স্পষ্ট" },
  { en: "Appearance", bn: "চেহারা" },
  { en: "Appellation", bn: "উপাধি" },
  { en: "Appendix", bn: "পরিশিষ্ট" },
  { en: "Appetence", bn: "আকাঙ্ক্ষা" },
  { en: "Appointment", bn: "নিয়োগ" },
  { en: "Appreciate", bn: "কদর করা" },
  { en: "Apprehension", bn: "ভয়" },  

  { en: "Address", bn: "ঠিকানা" },
  { en: "Addressee", bn: "প্রাপক" },
  { en: "Adequate", bn: "যথেষ্ট" },
  { en: "Adherence", bn: "আনুগত্য" },
  { en: "Admissible", bn: "গ্রহণযোগ্য" },
  { en: "Admissibility", bn: "গ্রহণযোগ্যতা" },
  { en: "Admittance", bn: "প্রবেশাধিকার" },
  { en: "Admission", bn: "ভর্তির অনুমতি" },
  { en: "Administer", bn: "পরিচালনা করা" },
  { en: "Adolescence", bn: "কৈশোর" },
  { en: "Adoration", bn: "ভক্তি" },
  { en: "Adulteration", bn: "ভেজাল" },
  { en: "Adultery", bn: "পরকীয়া" },
  { en: "Advantage", bn: "সুবিধা" },
  { en: "Aegis", bn: "সুরক্ষা" },
  { en: "Aerial", bn: "আকাশীয়" },
  { en: "Aeronaut", bn: "বিমানচালক" },
  { en: "Aesthetic", bn: "নান্দনিক" },
  { en: "Affluence", bn: "প্রাচুর্য" },
  { en: "Afforestation", bn: "বনায়ন" },
  { en: "Affront", bn: "অপমান" },
  { en: "Aggravate", bn: "খারাপ করা" },
  { en: "Agglomeration", bn: "একত্র হওয়া" },
  { en: "Agglutination", bn: "সংযুক্তিকরণ" },
  { en: "Aggrandizement", bn: "ক্ষমতা বৃদ্ধি" },
  { en: "Aggregate", bn: "সমষ্টি" },
  { en: "Aggression", bn: "আগ্রাসন" },
  { en: "Aggressive", bn: "আক্রমণাত্মক" },
  { en: "Agreement", bn: "চুক্তি" },
  { en: "Aisle", bn: "চলার পথ" },
  { en: "Alcohol", bn: "মদ" },
  { en: "Alienation", bn: "বিচ্ছিন্নতা" },
  { en: "Alignment", bn: "সারিবদ্ধতা" },
  { en: "Allegory", bn: "রূপক কাহিনী" },
  { en: "Apprehend", bn: "গ্রেফতার করা" },
  { en: "Approval", bn: "অনুমোদন" },
  { en: "Appropriate", bn: "উপযুক্ত" },
  { en: "Aquarium", bn: "জলাধার" },
  { en: "Archaeology", bn: "পুরাতত্ত্ব" },
  { en: "Arithmetic", bn: "গণিত" },
  { en: "Arrogance", bn: "অহংকার" },
  { en: "Artillery", bn: "কামান" },
  { en: "Ascertain", bn: "নিশ্চিত হওয়া" },
  { en: "Assassination", bn: "হত্যা" },
  { en: "Assent", bn: "সম্মতি" },
  { en: "Assessment", bn: "মূল্যায়ন" },
  { en: "Assign", bn: "বরাদ্দ করা" },
  { en: "Assistance", bn: "সহায়তা" },
  { en: "Assonance", bn: "স্বর মিল" },
  { en: "Asthma", bn: "হাঁপানি" },
  { en: "Atheist", bn: "নাস্তিক" },
  { en: "Athletic", bn: "ক্রীড়াপ্রিয়" },
  { en: "Atrabilious", bn: "বিষণ্ন" },
  { en: "Atrophy", bn: "ক্ষয়" },
  { en: "Attain", bn: "অর্জন করা" },
  { en: "Attainment", bn: "সাফল্য" },
  { en: "Attempt", bn: "চেষ্টা" },
  { en: "Attendance", bn: "উপস্থিতি" },
  { en: "Attention", bn: "মনোযোগ" },
  { en: "Attorney", bn: "আইনজীবী" },
  { en: "Auditorium", bn: "মিলনকক্ষ" },
  { en: "Aurum", bn: "সোনা" },
  { en: "Authentic", bn: "আসল" },
  { en: "Authoritative", bn: "কর্তৃত্বপূর্ণ" },
  { en: "Autobiography", bn: "আত্মজীবনী" },
  { en: "Auxiliary", bn: "সহায়ক" },
  { en: "Awful / Awfully", bn: "ভয়ঙ্কর" },
  { en: "Awkward", bn: "অস্বস্তিকর" }



];

let round = 1;
let score = 0;
let currentQuestions = [];
let selected = []; 

const totalRounds = 20; // ✅ NEW: Total number of rounds
const questionCount = 10; // ✅ NEW: Questions per round
const passMark = Math.floor(questionCount * 0.8); // ✅ NEW: 80% pass mark  

// ✅ NEW: Load sound elements
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");




function startGame() {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  loadRound();
}

function loadRound() {
  document.getElementById("round-number").innerText = round;
  document.getElementById("next-btn").style.display = "none";
  score = 0;
  selected = [];

  
  currentQuestions = shuffleArray(vocabulary).slice(0, questionCount);

  const container = document.getElementById("match-container");
  container.innerHTML = "";

  const englishColumn = document.createElement("div");
  const banglaColumn = document.createElement("div");
  englishColumn.className = "column";
  banglaColumn.className = "column";

  const shuffledEnglish = shuffleArray([...currentQuestions]);
  const shuffledBangla = shuffleArray([...currentQuestions]);

  shuffledEnglish.forEach(item => {
  const btn = document.createElement("button");
  btn.textContent = item.en;
  btn.setAttribute("data-word", item.en);
  btn.onclick = () => {
    speakWord(item.en);         // ✅ উচ্চারণ চালাও
    checkMatch(btn);            // ✅ মিল যাচাই করো
  };
  englishColumn.appendChild(btn);
});

  shuffledBangla.forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = item.bn;
    btn.setAttribute("data-word", item.bn);
    btn.onclick = () => checkMatch(btn);
    banglaColumn.appendChild(btn);
  });

  container.appendChild(englishColumn);
  container.appendChild(banglaColumn);

  document.getElementById("score-display").innerText = `✅ Score: 0 / ${questionCount}`;
}
 
function checkMatch(btn) {
  const value = btn.getAttribute("data-word");

  if (btn.classList.contains("selected") || btn.disabled) return;

  btn.classList.add("selected");
  selected.push({ value, btn });

  if (selected.length === 2) {
    const [first, second] = selected;

    const match = currentQuestions.find(q =>
      (q.en === first.value && q.bn === second.value) ||
      (q.bn === first.value && q.en === second.value)
    );

    if (match) { 

       // ✅ NEW: Play correct sound
      correctSound.currentTime = 0;
      correctSound.play();

      score++;
      first.btn.classList.remove("selected");
      second.btn.classList.remove("selected");
      first.btn.classList.add("correct");
      second.btn.classList.add("correct");
      first.btn.disabled = true;
      second.btn.disabled = true;
    } else {

      // ❌ NEW: Play wrong sound
      wrongSound.currentTime = 0;
      wrongSound.play();

      first.btn.classList.remove("selected");
      second.btn.classList.remove("selected");
      first.btn.classList.add("wrong");
      second.btn.classList.add("wrong");

      // ✅ NEW: সঠিক উত্তর খুঁজে বের করো
      const correct = currentQuestions.find(q =>
        q.en === first.value || q.bn === first.value ||
        q.en === second.value || q.bn === second.value
      );

      // ✅ NEW: বার্তা দেখাও
      if (correct) {
        const msg = `❌ Wrong! Correct match: "${correct.en}" ↔ "${correct.bn}";`
        const feedback = document.getElementById("feedback-message");
        feedback.innerText = msg;
        feedback.style.display = "block";

        setTimeout(() => {
          feedback.style.display = "none"; // ✅ NEW: বার্তা অটো-হাইড
        }, 2000);
      }

      // ✅ NEW: ভুল রঙ ৮০০ms পর সরাও
      setTimeout(() => {
        first.btn.classList.remove("wrong");
        second.btn.classList.remove("wrong");
      }, 800);
    }

    selected = [];

    document.getElementById("score-display").innerText = `✅ Score: ${score} / ${currentQuestions.length}`;

    if (score >= Math.floor(currentQuestions.length * 0.8)) {
      document.getElementById("next-btn").style.display = "inline-block";
    }
  }
}

function nextRound() {
  if (score >= passMark) {
    if (round < totalRounds) {
      round++;
      loadRound();
    } else {
      alert("🎉 You've completed all 20 rounds!");
      location.reload();
    }
  } else {
    alert("❌ You need at least 80% to pass. Try again!");
    loadRound(); // ✅ NEW: Retry same round
  }
}


function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
} 

// Speak word functiom 

function speakWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  speechSynthesis.speak(utterance);
}