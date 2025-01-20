const valuesData = {
    "الانتماء للوطن": {
        title: "تعزيز الانتماء للوطن",
        description: "تنمية روح الولاء والانتماء للوطن وقيادته",
        traits: "الفخر بالهوية الوطنية، احترام الرموز الوطنية",
        education: "المشاركة في المناسبات الوطنية، تعزيز المواطنة الإيجابية",
        progress: "مستوى المشاركة في الأنشطة الوطنية",
        activities: {
            theater: "مسرحية عن تاريخ المملكة العربيه السعوديه",
            broadcast: "برنامج إذاعي عن إنجازات الوطن",
            video: "فيديو وثائقي عن رؤية 2030",
            drawing: "معرض فني للمعالم الوطنية"
        }
    },
    "التسامح": {
        title: "تعزيز قيمة التسامح",
        description: "تعزيز قيم التسامح والتعايش السلمي",
        traits: "احترام الآخر، التعامل الإيجابي",
        education: "ورش عمل عن التنوع الثقافي",
        progress: "تحسن العلاقات بين الطلاب",
        activities: {
            theater: "مسرحية عن التعايش",
            broadcast: "حوار إذاعي عن التسامح",
            video: "قصص نجاح عن التسامح",
            drawing: "لوحات فنية عن السلام"
        }
    },
    "الوسطية": {
        title: "تعزيز الوسطية والاعتدال",
        description: "ترسيخ مفهوم الوسطية في الفكر والسلوك",
        traits: "الاعتدال في الأمور، التوازن في الحياة",
        education: "برامج توعوية عن الوسطية",
        progress: "تطبيق مبادئ الوسطية",
        activities: {
            theater: "مسرحية عن الاعتدال",
            broadcast: "برنامج عن الوسطية",
            video: "فيديو توعوي",
            drawing: "رسومات تعبيرية"
        }
    },
    "المثابرة": {
        title: "تنمية المثابرة",
        description: "تعزيز روح المثابرة والإصرار",
        traits: "الصبر، العزيمة، الإصرار",
        education: "أنشطة تحفيزية للمثابرة",
        progress: "تحسن مستوى الإنجاز",
        activities: {
            theater: "مسرحية عن النجاح",
            broadcast: "قصص ملهمة",
            video: "تجارب ناجحة",
            drawing: "لوحات تحفيزية"
        }
    },
    "الاتقان": {
        title: "تعزيز الاتقان",
        description: "تنمية مهارات الإتقان والجودة",
        traits: "الدقة، الجودة، الاحترافية",
        education: "ورش عمل عن الجودة",
        progress: "تحسن جودة العمل",
        activities: {
            theater: "مسرحية عن الإتقان",
            broadcast: "برامج توعوية",
            video: "نماذج متميزة",
            drawing: "معرض فني"
        }
    },
    "الانضباط": {
        title: "تعزيز الانضباط",
        description: "تنمية السلوك المنضبط",
        traits: "الالتزام، النظام، الدقة",
        education: "برامج تدريبية",
        progress: "تحسن السلوك العام",
        activities: {
            theater: "مسرحية توعوية",
            broadcast: "برنامج إرشادي",
            video: "فيديو تعليمي",
            drawing: "رسومات إرشادية"
        }
    },
    "المرونة": {
        title: "تنمية المرونة",
        description: "تعزيز القدرة على التكيف",
        traits: "التكيف، المرونة الفكرية",
        education: "أنشطة تفاعلية",
        progress: "تحسن القدرة على التكيف",
        activities: {
            theater: "مسرحية تفاعلية",
            broadcast: "حوارات مفتوحة",
            video: "تجارب ناجحة",
            drawing: "تعبير فني حر"
        }
    },
    "الإيجابية": {
        title: "تعزيز الإيجابية",
        description: "تنمية التفكير الإيجابي",
        traits: "التفاؤل، النظرة الإيجابية",
        education: "ورش عمل تحفيزية",
        progress: "تحسن النظرة الإيجابية",
        activities: {
            theater: "مسرحية ملهمة",
            broadcast: "برامج تحفيزية",
            video: "قصص نجاح",
            drawing: "فن إيجابي"
        }
    },
    "العزيمة": {
        title: "تنمية العزيمة",
        description: "تعزيز الإرادة والتصميم",
        traits: "القوة، الإصرار، التحدي",
        education: "برامج تحفيزية",
        progress: "تحسن مستوى الإنجاز",
        activities: {
            theater: "مسرحية عن التحدي",
            broadcast: "قصص ملهمة",
            video: "تجارب ناجحة",
            drawing: "لوحات تعبيرية"
        }
    }
};





















const gridItems = document.querySelectorAll('.grid-item');
const modal = document.getElementById('disciplineModal');
const closeBtn = document.querySelector('.close-btn');
const tableTitle = document.querySelector('.table-title');

function populateTable(value) {
    const data = valuesData[value];
    if (!data) return;

    tableTitle.textContent = data.title;

    const tbody = document.querySelector('.discipline-table tbody');
    tbody.innerHTML = `
                <tr>
                    <td>${data.description}</td>
                    <td>${data.traits}</td>
                    <td>${data.education}</td>
                    <td>${data.progress}</td>
                    <td>${data.activities.theater}</td>
                    <td>${data.activities.broadcast}</td>
                    <td>${data.activities.video}</td>
                    <td>${data.activities.drawing}</td>
                </tr>
            `;
}

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        const value = item.querySelector('.text').textContent;
        populateTable(value);
        modal.style.display = 'flex';
        document.querySelector('.modal-content').classList.add('animate__fadeInUp');
    });
});

closeBtn.addEventListener('click', () => {
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.remove('animate__fadeInUp');
    modalContent.classList.add('animate__fadeOutDown');

    setTimeout(() => {
        modal.style.display = 'none';
        modalContent.classList.remove('animate__fadeOutDown');
    }, 300);
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        const modalContent = document.querySelector('.modal-content');
        modalContent.classList.remove('animate__fadeInUp');
        modalContent.classList.add('animate__fadeOutDown');

        setTimeout(() => {
            modal.style.display = 'none';
            modalContent.classList.remove('animate__fadeOutDown');
        }, 300);
    }
});

// Add scroll lock when modal is open
function toggleScrollLock() {
    document.body.style.overflow = modal.style.display === 'flex' ? 'hidden' : '';
}

// Intersection Observer for animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe grid items for scroll animation
gridItems.forEach(item => {
    observer.observe(item);
});

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeBtn.click();
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

modal.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, false);

modal.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    if (touchEndY - touchStartY > 50) { // Swipe down
        closeBtn.click();
    }
}, false);

// Ensure proper modal state on window resize
window.addEventListener('resize', () => {
    if (modal.style.display === 'flex') {
        const modalContent = document.querySelector('.modal-content');
        modalContent.style.maxHeight = window.innerHeight * 0.9 + 'px';
    }
});
