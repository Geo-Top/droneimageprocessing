import Head from 'next/head';
import CourseStats from "./components/CourseStatItem";
import FaqSection from "./components/FaqSection";
import CustomerReviews from './components/CustomerReviews';
import CertificatesSlider from './components/CertificatesSlider';
import FirstSection from './components/firstSession';
import FeaturedCourses from './components/FeaturedCourses';

const Data = {
   courseDuration: "8 أسابيع",
   courseLectures: "16 محاضرة",
   courseHours: "30 ساعة",
   courseInstructor: "م محمد أشرف",
   courseStudents: "27",
   courseMode: "أونلاين"
};

const faqData = [
  {
    question: "كيف أبدأ بشكل صحيح في معالجة صور الدرون؟",
    answer:
      "لا تقلق إذا كنت تشعر أن المجال صعب. الدورة تم تصميمها بطريقة تجعل البدء سهلاً للمبتدئين مع خطوات واضحة ومباشرة لتطوير مهاراتك."
  },
  {
    question: "هل ستكون هناك تسجيلات فيديو للمراجعة لاحقًا؟",
    answer:
      "بالتأكيد! يتم تسجيل جميع الجلسات ويمكنك الوصول إليها في أي وقت. هذا يضمن أنك تستطيع مراجعة المحاضرات أو اللحاق بما فاتك."
  },
  {
    question: "هل سأحصل على شهادة معتمدة بعد الانتهاء؟",
    answer:
      "نعم، عند إتمام الدورة بنجاح، ستحصل على شهادة معتمدة في معالجة صور الدرون، مما يعزز ملفك المهني."
  },
  {
    question: "هل الدورة مناسبة للمبتدئين أم للمتقدمين؟",
    answer:
      "تم تصميم الدورة خصيصًا للمبتدئين. تغطي الدورة الأساسيات اللازمة لمعالجة صور الدرون بشكل صحيح وتساعد على بناء قاعدة قوية."
  },
  {
    question: "هل تُعد الدورة المشاركين لوظائف متعلقة بالمجال؟",
    answer:
      "نعم، تُعد الدورة المشاركين للوظائف المتعلقة بمعالجة صور الدرون والتطبيقات العملية في مجال المساحة."
  }
];

const testimonials = [
    { 
      name: 'حمد العتيبي', 
      opinion: "الدورة رهيبة جدًا، تعلمت أشياء ما كنت متخيل إنها بتكون بهالسهولة! والمدرب شرحه واضح ويجاوب على كل الأسئلة." 
    },
    { 
      name: 'احمد شحتا احمد', 
      opinion: "الدورة دي بصراحة كانت فوق توقعاتي، كل حاجة كانت واضحة ومنظمة، وأنا استفدت كتير." 
    },
    { 
      name: 'اروى السودانية', 
      opinion: "الدورة دي زاتا فادتني شديد، حسيت إني بقيت جاهزة أخش سوق العمل بمعرفة واثقة." 
    },
    { 
      name: 'ابو ابراهيم علاء', 
      opinion: "أكتر حاجة عجبتني في الدورة إن المشاريع كانت واقعية وبتمس الشغل اللي ممكن نعمله بعد كده." 
    },
    { 
      name: 'نور خالد', 
      opinion: "بجد الدورة دي فتحت عيني على حاجات كتير في المجال ده، والمدرب كان متمكن جدًا في شرحه." 
    },
    { 
      name: 'مي محمد', 
      opinion: "كل حاجة في الدورة كانت سهلة ومفهومة، وفعلاً حسيت إني استفدت من كل دقيقة فيها." 
    },
  ];
  

const certificates = [
  {
    src: "/images/drone/drone (1).jpg",
    alt: "شهادة معالجة صور الدرون",
  },
  {
    src: "/images/drone/drone (1).jpeg",
    alt: "شهادة معالجة صور الدرون",
  },
  {
    src: "/images/drone/drone (3).jpg",
    alt: "شهادة معالجة صور الدرون",
  },
  {
    src: "/images/drone/drone (2).jpeg",
    alt: "شهادة معالجة صور الدرون",
  },
  {
    src: "/images/drone/drone (2).jpg",
    alt: "شهادة معالجة صور الدرون",
  }
];

