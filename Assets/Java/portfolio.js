// portfolio.js - Fixed: listens to languageChanged event, no duplicate language logic
// ============================================================
// 1. PORTFOLIO DATA
// ============================================================
const portfolioData = {
    projects: [
        {
            id: 'admin-dashboard',
            icon: 'fa-tachometer-alt',
            title: {
                th: 'ADMIN Dashboard',
                en: 'ADMIN Dashboard'
            },
            tag: {
                th: 'Dashboard',
                en: 'Dashboard'
            },
            description: {
                th: 'ระบบหลังบ้านของบริษัทแก๊ส — จัดการข้อมูลผ่านเว็บไซต์ ตรวจสอบความถูกต้องของผู้ส่งและลูกค้า จัดการงาน ตรวจเช็คถังที่มีอยู่ภายในองค์กร และถังที่ลูกค้าใช้งานอยู่ ช่วยให้ทราบสภาพถัง เช็คน้ำหนัก และตำแหน่งของถัง',
                en: 'Backend system for a gas company — Manage data via website. Verify the accuracy of senders and customers. Manage tasks, check cylinders in stock, and cylinders used by customers. Track cylinder condition, weight, and location.'
            },
            link: '#project-dashboard',
            images: [
                '../../img/ผลงาน/adminDashboard.png',
                '../../img/ผลงาน/adminDashboard2.png',
                '../../img/ผลงาน/adminDashboard3.png',
                '../../img/ผลงาน/adminDashboard4.png',
                '../../img/ผลงาน/adminDashboard5.png',
                '../../img/ผลงาน/adminDashboard6.png',

            ]
        },
        {
            id: 'project-2',
            icon: 'fa-chart-line',
            title: {
                th: 'เว็บไซต์วันครบรอบและบอกรัก',
                en: 'Anniversary & Love Message Website'
            },
            tag: {
                th: 'Landing Page',
                en: 'Landing Page'
            },
            description: {
                th: 'เว็บไซต์สำหรับบอกรักและฉลองวันครบรอบ ออกแบบด้วยโทนสีอบอุ่นและน่ารัก พร้อมระบบนับวันครบรอบ แสดงข้อความพิเศษ และพื้นที่สำหรับเก็บความทรงจำ เหมาะสำหรับมอบเป็นของขวัญในโอกาสสำคัญ เช่น วันครบรอบ วันเกิด หรือวันวาเลนไทน์',
                en: 'A romantic website designed to celebrate anniversaries and express love. Features an anniversary counter, personalized messages, and memorable moments, making it a perfect digital gift for special occasions such as anniversaries, birthdays, and Valentines Day.'
            },
            link: '#project-anniversary',
            images: [
                '../../img/ผลงาน/บอกรักแฟน.png',
            ]
        },
        {
            id: 'project-3',
            icon: 'fa-chart-pie',
            title: {
                th: 'แอปติดตามวินัยและพัฒนาตนเอง',
                en: 'Self-Discipline Tracking Dashboard'
            },
            tag: {
                th: 'Dashboard',
                en: 'Dashboard'
            },
            description: {
                th: 'พัฒนาแอปพลิเคชันบน Google Sheets สำหรับติดตามวินัยและพฤติกรรมในชีวิตประจำวัน โดยสามารถบันทึกกิจกรรมในแต่ละวัน วิเคราะห์ผลลัพธ์ผ่าน Dashboard และแสดงสถิติความสม่ำเสมอในด้านต่าง ๆ เช่น การเรียนรู้ การทำงาน สุขภาพ การเงิน ความสัมพันธ์ และการพัฒนาตนเอง เพื่อช่วยวิเคราะห์และปรับปรุงพฤติกรรมให้มีประสิทธิภาพมากขึ้น',
                en: 'Developed a Google Sheets-based self-discipline tracking application that records daily habits and visualizes progress through an interactive dashboard. The system analyzes consistency across multiple areas including learning, work, physical health, mental health, finance, relationships, and personal development.'
            },
            link: '#project-discipline',
            images: [
                '../../img/ผลงาน/Screenshot 2026-07-19 144700.png'
            ]
        },
        {
            id: 'project-4',
            icon: 'fa-laptop-code',
            title: {
                th: 'ระบบสินเชื่อออนไลน์และระบบหลังบ้าน',
                en: 'Online Loan Management System'
            },
            tag: {
                th: 'Web Application',
                en: 'Web Application'
            },
            description: {
                th: 'พัฒนาเว็บไซต์สำหรับรับคำขอสินเชื่อออนไลน์ โดยออกแบบหน้าฟอร์มสำหรับบันทึกข้อมูลผู้ใช้งาน พร้อมพัฒนาระบบหลังบ้านสำหรับจัดการข้อมูล ตรวจสอบคำขอ ติดตามสถานะ และบริหารข้อมูลลูกค้าอย่างเป็นระบบ',
                en: 'Developed an online loan management web application featuring customer application forms and an administrative dashboard for managing customer records, reviewing applications, tracking request status, and organizing loan-related information.'
            },
            link: '#project-loan',
            images: [
                '../../img/ผลงาน/website.png',
                '../../img/ผลงาน/website2.png',
               
            ]
        },
        {
            id: 'project-5',
            icon: 'fa-robot',
            title: {
                th: 'ชุดโปรแกรมระบบอัตโนมัติ (Automation Software)',
                en: 'Automation Software Suite'
            },
            tag: {
                th: 'Desktop Application',
                en: 'Desktop Application'
            },
            description: {
                th: 'พัฒนาโปรแกรมระบบอัตโนมัติ (Desktop Application) สำหรับช่วยลดขั้นตอนการทำงานที่ทำซ้ำ โดยออกแบบให้สามารถปรับแต่งการทำงานได้ตามลักษณะของแต่ละโปรเจกต์ เช่น ระบบจัดการบัญชีผู้ใช้ ระบบส่งข้อความอัตโนมัติ ระบบจองคิวและจองบริการ รวมถึงระบบกำหนดลำดับการทำงานอัตโนมัติ พร้อมส่วนติดต่อผู้ใช้ (GUI) สำหรับตั้งค่าและติดตามสถานะการทำงานแบบเรียลไทม์',
                en: 'Developed a collection of desktop automation applications designed to streamline repetitive workflows. The software includes customizable automation features such as account management, automated messaging, reservation assistance, task scheduling, and configurable workflow execution, all managed through an intuitive graphical user interface.'
            },
            link: '#project-automation',
            images: [
                '../../img/ผลงาน/BotAuto.png',
                '../../img/ผลงาน/Botgame.png',
                '../../img/ผลงาน/BotPopmart.png',
                '../../img/ผลงาน/ChatBot.png',
                '../../img/ผลงาน/AutoClick.png'
            ]
        },
        {
            id: 'project-6',
            icon: 'fa-microsoft',
            title: {
                th: 'Delete OverStock FlowReport',
                en: 'Delete OverStock FlowReport'
            },
            tag: {
                th: 'Microsoft 365',
                en: 'Microsoft 365'
            },
            description: {
                th: 'พัฒนาระบบ Delete OverStock FlowReport บน Microsoft 365 เพื่อบริหารจัดการรายการสินค้า OverStock และติดตามขั้นตอนการดำเนินงานแบบอัตโนมัติ โดยใช้ Power Apps สำหรับสร้างแอปพลิเคชัน, SharePoint เป็นฐานข้อมูล, Power Automate สำหรับ Workflow และการแจ้งเตือน, Microsoft Teams สำหรับการทำงานร่วมกัน และ Outlook สำหรับส่งอีเมลแจ้งเตือนและอนุมัติ ช่วยลดขั้นตอนการทำงานและเพิ่มประสิทธิภาพในการจัดการข้อมูลภายในองค์กร',
                en: 'Developed the Delete OverStock FlowReport system on Microsoft 365 to manage overstock inventory and automate business workflows. The solution utilizes Power Apps for the user interface, SharePoint as the data source, Power Automate for workflow automation and notifications, Microsoft Teams for collaboration, and Outlook for email notifications and approval processes, improving operational efficiency and reducing manual work.'
            },
            link: '#project-overstock',
            images: [
                '../../img/ผลงาน/OverStock1.jpg',
                '../../img/ผลงาน/OverStock2.jpg',
                '../../img/ผลงาน/OverStock3.jpg',
                '../../img/ผลงาน/OverStock4.jpg',
                '../../img/ผลงาน/OverStock5.jpg',
                '../../img/ผลงาน/OverStock6.jpg',
                '../../img/ผลงาน/OverStock7.jpg'
            ]
        },
        {
            id: 'project-7',
            icon: 'fa-palette',
            title: {
                th: 'Graphic Design ',
                en: 'Graphic Design '
            },
            tag: {
                th: 'Graphic Design',
                en: 'Graphic Design'
            },
            description: {
                th: 'ออกแบบและสร้างสรรค์ผลงานกราฟิกสำหรับสื่อดิจิทัลและสื่อสิ่งพิมพ์ โดยใช้ Adobe Photoshop, Canva และเครื่องมือ AI เพื่อสร้างแบนเนอร์ โปสเตอร์ โลโก้ โซเชียลมีเดีย เว็บไซต์ ภาพโปรโมต และสื่อประชาสัมพันธ์ พร้อมปรับแต่งภาพ รีทัช และออกแบบคอนเทนต์ให้เหมาะสมกับการใช้งานในแต่ละแพลตฟอร์ม',
                en: 'Designed creative digital and print media using Adobe Photoshop, Canva, and AI-powered tools. The portfolio includes banners, posters, logos, social media graphics, website assets, promotional materials, image retouching, and AI-assisted visual content tailored for various platforms.'
            },
            link: '#project-design',
            images: [
                '../../img/1.png',
                '../../img/2.png',
                '../../img/3.png',
                '../../img/4.png',
                '../../img/5.jpg',
                '../../img/6.jpg',
                '../../img/7.jpg',
                '../../img/8.jpg',
                '../../img/9.jpg',
                '../../img/10.jpg',
                '../../img/11.jpg',
                '../../img/12.jpg',
                '../../img/13.jpg',
                '../../img/14.jpg',
                '../../img/15.jpg',
                '../../img/16.jpg',
                '../../img/17.jpg',
                '../../img/18.jpg',
                '../../img/19.jpg',
                '../../img/20.jpg',
                '../../img/21.jpg',
                '../../img/22.png',
                '../../img/23.png',
                '../../img/24.png',
                '../../img/25.png',
                '../../img/26.png',
                '../../img/27.png',
                '../../img/28.png',
                '../../img/29.png',
                '../../img/30.png',
                '../../img/31.png',
                '../../img/32.png',
                '../../img/33.png',
                '../../img/34.png',
                '../../img/35.png',
                
            ]
        },
        {
            id: 'project-8',
            icon: 'fa-palette',
            title: {
                th: 'AMT Trader Dashboard',
                en: 'AMT Trader Dashboard'
            },
            tag: {
                th: 'AMT',
                en: 'AMT'
            },
            description: {
                th: 'ผลงานการสร้าง Dashboard สำหรับเทรดเดอร์ ดูได้ททั้งรายรับรายจ่ายและทั้งนี้ยังได้มีเครื่องมีช่วยคำนวณ lot ความเสี่ยงต่างๆ และร่วมข่าวสารและเคนิคการเทรด นอกจากนี้ยังมีเครื่องมือในการช่วยเทรดอย่าง indicator อีก',
                en: 'Developed a dashboard for traders featuring income and expense tracking, lot-size and risk calculation tools, trading news and techniques, and trading-support tools such as indicators.'
            },
            link: '#project-design',
            images: [
                '../../img/AMT1.png',
                '../../img/AMT2.png',
                '../../img/AMT3.png',
                '../../img/AMT4.png',
                '../../img/AMT5.png',
                '../../img/AMT6.png',
                '../../img/AMT7.png',
                '../../img/AMT8.png',
                '../../img/AMT9.png',
                '../../img/AMT10.png',
                '../../img/AMT11.png',
                '../../img/AMT12.png',
                '../../img/AMT13.png',
                '../../img/AMT14.png',
                '../../img/AMT15.png',
                '../../img/AMT16.png',
  
            ]
        },
        {
            id: 'project-9',
            icon: 'fa-palette',
            title: {
                th: 'AMT Trader',
                en: 'AMT Trader'
            },
            tag: {
                th: 'AMT',
                en: 'AMT'
            },
            description: {
                th: 'แดชบอร์ดช่วยเทรดสำหรับหุ้นและสินทรัพย์ต่างๆ (AMTS Checklist) ใช้วิเคราะห์และตรวจสอบเงื่อนไขการเทรดอย่างเป็นระบบ ประกอบด้วยการวิเคราะห์แนวโน้มหลายไทม์เฟรม (H4, H1, M15) ตัวชี้วัดทางเทคนิค (RSI, Volume, Strong FVG) และการตรวจสอบจุดเข้าซื้อขาย (POI, Break Swing, Confirm Entry)',
                en: 'A comprehensive trading dashboard for stocks and various assets (AMTS Checklist) designed to assist traders with systematic decision-making. It features multi-timeframe trend analysis (H4, H1, M15), key technical indicators (RSI, Volume, Strong FVG), and entry validation criteria (POI, Break Swing, Confirm Entry).'
            },
            link: '#project-design',
            images: [
                '../../img/AMTIndy.png',
                
            ]
        },
        {
            id: 'project-10',
            icon: 'fa-palette',
            title: {
                th: 'Game Design',
                en: 'Game Design'
            },
            tag: {
                th: 'Game',
                en: 'Game'
            },
            description: {
                th: 'เกม VR จำลองการซ่อมถนน พัฒนาขึ้นเป็นโปรเจ็คจบให้รุ่นพี่ ผู้เล่นต้องปฏิบัติงานตามลำดับขั้นตอน ตั้งแต่การเลือกรถให้ถูกต้องกับประเภทงาน ขับรถไปยังเป้าหมายอย่างแม่นยำ ไปจนถึงการซ่อมถนนให้สำเร็จ ระบบมีการประเมินคะแนนและจับเวลาเพื่อวัดความถูกต้องและประสิทธิภาพในการทำงาน',
                en: 'A VR road repair simulation game developed as a final-year project for senior students. Players follow a sequential workflow: selecting the correct vehicle for each task, driving accurately to the target location, and completing road repairs. The game includes a scoring and time-based evaluation system to assess accuracy and efficiency.'
                },
            link: '#project-design',
            images: [
                '../../img/Game1.png',
                '../../img/Game2.png',
                '../../img/Game3.png',
                '../../img/Game4.png',
                '../../img/Game5.png',
                '../../img/Game6.png',
                '../../img/Game7.png',
                '../../img/Game8.png',
                '../../img/Game9.png',
            ]
        },
        {
            id: 'project-11',
            icon: 'fa-palette',
            title: {
                th: 'Model House Design',
                en: 'Model House Design'
            },
            tag: {
                th: 'Model',
                en: 'Model'
            },
            description: {
                th: 'เกม VR จำลองการซ่อมถนน พัฒนาขึ้นเป็นโปรเจ็คจบให้รุ่นพี่ ผู้เล่นต้องปฏิบัติงานตามลำดับขั้นตอน ตั้งแต่การเลือกรถให้ถูกต้องกับประเภทงาน ขับรถไปยังเป้าหมายอย่างแม่นยำ ไปจนถึงการซ่อมถนนให้สำเร็จ ระบบมีการประเมินคะแนนและจับเวลาเพื่อวัดความถูกต้องและประสิทธิภาพในการทำงาน โดยข้าพเจ้ารับผิดชอบการสร้างโมเดล 3D สำหรับบ้านขนาดเล็กภายในฉากเกม',
                en: 'A VR road repair simulation game developed as a final-year project for senior students. Players follow a sequential workflow: selecting the correct vehicle for each task, driving accurately to the target location, and completing road repairs. The game includes a scoring and time-based evaluation system to assess accuracy and efficiency. My contribution included creating 3D models of small houses for the game environment.'
                },
            link: '#project-design',
            images: [
                '../../img/Model.png',
             
            ]
        },
        {
            id: 'project-12',
            icon: 'fa-palette',
            title: {
                th: 'AutoClick TTK , All',
                en: 'AutoClick TTK , All'
            },
            tag: {
                th: 'TTK',
                en: 'TTK'
            },
            description: {
                th: 'บอทช่วยกดบัตรคอนเสิร์ต (TTK Bot) ที่ทำงานในรูปแบบ AutoClick เพื่อเพิ่มความเร็วและโอกาสในการคว้าบัตรที่ต้องการ ปัจจุบันอยู่ระหว่างการพัฒนาต่อยอดสู่ระบบสั่งซื้อผ่าน API โดยตรง เพื่อประสิทธิภาพสูงสุด',
                en: 'TTK Bot is an automated concert ticketing bot featuring rapid auto-click capabilities to increase the chances of securing desired tickets. It is currently being developed further to integrate direct API purchasing for maximum efficiency.'
            },
            link: '#project-design',
            images: [
                '../../img/TTK1.png',
                '../../img/TTK2.png',
             
            ]
        },
        {
            id: 'project-13',
            icon: 'fa-palette',
            title: {
                th: 'Dashboard CAR',
                en: 'Dashboard CAR'
            },
            tag: {
                th: 'Dashboard',
                en: 'Dashboard'
            },
            description: {
                th: 'ระบบ Executive Dashboard สำหรับบริหารจัดการศูนย์บริการรถยนต์ พัฒนาด้วย Google Apps Script ช่วยให้ผู้บริหารสามารถติดตามคิวรถ ตรวจสอบสถานะงาน (SA, QC) วิเคราะห์ข้อมูลรายรับ-รายจ่าย สรุปยอดขายประจำเดือน และติดตามงานค้างชำระได้อย่างมีประสิทธิภาพ',
                en: 'An Executive Dashboard for automotive service management, developed using Google Apps Script. It enables executives to efficiently track vehicle queues, monitor job statuses (SA, QC), analyze revenue and expenses, summarize monthly sales, and manage pending payments.'
            },
            link: '#project-design',
            images: [
                '../../img/Cardashboard.png',
             
            ]
        },
        {
            id: 'project-14',
            icon: 'fa-palette',
            title: {
                th: 'websiteHuay',
                en: 'websiteHuay'
            },
            tag: {
                th: 'websiteHuay',
                en: 'websiteHuay'
            },
            description: {
                th: 'พัฒนาแพลตฟอร์มซื้อหวยออนไลน์แบบครบวงจร (Full-Stack) ครอบคลุมทั้งระบบหน้าบ้านสำหรับผู้ใช้งานและระบบหลังบ้านสำหรับผู้ดูแลระบบ พร้อมระบบจัดการฝากเงิน และเชื่อมต่อการทำงานผ่าน LINE Official Account (LINE OA)',
                en: 'A comprehensive full-stack online lottery platform encompassing both user-facing front-end and administrative back-end systems. It features an integrated deposit management system and seamless connection via LINE Official Account (LINE OA).'
            },
            link: '#project-design',
            images: [
                '../../img/Huay1.png',
                '../../img/Huay2.png',
                '../../img/Huay3.png',
                '../../img/Huay4.png',
                '../../img/Huay5.png',
                '../../img/Huay6.png',
                '../../img/Huay7.png',
             
            ]
        },
        {
            id: 'project-15',
            icon: 'fa-palette',
            title: {
                th: 'websiteHuay',
                en: 'websiteHuay'
            },
            tag: {
                th: 'websiteHuay',
                en: 'websiteHuay'
            },
            description: {
                th: 'พัฒนาแพลตฟอร์มซื้อหวยออนไลน์แบบครบวงจร (Full-Stack) ครอบคลุมทั้งระบบหน้าบ้านสำหรับผู้ใช้งานและระบบหลังบ้านสำหรับผู้ดูแลระบบ พร้อมระบบจัดการฝากเงิน และเชื่อมต่อการทำงานผ่าน LINE Official Account (LINE OA)',
                en: 'A comprehensive full-stack online lottery platform encompassing both user-facing front-end and administrative back-end systems. It features an integrated deposit management system and seamless connection via LINE Official Account (LINE OA).'
            },
            link: '#project-design',
            images: [
                '../../img/Loto1.png',
                '../../img/Loto2.png',
                '../../img/Loto3.png',
                '../../img/Loto4.png',
                '../../img/Loto5.png',
                '../../img/Loto6.png',
                '../../img/Loto7.png',
                '../../img/Loto8.png',
                '../../img/Loto9.png',
                '../../img/Loto10.png',
                '../../img/Loto11.png',    
            ]
        },
        {
            id: 'project-16',
            icon: 'fa-palette',
            title: {
                th: 'website-Template',
                en: 'website-Template'
            },
            tag: {
                th: 'Template',
                en: 'Template'
            },
            description: {
                th: 'ออกแบบและพัฒนา Website Template สำเร็จรูปที่มีดีไซน์ทันสมัยและเป็นมิตรกับผู้ใช้งาน (UI/UX) ประกอบด้วยหน้าตาของเว็บไซต์ที่พร้อมใช้งาน สามารถปรับแต่งและนำไปต่อยอดได้ง่าย ช่วยลดเวลาและต้นทุนในการพัฒนาเว็บไซต์',
                en: 'Designed and developed a comprehensive Website Template featuring a modern and user-friendly UI/UX. It provides ready-to-use layouts that are easy to customize, significantly reducing time and effort for future web development projects.'
            },
            link: '#project-design',
            images: [
                '../../img/Template1.png',
                '../../img/Template2.png',
                '../../img/Template3.png',
                '../../img/Template4.png',

            ]
        },
    ],
    placeholder: {
        title: {
            th: 'โปรเจกต์เพิ่มเติม',
            en: 'More Projects'
        },
        description: {
            th: 'กำลังจะมาเร็ว ๆ นี้',
            en: 'Coming soon'
        }
    }
};

