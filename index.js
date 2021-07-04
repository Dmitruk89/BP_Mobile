const titleText = document.getElementById('title_text');
const restoreText = document.getElementById('restore_text');
const unlimText = document.getElementById('unlim_text');
const exportText = document.getElementById('export_text');
const recognitionText = document.getElementById('recognition_text');
const monthlyNameText = document.getElementById('monthly_name_text');
const monthlyPerMonthText = document.getElementById('monthly_perMonth_text');
const monthlyDaysFreeText = document.getElementById('monthly_daysFree_text');
const monthlyMonthCostText = document.getElementById('monthly_monthCost_text');
const annuallyNameText = document.getElementById('annually_name_text');
const annuallyPerYearText = document.getElementById('annually_perYear_text');
const annuallyMostPopularText = document.getElementById('annually_mostPopular_text');
const annuallyMonthCostText = document.getElementById('annually_monthCost_text');
const continueText = document.getElementById('continue_text');
const warningText = document.getElementById('warning_text');
const termsText = document.getElementById('terms_text');
const privacyText = document.getElementById('privacy_text');



const plans = document.querySelectorAll('.plans_item');
const submitPlan = document.getElementById('submitPlan');

// let currentLocale = window.navigator ? (window.navigator.language ||
//     window.navigator.systemLanguage ||
//     window.navigator.userLanguage) : "en";
// currentLocale = currentLocale.substr(0, 2).toLowerCase();

let currentLocale = 'en';

switch (currentLocale){
    case 'ru':
        document.documentElement.style.setProperty('--language-correction', '0.7');
        break;
    case 'es':
        document.documentElement.style.setProperty('--language-correction', '0.9');
        break;
    case 'en':
        document.documentElement.style.setProperty('--language-correction', '1');
        break;
    case 'fr':
        document.documentElement.style.setProperty('--language-correction', '0.7');
        break;
    case 'ja':
        document.documentElement.style.setProperty('--language-correction', '0.8');
        break;
    case 'nl':
        document.documentElement.style.setProperty('--language-correction', '0.8');
        break;
    case 'zh':
        document.documentElement.style.setProperty('--language-correction', '0.8');
        break;
    default:
        document.documentElement.style.setProperty('--language-correction', '1');
        break;
}

async function getCurrentTranslation(locale){
    let response = await fetch(`./Localizations/${locale}.json`);
    let data = await response.json();
    console.log(data);
    return data;
}

async function translateText(){
    const translation = await getCurrentTranslation(currentLocale);
    titleText.innerHTML = translation["Unlimited Access<br>to All Features"]
    restoreText.innerHTML = translation["Restore"]
    unlimText.innerHTML = translation["Unlimited documents"]
    exportText.innerHTML = translation["Count mode"]
    recognitionText.innerHTML = translation["Text recognition (OCR)"]
    monthlyNameText.innerHTML = translation["Monthly"]
   
    monthlyDaysFreeText.innerHTML = translation["3 DAYS FREE"]
    
    annuallyNameText.innerHTML = translation["Annually"]
   
    annuallyMostPopularText.innerHTML = translation["MOST POPULAR"]
    
    continueText.innerHTML = translation["Continue"]
    warningText.innerHTML = translation["Auto-renewable. Cancel anytime."]
    termsText.innerHTML = translation["Terms of Use"]
    privacyText.innerHTML = translation["Privacy Policy"]

}

function changeSubmitPlan(){
    const activePlan = document.querySelector('.plan__active');
    switch (activePlan){
        case plans[0]:
            submitPlan.action = 'https://apple.com/';
            break;
        case plans[1]:
            submitPlan.action = 'https://google.com/';
            break;
        default:
            submitPlan.action = 'https://apple.com/';
            break;
    }
}

function toggleActiveClass(event){
    if(event.target.closest('.plans_item')){
        for (plan of plans){
            plan.classList.remove('plan__active');
        }
        event.target.closest('.plans_item').classList.add('plan__active');
        changeSubmitPlan();
    }
}

document.addEventListener('click', toggleActiveClass);

translateText();