const lang = "ar";
const courses = [
    {
        title: "معالجة بيانات الليزر سكانر",
        description: "تعلم كيفية معالجة وتحليل بيانات الليزر سكانر واستخدامها في تطبيقات متنوعة.",
        duration: "4 أسابيع • مستوى متقدم",
        link: `course/laserscanner/${lang}`,
        image: "/images/Laser Scanner.png",
        cta: "المزيد",
      },      
    {
        title: "نظم المعلومات الجغرافية (GIS)",
        description: "تعلم مفاهيم نظم المعلومات الجغرافية الأساسية وتطبيقاتها في العالم الحقيقي.",
        duration: "12 أسبوعًا • مستوى مبتدئ",
        link: `course/gis/${lang}`,
        image: "/images/GIS.png",
        cta: "المزيد",
      },
      {
        title: "برمجة الويب",
        description: "أتقن تطوير واجهات المستخدم والخوادم باستخدام أحدث الأدوات.",
        duration: "24 أسبوعًا • مستوى مبتدئ",
        link: `course/webcourse/${lang}`,
        image: "/images/Mern stack.webp",
        cta: "المزيد",
      },
      {
        title: "نظم المعلومات الجغرافية على الويب",
        description: "استكشف حلول نظم المعلومات الجغرافية المتقدمة للتطبيقات القائمة على الويب.",
        duration: "30 أسبوعًا • مستوى متقدم",
        link: `course/webgis/${lang}`,
        image: "/images/web gis.png",
        cta: "المزيد",
      },
      {
        title: "الذكاء الجغرافي (GeoAI)",
        description: "تعلم كيفية دمج الذكاء الاصطناعي مع نظم المعلومات الجغرافية.",
        duration: "2 أسبوع • مستوى متقدم",
        link: `course/geoai/${lang}`,
        image: "/images/geoai.png",
        cta: "المزيد",
      },
      {
        title: "مشاريع نظم المعلومات الجغرافية",
        description: "اكتسب خبرة عملية من خلال تنفيذ مهام مشاريع نظم المعلومات الجغرافية.",
        duration: "4 أسابيع • مستوى متوسط",
        link: `course/gisprojects/${lang}`,
        image: "/images/gis projects.png",
        cta: "المزيد",
      },
      {
        title: "نظم المعلومات الجغرافية باستخدام بايثون",
        description: "طبق مهاراتك في البرمجة باستخدام بايثون لحل مهام نظم المعلومات الجغرافية.",
        duration: "12 أسبوعًا • مستوى متوسط",
        link: `course/pythongis/${lang}`,
        image: "/images/python.webp",
        cta: "المزيد",
      },
      
];

export default function Home() {
  return (
    <>
      <Head>
        <title>معالجة صور الدرون</title>
      </Head>
      <FirstSection
        introText="ازاي تصبح متخصص في معالجه صور الدرون"
        introText2="كيف تبدا بشكل صحيح في معالجه صوره الدرون ولا تشعر ان المجال صعب"
        videoUrl="https://www.youtube.com/embed/UnYRAP5OfI0"
        consultationText="احجز مكالمتك المجانية"
        consultationLink="https://wa.me/201040950801?text=أنا%20مهتم%20بدورة%20معالجة%20الصور%20بالدرون%20وأريد%20حجز%20مكالمة%20هاتفية%20أو%20من%20فضلك%20قم%20بتقديم%20لي%20كافة%20التفاصيل%20عن%20هذه%20الدورة"
      />

      <CourseStats Data={Data} dir="rtl" />
      <FaqSection faqData={faqData} dir="rtl" />
      <CustomerReviews testimonials={testimonials} title="آراء المتدربين" dir="rtl" />
      <CertificatesSlider certificates={certificates} title="الشهادات" dir="rtl" />
      <FeaturedCourses courses={courses} dir="rtl" titleSection="الدورات المميزة" />
    </>
  );
}
