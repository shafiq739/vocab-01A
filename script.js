const vocabulary = [
  { en: "Abattoir", bn: "কসাইখানা" },
  { en: "Abbreviate", bn: "সংক্ষিপ্ত করা" },
  { en: "Abbreviation", bn: "সংক্ষিপ্ত রূপ / সংক্ষিপ্ত শব্দ" },
  { en: "Aberrance", bn: "পথভ্রষ্টতা / বিচ্যুতি" },
  { en: "Abhorrence", bn: "প্রচণ্ড ঘৃণা / জঘন্যতা" },
  { en: "Abundance", bn: "প্রাচুর্য" },
  { en: "Accommodate", bn: "জায়গা দেওয়া / স্থান দেওয়া" },
  { en: "Accommodation", bn: "থাকার ব্যবস্থা / বাসস্থান" },
  { en: "Acceleration", bn: "বেগ বা গতি বৃদ্ধি" },
  { en: "Accelerate", bn: "গতি বাড়ানো / দ্রুতি বৃদ্ধি করা" },
  { en: "Acceptance", bn: "গ্রহণ / মেনে নেওয়া" },
  { en: "Accessory", bn: "সহায়ক বস্তু / অতিরিক্ত উপকরণ / সহঅপরাধী" },
  { en: "Accessories", bn: "আনুষঙ্গিক বস্তু / যন্ত্রাংশ" },
  { en: "Accession", bn: "সিংহাসনে আরোহণ / যোগদান" },
  { en: "Accomplish", bn: "সম্পন্ন করা / অর্জন করা" },
  { en: "Accomplishment", bn: "সাফল্য / কৃতিত্ব" },
  { en: "Accuracy", bn: "যথার্থতা / নির্ভুলতা" },
  { en: "Accurate", bn: "যথার্থ / নির্ভুল" },
  { en: "Accompany", bn: "সঙ্গে থাকা / সহচর হওয়া" },
  { en: "Accordance", bn: "সামঞ্জস্যতা / মিল" },
  { en: "Accrescence", bn: "ক্রমবৃদ্ধি / বর্ধিত বৃদ্ধি" },
  { en: "Accumulate", bn: "জড়ো করা / পুঞ্জিভূত করা" },
  { en: "Accumulation", bn: "সঞ্চয় / জমা" },
  { en: "Accustom", bn: "অভ্যস্ত করা" },
  { en: "Achievement", bn: "অর্জন / সাফল্য / কৃতিত্ব" },
  { en: "Acknowledgement", bn: "স্বীকৃতি / কৃতজ্ঞতা প্রকাশ" },
  { en: "Acquaintance", bn: "পরিচিত / পূর্ব পরিচিত" },
  { en: "Acquiescence", bn: "নীরব সম্মতি / অনিচ্ছায় মেনে নেওয়া" },
  { en: "Acquire", bn: "অর্জন করা" },
  { en: "Acquittal", bn: "অভিযোগ থেকে মুক্তি / অব্যাহতি" },
  { en: "Across", bn: "আড়াআড়ি করে / জুড়ে" },
  { en: "Allergy", bn: "অ্যালার্জি / শরীরের প্রতিক্রিয়া" },
  { en: "Allegation", bn: "অভিযোগ (প্রমাণ ছাড়া)" },
  { en: "Allegiance", bn: "আনুগত্য / অনুগত থাকা" },
  { en: "Alleviation", bn: "উপশম / লাঘব" },
  { en: "Alliance", bn: "মিত্রতা / জোট / বন্ধন" },
  { en: "Alliteration", bn: "ধ্বনিপুনঃপ্রয়োগ / ধ্বনিগত অলঙ্কার" },
  { en: "Allocation", bn: "বরাদ্দ / ভাগ করে দেওয়া" },
  { en: "Allottee", bn: "যাকে বরাদ্দ দেওয়া হয়েছে" },
  { en: "Allowance", bn: "ভাতা / ছাড় / অনুমতি" },
  { en: "Alternation", bn: "পর্যায়ক্রমিক পরিবর্তন" },
  { en: "Allurement", bn: "প্রলোভন / আকর্ষণ" },
  { en: "Allusion", bn: "পরোক্ষ ইঙ্গিত / রেফারেন্স" },
  { en: "Altogether", bn: "একেবারে / সম্পূর্ণভাবে" },
  { en: "Aluminium", bn: "অ্যালুমিনিয়াম (ধাতু)" },
  { en: "Ambassador", bn: "রাষ্ট্রদূত" },
  { en: "Amelioration", bn: "উন্নয়ন / অবস্থার উন্নতি" },
  { en: "Ancillary", bn: "সহায়ক / পরিপূরক" },
  { en: "Annihilate", bn: "সম্পূর্ণরূপে ধ্বংস করা" },
  { en: "Annihilation", bn: "সম্পূর্ণ ধ্বংস / বিলুপ্তি" },
  { en: "Announcement", bn: "ঘোষণা" },
  { en: "Anonymous", bn: "বেনামী / নামহীন" },
  { en: "Antediluvian", bn: "অতিপ্রাচীন / প্রাগৈতিহাসিক" },
  { en: "Anxiety", bn: "উদ্বেগ / দুশ্চিন্তা" },
  { en: "Apparatus", bn: "যন্ত্রপাতি / সরঞ্জাম" },
  { en: "Apparent", bn: "দৃশ্যমান / স্পষ্ট" },
  { en: "Appearance", bn: "চেহারা / উপস্থিতি" },
  { en: "Appellation", bn: "নাম / উপাধি / খেতাব" },
  { en: "Appendix", bn: "পরিশিষ্ট (বইয়ের শেষে)" },
  { en: "Appetence", bn: "আকাঙ্ক্ষা / কামনা" },
  { en: "Appointment", bn: "নিয়োগ / সময় নির্ধারণ" },
  { en: "Appreciate", bn: "মূল্যায়ন করা / কদর করা / উপলব্ধি করা" },
  { en: "Apprehension", bn: "ভয় / দুশ্চিন্তা / গ্রেপ্তার" }, 

   { en: "Address", bn: "ঠিকানা" },
  { en: "Addressee", bn: "প্রাপক (যার কাছে চিঠি/বার্তা পাঠানো হয়)" },
  { en: "Adequate", bn: "যথেষ্ট / পরিমিত" },
  { en: "Adherence", bn: "আনুগত্য / দৃঢ়তা / লেগে থাকা" },
  { en: "Admissible", bn: "অনুমোদিত / গ্রহণযোগ্য" },
  { en: "Admissibility", bn: "গ্রহণযোগ্যতা / অনুমোদনযোগ্যতা" },
  { en: "Admittance", bn: "প্রবেশাধিকার / প্রবেশের অনুমতি" },
  { en: "Admission", bn: "ভর্তির অনুমতি / স্বীকারোক্তি" },
  { en: "Administer", bn: "পরিচালনা করা / শাসন করা / প্রয়োগ করা" },
  { en: "Adolescence", bn: "কৈশোর / বয়ঃসন্ধিকাল" },
  { en: "Adoration", bn: "পূজা / গভীর ভালবাসা / ভক্তি" },
  { en: "Adulteration", bn: "ভেজাল / বিশুদ্ধতা নষ্টকরণ" },
  { en: "Adultery", bn: "পরকীয়া / বিবাহবহির্ভূত সম্পর্ক" },
  { en: "Advantage", bn: "সুবিধা / লাভ / অগ্রাধিকার" },
  { en: "Aegis", bn: "সুরক্ষা / পৃষ্ঠপোষকতা" },
  { en: "Aerial", bn: "আকাশীয় / বায়বীয়" },
  { en: "Aeronaut", bn: "বিমানচালক / বেলুন চালক" },
  { en: "Aesthetic", bn: "রুচিশীল / শিল্পগুণসম্পন্ন / নান্দনিক" },
  { en: "Affluence", bn: "প্রাচুর্য / বিত্তশালী অবস্থা" },
  { en: "Afforestation", bn: "বনায়ন / বন রোপণ" },
  { en: "Affront", bn: "প্রকাশ্য অবমাননা / অপমান" },
  { en: "Aggravate", bn: "আরও খারাপ করা / উত্তেজনা বাড়ানো" },
  { en: "Agglomeration", bn: "বড় এলাকা বা বসতি যেখানে অনেক কিছু একত্রে রয়েছে" },
  { en: "Agglutination", bn: "সংযুক্তিকরণ / একত্রিত হওয়া" },
  { en: "Aggrandizement", bn: "প্রভাব, সম্পদ বা ক্ষমতার অতিরিক্ত বৃদ্ধি" },
  { en: "Aggregate", bn: "মোট / সমষ্টিগতভাবে / একত্রিত করা" },
  { en: "Aggression", bn: "আগ্রাসন / আক্রমণাত্মক মনোভাব" },
  { en: "Aggressive", bn: "আক্রমণাত্মক / আগ্রাসী" },
  { en: "Agreement", bn: "চুক্তি / সম্মতি / একমত হওয়া" },
  { en: "Aisle", bn: "মাঝের গলি / চলার পথ" },
  { en: "Alcohol", bn: "মদ / অ্যালকোহল জাতীয় তরল" },
  { en: "Alienation", bn: "বিচ্ছিন্নতা / দূরত্ব তৈরি হওয়া" },
  { en: "Alignment", bn: "সোজাসুজিভাবে অবস্থান / সংযুক্তিকরণ / সারিবদ্ধতা" },
  { en: "Allegory", bn: "রূপক কাহিনী / উপদেশমূলক প্রতীকধর্মী গল্প" },
  { en: "Apprehend", bn: "বুঝতে পারা / গ্রেফতার করা" },
  { en: "Approval", bn: "অনুমোদন / স্বীকৃতি" },
  { en: "Appropriate", bn: "উপযুক্ত / যথার্থ" },
  { en: "Aquarium", bn: "কাচের জলাধার যেখানে মাছ বা সামুদ্রিক প্রাণী রাখা হয়" },
  { en: "Archaeology", bn: "পুরাতত্ত্ব / প্রাচীন বস্তু ও সভ্যতা নিয়ে গবেষণা" },
  { en: "Arithmetic", bn: "গণিত / গাণিতিক হিসাব" },
  { en: "Arrogance", bn: "ঔদ্ধত্য / অহংকার" },
  { en: "Artillery", bn: "ভারী গোলাবারুদ / কামান বাহিনী" },
  { en: "Ascertain", bn: "নিশ্চিত হওয়া / খুঁজে বের করা" },
  { en: "Assassination", bn: "হত্যাকাণ্ড (বিশেষত রাজনৈতিক ব্যক্তি)" },
  { en: "Assent", bn: "সম্মতি / অনুমোদন দেওয়া" },
  { en: "Assessment", bn: "মূল্যায়ন / নির্ধারণ" },
  { en: "Assign", bn: "বরাদ্দ করা / দায়িত্ব দেওয়া" },
  { en: "Assistance", bn: "সহায়তা / সাহায্য" },
  { en: "Assonance", bn: "স্বরবর্ণের মিল (সাহিত্যিক অলঙ্কার)" },
  { en: "Asthma", bn: "হাঁপানি রোগ" },
  { en: "Atheist", bn: "নাস্তিক" },
  { en: "Athletic", bn: "ক্রীড়াশক্তিসম্পন্ন / খেলাধুলায় পারদর্শী" },
  { en: "Atrabilious", bn: "বিষণ্ন / মেজাজ খিটখিটে" },
  { en: "Atrophy", bn: "কোষ বা অঙ্গের ক্ষয় / দুর্বল হয়ে যাওয়া" },
  { en: "Attain", bn: "অর্জন করা / পৌঁছানো" },
  { en: "Attainment", bn: "অর্জন / সাফল্য" },
  { en: "Attempt", bn: "চেষ্টা / প্রচেষ্টা" },
  { en: "Attendance", bn: "উপস্থিতি / হাজিরা" },
  { en: "Attention", bn: "মনোযোগ / মনোসংযোগ" },
  { en: "Attorney", bn: "আইনজীবী / অ্যাটর্নি" },
  { en: "Auditorium", bn: "মিলনকক্ষ / শ্রোতাদের বসার স্থান" },
  { en: "Aurum", bn: "সোনা" },
  { en: "Authentic", bn: "খাঁটি / প্রামাণ্য / আসল" },
  { en: "Authoritative", bn: "কর্তৃত্বপূর্ণ / নির্ভরযোগ্য" },
  { en: "Autobiography", bn: "আত্মজীবনী" },
  { en: "Auxiliary", bn: "সহায়ক / অতিরিক্ত" },
  { en: "Awful / Awfully", bn: "ভয়ঙ্কর / অত্যন্ত (নেগেটিভ অর্থে)" },
  { en: "Awkward", bn: "অস্বস্তিকর / অদ্ভুত / অপ্রস্তুত" }


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