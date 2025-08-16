const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navmenu");
const quali = document.querySelector(".quali");
const sections = document.querySelectorAll('section');
const windowHeight = window.innerHeight;
const navigation = document.querySelector('.pagenav');
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsR = document.querySelectorAll('.hiddenR');
const hiddenElementsF = document.querySelectorAll('.hiddenF');
const rhex = document.querySelector(".rhex");
const project_text = document.querySelector(".project_text");
const pre_hex = document.querySelector(".pre_hex");
const project_para = document.querySelector(".project_para");
const ProjectPts = document.querySelector(".ProjectPts");
const ppli1 = document.querySelector(".ppli1");
const ppli2 = document.querySelector(".ppli2");
const ppli3 = document.querySelector(".ppli3");
const ppli4 = document.querySelector(".ppli4");
const ppli5 = document.querySelector(".ppli5");
const ppli6 = document.querySelector(".ppli6");
const p1i = document.querySelector(".p1i");
const p1g = document.querySelector(".p1g");
const p2i = document.querySelector(".p2i");
const p2g = document.querySelector(".p2g");
const p3g = document.querySelector(".p3g");
const p4g = document.querySelector(".p4g");
const p5g = document.querySelector(".p5g");
const p6g = document.querySelector(".p6g");
const p7g = document.querySelector(".p7g");
const p8g = document.querySelector(".p8g");
const p9g = document.querySelector(".p9g");
const p10g = document.querySelector(".p10g");
const textElement = document.getElementById("textDisplay");


var loader = document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display="none";
})


let lastScrollTop = 0;

function hasScrolled() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        hamburger.classList.add("hidden");
    } else {
        // Scrolling up
        hamburger.classList.remove("hidden");
    }
    lastScrollTop = scrollTop;
}

// Listen for scroll events
window.addEventListener("scroll", hasScrolled, false);


hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})




function reset() {
    for(var i = 0; i <navigation.children.length; i++){
        navigation.children[i].classList.remove('selected');
    }
}

window.addEventListener('scroll', function(){
    const scrollTop = window.scrollY;
    sections.forEach(function(section,i){
        if(section.offsetTop<scrollTop+windowHeight/2&&scrollTop<section.offsetTop+windowHeight/2){
            reset();
            navigation.children[i].classList.add('selected');
        }
    });
});

document.querySelectorAll('.pagenav li').forEach(function(item, i){
    item.addEventListener('click',function(){
        window.scrollTo({
            top: i * windowHeight,
            behavior: 'smooth'
        })
    })
});

/*const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)
        console.log(entry.intersectionRatio);
        if (entry.isIntersecting){
            //const bcr = entry.boundingClientRect;
            //const isBottomVisible = (bcr.bottom < window.innerHeight) && bcr.bottom;
            //console.log(bcr.top, bcr.bottom, window.innerHeight, {isBottomVisible});
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));*/

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("show",entry.isIntersecting)
    })
})

hiddenElements.forEach(el =>{observer.observe(el)});

const observerR = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("showR",entry.isIntersecting)
    })
})

hiddenElementsR.forEach(el =>{observerR.observe(el)});

const observerF = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("showF",entry.isIntersecting)
    })
})

hiddenElementsF.forEach(el =>{observerF.observe(el)});

function openimage(imageUrl) {
    window.open(imageUrl, '_blank');
}

function removeFade(){
    setTimeout(function() { 
    project_text.classList.remove('fade-in');
    project_para.classList.remove('fade-in');
    ppli1.classList.remove('fade-in');
    ppli2.classList.remove('fade-in');
    ppli3.classList.remove('fade-in');
    ppli4.classList.remove('fade-in');
    ppli5.classList.remove('fade-in');
    ppli6.classList.remove('fade-in');
    /*p1i.classList.remove('fade-in3');*/
    p2i.classList.remove('fade-in3');
    p1g.classList.remove('fade-in3');
    p2g.classList.remove('fade-in3');
    p3g.classList.remove('fade-in3');
    p4g.classList.remove('fade-in3');
    p5g.classList.remove('fade-in3');
    p6g.classList.remove('fade-in3');
    p7g.classList.remove('fade-in3');
    p8g.classList.remove('fade-in3');
    p9g.classList.remove('fade-in3');
    p10g.classList.remove('fade-in3');
    }, 2000);
}

