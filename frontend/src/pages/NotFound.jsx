
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  Home,
  ArrowLeft,
  Search,
  AlertTriangle,
  Compass,
  RefreshCw,
  ExternalLink,
  Zap,
  Bug,
  Wifi,
  WifiOff,
  Server,
  Globe,
  HelpCircle,
  Mail,
  Star,
  Sparkles,
} from "lucide-react"

const NotFound = () => {
  const navigate = useNavigate()
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [countdown, setCountdown] = useState(10)
  const [autoRedirect, setAutoRedirect] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (autoRedirect && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else if (autoRedirect && countdown === 0) {
      navigate("/")
    }
  }, [countdown, autoRedirect, navigate])

  const handleGoHome = () => {
    navigate("/")
  }

  const handleGoBack = () => {
    window.history.length > 1 ? navigate(-1) : navigate("/")
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  const toggleAutoRedirect = () => {
    setAutoRedirect(!autoRedirect)
    if (!autoRedirect) {
      setCountdown(10)
    }
  }

  const commonIssues = [
    {
      icon: Globe,
      title: "Check your internet connection",
      description: "Make sure you're connected to the internet",
      action: "Test Connection",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Server,
      title: "Server might be down",
      description: "Our servers might be temporarily unavailable",
      action: "Check Status",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Bug,
      title: "Report this issue",
      description: "Help us improve by reporting this problem",
      action: "Report Bug",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
    },
  ]

  const quickLinks = [
    { name: "Dashboard", path: "/dashboard", icon: Home, color: "from-blue-500 to-cyan-500" },
    { name: "Create Ticket", path: "/create-ticket", icon: Zap, color: "from-purple-500 to-pink-500" },

  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-red-500/30 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/20 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Interactive cursor glow */}
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce delay-300 opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-bounce delay-700 opacity-50"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-bounce delay-1000 opacity-70"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce delay-500 opacity-40"></div>

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Connection Status */}
          <div className="mb-8 animate-fade-in">
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-xl border transition-all duration-300 ${
                isOnline
                  ? "bg-green-500/20 text-green-300 border-green-500/30 shadow-lg shadow-green-500/20"
                  : "bg-red-500/20 text-red-300 border-red-500/30 shadow-lg shadow-red-500/20"
              }`}
            >
              {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
              {isOnline ? "Connected" : "Offline"}
              <div className={`w-2 h-2 rounded-full animate-pulse ${isOnline ? "bg-green-400" : "bg-red-400"}`}></div>
            </div>
          </div>

          {/* Enhanced Main Error Display */}
          <div className="mb-16 animate-fade-in">
            <div className="relative mb-12">
              {/* Glowing 404 with multiple layers */}
              <div className="relative">
                <div className="text-[12rem] md:text-[16rem] font-black text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text animate-pulse drop-shadow-2xl">
                  404
                </div>
                <div className="absolute inset-0 text-[12rem] md:text-[16rem] font-black text-red-500/20 blur-sm">
                  404
                </div>
                <div className="absolute inset-0 text-[12rem] md:text-[16rem] font-black text-orange-500/10 blur-lg">
                  404
                </div>
              </div>

              {/* Floating sparkles around 404 */}
              <div className="absolute top-10 left-1/4 animate-bounce delay-300">
                <Sparkles className="w-6 h-6 text-yellow-400 opacity-70" />
              </div>
              <div className="absolute top-20 right-1/4 animate-bounce delay-700">
                <Star className="w-4 h-4 text-pink-400 opacity-60" />
              </div>
              <div className="absolute bottom-10 left-1/3 animate-bounce delay-1000">
                <Star className="w-5 h-5 text-blue-400 opacity-50" />
              </div>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-8 border border-red-500/30 backdrop-blur-xl shadow-2xl">
                <AlertTriangle className="w-12 h-12 text-red-400 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text  drop-shadow-lg">
                Oops! Page Not Found
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                The page you're looking for seems to have vanished into the digital void. Don't worry, even the best
                developers get lost sometimes!
              </p>

              {/* Fun error messages */}
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 max-w-2xl mx-auto mb-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Bug className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300 font-semibold">Error Details</span>
                </div>
                <p className="text-slate-300 text-sm">
                  <span className="font-mono bg-slate-800/50 px-2 py-1 rounded text-red-400">HTTP 404</span> - The
                  requested resource could not be found on this server.
                </p>
              </div>
            </div>

            {/* Enhanced Auto Redirect Counter */}
            {autoRedirect && (
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 mb-8 max-w-md mx-auto shadow-2xl">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <RefreshCw className="w-6 h-6 text-blue-400 animate-spin" />
                  <span className="text-blue-300 font-semibold text-lg">Auto-redirecting to home</span>
                </div>
                <div className="relative mb-4">
                  <div className="text-4xl font-black text-white mb-2">{countdown}</div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <button
                  onClick={toggleAutoRedirect}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Cancel auto-redirect
                </button>
              </div>
            )}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            <button
              onClick={handleGoHome}
              className="group flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold cursor-pointer rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-blue-500/25"
            >
              <Home className="w-6 h-6 group-hover:animate-bounce" />
              Go Home
            </button>
            <button
              onClick={handleGoBack}
              className="group flex items-center justify-center gap-3 px-8 py-5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-bold rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-xl shadow-2xl"
            >
              <ArrowLeft className="w-6 h-6 group-hover:animate-pulse" />
              Go Back
            </button>
            <button
              onClick={handleRefresh}
              className="group flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border border-green-500/30 hover:border-green-500/40 text-green-300 font-bold rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-xl shadow-2xl"
            >
              <RefreshCw className="w-6 h-6 group-hover:animate-spin" />
              Refresh
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Enhanced Common Issues */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30">
                  <Search className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Common Issues</h2>
              </div>
              <div className="space-y-6">
                {commonIssues.map((issue, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-5 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${issue.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <issue.icon className={`w-6 h-6 ${issue.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                        {issue.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">{issue.description}</p>
                      <button className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors flex items-center gap-2 group-hover:gap-3">
                        {issue.action} <ExternalLink className="w-4 h-4 transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30">
                  <Compass className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Quick Navigation</h2>
              </div>
              <div className="space-y-4">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(link.path)}
                    className="group w-full flex items-center gap-5 p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 text-left transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors mb-1">
                        {link.name}
                      </div>
                      <div className="text-slate-400 text-sm">Navigate to {link.name.toLowerCase()}</div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-5 h-5 text-slate-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Help Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                <HelpCircle className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Still Need Help?</h2>
            </div>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              If you continue to experience issues, our support team is here to help. We're available 24/7 to assist you
              with any problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-purple-500/25"
              >
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                Contact Support
              </button>
              <button
                onClick={() => navigate("/help")}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-xl shadow-2xl"
              >
                <HelpCircle className="w-5 h-5 group-hover:animate-pulse" />
                Help Center
              </button>
            </div>
          </div>

          {/* Enhanced Footer Message */}
          <div className="mt-16 text-center">
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-slate-400 text-sm mb-2">
                <span className="font-mono text-red-400">Error Code: 404</span> • Page Not Found •{" "}
                <span className="font-mono">{new Date().toLocaleString()}</span>
              </p>
              {!autoRedirect && (
                <button
                  onClick={toggleAutoRedirect}
                  className="mt-3 text-blue-400 hover:text-blue-300 text-sm transition-colors font-medium"
                >
                  Enable auto-redirect to home
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-bounce {
          animation: bounce 3s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  )
}

export default NotFound
