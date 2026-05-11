import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './components/Logo';
import { Apple, ChevronDown, MonitorIcon, Terminal } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import './index.css';

const DMG_DOWNLOAD_URL = "https://github.com/echowang1/gitfm/releases/download/v0.1.1/GitFM_0.1.1_aarch64.dmg";
const GITHUB_RELEASES_URL = "https://github.com/echowang1/gitfm/releases";

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const handleToggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      return newTheme;
    });
  };

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const downloadOptions = [
    { name: 'macOS', detail: 'Apple Silicon · aarch64', icon: <Apple size={18} />, url: DMG_DOWNLOAD_URL, available: true },
    { name: 'Windows', detail: 'x64 · msi', icon: <MonitorIcon size={18} />, url: GITHUB_RELEASES_URL, available: false },
    { name: 'Linux', detail: 'AppImage · deb', icon: <Terminal size={18} />, url: GITHUB_RELEASES_URL, available: false },
  ];

  return (
    <div className="h-screen w-screen bg-[var(--bg-color)] text-[var(--text-color)] font-mono flex flex-col overflow-y-auto selection:bg-white selection:text-black transition-colors duration-400">
      <header className="h-20 border-b border-[var(--border-color)] flex items-center justify-between px-10 bg-[var(--bg-color)] sticky top-0 z-50 shrink-0">
        <div className="flex items-center space-x-12">
          <Logo state="idle" />
          <div className="hidden lg:flex items-baseline space-x-2">
            <span className="swiss-label !opacity-100 font-bold tracking-widest text-[11px]">/ DISTRIBUTION_CENTRAL</span>
            <span className="swiss-label !text-[10px] opacity-40">AVAILABLE_NOW</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <ThemeToggle theme={theme} onToggle={handleToggleTheme} />
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center py-20 px-8 relative min-h-fit">
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
        <div className="absolute inset-0 dot-bg opacity-10 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-32 max-w-7xl w-full lg:pt-20">
          <div className="relative group shrink-0 lg:sticky lg:top-40">
            <div className="absolute -inset-10 bg-[var(--text-color)]/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="w-72 h-72 lg:w-96 lg:h-96 border border-[var(--border-color)] p-12 bg-[var(--panel-bg)] flex items-center justify-center relative overflow-hidden flex-col gap-6"
            >
              <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: i * 0.1 }}
                    className={`w-6 h-6 lg:w-8 lg:h-8 rounded-sm ${i % 3 === 0 ? 'bg-[var(--text-color)]' : 'bg-[var(--text-dim)]'}`}
                  />
                ))}
              </div>
              <div className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">Visualizer_Sync_v1.0</div>
              <div className="absolute inset-0 border-[0.5px] border-[var(--border-color)] pointer-events-none" />
            </motion.div>
            <div className="absolute -bottom-4 -right-4 bg-[var(--inverse-bg)] text-[var(--inverse-text)] px-5 py-2.5 text-[11px] font-black uppercase tracking-widest shadow-2xl transition-colors">
              Desktop_App_Preview
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl lg:text-8xl font-black mb-10 leading-[1.1] tracking-tight"
            >
              属于开发者的 <br />
              <span className="opacity-80">开源电台</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl lg:text-2xl text-[var(--text-muted)] leading-relaxed mb-12 font-sans max-w-2xl transition-colors tracking-wide"
            >
              把你关注的开发者的动态，变成伴随你写代码的背景音。用自然的声音，像朋友聊天一样告诉你—— 他们正在写什么？Star 了什么有趣项目？
            </motion.p>

            <div className="relative w-full max-w-lg space-y-6">
              <button
                onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                className="w-full h-20 bg-[var(--text-color)] text-[var(--bg-color)] flex items-center justify-center gap-5 rounded-md transition-all shadow-2xl group active:scale-[0.98]"
              >
                <span className="text-xl font-bold tracking-tight">↓ 下载 GitFM</span>
                <ChevronDown size={22} className={`transition-transform duration-500 opacity-50 ${isDownloadOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDownloadOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden space-y-3"
                  >
                    {downloadOptions.map((opt, i) => (
                      <motion.button
                        key={opt.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => window.open(opt.url, '_blank')}
                        className="w-full p-6 flex items-center justify-between border border-[var(--border-color)] hover:border-[var(--text-color)] transition-all group bg-[var(--panel-bg)]/30"
                      >
                        <div className="flex items-center gap-6">
                          <div className="text-[var(--text-muted)] group-hover:text-[var(--text-color)] transition-colors">
                            {opt.icon}
                          </div>
                          <span className="text-xl font-black uppercase tracking-tight">{opt.name} 系统版本</span>
                        </div>
                        <div className="text-[11px] font-bold opacity-40 group-hover:opacity-100 uppercase transition-opacity tracking-widest leading-none">
                          {opt.detail}
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div layout className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[var(--text-muted)] font-mono transition-all">
                <div className="flex items-center gap-6">
                  <span>v0.1.1</span>
                  <span className="opacity-20">·</span>
                  <a href="https://github.com/echowang1/gitfm/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color)] transition-colors border-b border-transparent hover:border-[var(--text-color)]">
                    MIT 许可证
                  </a>
                </div>
                <div className="flex items-center gap-8">
                  <a href={GITHUB_RELEASES_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color)] transition-colors border-b border-transparent hover:border-[var(--text-color)]">
                    其他版本
                  </a>
                  <span onClick={() => window.open(GITHUB_RELEASES_URL, '_blank')} className="hover:text-[var(--text-color)] cursor-pointer transition-colors border-b border-transparent hover:border-[var(--text-color)]">
                    校验和贡献
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <footer className="h-16 border-t border-[var(--border-color)] flex items-center justify-between px-10 bg-[var(--bg-color)] z-40 text-[10px] opacity-30 uppercase tracking-[0.3em] font-bold shrink-0">
        <div>© 2026 GITFM_NODES</div>
        <div>BUILT_FOR_DEVELOPERS_BY_DEVELOPERS</div>
      </footer>
    </div>
  );
}

export default App;