function myFunc1() {

        p1i.style.display = "inline-block";
        p2i.style.display = "none";
        p1g.style.display = "inline-block";
        p2g.style.display = "none";
        p3g.style.display = "none";
        p4g.style.display = "none";
        p5g.style.display = "none";
        p6g.style.display = "none";
        p7g.style.display = "none";
        p8g.style.display = "none";
        p9g.style.display = "none";
        p10g.style.display = "none";
    
        p1g.classList.add('fade-in3');
        p1i.classList.add('fade-in3');

    pre_hex.innerHTML = "";
    project_text.innerHTML = "Path planning of Non Playable Character in AI based enviournment using Cent A* Algorithm";
    project_para.innerHTML = "C++, Unreal Engine 5, Path finding Algorithm";

    ppli1.style.visibility = 'visible';
    ppli2.style.visibility = 'visible';
    ppli3.style.visibility = 'visible';
    ppli4.style.visibility = 'visible';
    ppli5.style.visibility = 'hidden';
    ppli6.style.visibility = 'hidden';

    ppli1.innerHTML="Presents <white>CentA*</white> as an extension of <white>A*</white>, enhancing starting and ending node selection, and triggering NPC behaviors before reaching destinations";
    ppli2.innerHTML="Addresses challenges such as dynamic environments, obstacles, and simultaneous navigation of multiple agents, emphasizing the need for accuracy and efficiency in pathfinding algorithms";
    ppli3.innerHTML="Explains the vital role of <white>AI pathfinding algorithms</white> in enabling realistic NPC navigation, enhancing player experience in games";
    ppli4.innerHTML="Wrote a <white>research paper</white> and presented it in an <white>IEEE</white> Conference on 20 October 2023";


    ppli1.classList.add('fade-in');
    ppli2.classList.add('fade-in');
    ppli3.classList.add('fade-in');
    ppli4.classList.add('fade-in');

    project_text.classList.add('fade-in');
    project_para.classList.add('fade-in');
    removeFade();
}


function myFunc2() {

    p1i.style.display = "none";
    p2i.style.display = "inline-block";
    p1g.style.display = "none";
    p2g.style.display = "inline-block";
    p3g.style.display = "none";
    p4g.style.display = "none";
    p5g.style.display = "none";
    p6g.style.display = "none";
    p7g.style.display = "none";
    p8g.style.display = "none";
    p9g.style.display = "none";
    p10g.style.display = "none";

    p2g.classList.add('fade-in3');
    p2i.classList.add('fade-in3');
    
    pre_hex.innerHTML = "";
    project_text.innerHTML = "A Recommendation system for Facial Skin Care using Machine Learning Models";
    project_para.innerHTML = "Python, Machine Learning, Deep Learning, Computer Vision";
    /*project_para.innerHTML = "Recommendation systems also can generate helpful suggestions for users based on their attributes and skin analysis thanks to the enormous quantity of data that has been gathered over the previous ten years and will continue to be collected in the years to come. Many of the current models rely on collaborative filtering or content-based filtering and don't really delve in-depth to understand what the user's needs and worries are. In order to develop a hybrid model that will effectively work for the benefit of one's facial skin-care, we propose a model using KNN, CNN, Transfer Learning of Efficient Net B0, and a Recommendation engine that uses content-based filtering.";*/
    ppli1.style.visibility = 'visible';
    ppli2.style.visibility = 'visible';
    ppli3.style.visibility = 'visible';
    ppli4.style.visibility = 'visible';
    ppli5.style.visibility = 'visible';
    ppli6.style.visibility = 'hidden';

    ppli1.innerHTML="Implemented recommendation system for facial skin care utilized a hybrid model incorporating to provide personalized skincare recommendations based on user attributes and skin analysis data";
    ppli2.innerHTML="Exploring the use of <white>machine learning algorithms</white> in skincare for personalized recommendations";
    ppli3.innerHTML="Used methods like <white>KNN, CNN, Transfer Learning of Efficient Net B0, and content-based filtering techniques</white> in the models";
    ppli4.innerHTML="Wrote a research paper and presented it in an IEEE Conference";
    ppli5.innerHTML="The <white>research paper</white> was published in the <white>IEEE Xplore</white> journal on 08 June 2023";
    
    ppli1.classList.add('fade-in');
    ppli2.classList.add('fade-in');
    ppli3.classList.add('fade-in');
    ppli4.classList.add('fade-in');
    ppli5.classList.add('fade-in');

    project_text.classList.add('fade-in');
    project_para.classList.add('fade-in');
    removeFade();
}

