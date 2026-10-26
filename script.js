/* =================================
   1. الوصول إلى نموذج التواصل
================================= */
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const formFeedback = document.getElementById("formFeedback");
    /* =================================
       2. التحقق من وجود النموذج
    ================================= */
    if (!contactForm) {
        return;
    }
    /* =================================
       3. تنفيذ الكود عند إرسال النموذج
    ================================= */
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة
        /* =================================
           4. قراءة بيانات المستخدم
        ================================= */
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();
        /* =================================
           5. التحقق من الحقول الفارغة
        ================================= */
        if (name === "" || email === "" || subject === "" || message === "") {
            formFeedback.textContent = "يرجى تعبئة جميع الحقول.";
            formFeedback.className = "mt-3 text-danger";//
            return;
        }
        /* =================================
           6. التحقق من البريد الإلكتروني
        ================================= */
        if (!emailInput.checkValidity()) {
            formFeedback.textContent = "يرجى إدخال بريد إلكتروني صحيح.";
            formFeedback.className = "mt-3 text-danger";
            return;
        }
        /* =================================
           7. عرض رسالة النجاح
        ================================= */
        formFeedback.textContent ="تم التحقق من البيانات بنجاح! شكرًا لتواصلك معنا.";
        formFeedback.className = "mt-3 text-success";
        /* =================================
           8. تفريغ الحقول
        ================================= */
        contactForm.reset();
    });
});
