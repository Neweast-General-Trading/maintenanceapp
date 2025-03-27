import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Clock } from "lucide-react";
import logo from "./logo.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/20 relative z-10"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="flex items-start justify-start w-full gap-4">
            <img
              src={logo}
              alt="Company Logo"
              className="w-44 h-20 object-contain drop-shadow-lg"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-evenly w-full gap-3 text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              System Maintenance
            </h1>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-arabic">
              صيانة النظام
            </h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* English Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-full flex flex-col"
          >
            <div className="text-gray-700 flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 shadow-sm min-h-[240px] flex items-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start w-full">
                  <Clock
                    className="mt-1 mr-4 text-indigo-500 flex-shrink-0"
                    size={24}
                  />
                  <div className="space-y-4 flex-1">
                    <p className="font-semibold text-indigo-700 text-lg mb-3">
                      Maintenance Schedule
                    </p>
                    <div className="space-y-4 text-gray-600">
                      <div className="flex flex-col sm:items-center gap-2 sm:gap-3 sm:flex-row-reverse">
                        <span className="px-3 py-1.5 bg-indigo-100 rounded-lg font-medium min-w-[70px] text-center text-indigo-700 text-sm shadow-sm">
                          Start
                        </span>
                        <ArrowRight
                          size={16}
                          className="hidden sm:block text-indigo-500"
                        />
                        <span className="text-sm">
                          Thursday, 27 March 2025 - 5:00 PM (UAE Time)
                        </span>
                      </div>
                      <div className="flex flex-col sm:items-center gap-2 sm:gap-3 sm:flex-row-reverse">
                        <span className="px-3 py-1.5 bg-indigo-100 rounded-lg font-medium min-w-[70px] text-center text-indigo-700 text-sm shadow-sm">
                          End
                        </span>
                        <ArrowRight
                          size={16}
                          className="hidden sm:block text-indigo-500"
                        />
                        <span className="text-sm">
                          Saturday, 29 March 2025 - 8:00 AM (UAE Time)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-6 p-5 bg-red-50 rounded-xl border border-red-100 min-h-[140px] hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center text-red-600 mb-3">
                  <AlertTriangle size={20} className="mr-2 flex-shrink-0" />
                  <p className="font-semibold text-lg">Service Impact Notice</p>
                </div>
                <p className="text-red-700 text-base mb-2">
                  eOrdering system will be temporarily unavailable during this
                  maintenance window.
                </p>
                <p className="text-gray-500 italic text-sm">
                  We sincerely apologize for any inconvenience this may cause
                  and appreciate your understanding as we work to improve our
                  services.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Arabic Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-full flex flex-col text-right font-arabic"
            dir="rtl"
          >
            <div className="text-gray-700 flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-l from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 shadow-sm min-h-[240px] flex items-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start w-full">
                  <div className="space-y-4 ml-4 flex-1">
                    <p className="font-semibold text-indigo-700 text-lg mb-3">
                      جدول الصيانة
                    </p>
                    <div className="space-y-4 text-gray-600">
                      <div className="flex flex-col sm:items-center gap-2 sm:gap-3 sm:flex-row-reverse">
                        <span className="px-3 py-1.5 bg-indigo-100 rounded-lg font-medium min-w-[70px] text-center text-indigo-700 text-sm shadow-sm">
                          البداية
                        </span>
                        <ArrowRight
                          size={16}
                          className="hidden sm:block text-indigo-500 transform rotate-180"
                        />
                        <span className="text-sm">
                          الخميس، ٢٧ مارس ٢٠٢٥ - ٥:٠٠ مساءً (توقيت الإمارات)
                        </span>
                      </div>
                      <div className="flex flex-col sm:items-center gap-2 sm:gap-3 sm:flex-row-reverse">
                        <span className="px-3 py-1.5 bg-indigo-100 rounded-lg font-medium min-w-[70px] text-center text-indigo-700 text-sm shadow-sm">
                          النهاية
                        </span>
                        <ArrowRight
                          size={16}
                          className="hidden sm:block text-indigo-500 transform rotate-180"
                        />
                        <span className="text-sm">
                          السبت، ٢٩ مارس ٢٠٢٥ - ٨:٠٠ صباحاً (توقيت الإمارات)
                        </span>
                      </div>
                    </div>
                  </div>
                  <Clock
                    className="mt-1 text-indigo-500 flex-shrink-0"
                    size={24}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-6 p-5 bg-red-50 rounded-xl border border-red-100 min-h-[140px] hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center text-red-600 mb-3 justify-end">
                  <p className="font-semibold text-lg">إشعار تأثير الخدمة</p>
                  <AlertTriangle size={20} className="mr-2 flex-shrink-0" />
                </div>
                <p className="text-red-700 text-base mb-2">
                  نظام الطلبات الإلكتروني سيكون غير متاح خلال فترة الصيانة.
                </p>
                <p className="text-gray-500 italic text-sm">
                  نعتذر عن أي إزعاج قد يسببه ذلك ونقدر تفهمكم بينما نعمل على
                  تحسين خدماتنا.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                Need Help?
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                For urgent assistance during the maintenance period, please
                contact our support team.
              </p>
            </div>
            <div className="text-center md:text-right font-arabic" dir="rtl">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                تحتاج مساعدة؟
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                للمساعدة العاجلة خلال فترة الصيانة، يرجى الاتصال بفريق الدعم.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