function myFunc3() {

    p1i.style.display = "none";
    p2i.style.display = "none";
    p1g.style.display = "none";
    p2g.style.display = "none";
    p3g.style.display = "inline-block";
    p4g.style.display = "none";
    p5g.style.display = "none";
    p6g.style.display = "none";
    p7g.style.display = "none";
    p8g.style.display = "none";
    p9g.style.display = "none";
    p10g.style.display = "none";

    p3g.classList.add('fade-in3');

    pre_hex.innerHTML = "";
    project_text.innerHTML = "Tableau Dashboards";
    project_para.innerHTML = "tableau-dashboards, Visualization, Insights";

    ppli1.style.visibility = 'visible';
    ppli2.style.visibility = 'visible';
    ppli3.style.visibility = 'visible';
    ppli4.style.visibility = 'visible';
    ppli5.style.visibility = 'hidden';
    ppli6.style.visibility = 'hidden';

    ppli1.innerHTML="Created <white>Tableau dashboards</white> to show different data in a clear way";
    ppli2.innerHTML="Used Tableau Desktop to make data visualizations that look <white>visually appealing, insightful visualizations and help make decisions based on data</white>";
    ppli3.innerHTML="Made interactive dashboards in Tableau to let people play with the data and learn more about it";
    ppli4.innerHTML="Used Tableau's tools to make dashboards that change and respond when people use them, making it easier to explore the data";

    ppli1.classList.add('fade-in');
    ppli2.classList.add('fade-in');
    ppli3.classList.add('fade-in');
    ppli4.classList.add('fade-in');

    project_text.classList.add('fade-in');
    project_para.classList.add('fade-in');
    removeFade();

    
}


function myFunc4() {

    p1i.style.display = "none";
    p2i.style.display = "none";
    p1g.style.display = "none";
    p2g.style.display = "none";
    p3g.style.display = "none";
    p4g.style.display = "inline-block";
    p5g.style.display = "none";
    p6g.style.display = "none";
    p7g.style.display = "none";
    p8g.style.display = "none";
    p9g.style.display = "none";
    p10g.style.display = "none";

    p4g.classList.add('fade-in3');
    
    pre_hex.innerHTML = "";
    project_text.innerHTML = "Data analysis - NSE MNC Revenue 21-23";
    project_para.innerHTML = "Python, Data Visaulizations, Pre-processing";

    ppli1.style.visibility = 'visible';
    ppli2.style.visibility = 'visible';
    ppli3.style.visibility = 'visible';
    ppli4.style.visibility = 'visible';
    ppli5.style.visibility = 'hidden';
    ppli6.style.visibility = 'hidden';

    ppli1.innerHTML="Analyzed <white>revenue trends</white> of <white>NSE-listed multinational corporations (MNCs)</white> in India for fiscal years 2021-2023, utilizing data from reputable financial sources";
    ppli2.innerHTML="Cleaned and processed data to calculate percentage changes in revenue, facilitating insights into company performance over time";
    ppli3.innerHTML="Identified consistent <white>revenue growth</white> and <white>profitability</white> among analyzed companies, indicating resilience post-pandemic";
    ppli4.innerHTML="Produced a detailed <white>report</white> summarizing findings and methodologies employed in the analysis";


    ppli1.classList.add('fade-in');
    ppli2.classList.add('fade-in');
    ppli3.classList.add('fade-in');
    ppli4.classList.add('fade-in');

    project_text.classList.add('fade-in');
    project_para.classList.add('fade-in');
    removeFade();
}

