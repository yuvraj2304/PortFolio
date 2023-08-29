const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/yuvraj2304/PortFolio',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yuvraj Kunwar',
  role: 'Data Scientist || Web Developer',
  description:
    'I am someone who loves all things tech and I also have a knack for solving problems by myself or with a team & I enjoy learning new things.',
  resume: 'https://drive.google.com/file/d/1c70Q2GZ2pvo40hHKSTu2eCSg0DzQuMGZ/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/yuvrajkunwar/',
    github: 'https://github.com/yuvraj2304',
  },
}
const experiences = [
  {
    name: 'Sublime Technocorp Pvt Ltd',
    role: 'Data Scientist',
    description:
      'Created Python-based healthcare chatbot with NLP, ML, and TKinter for frontend.Implemented symptom identification, condition info, and first aid assistance for reliablehealthcare support. Developed medical chatbot with Dialogflow and SVM algorithm for heartdisease prediction, integrating backend for accurate predictions and diagnosis',
    date: 'Jun 23 - Aug 23',
    location: 'Mumbai',
    
  },
  {
    name: 'Calibre Technologies',
    role: 'Developer',
    description:
      'Developed an AI-enabled FinTech B2B Invoice Management system, collaborating with across-functional team to implement ML models predicting future payment dates of companiesusing LinearRegression, SVR, DecisionTreeRegression, and RandomForestRegression',
    
      date: 'May 22- Jul 22',
      location: 'Remote',
   
    
  },
  
]
const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'QuadTree',
    description:
      'Devised a tree-based efficient data structure for image compression with the features to get or set pixels, overlap or intersect images, extract a portion of an image or resize an image to increase or decrease the size.',
    stack: ['C++', 'Data Structures and Algorithms'],
    sourceCode: 'https://github.com/yuvraj2304/QuadTree',
    
  },
  {
    name: 'MernEcommerce',
    description:
      'An ecommerce store built with MERN stack, and utilizes third party API’s. This ecommerce store enable three main different flows or implementations: Buyers browse the store categories,products and brands, Second Sellers or Merchants manage their own brand component and Admins manage and control the entire store components',
    stack: ['MERN'],
    sourceCode: 'https://github.com/yuvraj2304/mern-ecommerce',
   
    
  },
  {
    name: 'Text Emotion Detection',
    description:
      'The innovative project focuses on harnessing Machine Learning techniques to predict emotion levels in textual data, leading to highly accurate and effective emotion classification..',
    stack: ['Python', 'Data Science'],
    sourceCode: 'https://github.com/yuvraj2304/Text_Emotion_Detection',
    
  },
  {
    name: 'MoviePod',
    description:
      'The movie app provides detailed descriptions for any movie you search. Find comprehensive information, including plot summaries, cast and crew details, ratings, and more, all in one convenient place',
    stack: ['Web Development'],
    sourceCode: 'https://github.com/yuvraj2304/MoviePod',
  },
  {
    name: 'Health Analytics',
    description:
      'Cloud Centric IoT based Disease Diagnosis Healthcare Framework where the health data is generated using UCI dataset to predict different disease severities using different ML models',
    stack: ['Python', 'Machine Learning', 'Cloud'],
    sourceCode: '',
  },
  {
    name: 'CreditCard Validator',
    description:
      'Using C++, create a credit card validation tool by implementing Luhn algorithm for checksum verification and integrating secure input handling to ensure accurate and secure validation of credit card information.',
    stack: ['C++','Problem Solving'],
    sourceCode: 'https://github.com/yuvraj2304/CreditCardValidator',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'C++',
  'Python',
  'Data Structure and Algorithms',
  'SQL',
  'Data Science',
  'Git',
  'WordPress',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'yuvraj.bitd@mail.com',
}

export { header, about, projects, skills, contact, experiences }
