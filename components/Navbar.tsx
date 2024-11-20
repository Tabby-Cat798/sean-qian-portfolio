'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'services', title: 'Services' },
  { id: 'contact', title: 'Contact' },
];

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    padding: '10px 20px',
    transition: 'background-color 0.3s ease',
  },
  navTransparent: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  navSolid: {
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '48px',
    color: '#333',
    fontWeight: 700,
    fontFamily: 'LogoFont, sans-serif',
    textDecoration: 'none',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    position: 'relative',
  },
  navItem: {
    marginLeft: '20px',
    position: 'relative',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '18px',
    padding: '10px 15px',
    position: 'relative',
    zIndex: 2,
    fontFamily: 'NavFont',
  },
  highlightBox: {
    position: 'absolute',
    height: '40px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    top: '-25%',
    transition: 'transform 0.3s ease, width 0.3s ease',
    zIndex: 1,
  },
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({
    transform: 'translateX(0px)',
    width: '0px',
  });

  // 更新高亮框的位置和大小
  const updateHighlightStyle = (sectionId: string) => {
    const activeLink = document.querySelector(`#nav-${sectionId}`);
    const navList = document.querySelector('ul');

    if (activeLink && navList) {
      const linkRect = activeLink.getBoundingClientRect();
      const navRect = navList.getBoundingClientRect();

      setHighlightStyle({
        transform: `translateX(${linkRect.left - navRect.left}px)`,
        width: `${linkRect.width}px`,
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // 滚动超过100px时切换导航栏背景色

      // 检测当前可见的内容区域
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // 页面初始加载时立即检测当前可见区域并设置高亮框1
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // 每次 activeSection 变化时更新高亮框
    if (activeSection) {
      updateHighlightStyle(activeSection);
    }
  }, [activeSection]);

  return (
    <nav
      style={{
        ...styles.nav,
        ...(isScrolled ? styles.navSolid : styles.navTransparent),
      }}
    >
      <div style={styles.navContent}>
        {/* Logo */}
        <div>
          <Link href="/" style={styles.logo}>
            Sean
          </Link>
        </div>

        {/* Navigation */}
        <ul style={styles.navList}>
          {/* 高亮框 */}
          <div style={{ ...styles.highlightBox, ...highlightStyle }}></div>
          {sections.map(({ id, title }) => (
            <li key={id} id={`nav-${id}`} style={styles.navItem}>
              <Link href={`#${id}`} style={styles.link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