function myFunc5() {

    p1i.style.display = "none";
    p2i.style.display = "none";
    p1g.style.display = "none";
    p2g.style.display = "none";
    p3g.style.display = "none";
    p4g.style.display = "none";
    p5g.style.display = "inline-block";
    p6g.style.display = "none";
    p7g.style.display = "none";
    p8g.style.display = "none";
    p9g.style.display = "none";
    p10g.style.display = "none";

    p5g.classList.add('fade-in3');

    pre_hex.innerHTML = "";
    project_text.innerHTML = "Customer Lifetime Value (CLV) prediction";
    project_para.innerHTML = "Python, Machine Learning, Supervised Learning";

    ppli1.style.visibility = 'visible';
    ppli2.style.visibility = 'visible';
    ppli3.style.visibility = 'visible';
    ppli4.style.visibility = 'visible';
    ppli5.style.visibility = 'hidden';
    ppli6.style.visibility = 'hidden';

    ppli1.innerHTML="Developed a predictive model for estimating <white>Customer Lifetime Value (CLV)</white> to enhance business decision-making and marketing strategies";
    ppli2.innerHTML="Employed a <white>Random Forest Regressor</white>, an ensemble learning method, capable of capturing complex relationships in the data";
    ppli3.innerHTML="Engineered features like 'Recency,' 'Frequency,' and 'MonetaryValue' to capture meaningful aspects of customer behavior and purchase patterns";
    ppli4.innerHTML="Achieved an <white>R-squared value of 1</white> , indicating an ideal and exact alignment between the predicted and actual values";

    ppli1.classList.add('fade-in');
    ppli2.classList.add('fade-in');
    ppli3.classList.add('fade-in');
    ppli4.classList.add('fade-in');

    project_text.classList.add('fade-in');
    project_para.classList.add('fade-in');
    removeFade();
}

function myFunc6() {

    p1i.style.display = "none";
    p2i.style.display = "none";
    p1g.style.display = "none";
    p2g.style.display = "none";
    p3g.style.display = "none";
    p4g.style.display = "none";
    p5g.style.display = "none";
    p6g.style.display = "inline-block";
    p7g.style.display = "none";
    p8g.style.display = "none";
    p9g.style.display = "none";
    p10g.style.display = "none";

    p6g.classList.add('fade-in3');

    pre_hex.innerHTML = "";
    project_text.innerHTML = "Analyzing Wine Quality: Central Tendencies & ML";
    project_para.innerHTML = "Python, Deep Learning, Machine Learning";

    ppli1.style.visibility = 'visible';
    ppli2.style.visibility = 'visible';
    ppli3.style.visibility = 'visible';
    ppli4.style.visibility = 'visible';
    ppli5.style.visibility = 'hidden';
    ppli6.style.visibility = 'hidden';

    ppli1.innerHTML="Built <white>Machine Learning models</white> and <white>Discriptive models</white> to analyze Wine quality";
    ppli2.innerHTML="Checked how good the models were at guessing by using a measurement called <white>Mean Squared Error (MSE)</white>, finding that some models were better than others";
    ppli3.innerHTML="Found out which properties of wine were most important for predicting its quality, helping us understand what makes good wine";
    ppli4.innerHTML="Suggested ideas for improving the models, like trying different methods or adding more information";


    ppli1.classList.add('fade-in');
    ppli2.classList.add('fade-in');
    ppli3.classList.add('fade-in');
    ppli4.classList.add('fade-in');

    project_text.classList.add('fade-in');
    project_para.classList.add('fade-in');
    removeFade();
}


