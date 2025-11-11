"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Home, 
  User, 
  LogOut, 
  CreditCard, 
  TrendingUp, 
  Calendar,
  DollarSign,
  CheckCircle2,
  Clock,
  Plus
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data
  const userData = {
    name: "Rahul Sharma",
    creditLine: 150000,
    borrowed: 50000,
    available: 100000,
    nextPayment: {
      amount: 5200,
      date: "15 Jan 2024"
    },
    paymentsMade: 3,
    totalPayments: 12,
    creditScore: 750
  };

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#121212] flex">
      {/* Sidebar */}
      <motion.aside 
        className="w-64 bg-[#1E1E1E] border-r border-[#2A2A2A] p-6 flex flex-col fixed h-screen"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-xl font-bold text-[#CCA43B]">QwikCredit</h1>
        </div>

        <nav className="flex-1 space-y-2">
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm ${
              activeTab === "overview"
                ? "bg-[#CCA43B] text-white"
                : "text-[#B3B3B3] hover:bg-[#2A2A2A]"
            }`}
          >
            <Home className="h-4 w-4" />
            <span>Overview</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm ${
              activeTab === "profile"
                ? "bg-[#CCA43B] text-white"
                : "text-[#B3B3B3] hover:bg-[#2A2A2A]"
            }`}
          >
            <User className="h-4 w-4" />
            <span>Profile</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#B3B3B3] hover:bg-[#2A2A2A] transition-all text-sm"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </motion.button>
        </nav>

        <div className="pt-6 border-t border-[#2A2A2A]">
          <p className="text-xs text-[#808080]">Logged in as</p>
          <p className="text-sm text-white font-medium">{userData.name}</p>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  Welcome back, {userData.name.split(" ")[0]}! 👋
                </h2>
                <p className="text-sm text-[#B3B3B3]">Here's your financial overview</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#CCA43B] hover:bg-[#CCA43B]/90 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Borrow More
                </Button>
              </motion.div>
            </div>

            {/* Credit Line Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-5 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-[#CCA43B]/10 rounded-lg">
                      <CreditCard className="h-5 w-5 text-[#CCA43B]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#B3B3B3] text-xs mb-1">Total Credit Line</p>
                      <p className="text-xl font-bold text-white">
                        ₹{userData.creditLine.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                  <div className="h-2 bg-[#121212] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#CCA43B] to-[#FFD700]"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-5 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-red-500/10 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#B3B3B3] text-xs mb-1">Currently Borrowed</p>
                      <p className="text-xl font-bold text-white">
                        ₹{userData.borrowed.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                  <div className="h-2 bg-[#121212] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-red-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${(userData.borrowed / userData.creditLine) * 100}%` }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-5 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <DollarSign className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#B3B3B3] text-xs mb-1">Available Credit</p>
                      <p className="text-xl font-bold text-white">
                        ₹{userData.available.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                  <div className="h-2 bg-[#121212] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${(userData.available / userData.creditLine) * 100}%` }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Payment Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-5 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-semibold text-white">Next Payment</h3>
                    <Calendar className="h-4 w-4 text-[#CCA43B]" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#B3B3B3]">Amount Due</span>
                      <span className="text-xl font-bold text-white">
                        ₹{userData.nextPayment.amount.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#B3B3B3]">Due Date</span>
                      <span className="text-sm text-white font-medium">{userData.nextPayment.date}</span>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-[#CCA43B] hover:bg-[#CCA43B]/90 text-white mt-3 text-sm">
                        Pay Now
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-5 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-semibold text-white">Payment Progress</h3>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-[#B3B3B3]">Payments Made</span>
                        <span className="text-white font-medium">
                          {userData.paymentsMade} / {userData.totalPayments}
                        </span>
                      </div>
                      <div className="h-2 bg-[#121212] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-500 to-green-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${(userData.paymentsMade / userData.totalPayments) * 100}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                    <div className="pt-3 border-t border-[#2A2A2A]">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#B3B3B3]" />
                        <span className="text-xs text-[#B3B3B3]">
                          {userData.totalPayments - userData.paymentsMade} payments remaining
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Credit Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Credit Score</h3>
                    <p className="text-[#B3B3B3] text-sm">Your credit health is excellent!</p>
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="text-5xl font-bold text-[#CCA43B]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                    >
                      {userData.creditScore}
                    </motion.div>
                    <p className="text-xs text-[#B3B3B3] mt-1">out of 900</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {activeTab === "profile" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">Profile Settings</h2>
              <p className="text-sm text-[#B3B3B3]">Manage your account information</p>
            </div>

            <Card className="bg-[#1E1E1E] border-[#2A2A2A] p-6 max-w-2xl">
              <div className="space-y-5">
                <div>
                  <label className="text-[#B3B3B3] text-sm mb-2 block">Full Name</label>
                  <input
                    type="text"
                    value={userData.name}
                    className="w-full bg-[#121212] border border-[#2A2A2A] rounded-lg px-4 py-2.5 text-sm text-white"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-[#B3B3B3] text-sm mb-2 block">Email</label>
                  <input
                    type="email"
                    value="rahul.sharma@example.com"
                    className="w-full bg-[#121212] border border-[#2A2A2A] rounded-lg px-4 py-2.5 text-sm text-white"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-[#B3B3B3] text-sm mb-2 block">Phone</label>
                  <input
                    type="tel"
                    value="+91 98765 43210"
                    className="w-full bg-[#121212] border border-[#2A2A2A] rounded-lg px-4 py-2.5 text-sm text-white"
                    readOnly
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-[#CCA43B] hover:bg-[#CCA43B]/90 text-white text-sm">
                    Update Profile
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  );
}