// ============================================================
// 2. STATE
// ============================================================
let currentLang = 'th';

// ============================================================
// 3. RENDER PORTFOLIO
// ============================================================
function renderPortfolio(lang) {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    let html = '';

    portfolioData.projects.forEach((project) => {
        const title = project.title[lang] || project.title.th;
        const tag = project.tag[lang] || project.tag.th;
        const desc = project.description[lang] || project.description.th;
        const link = project.link || '#';
        const images = project.images || [];

        html += `
            <div class="portfolio-card" data-project="${project.id}">
                <div class="portfolio-img" onclick="openGallery('${project.id}')">
                    ${images.length > 0 ? `
                        <img src="${images[0]}" alt="${title}" class="portfolio-thumbnail">
                        ${images.length > 1 ? `<span class="photo-count">+${images.length - 1}</span>` : ''}
                    ` : `
                        <i class="fas ${project.icon}"></i>
                    `}
                </div>
                <div class="portfolio-body">
                    <h3>${title}</h3>
                    <span class="portfolio-tag">${tag}</span>
                    <p>${desc}</p>
                    <div class="portfolio-actions">
                        <a href="${link}" class="btn btn-small">
                            ${lang === 'th' ? 'ดูรายละเอียด' : 'View Details'} 
                            <i class="fas fa-arrow-right"></i>
                        </a>
                        ${images.length > 0 ? `
                            <button class="btn btn-small btn-gallery" onclick="openGallery('${project.id}')">
                                <i class="fas fa-images"></i> 
                                ${images.length} ${lang === 'th' ? 'รูป' : 'Photos'}
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    });

    // Placeholder card
    const ph = portfolioData.placeholder;
    const phTitle = ph.title[lang] || ph.title.th;
    const phDesc = ph.description[lang] || ph.description.th;

    html += `
        <div class="portfolio-card placeholder">
            <div class="portfolio-img">
                <i class="fas fa-plus-circle"></i>
            </div>
            <div class="portfolio-body">
                <h3>${phTitle}</h3>
                <p>${phDesc}</p>
            </div>
        </div>
    `;

    grid.innerHTML = html;
}