function myFunc7() {

    p1i.style.display = "none";
    p2i.style.display = "none";
    p1g.style.display = "none";
    p2g.style.display = "none";
    p3g.style.display = "none";
    p4g.style.display = "none";
    p5g.style.display = "none";
    p6g.style.display = "none";
    p7g.style.display = "inline-block";
    p8g.style.display = "none";
    p9g.style.display = "none";
    p10g.style.display = "none";

    p7g.classList.add('fade-in3');

    pre_hex.innerHTML = "";
    project_text.innerHTML = "Exploratory-Data-Analysis-EDA-using-Gemma-LLM";
    project_para.innerHTML = "Python, EDA, PyTorch, Text Generation";

    ppli1.style.visibility = 'visible';
    ppli2.style.visibility = 'visible';
    ppli3.style.visibility = 'visible';
    ppli4.style.visibility = 'visible';
    ppli5.style.visibility = 'visible';
    ppli6.style.visibility = 'hidden';

    ppli1.innerHTML="Explored how <white>Gemma Language Model</white> helps with <white>Exploratory Data Analysis (EDA)</white>, like cleaning data, looking at numbers, making charts, and finding patterns";
    ppli2.innerHTML="Demonstrated data cleaning, statistics, visualization, and advanced analysis with Gemma's guidance";
    ppli3.innerHTML="Found <white>patterns and insights</white> in the data, aided by Gemma's explanations and interpretations";
    ppli4.innerHTML="<white>Increased efficiency</white> by automating tasks";
    ppli5.innerHTML="Utilized Gemma's understanding of data science concepts to enhance project outcomes";


    ppli1.classList.add('fade-in');
    ppli2.classList.add('fade-in');
    ppli3.classList.add('fade-in');
    ppli4.classList.add('fade-in');
    ppli5.classList.add('fade-in');

    project_text.classList.add('fade-in');
    project_para.classList.add('fade-in');
    removeFade();
}


function myFunc8() {

    p1i.style.display = "none";
    p2i.style.display = "none";
    p1g.style.display = "none";
    p2g.style.display = "none";
    p3g.style.display = "none";
    p4g.style.display = "none";
    p5g.style.display = "none";
    p6g.style.display = "none";
    p7g.style.display = "none";
    p8g.style.display = "inline-block";
    p9g.style.display = "none";
    p10g.style.display = "none";

    p8g.classList.add('fade-in3');

    pre_hex.innerHTML = "";
    project_text.innerHTML = "Image to text chrome extension";
    project_para.innerHTML = "Python, Google OCR, Digital  Image  Processing, Computer Vision";

    ppli1.style.visibility = 'visible';
    ppli2.style.visibility = 'visible';
    ppli3.style.visibility = 'visible';
    ppli4.style.visibility = 'visible';
    ppli5.style.visibility = 'visible';
    ppli6.style.visibility = 'visible';

    ppli1.innerHTML="Chrome extension utilizing <white>Optical Character Recognition (OCR)</white> technology to extract text from images and videos within the browser";
    ppli2.innerHTML="Utilizing Google's pre-trained Tesseract OCR engine, eliminating the need for manual data training";
    ppli3.innerHTML="Applied threshold binarization using <white>Otsu's Thresholding</white> for optimal results, ensuring accuracy by adhering to Tesseract's predefined conditions through pre-processing";
    ppli4.innerHTML="Streamlines text extraction from diverse sources like images and videos";
    ppli5.innerHTML="Allowing users to customize OCR settings, such as adjusting threshold values or choosing specific OCR languages, providing a tailored experience based on user preferences";
    ppli6.innerHTML="Currently working on integrating <white>natural language processing</white> techniques to understand the context around the extracted text, providing more meaningful and contextually relevant results";


    ppli1.classList.add('fade-in');
    ppli2.classList.add('fade-in');
    ppli3.classList.add('fade-in');
    ppli4.classList.add('fade-in');
    ppli5.classList.add('fade-in');
    ppli6.classList.add('fade-in');

    project_text.classList.add('fade-in');
    project_para.classList.add('fade-in');
    removeFade();

}


