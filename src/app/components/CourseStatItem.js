import {
    FaClock,
    FaChalkboardTeacher,
    FaUsers,
    FaCalendarAlt,
    FaBookOpen,
    FaLaptop,
  } from "react-icons/fa";
  
  // البيانات الثابتة للإيقونات والعناوين
  const statsData = [
    { icon: <FaCalendarAlt size={30} />, key: "courseDuration", subtitlear: "المدة", subtitleen: "Duration" },
    { icon: <FaBookOpen size={30} />, key: "courseLectures", subtitlear: "المحاضرات", subtitleen: "Lectures" },
    { icon: <FaClock size={30} />, key: "courseHours", subtitlear: "الساعات", subtitleen: "Hours" },
    { icon: <FaChalkboardTeacher size={30} />, key: "courseInstructor", subtitlear: "المحاضر", subtitleen: "Instructor" },
    { icon: <FaUsers size={30} />, key: "courseStudents", subtitlear: "المتعلمين", subtitleen: "Learners" },
    { icon: <FaLaptop size={30} />, key: "courseMode", subtitlear: "النظام", subtitleen: "Mode" },
  ];
  
  // مكون الإحصائيات
  const CourseStats = ({ Data, dir = "ltr" }) => {
    const isRTL = dir === "rtl"; // تحديد الاتجاه (يمين لليسار أو العكس)
  
    return (
      <section className="py-10 bg-white" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {statsData.map((stat, index) => (
              <CourseStatsCard
                key={index}
                icon={stat.icon}
                title={Data[stat.key]} // جلب البيانات الديناميكية من Data
                subtitle={isRTL ? stat.subtitlear : stat.subtitleen} // اختيار النص بناءً على الاتجاه
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
export default CourseStats;

const CourseStatsCard = ({ icon, title, subtitle }) => {
    return (
      <div
        className={`bg-white p-4 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300`}
      >
        <div className="flex items-center justify-center mb-4">
          <span className="text-indigo-600">{icon}</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-center mb-2 text-black">{title}</h3>
        <p className="text-sm md:text-gray-600 text-center">{subtitle}</p>
      </div>
    );
  };