// ============================================================
// 4. GALLERY SYSTEM
// ============================================================
let currentGalleryIndex = 0;
let currentGalleryImages = [];

function openGallery(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project || !project.images || project.images.length === 0) return;

    currentGalleryImages = project.images;
    currentGalleryIndex = 0;
    
    let overlay = document.getElementById('galleryOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'galleryOverlay';
        overlay.className = 'gallery-overlay';
        overlay.innerHTML = `
            <button class="gallery-close" onclick="closeGallery()">✕</button>
            <div class="gallery-container">
                <button class="gallery-nav gallery-prev" onclick="changeGalleryImage(-1)">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <div class="gallery-main">
                    <img id="galleryImage" src="" alt="Gallery Image">
                    <div class="gallery-counter" id="galleryCounter">1 / 1</div>
                </div>
                <button class="gallery-nav gallery-next" onclick="changeGalleryImage(1)">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <div class="gallery-thumbnails" id="galleryThumbnails"></div>
        `;
        document.body.appendChild(overlay);

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeGallery();
            if (e.key === 'ArrowLeft') changeGalleryImage(-1);
            if (e.key === 'ArrowRight') changeGalleryImage(1);
        });

        overlay.addEventListener('click', function(e) {
            if (e.target === this) closeGallery();
        });
    }

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    updateGalleryImage();
    renderGalleryThumbnails();
}