function myFunc9() {

    p1i.style.display = "none";
    p2i.style.display = "none";
    p1g.style.display = "none";
    p2g.style.display = "none";
    p3g.style.display = "none";
    p4g.style.display = "none";
    p5g.style.display = "none";
    p6g.style.display = "none";
    p7g.style.display = "none";
    p8g.style.display = "none";
    p9g.style.display = "inline-block";
    p10g.style.display = "none";

    p9g.classList.add('fade-in3');

    pre_hex.innerHTML = "";
    project_text.innerHTML = "Udaipur Rainfall prediction using Time Series analysis";
    project_para.innerHTML = "Python, Time Series Analysis";

    ppli1.style.visibility = 'visible';
    ppli2.style.visibility = 'visible';
    ppli3.style.visibility = 'visible';
    ppli4.style.visibility = 'visible';
    ppli5.style.visibility = 'hidden';
    ppli6.style.visibility = 'hidden';

    ppli1.innerHTML="Developed a predictive model to forecast rainfall in Udaipur, employing advanced <white>time series analysis techniques</white> for improved accuracy and reliability";
    ppli2.innerHTML="Utilized <white>Seasonal Autoregressive Integrated Moving Average (SARIMA)</white> modeling to capture temporal patterns and seasonality in historical rainfall data";
    ppli3.innerHTML="Engineered relevant features to enhance the model's ability to capture complex patterns in Udaipur's rainfall time series data";
    ppli4.innerHTML="Developed and fine-tuned SARIMA model parameters to achieve optimal predictive performance, taking into account both autoregressive and seasonal components";

    ppli1.classList.add('fade-in');
    ppli2.classList.add('fade-in');
    ppli3.classList.add('fade-in');
    ppli4.classList.add('fade-in');

    project_text.classList.add('fade-in');
    project_para.classList.add('fade-in');
    removeFade();
}

function myFunc10() {

    p1i.style.display = "none";
    p2i.style.display = "none";
    p1g.style.display = "none";
    p2g.style.display = "none";
    p3g.style.display = "none";
    p4g.style.display = "none";
    p5g.style.display = "none";
    p6g.style.display = "none";
    p7g.style.display = "none";
    p8g.style.display = "none";
    p9g.style.display = "none";
    p10g.style.display = "inline-block";

    p10g.classList.add('fade-in3');

    pre_hex.innerHTML = "";
    project_text.innerHTML = "ANN Classification model to predict the Customer Churn";
    project_para.innerHTML = "Python, ANN, EDA";

    ppli1.style.visibility = 'visible';
    ppli2.style.visibility = 'visible';
    ppli3.style.visibility = 'visible';
    ppli4.style.visibility = 'visible';
    ppli5.style.visibility = 'hidden';
    ppli6.style.visibility = 'hidden';

    ppli1.innerHTML="Developed an <white>Artificial Neural Network (ANN) model</white> to predict customer churn, covering data preprocessing, model building, and evaluation";
    ppli2.innerHTML="The project includes steps like <white>data collection, exploratory data analysis (EDA), and data preprocessing</white> to understand and prepare the dataset.";
    ppli3.innerHTML="Following a structured methodology, the data was split into training and testing sets, and the ANN model was built and trained";
    ppli4.innerHTML="Achieved a notable accuracy of <white>84.15%</white> with the ANN model, demonstrating its effectiveness in predicting customer churn";

    ppli1.classList.add('fade-in');
    ppli2.classList.add('fade-in');
    ppli3.classList.add('fade-in');
    ppli4.classList.add('fade-in');

    project_text.classList.add('fade-in');
    project_para.classList.add('fade-in');
    removeFade();
}

/*
document.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById("typedText");
    var text = textElement.innerText;
    var currentIndex = 0;

    // Function to type the next character
    function typeNextCharacter() {
        if (currentIndex < text.length) {
            textElement.innerHTML = text.substr(0, currentIndex + 1);
            currentIndex++;
        }
    }

    // Set a delay of 1 second before starting the typing animation
    setTimeout(function() {
        // Set an interval to type the next character every 50 milliseconds (adjust as needed)
        var typingInterval = setInterval(typeNextCharacter, 10);
    
        // Stop typing when all characters are displayed
        setTimeout(function() {
            clearInterval(typingInterval);
        }, text.length * 50);
    }, 1000); // 1000 milliseconds = 1 second
});*/

document.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById("typedText");

    function typeText(text, index, callback) {
        textElement.innerHTML = text.substr(0, index + 1);
        if (index < text.length - 1) {
            setTimeout(function() {
                typeText(text, index + 1, callback);
            }, 50); // Adjust the interval as needed
        } else {
            callback();
        }
    }

    function startTypingAnimation() {
        textElement.style.visibility = 'visible';
        typeText(textElement.innerText, 0, function() {
            // Animation complete, if you want to do something afterward
        });
    }

    // Set a delay of 1 second before starting the typing animation
    setTimeout(startTypingAnimation, 1000); // 1000 milliseconds = 1 second
});


document.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById("typedText");

    var isFirstLoad = true; // Flag to check the first load

    function typeText(text, index, callback) {
        textElement.innerHTML = text.substr(0, index + 1);
        if (index < text.length - 1) {
            setTimeout(function() {
                typeText(text, index + 1, callback);
            }, 50); // Adjust the interval as needed
        } else {
            callback();
        }
    }

    function blinkEffect(callback) {
        var isVisible = true;
        var blinkInterval = setInterval(function() {
            textElement.style.visibility = isVisible ? 'hidden' : 'visible';
            isVisible = !isVisible;
        }, 400); // Blink every 500 milliseconds

        // Stop blinking after 2 seconds
        setTimeout(function() {
            clearInterval(blinkInterval);
            callback();
        }, 2000); // 2000 milliseconds = 2 seconds
    }

    function startTypingAnimation() {
        if (!isFirstLoad) {
            blinkEffect(function() {
                textElement.style.visibility = 'visible';
                typeText(textElement.innerText, 0, function() {
                    // Animation complete, hide text after 15 seconds
                    setTimeout(function() {
                        textElement.style.visibility = 'hidden';
                        // Restart typing animation after hiding
                        setTimeout(startTypingAnimation, 1000);
                    }, 15000); // 15000 milliseconds = 15 seconds
                });
            });
        } else {
            isFirstLoad = false;
            textElement.style.visibility = 'visible';
            // Start typing animation without blinking on the first load
            typeText(textElement.innerText, 0, function() {
                // Animation complete, hide text after 15 seconds
                setTimeout(function() {
                    textElement.style.visibility = 'hidden';
                    // Restart typing animation after hiding
                    setTimeout(startTypingAnimation, 1000);
                }, 15000); // 15000 milliseconds = 15 seconds
            });
        }
    }

    // Start the initial typing animation after a 1-second delay
    setTimeout(startTypingAnimation, 1000); // 1000 milliseconds = 1 second
});


function hoobiesclick(clickedElement) {
    // Remove 'activeh' class from all elements with class 'myhobbies'
    const allHobbies = document.querySelectorAll('.myhobbies');
    allHobbies.forEach(hobby => hobby.classList.remove('activeh'));

    // Add 'activeh' class to the clicked element
    clickedElement.classList.add('activeh');
}

function copyToClipboard(email) {
    var textarea = document.createElement("textarea");
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Email address copied to clipboard: " + email);
}


const texts = ["🎓 Qualifications", "🛠️ Projects", "📄 Papers", "📜 Certifications", "🎯 Skills"];
let index = 0;

function updateText() {
    textElement.classList.remove("fadeinanim"); // Reset animation

    setTimeout(() => {
        textElement.innerText = texts[index]; // Change text
        textElement.classList.add("fadeinanim"); // Apply animation

        index = (index + 1) % texts.length; // Move to next text
    }, 100); 
}

setInterval(updateText, 3000); // Change text every 3 seconds




/*
function openContactPopup(whatsappNumber, alternativeNumber) {
    // Customize the window features as needed
    var centerX = (window.screen.width - 400) / 2;
        var centerY = (window.screen.height - 200) / 2;

        // Customize the window features as needed
        var popupFeatures = 'width=400,height=200,scrollbars=yes,resizable=yes,top=' + centerY + ',left=' + centerX;
        
        // Open a new window with the contact numbers
        var contactPopup = window.open('', 'ContactPopup', popupFeatures);

        // Clear existing content
        contactPopup.document.open();
    
    // Write HTML content with inline styles
    contactPopup.document.write(`
        <html>
        <head>
        <title>Contact me</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 10px;
                    background-color: aqua;
                }
                p {
                    margin: 5px 0;
                }
                .whatsapp {
                    color: green;
                }
                .alternative {
                    color: blue;
                }
            </style>
        </head>
        <body>
            <p class="whatsapp">WhatsApp Number: ${whatsappNumber}</p>
            <p class="alternative">Alternative Number: ${alternativeNumber}</p>
        </body>
        </html>
    `);
    contactPopup.document.close();
}*/