function closeGallery() {
    const overlay = document.getElementById('galleryOverlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function changeGalleryImage(direction) {
    currentGalleryIndex += direction;
    if (currentGalleryIndex < 0) currentGalleryIndex = currentGalleryImages.length - 1;
    if (currentGalleryIndex >= currentGalleryImages.length) currentGalleryIndex = 0;
    updateGalleryImage();
    updateActiveThumbnail();
}

function updateGalleryImage() {
    const img = document.getElementById('galleryImage');
    const counter = document.getElementById('galleryCounter');
    if (img && currentGalleryImages.length > 0) {
        img.src = currentGalleryImages[currentGalleryIndex];
        img.alt = `Image ${currentGalleryIndex + 1}`;
        counter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;
    }
}

function renderGalleryThumbnails() {
    const container = document.getElementById('galleryThumbnails');
    if (!container) return;

    container.innerHTML = currentGalleryImages.map((src, index) => `
        <div class="gallery-thumbnail ${index === currentGalleryIndex ? 'active' : ''}" 
             onclick="goToGalleryImage(${index})">
            <img src="${src}" alt="Thumbnail ${index + 1}">
        </div>
    `).join('');
}

function updateActiveThumbnail() {
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentGalleryIndex);
    });
}

function goToGalleryImage(index) {
    currentGalleryIndex = index;
    updateGalleryImage();
    updateActiveThumbnail();
}

// ============================================================
// 5. LANGUAGE CHANGE HANDLER (LISTEN TO NAVBAR EVENT)
// ============================================================
function handleLanguageChange(event) {
    const lang = event.detail.language;
    currentLang = lang;
    renderPortfolio(lang);
    console.log(`📂 Portfolio updated to: ${lang}`);
}

// ============================================================
// 6. INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    // Render initial with Thai
    renderPortfolio('th');
    
    // Listen for language changes from navbar
    document.addEventListener('languageChanged', handleLanguageChange);
    
    console.log('📂 Portfolio initialized!');
});

// Expose gallery functions globally
window.openGallery = openGallery;
window.closeGallery = closeGallery;
window.changeGalleryImage = changeGalleryImage;
window.goToGalleryImage = goToGalleryImage;